import react, { useState, useEffect } from "react";
import { message, Row, Col, Layout, Button, Tabs, Checkbox } from "antd";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { Header } from "../layout/Header";
import { ExcelForm } from "./excelForm/ExcelForm";
import { Container } from "../layout/Container";
import { SearchForm } from "./searchForm/SearchForm";
const { Content, Footer } = Layout;
const storage = getStorage();
const { TabPane } = Tabs;
const db = getFirestore();

export const Search = (props) => {
  useEffect(() => {}, []);
  return (
    <Layout className="app-layout">
      <Header dashboard={false} />
      <Content style={{ paddingTop: "2em" }}>
        <Container>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Search" key="1">
              <SearchForm />
            </TabPane>
            <TabPane tab="CSV" key="2">
              <ExcelForm />
            </TabPane>
          </Tabs>
        </Container>
      </Content>
      <Footer style={{ backgroundColor: "#ccc", position: "relative" }}>
        Qa Turbochef, 2022
      </Footer>
    </Layout>
  );
};
