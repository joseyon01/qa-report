import React from "react";
import { Tabs } from "antd";
import { EditVisualInspection } from "./EditVisualInspection";
import { EditOperationalInspection } from "./EditOperationalInspection";
import { EditHotOven } from "./EditHotOven";
import { EditI1Image } from "./EditI1Image";
const { TabPane } = Tabs;

export const EditI1 = (props) => {
  const serial = props.serial;
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="VISUAL" key="1" id="1">
        <EditVisualInspection serial={serial} />
      </TabPane>
      <TabPane tab="OPERATIONAL" key="2" id="2">
        <EditOperationalInspection serial={serial} />
      </TabPane>
      <TabPane tab="Hot Oven" key="3" id="3">
        <EditHotOven serial={serial} />
      </TabPane>
      <TabPane tab="IMAGES" key="4">
        <EditI1Image serial={serial} />
      </TabPane>
    </Tabs>
  );
};
