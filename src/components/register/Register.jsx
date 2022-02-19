import React from "react";
import { render } from "react-dom";
import { Link, Routes, Route } from "react-router-dom";
import { Row, Col, Layout, Table, Tag, Space } from "antd";
import { Button } from "antd";
import { FormTop } from "../formtop/FormTop";
import { Oven1 } from "../oven1/Oven1";
import { Oven2 } from "../oven2/Oven2";
import { Oven3 } from "../oven3/Oven3";

const { Header, Footer, Content } = Layout;

export const Register = (props) => {
  const [serial, setSerial] = React.useState("");
  const onChange = (event) => {
    setSerial(event.target.value);
  };
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#fff", textAlign: "center", margin: "0px" }}>
          QA-Report
        </h1>
        <Button style={{ color: "#eee", backgroundColor: "#051721" }}>
          Log Out
        </Button>
      </Header>
      <Content>
        <FormTop onChangeCN={onChange} serial={serial} />
        <Routes>
          <Route path="Oven1" element={<Oven1 serial={serial} />} />
          <Route path="Oven2" element={<Oven2 serial={serial} />} />
          <Route path="Oven3" element={<Oven3 serial={serial} />} />
        </Routes>
      </Content>
      <Footer style={{ backgroundColor: "#ccc" }}>Qa Turbochef, 2022</Footer>
    </Layout>
  );
};
