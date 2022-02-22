import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Layout, Table, Tag, Button, Space, Typography } from "antd";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Header } from "../layout/Headet";
import { Container } from "../layout/Container";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import QaReportFirebase from "../../../Credentials";
const firestore = getFirestore(QaReportFirebase);
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { async } from "@firebase/util";
const auth = getAuth(QaReportFirebase);

const { Footer, Content } = Layout;
const { Title } = Typography;

const data = [
  {
    key: "1",
    serialNumber: "1",
    date: "20/02/2022",
    status: "Aprove",
  },
  {
    key: "2",
    serialNumber: "2",
    date: "18/11/2021",
    status: "Denied",
  },
  {
    key: "3",
    serialNumber: "3",
    date: "15/01/2022",
    status: "Aproove",
  },
];
export const Dashboard = () => {
  const [arrayOvens, setArrayOvens] = useState(null);

  const columns = [
    {
      title: "Serial Number",
      dataIndex: "serialNumber",
      key: "serialNumber",
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
              console.log(arrayOvens);
            }}
          >
            <a>
              <AiFillDelete />
            </a>
          </Button>
          <Button>
            <a>
              <AiFillEdit />
            </a>
          </Button>
        </Space>
      ),
    },
  ];

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
