import React from "react";
import { Tabs } from "antd";
import { VisualInspection } from "./VisualInspection";
import { Fragment } from "react/cjs/react.production.min";
import { OperationalInspection } from "./OperationalInspection";
import { HotOven } from "./HotOven";
const { TabPane } = Tabs;

export const ENC = (props) => {
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
        <TabPane tab="HOT OVEN" key="3" id="3">
          <HotOven serial={serial} />
        </TabPane>
      </Tabs>
    </Fragment>
  );
};
