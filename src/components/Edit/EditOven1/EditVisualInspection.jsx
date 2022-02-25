import React, { useState } from "react";
import { Form, Row, Col, Typography, Radio, Divider, Button } from "antd";
const { Text } = Typography;
import {
  VISUALQA,
  VISUALQB,
  VISUALQC,
  VISUALQD,
  VISUALQE,
  VISUALQF,
  VISUALQG,
  VISUALQH,
} from "../../constants/ConstVisualInspection";

import QaReportFirebase from "../../../../Credentials";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firestore = getFirestore(QaReportFirebase);
const auth = getAuth(QaReportFirebase);

const db = getFirestore();

export const EditVisualInspection = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(null);
  async function onClickF(
    VISUALQA,
    VISUALQB,
    VISUALQC,
    VISUALQD,
    VISUALQE,
    VISUALQF,
    VISUALQG,
    VISUALQH
  ) {
    setButtonDisabled(true);
    const docRef = await setDoc(
      doc(db, "VisualInspection", `${props.serial}`),
      {
        VISUALQA: VISUALQA,
        VISUALQB: VISUALQB,
        VISUALQC: VISUALQC,
        VISUALQD: VISUALQD,
        VISUALQE: VISUALQE,
        VISUALQF: VISUALQF,
        VISUALQG: VISUALQG,
        VISUALQH: VISUALQH,
      }
    );
  }

  const [form] = Form.useForm();
  const [valueA, setValueA] = useState(null);
  const onChangeA = (e) => {
    setValueA(e.target.value);
  };
  const [valueB, setValueB] = useState(null);
  const onChangeB = (e) => {
    setValueB(e.target.value);
  };
  const [valueC, setValueC] = useState(null);
  const onChangeC = (e) => {
    setValueC(e.target.value);
  };
  const [valueD, setValueD] = useState(null);
  const onChangeD = (e) => {
    setValueD(e.target.value);
  };
  const [valueE, setValueE] = useState(null);
  const onChangeE = (e) => {
    setValueE(e.target.value);
  };
  const [valueF, setValueF] = useState(null);
  const onChangeF = (e) => {
    setValueF(e.target.value);
  };
  const [valueG, setValueG] = useState(null);
  const onChangeG = (e) => {
    setValueG(e.target.value);
  };
  const [valueH, setValueH] = useState(null);
  const onChangeH = (e) => {
    setValueH(e.target.value);
  };
  async function addVisualInspection() {
    const VISUALQA = valueA;
    const VISUALQB = valueB;
    const VISUALQC = valueC;
    const VISUALQD = valueD;
    const VISUALQE = valueE;
    const VISUALQF = valueF;
    const VISUALQG = valueG;
    const VISUALQH = valueH;
    if (
      (valueA == null,
      valueB == null,
      valueC == null,
      valueD == null,
      valueE == null,
      valueF == null,
      valueG == null,
      valueH == null)
    ) {
      alert("Pleace finish the inspection befor send it");
    } else {
      onClickF(
        VISUALQA,
        VISUALQB,
        VISUALQC,
        VISUALQD,
        VISUALQE,
        VISUALQF,
        VISUALQG,
        VISUALQH,
        props.serial
      );
    }
  }
  const onFail = () => {
    alert("pleace complite the form");
  };
  return (
    <Form
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
      onFinish={addVisualInspection}
    >
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
          <Radio.Group required name={VISUALQA} onChange={onChangeA}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
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
            <Radio.Group name={VISUALQB} required onChange={onChangeB}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
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
            <Radio.Group name={VISUALQC} required onChange={onChangeC}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
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
            <Radio.Group name={VISUALQD} required onChange={onChangeD}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
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
            <Radio.Group name={VISUALQE} required onChange={onChangeE}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
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
            <Radio.Group name={VISUALQF} required onChange={onChangeF}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
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
            <Radio.Group name={VISUALQG} required onChange={onChangeG}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
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
          <Form.Item required>
            <Radio.Group name={VISUALQH} required onChange={onChangeH}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24}>
          <div style={{ paddingTop: "1em" }}>
            <Form.Item>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                block
                disabled={buttonDisabled}
              >
                Submit
              </Button>
            </Form.Item>
          </div>
        </Col>
      </Row>
    </Form>
  );
};
