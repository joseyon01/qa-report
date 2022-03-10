import React from "react";
import { Tabs } from "antd";
import { EditVisualInspection } from "./EditVisualInspection";
import { EditOperationalInspection } from "./EditOperationalInspection";
import { EditENCImage } from "../EditImages/EditENCImage";
import { EditHotOven } from "./EditHotOven";
const { TabPane } = Tabs;

export const EditECONew = (props) => {
  const serial = props.serial;
  return (
    <Tabs defaultActiveKey="1" centered size="small">
      <TabPane tab="VISUAL" key="1" id="1">
        <EditVisualInspection serial={serial} />
      </TabPane>
      <TabPane tab="OPERATIONAL" key="2" id="2">
        <EditOperationalInspection serial={serial} />
      </TabPane>
      <TabPane tab="HOT OVEN" key="3" id="3">
        <EditHotOven serial={serial} />
      </TabPane>
      <TabPane tab="IMAGES" key="4">
        <EditENCImage serial={serial} />
      </TabPane>
    </Tabs>
  );
};
