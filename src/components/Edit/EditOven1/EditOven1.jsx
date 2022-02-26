import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { EditVisualInspection } from "./EditVisualInspection";
import { EditOperationalInspection } from "./EditOperationalInspection";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { EditHotOven } from "./EditHotOven";
const db = getFirestore();
const { TabPane } = Tabs;

export const EditOven1 = (props) => {
  const ovenSerial = props.serial;
  console.log("EditOven: ", ovenSerial);
  const [editOven, setEditOven] = useState(null);

  const getDataOven = async () => {
    try {
      const docRef = doc(db, "HotOvenInspection", ovenSerial);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setEditOven(data);
    } catch (error) {
      console.error("error", error);
    }
  };
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
      </Tabs>
    </Fragment>
  );
};
