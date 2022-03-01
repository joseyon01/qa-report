import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { message, Row, Col, Layout, Table, Button, Space } from "antd";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Header } from "../layout/Header";
const { Content, Sider, Footer } = Layout;
import { Container } from "../layout/Container";
import { useNavigate } from "react-router-dom";

import {
  getFirestore,
  doc,
  getDocs,
  collection,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import QaReportFirebase from "../../../Credentials";
const firestore = getFirestore(QaReportFirebase);
import { getAuth } from "firebase/auth";
const db = getFirestore();
const auth = getAuth(QaReportFirebase);

export const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const [editOven, setEditOven] = useState(null);
  const [editOperational, setEditOperational] = useState(null);
  const [editHot, setEditHot] = useState(null);
  const [editVisual, setEditvisual] = useState(null);
  const [arrayOvens, setArrayOvens] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [dataId, setDataId] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const ovenRef = collection(db, "oven");
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
            style={{ borderRadius: "6px" }}
            loading={loading}
            onClick={async () => {
              setLoading(true);
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
              message.success("Report deleted successfully");
              setLoading(false);
            }}
          >
            <a>{loading ? "" : <AiFillDelete />}</a>
          </Button>
          <Button
            style={{ borderRadius: "6px" }}
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
        const querySnapshot = await getDocs(collection(db, "oven"));
        if (!querySnapshot.empty) {
          let _id = [];
          let _data = [];
          querySnapshot.forEach((e) => {
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
      <Header dashboard={true} />
      <Content>
        <Container>
          <div className="container">
            <Row justify="end">
              <Col xs={4}>
                <Button
                  style={{
                    marginBottom: "1em",
                    background: "#2ECC71",
                    color: "#fff",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "6px",
                  }}
                >
                  <Link to="/register">New Report</Link>
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
