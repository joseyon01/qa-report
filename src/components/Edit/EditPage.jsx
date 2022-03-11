import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useParams } from "react-router-dom";
import { Layout } from "antd";
import { Container } from "../layout/Container";
import { Header } from "../layout/Header";
import { EditFormTop } from "./EditFormTop";
import { EditENC } from "./EditENC/EditENC";
import { EditI3 } from "./EditI3/EditI3";
import { EditI1 } from "./EditI1/EditI1";
import { EditECOST } from "./EditECOST/EditECOST";
import { EditECONew } from "./EditECONew/EditECONew";
import { EditHHD } from "./EditHHD/EditHHD";

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
            <Route path="I1" element={<EditI1 serial={serial} />} />
            <Route path="I3" element={<EditI3 serial={serial} />} />
            <Route path="ECOST" element={<EditECOST serial={serial} />} />
            <Route path="ECONew" element={<EditECONew serial={serial} />} />
            <Route path="HHD" element={<EditHHD serial={serial} />} />
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
