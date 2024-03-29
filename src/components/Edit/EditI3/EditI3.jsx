import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { Fragment } from "react/cjs/react.production.min";
import { EditVisualInspection } from "./EditVisualInspection";
import { EditOperationalInspection } from "./EditOperationalInspection";
import { EditFinalInspection } from "./EditFinalInspection";
import { EditImage } from "../EditImages/EditImage";
const { TabPane } = Tabs;

export const EditI3 = (props) => {
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
        <TabPane tab="FINAL INSPECTION" key="3">
          <EditFinalInspection serial={ovenSerial} />
        </TabPane>
        <TabPane tab="IMAGES" key="4">
          <EditImage serial={ovenSerial} />
        </TabPane>
      </Tabs>
    </Fragment>
  );
};
