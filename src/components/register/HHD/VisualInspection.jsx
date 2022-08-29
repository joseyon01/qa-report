import React, { useState } from "react";
import { Form, Row, Col, Typography, Radio, Button, message } from "antd";
const { Text } = Typography;
import {
  VISUALQA,
  VISUALQB_1,
  VISUALQB_2,
  VISUALQB_3,
  VISUALQB_4,
  VISUALQB_5,
  VISUALQB_6,
  VISUALQB_7,
  VISUALQC,
  VISUALQD,
  VISUALQE,
  VISUALQF,
  VISUALQG,
  VISUALQH,
  VISUALQJ,
} from "../../constants/ConstVisualInspection";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore();

export const VisualInspection = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [valueA, setValueA] = useState(null);
  const [valueB_1, setValueB_1] = useState(null);
  const [valueB_2, setValueB_2] = useState(null);
  const [valueB_3, setValueB_3] = useState(null);
  const [valueB_4, setValueB_4] = useState(null);
  const [valueB_5, setValueB_5] = useState(null);
  const [valueB_6, setValueB_6] = useState(null);
  const [valueB_7, setValueB_7] = useState(null);
  const [valueC, setValueC] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [valueE, setValueE] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueG, setValueG] = useState(null);
  const [valueH, setValueH] = useState(null);
  const [valueJ, setValueJ] = useState(null);
  const [textA, setTextA] = useState("default");
  const [textB_1, setTextB_1] = useState("default");
  const [textB_2, setTextB_2] = useState("default");
  const [textB_3, setTextB_3] = useState("default");
  const [textB_4, setTextB_4] = useState("default");
  const [textB_5, setTextB_5] = useState("default");
  const [textB_6, setTextB_6] = useState("default");
  const [textB_7, setTextB_7] = useState("default");
  const [textC, setTextC] = useState("default");
  const [textD, setTextD] = useState("default");
  const [textE, setTextE] = useState("default");
  const [textF, setTextF] = useState("default");
  const [textG, setTextG] = useState("default");
  const [textH, setTextH] = useState("default");
  const [textJ, setTextJ] = useState("default");

  const onChangeA = (e) => {
    setTextA("default");
    setValueA(e.target.value);
  };

  const onChangeB_1 = (e) => {
    setTextB_1("default");
    setValueB_1(e.target.value);
  };
  const onChangeB_2 = (e) => {
    setTextB_2("default");
    setValueB_2(e.target.value);
  };
  const onChangeB_3 = (e) => {
    setTextB_3("default");
    setValueB_3(e.target.value);
  };
  const onChangeB_4 = (e) => {
    setTextB_4("default");
    setValueB_4(e.target.value);
  };
  const onChangeB_5 = (e) => {
    setTextB_5("default");
    setValueB_5(e.target.value);
  };
  const onChangeB_6 = (e) => {
    setTextB_6("default");
    setValueB_6(e.target.value);
  };
  const onChangeB_7 = (e) => {
    setTextB_7("default");
    setValueB_7(e.target.value);
  };
  const onChangeC = (e) => {
    setTextC("default");
    setValueC(e.target.value);
  };
  const onChangeD = (e) => {
    setTextD("default");
    setValueD(e.target.value);
  };
  const onChangeE = (e) => {
    setTextE("default");
    setValueE(e.target.value);
  };
  const onChangeF = (e) => {
    setTextF("default");
    setValueF(e.target.value);
  };
  const onChangeG = (e) => {
    setTextG("default");
    setValueG(e.target.value);
  };
  const onChangeH = (e) => {
    setTextH("default");
    setValueH(e.target.value);
  };
  const onChangeJ = (e) => {
    setTextJ("default");
    setValueJ(e.target.value);
  };

  function onFinishFailed(errorInfo) {
    if (errorInfo.values.VISUAL_Q_A == null) setTextA("danger");
    if (errorInfo.values.VISUAL_Q_B_1 == null) setTextB_1("danger");
    if (errorInfo.values.VISUAL_Q_B_2 == null) setTextB_2("danger");
    if (errorInfo.values.VISUAL_Q_B_3 == null) setTextB_3("danger");
    if (errorInfo.values.VISUAL_Q_B_4 == null) setTextB_4("danger");
    if (errorInfo.values.VISUAL_Q_B_5 == null) setTextB_5("danger");
    if (errorInfo.values.VISUAL_Q_B_6 == null) setTextB_6("danger");
    if (errorInfo.values.VISUAL_Q_B_7 == null) setTextB_7("danger");
    if (errorInfo.values.VISUAL_Q_C == null) setTextC("danger");
    if (errorInfo.values.VISUAL_Q_D == null) setTextD("danger");
    if (errorInfo.values.VISUAL_Q_E == null) setTextE("danger");
    if (errorInfo.values.VISUAL_Q_F == null) setTextF("danger");
    if (errorInfo.values.VISUAL_Q_G == null) setTextG("danger");
    if (errorInfo.values.VISUAL_Q_H == null) setTextH("danger");
    if (errorInfo.values.VISUAL_Q_J == null) setTextJ("danger");
    message.error("Complete all the fields");
  }

  const addVisualInspection = async (values) => {
    setButtonDisabled(true);
    setLoading(true);
    await setDoc(doc(db, "VisualInspection", `${props.serial}`), {
      VISUALQA: values.VISUAL_Q_A,
      VISUALQB_1: values.VISUAL_Q_B_1,
      VISUALQB_2: values.VISUAL_Q_B_2,
      VISUALQB_3: values.VISUAL_Q_B_3,
      VISUALQB_4: values.VISUAL_Q_B_4,
      VISUALQB_5: values.VISUAL_Q_B_5,
      VISUALQB_6: values.VISUAL_Q_B_6,
      VISUALQB_7: values.VISUAL_Q_B_7,
      VISUALQC: values.VISUAL_Q_C,
      VISUALQD: values.VISUAL_Q_D,
      VISUALQE: values.VISUAL_Q_E,
      VISUALQF: values.VISUAL_Q_F,
      VISUALQG: values.VISUAL_Q_G,
      VISUALQH: values.VISUAL_Q_H,
      VISUALQJ: values.VISUAL_Q_J,
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
        VISUAL_Q_B_1: true,
        VISUAL_Q_B_2: true,
        VISUAL_Q_B_3: true,
        VISUAL_Q_B_4: true,
        VISUAL_Q_B_5: true,
        VISUAL_Q_B_6: true,
        VISUAL_Q_B_7: true,
        VISUAL_Q_C: true,
        VISUAL_Q_D: true,
        VISUAL_Q_E: true,
        VISUAL_Q_F: true,
        VISUAL_Q_G: true,
        VISUAL_Q_H: true,
        VISUAL_Q_J: true,
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
            A) Remove side panels. Check the Schematic on RS panel. Correct?
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
          <Text>B) Perform Quality Control Check before continuing.</Text>
        </Col>
        <Col xs={23}>
          <Row className={"sub-question"}>
            <Col xs={23}>
              <Row justify="space-around">
                <Col xs={22} sm={14}>
                  <Text type={textB_1}>
                    1) Tug test the Line Voltage Wires.
                  </Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item
                    name={VISUALQB_1}
                    rules={[
                      {
                        required: true,
                        message: "FINISH THE INSPECTION!",
                      },
                    ]}
                  >
                    <Radio.Group onChange={onChangeB_1}>
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={22} sm={14}>
                  <Text type={textB_2}>
                    2) Ensure the wires going to the Heater Terminals are not
                    Kinked.
                  </Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item
                    name={VISUALQB_2}
                    rules={[
                      {
                        required: true,
                        message: "FINISH THE INSPECTION!",
                      },
                    ]}
                  >
                    <Radio.Group onChange={onChangeB_2}>
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={22} sm={14}>
                  <Text type={textB_3}>
                    3) Ensure all insulation Tape is neatly applied.
                  </Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item
                    name={VISUALQB_3}
                    rules={[
                      {
                        required: true,
                        message: "FINISH THE INSPECTION!",
                      },
                    ]}
                  >
                    <Radio.Group onChange={onChangeB_3}>
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={22} sm={14}>
                  <Text type={textB_4}>
                    4) Ensure tape around the Heater Terminals is at least 1/4
                    inch away from the terminals.
                  </Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item
                    name={VISUALQB_4}
                    rules={[
                      {
                        required: true,
                        message: "FINISH THE INSPECTION!",
                      },
                    ]}
                  >
                    <Radio.Group onChange={onChangeB_4}>
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={22} sm={14}>
                  <Text type={textB_5}>
                    5) Ensure the oven door hinge screws are seated tight.
                  </Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item
                    name={VISUALQB_5}
                    rules={[
                      {
                        required: true,
                        message: "FINISH THE INSPECTION!",
                      },
                    ]}
                  >
                    <Radio.Group onChange={onChangeB_5}>
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={22} sm={14}>
                  <Text type={textB_6}>
                    6) Ensure the oven door fits squarely and is not crooked
                  </Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item
                    name={VISUALQB_6}
                    rules={[
                      {
                        required: true,
                        message: "FINISH THE INSPECTION!",
                      },
                    ]}
                  >
                    <Radio.Group onChange={onChangeB_6}>
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={22} sm={14}>
                  <Text type={textB_7}>
                    7) Ensure the oven door opens and closes smoothly and
                    doesn't get caught on sides.
                  </Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item
                    name={VISUALQB_7}
                    rules={[
                      {
                        required: true,
                        message: "FINISH THE INSPECTION!",
                      },
                    ]}
                  >
                    <Radio.Group onChange={onChangeB_7}>
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text type={textC}>
            C) Check wiring of Line Voltage Components, EX: CC Heaters, Dual
            SSR, EC Fans, Hi-Limint Switch, Control Circuits, Motor Racks,
            Replays and Convection Blower.
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
            D) Check the screws that hold base to cavity. Ensure they are tight
            and there are no gaps.
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
            E) Check for loose hardware and debris on floor of the oven cabinet.
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
            F) open both doors. ensure door switch is not bent (switch plate
            should be straight)
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
            G) If the thermostat wire is rubbing against power supply box, add
            tape to protect it.
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
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text type={textH}>
            H) Check that no wire are loose. if loose wires are found, tie with
            tie rod.
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
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            I) Using the OHMS function on your meter, measure and record the
            resistances between the:
          </Text>
        </Col>
        <Col xs={23}>
          <Row className={"sub-question"}>
            <Col xs={23}>
              <Row justify="space-around">
                <Col xs={22}>
                  <Text>1) Frame and the Ground pin on the plug:</Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text type={textJ}>
            J) Open Fuse #1, #2 and check rating, should be Class CC ATMR 12.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item
            name={VISUALQJ}
            rules={[
              {
                required: true,
                message: "FINISH THE INSPECTION!",
              },
            ]}
          >
            <Radio.Group onChange={onChangeJ}>
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
