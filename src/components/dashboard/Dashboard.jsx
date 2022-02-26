import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Layout, Table, Button, Space, Typography } from "antd";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Header } from "../layout/Header";
import { Container } from "../layout/Container";
import { useNavigate, useParams } from "react-router-dom";

import {
  getFirestore,
  doc,
  getDocs,
  getDoc,
  collection,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import QaReportFirebase from "../../../Credentials";
const firestore = getFirestore(QaReportFirebase);
import { getAuth } from "firebase/auth";

// const auth = getAuth(QaReportFirebase);
const db = getFirestore();

const ovenRef = collection(db, "oven");
const { Footer, Content } = Layout;
const { Title } = Typography;

export const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const [editOven, setEditOven] = useState(null);
  const [editOperational, setEditOperational] = useState(null);
  const [editHot, setEditHot] = useState(null);
  const [editVisual, setEditvisual] = useState(null);
  const [arrayOvens, setArrayOvens] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [dataId, setDataId] = useState([]);
  const navigate = useNavigate();
  function handleChange() {
    navigate(`/register`);
  }
  function navigateEdit(serial) {
    navigate(`/edit/${serial}`);
  }
  const columns = [
    {
      title: "Serial Number",
      dataIndex: "serial",
      key: "serial",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space
          size="middle"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            onClick={async () => {
              await deleteDoc(doc(db, "oven", record.id));
              await deleteDoc(doc(db, "VisualInspection", `${record.serial}`));
              await deleteDoc(
                doc(db, "OperationalInspection", `${record.serial}`)
              );
              await deleteDoc(doc(db, "HotOvenInspection", `${record.serial}`));
              const newArrayOvens = [];
              arrayOvens.forEach((e) => {
                if (e.serial !== record.serial) {
                  newArrayOvens.push(e);
                }
              });
              setArrayOvens(newArrayOvens);
            }}
          >
            <a>
              <AiFillDelete />
            </a>
          </Button>
          <Button
            onClick={async () => {
              navigateEdit(record.serial);
            }}
          >
            <a>
              <AiFillEdit />
            </a>
          </Button>
        </Space>
      ),
    },
  ];

  const getUser = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      try {
        const q = query(ovenRef, where("userId", "==", user.uid));
        const data = await getDocs(q);
        if (!data.empty) {
          let _id = [];
          let _data = [];
          data.docs.forEach((e) => {
            if (e.data()) {
              _data.push(e.data());
              _id.push(e.id);
            }
          });
          for (let i = 0; i < _id.length; i++) {
            _data[i].id = _id[i];
          }
          // hacer set state de la data aqui >> setData(data) por ejemplo
          setArrayOvens(_data);
          setCurrentUser(user);
        }
      } catch (error) {
        console.error("error", error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout className="app-layout">
      <Header />
      <Content>
        <Container>
          <div className="container">
            <Row justify="end">
              <Col xs={4}>
                <Button
                  style={{
                    marginBottom: "1em",
                    background: "#051721",
                    color: "#fff",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Link to="/register">Form</Link>
                </Button>
              </Col>
            </Row>
            <Table columns={columns} dataSource={arrayOvens} />{" "}
          </div>
        </Container>
      </Content>
      <Footer style={{ backgroundColor: "#ccc", position: "relative" }}>
        Qa Turbochef, 2022
      </Footer>
    </Layout>
  );
};
