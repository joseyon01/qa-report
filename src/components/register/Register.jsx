import React from "react";
import { render } from "react-dom";
import { Link, Routes, Route } from "react-router-dom";
import { Row, Col, Layout, Table, Tag, Space, Typography } from "antd";
import { Button } from "antd";
import { FormTop } from "../formtop/FormTop";
import { Oven1 } from "../oven1/Oven1";
import { Oven2 } from "../oven2/Oven2";
import { Oven3 } from "../oven3/Oven3";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

export const Register = (props) => {
  const [serial, setSerial] = React.useState("");
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const onChangeSerial = (event) => {
    setSerial(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  function onChangeDate(date, dateString) {
    setDate(dateString);
  }
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title style={{ color: "#fff", textAlign: "center", margin: "0px" }}>
          QA-Report
        </Title>
        <Button style={{ color: "#eee", backgroundColor: "#051721" }}>
          Log Out
        </Button>
      </Header>
      <Content style={{ paddingTop: "2em" }}>
        <FormTop
          onChangeCN={onChangeSerial}
          onChangeName={onChangeName}
          onChangeDate={onChangeDate}
          serial={serial}
          name={name}
          date={date}
        />
        <Routes>
          <Route
            path="Oven1"
            element={<Oven1 serial={serial} name={name} date={date} />}
          />
          <Route path="Oven2" element={<Oven2 serial={serial} />} />
          <Route path="Oven3" element={<Oven3 serial={serial} />} />
        </Routes>
      </Content>
      <Footer style={{ backgroundColor: "#ccc" }}>Qa Turbochef, 2022</Footer>
    </Layout>
  );
};
