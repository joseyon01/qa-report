import React from "react";
import { Form, Input, Typography, Tabs } from "antd";
import { VisualInspection } from "./VisualInspection";
import { Fragment } from "react/cjs/react.production.min";
import { OperationalInspection } from "./OperationalInspection";
import { HotOven } from "./HotOven";
const { Title } = Typography;
const { Text } = Typography;
const { TextArea } = Input;
const { TabPane } = Tabs;

export const Oven1 = (props) => {
  const serial = props.serial;
  const name = props.name;
  const date = props.date;
  const oven = props.oven;

  const [form] = Form.useForm();
  return (
    <Fragment>
      <Tabs defaultActiveKey="1">
        <TabPane tab="VISUAL" key="1">
          <VisualInspection />
        </TabPane>
        <TabPane tab="OPERATIONAL" key="2">
          <OperationalInspection />
        </TabPane>
        <TabPane tab="HOT OVEN" key="3">
          <HotOven />
        </TabPane>
      </Tabs>
    </Fragment>
  );
};
