import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Layout, Table, Button, Space, Typography } from "antd";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Header } from "../layout/Headet";
import { Container } from "../layout/Container";

import {
  getFirestore,
  doc,
  getDocs,
  setDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import QaReportFirebase from "../../../Credentials";
const firestore = getFirestore(QaReportFirebase);
import { getAuth, signOut } from "firebase/auth";
import { async } from "@firebase/util";

// const auth = getAuth(QaReportFirebase);
const db = getFirestore();

const ovenRef = collection(db, "oven");
const { Footer, Content } = Layout;
const { Title } = Typography;

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
          onClick={() => {
            alert("Oven Deleted");
          }}
        >
          <a>
            <AiFillDelete />
          </a>
        </Button>
        <Button
          onClick={() => {
            alert("Edit Oven");
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

export const Dashboard = () => {
  const [arrayOvens, setArrayOvens] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const getUser = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      try {
        const q = query(ovenRef, where("userId", "==", user.uid));
        const data = await getDocs(q);
        if (!data.empty) {
          let _data = [];
          data.docs.forEach((e) => {
            if (e.data()) {
              _data.push(e.data());
            }
          });
          console.log("data: " + _data);
          // hacer set state de la data aqui >> setData(data) por ejemplo
          setArrayOvens(_data);
        }
        setCurrentUser(user);
      } catch (error) {
        console.error("error", error);
      }
    }
  };

  console.log(arrayOvens);
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
