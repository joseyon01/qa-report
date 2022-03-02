import React from "react";
import { Tabs } from "antd";
import { Fragment } from "react/cjs/react.production.min";
import { VisualInspection } from "./VisualInspection";
import { OperationalInspection } from "./OperationalInspection";
import { FinalInspection } from "./FinalInspection";
const { TabPane } = Tabs;

export const I3 = (props) => {
  const serial = props.serial;
  return (
    <Fragment>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="VISUAL" key="1" id="1">
          <VisualInspection serial={serial} />
        </TabPane>
        <TabPane tab="OPERATIONAL" key="2" id="2">
          <OperationalInspection serial={serial} />
        </TabPane>
        <TabPane tab="FINAL INSPECTION" key="3" id="3">
          <FinalInspection serial={serial} />
        </TabPane>
      </Tabs>
    </Fragment>
  );
};
