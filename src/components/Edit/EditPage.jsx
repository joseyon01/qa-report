import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout, Typography, Select } from "antd";
import { Container } from "../layout/Container";
import { Header } from "../layout/Header";
import { EditFormTop } from "./EditFormTop";
import QaReportFirebase from "../../../Credentials";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { EditOven1 } from "./EditOven1/EditOven1";
const firestore = getFirestore(QaReportFirebase);
const auth = getAuth(QaReportFirebase);
const { Option } = Select;
const db = getFirestore();
const { Title } = Typography;
const { Footer, Content } = Layout;

export const EditPage = () => {
  return (
    <Layout>
      <Header />
      <Content style={{ paddingTop: "2em" }}>
        <Container>
          <EditFormTop />
          <EditOven1 />
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
