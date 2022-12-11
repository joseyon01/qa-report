import { Button, Col, DatePicker, Form, Layout, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { Header } from "../layout/Header";
import { Container } from "../layout/Container";
import "./grafics.css";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { Statistics } from "./statistics/Statistics";
import { TableData } from "./tableData/TableData";
import { StatisticsPdf } from "../pdf/StatisticsPdf";
import { StatisticsBarChart } from "./barChart/StatisticsBarChart";
const db = getFirestore();
const { Content, Footer } = Layout;
const { RangePicker } = DatePicker;
const { Option } = Select;
export const Grafics = () => {
  const [graficsData, setGraficsData] = useState([]);
  const [loading, setLoading] = useState(true);
  let allOvens = [];
  let newFilterData = [];

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const onFinish = async (values) => {
    setLoading(true);
    const day1 = new Date(values.Range[0].format("MM/DD/YY")).getTime();
    const day2 = new Date(values.Range[1].format("MM/DD/YY")).getTime();
    setGraficsData([
      day1,
      day2 + 86400000,
      values.ovenType,
      values.Status,
      values.Inspector,
    ]);
    const q = query(
      collection(db, "oven"),
      where("timeStamp", ">=", day1),
      where("timeStamp", "<=", day2 + 86400000)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot?.forEach((doc) => {
      allOvens.push(doc.data());
      allOvens.forEach((doc) => {
        if (doc.status == graficsData[3]) {
          if (doc.oven == graficsData[2]) {
            newFilterData.push(doc);
          }
        }
      });
    });
    setFilterData(newFilterData);
    newFilterData = [];
    setData(allOvens);
    setLoading(false);
  };
  const onFinishFailed = (error) => {
    console.log(error.values);
  };

  useEffect(() => {}, [data]);
  return (
    <Layout>
      <Header />
      <Content>
        <Container>
          <Row justify="center">
            <h1>GRAFICS AND STATISTICS</h1>
          </Row>
          <Row
            justify="space-around"
            className="grafics__search_label_container"
          >
            <Col className="grafics__search_label" xs={5}>
              Start/End Date{" "}
            </Col>
            <Col className="grafics__search_label" xs={4}>
              Oven Type
            </Col>
            <Col className="grafics__search_label" xs={4}>
              Status
            </Col>
            <Col className="grafics__search_label" xs={4}>
              Inspector
            </Col>
            <Col xs={5}></Col>
          </Row>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            name="GraficsSearchForm"
            initialValues={{ remember: true }}
          >
            <Row justify="space-around">
              <Col xs={5}>
                <Form.Item
                  name="Range"
                  rules={[{ required: true, message: "Input the date" }]}
                >
                  <RangePicker />
                </Form.Item>
              </Col>
              <Col xs={4}>
                <Form.Item
                  name="ovenType"
                  rules={[
                    {
                      required: true,
                      message: "Select the oven type",
                    },
                  ]}
                >
                  <Select placeholder="Oven Type">
                    <Option value="I1">I1</Option>
                    <Option value="I3">I3</Option>
                    <Option value="ENC">ENC</Option>
                    <Option value="ECOST">ECOST</Option>
                    <Option value="ECONew">ECONew</Option>
                    <Option value="HHD">HHD</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={4}>
                <Form.Item
                  name="Status"
                  rules={[{ required: true, message: "Select the status" }]}
                >
                  <Select placeholder="Status">
                    <Option value="Aprooved">Aprooved</Option>
                    <Option value="Rejected">Rejected</Option>
                    <Option value="Repaired">Repaired</Option>
                    <Option value="In Progress">In Progress</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={4}>
                <Form.Item
                  name="Inspector"
                  rules={[{ required: true, message: "Select the inspector" }]}
                >
                  <Select placeholder="Select Inspector">
                    <Option value="All">All</Option>
                    <Option value="Ary Ventura">Ary Ventura</Option>
                    <Option value="Lucio Gamboa">Lucio Gamboa</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={5}>
                <Button block type="primary" htmlType="submit">
                  Get Statistics
                </Button>
              </Col>
            </Row>
          </Form>
          {!loading ? (
            <div>
              <h2 style={{ display: "flex", justifyContent: "space-between" }}>
                <spam>
                  Statistics for - {graficsData[2]} {graficsData[3]} ovens
                </spam>
                <StatisticsPdf graficsData={graficsData} data={data} />
              </h2>
              <Statistics graficsData={graficsData} data={data} />
            </div>
          ) : null}
          {!loading ? (
            <div>
              <h2>
                Daily grafics for - {graficsData[2]} {graficsData[3]} ovens
              </h2>
              <StatisticsBarChart graficsData={graficsData} data={data} />
            </div>
          ) : null}
          {!loading ? (
            <TableData data={data} graficsData={graficsData} />
          ) : null}
        </Container>
      </Content>
      <Footer style={{ backgroundColor: "#ccc", position: "relative" }}>
        Qa Turbochef, 2022
      </Footer>
    </Layout>
  );
};
