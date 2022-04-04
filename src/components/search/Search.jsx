import react, { useState, useEffect } from "react";
import {
  message,
  Row,
  Col,
  Layout,
  Table,
  Button,
  Space,
  Input,
  DatePicker,
  Modal,
  Checkbox,
} from "antd";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import moment from "moment";
import { Header } from "../layout/Header";
import { ExcelForm } from "./excelForm/ExcelForm";
import { Container } from "../layout/Container";
import { useNavigate, Link } from "react-router-dom";
const { Content, Footer } = Layout;
const storage = getStorage();
const db = getFirestore();

export const Search = (props) => {
  const options = [
    { label: "Name", value: "name" },
    { label: "Date", value: "date" },
    { label: "Status", value: "status" },
  ];
  function onQuerySelection(checkedValues) {
    console.log("checked = ", checkedValues);
  }
  useEffect(() => {}, []);
  return (
    <Layout className="app-layout">
      <Header dashboard={false} />

      <Content style={{ paddingTop: "2em" }}>
        <Container>
          <ExcelForm />
          <Row justify="space-around">
            <Col xs={22} md={10}>
              <Checkbox.Group options={options} onChange={onQuerySelection} />
            </Col>
            <Col xs={22} md={10}>
              <Button type="primary" block={true} size="middle">
                Search
              </Button>
            </Col>
          </Row>
        </Container>
      </Content>
      <Footer style={{ backgroundColor: "#ccc", position: "relative" }}>
        Qa Turbochef, 2022
      </Footer>
    </Layout>
  );
};
