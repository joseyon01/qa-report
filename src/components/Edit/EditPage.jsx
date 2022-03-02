import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useParams } from "react-router-dom";
import { Layout, Typography, Select } from "antd";
import { Container } from "../layout/Container";
import { Header } from "../layout/Header";
import { EditFormTop } from "./EditFormTop";
import QaReportFirebase from "../../../Credentials";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { EditENC } from "./EditENC/EditENC";
import { EditI3 } from "./EditI3/EditI3";

const firestore = getFirestore(QaReportFirebase);
const auth = getAuth(QaReportFirebase);
const { Option } = Select;
const db = getFirestore();
const { Title } = Typography;
const { Footer, Content } = Layout;

export const EditPage = () => {
  const param = useParams();
  const serial = param.id;
  const editOven = param.id;
  return (
    <Layout>
      <Header />
      <Content style={{ paddingTop: "2em" }}>
        <Container>
          <EditFormTop serial={editOven} />
          <Routes>
            <Route path="ENC" element={<EditENC serial={serial} />} />
            <Route path="I3" element={<EditI3 serial={serial} />} />
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
