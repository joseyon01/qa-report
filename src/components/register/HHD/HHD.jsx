import React, { useState } from "react";
import { Tabs } from "antd";
import { useParams } from "react-router-dom";
import { VisualInspection } from "./VisualInspection";
import { OperationalInspection } from "./OperationalInspection";
const { TabPane } = Tabs;

export const HHD = (props) => {
  const param = useParams();
  const serial = param.id;
  const [selectedKey, setSelectedKey] = useState("1");
  return (
    <Tabs activeKey={selectedKey} centered size="small">
      <TabPane tab="VISUAL" key="1" id="1">
        <VisualInspection serial={serial} setState={setSelectedKey} />
      </TabPane>
      <TabPane tab="OPERATIONAL" key="2" id="2">
        <OperationalInspection serial={serial} />
      </TabPane>
    </Tabs>
  );
};
