import React from "react";
import { Form, Row, Col, Typography, Radio, Divider, Button } from "antd";
const { Text } = Typography;

export const VisualInspection = (props) => {
  const [form] = Form.useForm();
  return (
    <Form labelCol={{ span: 7 }} style={{ paddingBottom: "5em" }}>
      <Divider orientation="rigth">
        1) VISUAL INSPECTION: DO NOT APPLY POWER TO OVEN!!!
      </Divider>
      <Row justify="space-between">
        <Col xs={18}>
          <Text>
            A) Check Consumables and Accessories to comply with proper Packaging
            Kit. Remove Rack, Left, Right and Top panels. Confirm proper
            Schematic is on RS Panel.
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneA" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={18}>
          <Text>
            B) Remove the Bubble wrap and insert the Oven Rack insuring flush
            contact with all surfaces. Check IR Element lies flat and
            Clips/Standoffs are tight and in correct position. Check Waveguide
            Covers (ar the ends only) by squeezing with hands for looseness.
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneB" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={18}>
          <Text>
            C) Check wiring CC & IR Heaters, Mag1 & 2, Dual SSR, Mag, EC Fans,
            Convection Blower, Hi-Limit and Control circuits.
          </Text>
        </Col>
        <Col xs={4} justify="end">
          <Form.Item>
            <Radio.Group name="oneC" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            D) Check for loose hardware and debris on floor of the oven cabinet.
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneD" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            E) Check for Door flush to the Oven Flange (no pinching on bottom),
            door clears Louvered Panel?
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneE" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            F) Are the CC Heater Terminal Posts insulated with Silicone Caps and
            Mica Disks?
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneF" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            G) Split open insulation over Hi-Limit Capillary, is it mounted in
            the correct position?
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneG" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            H) Are interlock Switches adjusted with actuator rotation if door is
            closed slowly, are the switch arms .020" to .030" fron switch body?
            is the actuator at 87° +- 2°?
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneA" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24}>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button size="middle" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
