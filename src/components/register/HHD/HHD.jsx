import React from "react";
import { Tabs } from "antd";
import { VisualInspection } from "./VisualInspection";
import { OperationalInspection } from "./OperationalInspection";
const { TabPane } = Tabs;

export const HHD = (props) => {
  const serial = props.serial;
  return (
    <Tabs defaultActiveKey="1" centered size="small">
      <TabPane tab="VISUAL" key="1" id="1">
        <VisualInspection serial={serial} />
      </TabPane>
      <TabPane tab="OPERATIONAL" key="2" id="2">
        <OperationalInspection serial={serial} />
      </TabPane>
    </Tabs>
  );
};
