import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Typography } from "antd";
import { FormTop } from "./FormTop";
import { ENC } from "./ENC/ENC";
import { I3 } from "./I3/I3";
import { I1 } from "./I1/I1";
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
            <Route path="ENC" element={<ENC serial={serial} />} />
            <Route path="I1" element={<I1 serial={serial} />} />
            <Route path="I3" element={<I3 serial={serial} />} />
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
