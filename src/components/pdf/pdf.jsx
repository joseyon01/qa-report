import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ENCPdf } from "./ENCPdf";
import { HHDPdf } from "./HHDPdf";
import { I1Pdf } from "./I1Pdf";
import { I3Pdf } from "./I3Pdf";
import { ECOSTPdf } from "./ECOSTPdf";
import { ECONewPdf } from "./ECONewPdf";
import { Header } from "../layout/Header";
import { Container } from "../layout/Container";
import { Layout } from "antd";

export const Pdf = () => {
  const param = useParams();
  const serial = param.id;
  const { Content, Footer } = Layout;
  return (
    <Layout className="app-layout">
      <Header dashboard={false} />
      <Content>
        <Container>
          <div className="container">
            <Routes>
              <Route path="ENC" element={<ENCPdf serial={serial} />} />
              <Route path="I1" element={<I1Pdf serial={serial} />} />
              <Route path="I3" element={<I3Pdf serial={serial} />} />
              <Route path="ECOST" element={<ECOSTPdf serial={serial} />} />
              <Route path="ECONew" element={<ECONewPdf serial={serial} />} />
              <Route path="HHD" element={<HHDPdf serial={serial} />} />
            </Routes>
          </div>
        </Container>
      </Content>
      <Footer style={{ backgroundColor: "#ccc", position: "relative" }}>
        Qa Turbochef, 2022
      </Footer>
    </Layout>
  );
};
