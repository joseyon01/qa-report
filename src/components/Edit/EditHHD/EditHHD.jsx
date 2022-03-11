import React from "react";
import { Tabs } from "antd";
import { EditVisualInspection } from "./EditVisualInspection";
import { EditImage } from "../EditImages/EditImage";
import { EditOperationalInspection } from "./EditOperationalInspection";
const { TabPane } = Tabs;

export const EditHHD = (props) => {
  const serial = props.serial;
  return (
    <Tabs defaultActiveKey="1" centered size="small">
      <TabPane tab="VISUAL" key="1" id="1">
        <EditVisualInspection serial={serial} />
      </TabPane>
      <TabPane tab="OPERATIONAL" key="2" id="2">
        <EditOperationalInspection serial={serial} />
      </TabPane>
      <TabPane tab="IMAGES" key="3" id="3">
        <EditImage serial={serial} />
      </TabPane>
    </Tabs>
  );
};
