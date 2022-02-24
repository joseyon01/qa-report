import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Typography } from "antd";
import { FormTop } from "../formtop/FormTop";
import { Oven1 } from "../oven1/Oven1";

import { Container } from "../layout/Container";
import { Header } from "../layout/Header";

const { Title } = Typography;
const { Footer, Content } = Layout;

export const Register = (props) => {
  const [serial, setSerial] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
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
            <Route path="Oven1" element={<Oven1 serial={serial} />} />
          </Routes>
        </Container>
      </Content>
      <Footer
        style={{
          backgroundColor: "#ccc",
          position: "fixed",
          bottom: "0",
          width: "100%",
        }}
      >
        Qa Turbochef, 2022
      </Footer>
    </Layout>
  );
};
