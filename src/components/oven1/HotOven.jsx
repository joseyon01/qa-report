import React from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Typography,
  Radio,
  Divider,
  Button,
  Switch,
} from "antd";

import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
const { Text } = Typography;

export const HotOven = (props) => {
  const [form] = Form.useForm();
  return (
    <Form labelCol={{ span: 7 }} style={{ paddingBottom: "5em" }}>
      <Divider orientation="rigth">3) HOT OVEN OPERATIONAL CHECKOUT:</Divider>
      <Row>
        <Col xs={24}>
          <Text>
            The equipment needed to complete the Oven inspection is a moder 1501
            Survey Meter, three 500 ml beakers with 275 ml +/- 15ml of cold
            water, spring loaded tongs
          </Text>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={20}>
          <Text>A) Door Closed Microwave Leakege Test:</Text>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={24}>
          <Text>
            B) Repeat process checking the IR Element exits, around the
            Magnetrons and waveguide ends, left and right sides. Maximum
            allowale leakage is 0.8mW/cm surrounding the perimeter of the door
            and 0.2mW/cm<sup>2</sup> around the EC and left and right side IR
            Element through hole.
          </Text>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Item label="DOOR">
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Rt & Lt Sides">
            <Input
              type="number"
              placeholder={"mW/cm2"}
              size="small"
              style={{ width: 150 }}
              required
            />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="spaceAround">
        <Col xs={3} offset={3}>
          <Form.Item>
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form.Item>
        </Col>
        <Col xs={3} offset={10}>
          <Form.Item>
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col
          xs={8}
          style={{
            height: "8em",
            border: "dashed 3px #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Mark and record peak levels.</Text>
        </Col>
      </Row>
      <Row justify="spaceAround">
        <Col xs={3} offset={3}>
          <Form.Item>
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form.Item>
        </Col>
        <Col xs={3} offset={10}>
          <Form.Item>
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text type="danger">
            Recheck Waveguide Covers ! Reset Cook Count and Accumulation
            Settings !
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneB">
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Row>
            <Col xs={24}>
              <Form.Item label="C) Cook time Count">
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Form.Item label="D) Survey meter #">
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Form.Item label="E) Clear Cook time foults">
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Item label="Denied/Aprove">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Form.Item>
        </Col>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};
