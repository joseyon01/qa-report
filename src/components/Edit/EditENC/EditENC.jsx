import React, { useEffect } from "react";
import { Tabs } from "antd";
import { Fragment } from "react/cjs/react.production.min";
import { EditVisualInspection } from "./EditVisualInspection";
import { EditOperationalInspection } from "./EditOperationalInspection";
import { EditHotOven } from "./EditHotOven";
import { EditENCImage } from "../EditImages/EditENCImage";
const { TabPane } = Tabs;

export const EditENC = (props) => {
  const ovenSerial = props.serial;

  const onClick = () => {};
  useEffect(() => {
    onClick();
  }, []);
  return (
    <Fragment>
      <Tabs defaultActiveKey="1" centered onChange={onClick}>
        <TabPane tab="VISUAL" key="1">
          <EditVisualInspection serial={ovenSerial} />
        </TabPane>
        <TabPane tab="OPERATIONAL" key="2">
          <EditOperationalInspection serial={ovenSerial} />
        </TabPane>
        <TabPane tab="HOT OVEN" key="3">
          <EditHotOven serial={ovenSerial} />
        </TabPane>
        <TabPane tab="IMAGES" key="4">
          <EditENCImage serial={ovenSerial} />
        </TabPane>
      </Tabs>
    </Fragment>
  );
};
