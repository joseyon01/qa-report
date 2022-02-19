import React from "react";
import { Routes, Route } from "react-router-dom";
import { Col, Layout, Typography, Row } from "antd";
import { Button } from "antd";
import { FormTop } from "../formtop/FormTop";
import { Oven1 } from "../oven1/Oven1";
import { Oven2 } from "../oven2/Oven2";
import { Oven3 } from "../oven3/Oven3";

import { Container } from "../layout/Container";
import { Header } from '../layout/Headet';

const { Title } = Typography;
const { Footer, Content } = Layout;

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
      <Header />
      <Content style={{ paddingTop: "2em" }}>
        <Container>
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
        </Container>
      </Content>
      <Footer style={{ backgroundColor: "#ccc" }}>Qa Turbochef, 2022</Footer>
    </Layout>
  );
};
