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
  const [textA, settextA] = useState("default");
  const [textB, settextB] = useState("default");
  const [textC, settextC] = useState("default");
  const [textD, settextD] = useState("default");
  const [textE, settextE] = useState("default");
  const [textF, settextF] = useState("default");
  const [textG, settextG] = useState("default");
  const [textH, settextH] = useState("default");

  const onChangeA = () => settextA("default");
  const onChangeB = () => settextB("default");
  const onChangeC = () => settextC("default");
  const onChangeD = () => settextD("default");
  const onChangeE = () => settextE("default");
  const onChangeF = () => settextF("default");
  const onChangeG = () => settextG("default");
  const onChangeH = () => settextH("default");

  const addVisualInspection = async (values) => {
    setButtonDisabled(true);
    setLoading(true);
    await setDoc(doc(db, "VisualInspection", `${props.serial}`), {
      VISUALQA: values.VISUAL_Q_A,
      VISUALQB: values.VISUAL_Q_B,
      VISUALQC: values.VISUAL_Q_C,
      VISUALQD: values.VISUAL_Q_D,
      VISUALQE: values.VISUAL_Q_E,
      VISUALQF: values.VISUAL_Q_F,
      VISUALQG: values.VISUAL_Q_G,
      VISUALQH: values.VISUAL_Q_H,
    })
      .then(() => {
        message.success("Visual Inspection Completed");
        setButtonDisabled(false);
        setLoading(false);
        window.scrollTo(0, 0);
        props.setState("2");
      })
      .catch((error) => {
        setButtonDisabled(false);
        setLoading(false);
        message.error("error sending the data");
      });
  };
  const onFinishFailed = (errorInfo) => {
    if (errorInfo.values.VISUAL_Q_A == null) settextA("danger");
    if (errorInfo.values.VISUAL_Q_B == null) settextB("danger");
    if (errorInfo.values.VISUAL_Q_C == null) settextC("danger");
    if (errorInfo.values.VISUAL_Q_D == null) settextD("danger");
    if (errorInfo.values.VISUAL_Q_E == null) settextE("danger");
    if (errorInfo.values.VISUAL_Q_F == null) settextF("danger");
    if (errorInfo.values.VISUAL_Q_G == null) settextG("danger");
    if (errorInfo.values.VISUAL_Q_H == null) settextG("danger");
    message.error("Finish the Visual Inspection to continue");
  };
  const [form] = Form.useForm();

  return (
    <Form
      labelCol={{ span: 7 }}
      name="I3VisualInspection"
      onFinishFailed={onFinishFailed}
      style={{ paddingBottom: "5em" }}
      onFinish={addVisualInspection}
      form={form}
      autoComplete="off"
      initialValues={{
        VISUAL_Q_A: true,
        VISUAL_Q_B: true,
        VISUAL_Q_C: true,
        VISUAL_Q_D: true,
        VISUAL_Q_E: true,
        VISUAL_Q_F: true,
        VISUAL_Q_G: true,
        VISUAL_Q_H: true,
      }}
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
          <Form.Item
            name={VISUALQA}
            rules={[
              {
                required: true,
                message: "FINISH THE INSPECTION!",
              },
            ]}
          >
            <Radio.Group onChange={onChangeA}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
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
          <Form.Item
            name={VISUALQB}
            rules={[
              {
                required: true,
                message: "FINISH THE INSPECTION!",
              },
            ]}
          >
            <Radio.Group onChange={onChangeB}>
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
          <Form.Item
            name={VISUALQC}
            rules={[
              {
                required: true,
                message: "FINISH THE INSPECTION!",
              },
            ]}
          >
            <Radio.Group onChange={onChangeC}>
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
          <Form.Item
            name={VISUALQD}
            rules={[
              {
                required: true,
                message: "FINISH THE INSPECTION!",
              },
            ]}
          >
            <Radio.Group onChange={onChangeD}>
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
          <Form.Item
            name={VISUALQE}
            rules={[
              {
                required: true,
                message: "FINISH THE INSPECTION!",
              },
            ]}
          >
            <Radio.Group onChange={onChangeE}>
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
          <Form.Item
            name={VISUALQF}
            rules={[
              {
                required: true,
                message: "FINISH THE INSPECTION!",
              },
            ]}
          >
            <Radio.Group onChange={onChangeF}>
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
          <Form.Item
            name={VISUALQG}
            rules={[
              {
                required: true,
                message: "FINISH THE INSPECTION!",
              },
            ]}
          >
            <Radio.Group onChange={onChangeG}>
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
          <Form.Item
            name={VISUALQH}
            rules={[
              {
                required: true,
                message: "FINISH THE INSPECTION!",
              },
            ]}
          >
            <Radio.Group onChange={onChangeH}>
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
