import React from "react";
import {
  Form,
  Image,
  Space,
  Input,
  DatePicker,
  Row,
  Col,
  Typography,
  Radio,
  Divider,
} from "antd";
const { Title } = Typography;
import TurboChef from "../../assets/img/turboChefLogo.png";

const { Text, Link } = Typography;

export const Oven1 = (props) => {
  const [form] = Form.useForm();
  return (
    <Form labelCol={{ span: 4 }}>
      <Row justify="center">
        <Col xs={18}>
          <Row>
            <Image width={"100%"} src={TurboChef} />
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={18}>
          <Row justify="center">
            <Title level={3}>
              ENC NEW AND REFURBISHED OVENS QUALITY ASSURANCEB CHECKLIST
            </Title>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20}>
          <Row justify="center">
            <Col xs={6}>
              <Row>
                <Space size={"middle"} style={{ fontSize: "1.1em" }}>
                  <span>DATE:</span>{" "}
                  <span style={{ backgroundColor: "#ccc", padding: ".5em" }}>
                    {props.date}
                  </span>
                </Space>
              </Row>
            </Col>
            <Col xs={6}>
              <Row>
                <Space size={"middle"} style={{ fontSize: "1.1em" }}>
                  <span>name:</span>{" "}
                  <span style={{ backgroundColor: "#ccc", padding: ".5em" }}>
                    {props.name}
                  </span>
                </Space>
              </Row>
            </Col>
            <Col xs={6}>
              <Row>
                <Space size={"middle"} style={{ fontSize: "1.1em" }}>
                  <span>OVEN S/N:</span>{" "}
                  <span style={{ backgroundColor: "#ccc", padding: ".5em" }}>
                    {props.serial}
                  </span>
                </Space>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider orientation="rigth">
        1) VISUAL INSPECTION: DO NOT APPLY POWER TO OVEN!!!
      </Divider>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text type="secondary">
            A) Check Consumables and Accessories to comply with proper Packaging
            Kit.
          </Text>
          <br />
          <Text>
            Remove Rack, Left, Right and Top panels. Confirm proper Schematic is
            on RS Panel.
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneA" defaultValue={"bad"}>
            <Radio value={"good"}>good</Radio>
            <Radio value={"bad"}>bad</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <span>
            B) Remove the Bubble wrap and insert the Oven Rack insuring flush
            contact with all surfaces.
          </span>
          <br />
          <span>
            Check IR Element lies flat and Clips/Standoffs are tight and in
            correct position.
          </span>
          <br />
          <span>
            Check Waveguide Covers (ar the ends only) by squeezing with hands
            for looseness.
          </span>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneB" defaultValue={"bad"}>
            <Radio value={"good"}>good</Radio>
            <Radio value={"bad"}>bad</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <span>
            C) Check wiring CC & IR Heaters, Mag1 & 2, Dual SSR, Mag, EC Fans,
            Convection Blower, Hi-Limit and Control circuits.
          </span>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneC" defaultValue={"bad"}>
            <Radio value={"good"}>good</Radio>
            <Radio value={"bad"}>bad</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <span>
            D) Check for loose hardware and debris on floor of the oven cabinet.
          </span>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneD" defaultValue={"bad"}>
            <Radio value={"good"}>good</Radio>
            <Radio value={"bad"}>bad</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <span>
            E) Check for Door flush to the Oven Flange (no pinching on bottom),
            door clears Louvered Panel?
          </span>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneE" defaultValue={"bad"}>
            <Radio value={"good"}>good</Radio>
            <Radio value={"bad"}>bad</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <span>
            F) Are the CC Heater Terminal Posts insulated with Silicone Caps and
            Mica Disks?
          </span>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneF" defaultValue={"bad"}>
            <Radio value={"good"}>good</Radio>
            <Radio value={"bad"}>bad</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <span>
            G) Split open insulation over Hi-Limit Capillary, is it mounted in
            the correct position?
          </span>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneG" defaultValue={"bad"}>
            <Radio value={"good"}>good</Radio>
            <Radio value={"bad"}>bad</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <span>
            H) Are interlock Switches adjusted with actuator rotation if door is
            closed slowly, are the switch arms .020" to .030" fron switch body?
            is the actuator at 87° +- 2°?
          </span>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneA" defaultValue={"bad"}>
            <Radio value={"good"}>good</Radio>
            <Radio value={"bad"}>bad</Radio>
          </Radio.Group>
        </Col>
      </Row>
    </Form>
  );
};
