import React from "react";
import { Form, Input, Typography, Tabs } from "antd";
import { Fragment } from "react/cjs/react.production.min";
import { EditVisualInspection } from "./EditVisualInspection";
import { EditOperationalInspection } from "./EditOperationalInspection";
import { EditHotOven } from "./editHotOven";
const { Title } = Typography;
const { Text } = Typography;
const { TextArea } = Input;
const { TabPane } = Tabs;

export const EditOven1 = (props) => {
  const serial = props.serial;
  const name = props.name;
  const date = props.date;
  const oven = props.oven;
  const [form] = Form.useForm();
  return (
    <Fragment>
      <Tabs defaultActiveKey="1">
        <TabPane tab="VISUAL" key="1">
          <EditVisualInspection
            serial={serial}
            name={name}
            date={date}
            oven={oven}
          />
        </TabPane>
        <TabPane tab="OPERATIONAL" key="2">
          <EditOperationalInspection serial={serial} />
        </TabPane>
        <TabPane tab="HOT OVEN" key="3">
          <EditHotOven serial={serial} />
        </TabPane>
      </Tabs>
    </Fragment>
  );
};
