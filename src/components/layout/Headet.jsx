import React from "react";
import { Layout, Typography } from "antd";
import { Button } from "antd";

const { Title } = Typography;
const { Header: ANTDHeader } = Layout;

export const Header = (props) => {
 
  return (
    <ANTDHeader
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Title style={{ color: "#fff", textAlign: "center", margin: "0px" }}>
        QA-Report
      </Title>
      <Button style={{ color: "#eee", backgroundColor: "#051721" }}>
        Log Out
      </Button>
    </ANTDHeader>
  );
};
