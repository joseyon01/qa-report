import { Col, Row } from "antd";
import React, { useEffect } from "react";
import {
  Bar,
  BarChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./StatisticsBarChart.css";
export const StatisticsBarChart = (props) => {
  const graficsData = props.graficsData;
  const data = props.data;
  let barsData = [];
  let allDataObj = {};
  let dataObj = {};
  let days = [];
  let maxOvens = [];
  let count = 0;
  let allCount = 0;
  for (let i = graficsData[0]; i < graficsData[1]; i += 86400000) {
    const start = new Date(i);
    const end = new Date(i + 86400000);
    data.map((e) => {
      if (
        e.timeStamp >= start &&
        e.timeStamp <= end &&
        e.oven == graficsData[2] &&
        e.status == graficsData[3]
      ) {
        count++;
      }
    });
    data.map((e) => {
      if (e.timeStamp >= start && e.timeStamp <= end) {
        allCount++;
      }
    });
    dataObj[start.getDate()] = count;
    allDataObj[start.getDate()] = allCount;
    count = 0;
    allCount = 0;
  }
  for (let i in allDataObj) {
    days.push(i);
    maxOvens.push(allDataObj[i]);
    barsData.push({
      name: `Day-${i}`,
      [`${graficsData[2]}-${graficsData[3]}`]: dataObj[i],
      ["All Inspected"]: allDataObj[i],
    });
  }
  useEffect(() => {}, []);
  return (
    <Row
      justify="flex-start"
      style={{ marginLeft: "-2.25rem", marginBottom: "1rem" }}
    >
      <Col xs={24}>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            width="100%"
            height={250}
            data={barsData}
            className="custom-chart"
          >
            <CartesianGrid strokeDasharray="10 10" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="All Inspected" fill="#82ca9d" />
            <Bar
              dataKey={`${graficsData[2]}-${graficsData[3]}`}
              fill="#8884d8"
            />
          </BarChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
};
