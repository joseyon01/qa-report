import React, { useState, useEffect } from "react";
import {
  Form,
  Row,
  Col,
  Typography,
  Radio,
  Button,
  Modal,
  message,
} from "antd";
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
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
const db = getFirestore();

export const EditVisualInspection = (props) => {
  const ovenSerial = props.serial;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [valueA, setValueA] = useState(null);
  const [valueB, setValueB] = useState(null);
  const [valueC, setValueC] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [valueE, setValueE] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueG, setValueG] = useState(null);
  const [valueH, setValueH] = useState(null);
  const onChangeA = (e) => setValueA(e.target.value);
  const onChangeB = (e) => setValueB(e.target.value);
  const onChangeC = (e) => setValueC(e.target.value);
  const onChangeD = (e) => setValueD(e.target.value);
  const onChangeE = (e) => setValueE(e.target.value);
  const onChangeF = (e) => setValueF(e.target.value);
  const onChangeG = (e) => setValueG(e.target.value);
  const onChangeH = (e) => setValueH(e.target.value);

  const getDataOven = async () => {
    const docRef = doc(db, "VisualInspection", `${ovenSerial}`);
    const docSnap = await getDoc(docRef);
    const newData = docSnap.data();
    if (valueA == null) {
      setValueA(newData?.VISUALQA);
      setValueB(newData?.VISUALQB);
      setValueC(newData?.VISUALQC);
      setValueD(newData?.VISUALQD);
      setValueE(newData?.VISUALQE);
      setValueF(newData?.VISUALQF);
      setValueG(newData?.VISUALQG);
      setValueH(newData?.VISUALQH);
    }
  };

  const addVisualInspection = async (values) => {
    setButtonDisabled(true);
    setLoading(true);
    await setDoc(doc(db, "VisualInspection", `${ovenSerial}`), {
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
        window.scrollTo(0, 0);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setButtonDisabled(false);
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Finish the Visual Inspection to continue");
  };
  form.setFieldsValue({
    VISUAL_Q_A: valueA,
    VISUAL_Q_B: valueB,
    VISUAL_Q_C: valueC,
    VISUAL_Q_D: valueD,
    VISUAL_Q_E: valueE,
    VISUAL_Q_F: valueF,
    VISUAL_Q_G: valueG,
    VISUAL_Q_H: valueH,
  });
  useEffect(() => {
    getDataOven();
  }, []);
  return (
    <Form
      form={form}
      name="I3VisualInspection"
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
      onFinish={addVisualInspection}
      onFinishFailed={onFinishFailed}
      initialValues={{
        remember: true,
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
          <Text>
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
          <Text>
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
          <Text>
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
          <Text>
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
          <Text>
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
          <Text>
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
          <Text>
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
          <Text>
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
