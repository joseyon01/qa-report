import React, { useState } from "react";
import { Form, Row, Col, Typography, Radio, Button, message } from "antd";
const { Text, Title } = Typography;
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
import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore();

export const VisualInspection = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [valueA, setValueA] = useState(null);
  const [valueB, setValueB] = useState(null);
  const [valueC, setValueC] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [valueE, setValueE] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueG, setValueG] = useState(null);
  const [valueH, setValueH] = useState(null);
  const [textA, settextA] = useState("default");
  const [textB, settextB] = useState("default");
  const [textC, settextC] = useState("default");
  const [textD, settextD] = useState("default");
  const [textE, settextE] = useState("default");
  const [textF, settextF] = useState("default");
  const [textG, settextG] = useState("default");
  const [textH, settextH] = useState("default");

  const onChangeA = (e) => {
    settextA("default");
    setValueA(e.target.value);
  };
  const onChangeB = (e) => {
    settextB("default");
    setValueB(e.target.value);
  };
  const onChangeC = (e) => {
    settextC("default");
    setValueC(e.target.value);
  };
  const onChangeD = (e) => {
    settextD("default");
    setValueD(e.target.value);
  };
  const onChangeE = (e) => {
    settextE("default");
    setValueE(e.target.value);
  };
  const onChangeF = (e) => {
    settextF("default");
    setValueF(e.target.value);
  };
  const onChangeG = (e) => {
    settextG("default");
    setValueG(e.target.value);
  };
  const onChangeH = (e) => {
    settextH("default");
    setValueH(e.target.value);
  };

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
    setLoading(true);
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
    setLoading(false);
  }

  function addVisualInspection() {
    const VISUALQA = valueA;
    const VISUALQB = valueB;
    const VISUALQC = valueC;
    const VISUALQD = valueD;
    const VISUALQE = valueE;
    const VISUALQF = valueF;
    const VISUALQG = valueG;
    const VISUALQH = valueH;
    if (
      valueA == null ||
      valueB == null ||
      valueC == null ||
      valueD == null ||
      valueE == null ||
      valueF == null ||
      valueG == null ||
      valueH == null
    ) {
      if (valueA == null) {
        settextA("danger");
      }
      if (valueB == null) {
        settextB("danger");
      }
      if (valueC == null) {
        settextC("danger");
      }
      if (valueD == null) {
        settextD("danger");
      }
      if (valueE == null) {
        settextE("danger");
      }
      if (valueF == null) {
        settextF("danger");
      }
      if (valueG == null) {
        settextG("danger");
      }
      if (valueH == null) {
        settextH("danger");
      }
      message.error("Complete all the fields");
    } else {
      onClickF(
        VISUALQA,
        VISUALQB,
        VISUALQC,
        VISUALQD,
        VISUALQE,
        VISUALQF,
        VISUALQG,
        VISUALQH
      );
      message.success("Visual Inspection Completed");
      window.scrollTo(0, 0);
      props.setState("2");
    }
  }
  return (
    <Form
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
      onFinish={addVisualInspection}
    >
      <Row justify="center">
        <Col xs={20} align="center">
          <strong>1) VISUAL INSPECTION: DO NOT APPLY POWER TO OVEN!!!</strong>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text type={textA}>
            A) Check Consumables and Accessories to comply with proper Packaging
            Kit. Remove Rack, Left, Right and Top panels. Confirm proper
            Schematic is on RS Panel.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group required name={VISUALQA} onChange={onChangeA}>
            <Radio name={VISUALQA} value={true}>
              ACC
            </Radio>
            <Radio name={VISUALQA} value={false}>
              NO ACC
            </Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text type={textB}>
            B) Remove the Bubble wrap and insert the Oven Rack insuring flush
            contact with all surfaces. Check IR Element lies flat and
            Clips/Standoffs are tight and in correct position. Check Waveguide
            Covers (at the ends only) by squeezing with hands for looseness.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
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
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text type={textC}>
            C) Check wiring CC & IR Heaters, Mags 1 & 2, Dual SSR, Mag EC Fans,
            Convection Blower, Hi-Limit and Control ciruits.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
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
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text type={textD}>
            D) Check for loose hardware and debris on floor of the oven cabinet.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
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
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text type={textE}>
            E) Check for Door flush to the Oven Flange (no pinching on bottom),
            door clears louvered panel?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
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
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text type={textF}>
            F) Are the CC Heater Terminal Posts insulated with Silicone Caps and
            Mica Disks?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
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
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text type={textG}>
            G) Split open insulation over Hi-Limit Capillary, is it mounted in
            the correct position?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group name={VISUALQG} required onChange={onChangeG}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text type={textH}>
            H) Are Interlock Switches adjusted with actuatorrotation if door is
            closed slowly, are the switch arms .020'' from switch body? is the
            Actuator at 87° +/- 2°?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group name={VISUALQH} required onChange={onChangeH}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} sm={18}>
          <div style={{ paddingTop: "1em" }}>
            <Form.Item>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                block
                disabled={buttonDisabled}
                loading={loading}
              >
                {loading ? "" : "Submit"}
              </Button>
            </Form.Item>
          </div>
        </Col>
      </Row>
    </Form>
  );
};
