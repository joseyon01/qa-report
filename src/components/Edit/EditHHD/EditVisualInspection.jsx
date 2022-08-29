import React, { useState, useEffect } from "react";
import {
  Form,
  Row,
  Col,
  Typography,
  Radio,
  Button,
  Input,
  message,
} from "antd";
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
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
const { Text, Title } = Typography;
const db = getFirestore();

export const EditVisualInspection = (props) => {
  const [form] = Form.useForm();
  const ovenSerial = props.serial;
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
  const onChangeA = (e) => setValueA(e.target.value);
  const onChangeB_1 = (e) => setValueB_1(e.target.value);
  const onChangeB_2 = (e) => setValueB_2(e.target.value);
  const onChangeB_3 = (e) => setValueB_3(e.target.value);
  const onChangeB_4 = (e) => setValueB_4(e.target.value);
  const onChangeB_5 = (e) => setValueB_5(e.target.value);
  const onChangeB_6 = (e) => setValueB_6(e.target.value);
  const onChangeB_7 = (e) => setValueB_7(e.target.value);
  const onChangeC = (e) => setValueC(e.target.value);
  const onChangeD = (e) => setValueD(e.target.value);
  const onChangeE = (e) => setValueE(e.target.value);
  const onChangeF = (e) => setValueF(e.target.value);
  const onChangeG = (e) => setValueG(e.target.value);
  const onChangeH = (e) => setValueH(e.target.value);
  const onChangeJ = (e) => setValueJ(e.target.value);

  const getDataOven = async () => {
    try {
      const docRef = doc(db, "VisualInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if (valueA == null) {
        setValueA(data?.VISUALQA);
        setValueB_1(data?.VISUALQB_1);
        setValueB_2(data?.VISUALQB_2);
        setValueB_3(data?.VISUALQB_3);
        setValueB_4(data?.VISUALQB_4);
        setValueB_5(data?.VISUALQB_5);
        setValueB_6(data?.VISUALQB_6);
        setValueB_7(data?.VISUALQB_7);
        setValueC(data?.VISUALQC);
        setValueD(data?.VISUALQD);
        setValueE(data?.VISUALQE);
        setValueF(data?.VISUALQF);
        setValueG(data?.VISUALQG);
        setValueH(data?.VISUALQH);
        setValueJ(data?.VISUALQJ);
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    getDataOven();
  }, []);

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
    VISUAL_Q_B_1: valueB_1,
    VISUAL_Q_B_2: valueB_2,
    VISUAL_Q_B_3: valueB_3,
    VISUAL_Q_B_4: valueB_4,
    VISUAL_Q_B_5: valueB_5,
    VISUAL_Q_B_6: valueB_6,
    VISUAL_Q_B_7: valueB_7,
    VISUAL_Q_C: valueC,
    VISUAL_Q_D: valueD,
    VISUAL_Q_E: valueE,
    VISUAL_Q_F: valueF,
    VISUAL_Q_G: valueG,
    VISUAL_Q_H: valueH,
    VISUAL_Q_J: valueJ,
  });
  return (
    <Form
      form={form}
      name="HHDVisualInspection"
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
                  <Text>1) Tug test the Line Voltage Wires.</Text>
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
                  <Text>
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
                  <Text>3) Ensure all insulation Tape is neatly applied.</Text>
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
                  <Text>
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
                  <Text>
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
                  <Text>
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
                  <Text>
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
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 18, offset: 1 }}>
          <Text>
            C) Check wiring of Line Voltage Components, EX: CC Heaters, Dual
            SSR, EC Fans, Hi-Limint Switch, Control Circuits, Motor Racks,
            Replays and Convection Blower.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 4, offset: 1 }}>
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
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 18, offset: 1 }}>
          <Text>
            D) Check the screws that hold base to cavity. Ensure they are tight
            and there are no gaps.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 4, offset: 1 }}>
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
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 18, offset: 1 }}>
          <Text>
            E) Check for loose hardware and debris on floor of the oven cabinet.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 4, offset: 1 }}>
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
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 18, offset: 1 }}>
          <Text>
            F) open both doors. ensure door switch is not bent (switch plate
            should be straight)
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 4, offset: 1 }}>
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
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 18, offset: 1 }}>
          <Text>
            G) If the thermostat wire is rubbing against power supply box, add
            tape to protect it.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 4, offset: 1 }}>
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
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 18, offset: 1 }}>
          <Text>
            H) Check that no wire are loose. if loose wires are found, tie with
            tie rod.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 4, offset: 1 }}>
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
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 18, offset: 1 }}>
          <Text>
            I) Using the OHMS function on your meter, measure and record the
            resistances between the:
          </Text>
        </Col>
        <Col xs={23}>
          <Row className={"sub-question"}>
            <Col xs={23}>
              <Row justify="space-around">
                <Col xs={23} sm={14}>
                  <Text>1) Frane and the Ground pin on the plug:</Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 18, offset: 1 }}>
          <Text>
            J) Open Fuse #1, #2 and check rating, should be Class CC ATMR 12.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 4, offset: 1 }}>
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
