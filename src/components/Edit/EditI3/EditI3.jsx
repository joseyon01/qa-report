import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { Fragment } from "react/cjs/react.production.min";
import { EditVisualInspection } from "./EditVisualInspection";
import { EditOperationalInspection } from "./EditOperationalInspection";
import { EditFinalInspection } from "./EditFinalInspection";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { EditI3Image } from "./EditI3Image";
const db = getFirestore();
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
          <EditI3Image serial={ovenSerial} />
        </TabPane>
      </Tabs>
    </Fragment>
  );
};
