import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Typography,
  Radio,
  Button,
  Modal,
  message,
} from "antd";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
const db = getFirestore();
const { Text, Title } = Typography;
const { TextArea } = Input;
import {
  OPERATIONAL_A_I,
  OPERATIONAL_A_II,
  OPERATIONAL_A_III,
  OPERATIONAL_A_IV,
  OPERATIONAL_A_V,
  OPERATIONAL_B_I_I,
  OPERATIONAL_B_I_II,
  OPERATIONAL_B_II_I,
  OPERATIONAL_C,
  OPERATIONAL_D_I,
  OPERATIONAL_D_II,
  OPERATIONAL_D_III,
  OPERATIONAL_D_IV,
  OPERATIONAL_E,
  OPERATIONAL_F,
  OPERATIONAL_G,
  OPERATIONAL_H_I,
  OPERATIONAL_H_IV,
  OPERATIONAL_H_V,
  OPERATIONAL_H_VI,
  OPERATIONAL_I_I,
  OPERATIONAL_I_II,
  OPERATIONAL_I_III,
  OPERATIONAL_NOTE,
  OPERATIONAL_J,
  OPERATIONAL_OPENING,
  OPERATIONAL_CLOSING,
  OPERATIONAL_K,
} from "../../constants/ConstOperational";

export const EditOperationalInspection = (props) => {
  const [form] = Form.useForm();
  const ovenSerial = props.serial;
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [operational_A_I, setOperational_A_I] = useState(null);
  const [operational_A_II, setOperational_A_II] = useState(null);
  const [operational_A_III, setOperational_A_III] = useState(null);
  const [operational_A_IV, setOperational_A_IV] = useState(null);
  const [operational_A_V, setOperational_A_V] = useState(null);
  const [operational_B_I_I, setOperational_B_I_I] = useState(null);
  const [operational_B_I_II, setOperational_B_I_II] = useState(null);
  const [operational_B_II_I, setOperational_B_II_I] = useState(null);
  const [valueC, setValueC] = useState(null);
  const [operational_D_I, setOperational_D_I] = useState(null);
  const [operational_D_II, setOperational_D_II] = useState(null);
  const [operational_D_III, setOperational_D_III] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [operational_E, setOperational_E] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueG, setValueG] = useState(null);
  const [operational_H_I, setOperational_H_I] = useState(null);
  const [operational_H_IV, setOperational_H_IV] = useState(null);
  const [operational_H_V, setOperational_H_V] = useState(null);
  const [operational_H_VI, setOperational_H_VI] = useState(null);
  const [operational_I_I, setOperational_I_I] = useState(null);
  const [operational_I_II, setOperational_I_II] = useState(null);
  const [operational_I_III, setOperational_I_III] = useState(null);
  const [operational_NOTE, setOperational_NOTE] = useState(null);
  const [valueJ, setValueJ] = useState(null);
  const [operational_OPENING, setOperational_OPENING] = useState(null);
  const [operational_CLOSING, setOperational_CLOSING] = useState(null);
  const [valueK, setValueK] = useState(null);
  const onChange_A_I = (e) => setOperational_A_I(e.target.value);
  const onChange_A_II = (e) => setOperational_A_II(e.target.value);
  const onChange_A_III = (e) => setOperational_A_III(e.target.value);
  const onChange_A_IV = (e) => setOperational_A_IV(e.target.value);
  const onChange_A_V = (e) => setOperational_A_V(e.target.value);
  const onChange_B_I_I = (e) => setOperational_B_I_I(e.target.value);
  const onChange_B_I_II = (e) => setOperational_B_I_II(e.target.value);
  const onChange_B_II_I = (e) => setOperational_B_II_I(e.target.value);
  const onChangeC = (e) => setValueC(e.target.value);
  const onChange_D_I = (e) => setOperational_D_I(e.target.value);
  const onChange_D_II = (e) => setOperational_D_II(e.target.value);
  const onChange_D_III = (e) => setOperational_D_III(e.target.value);
  const onChangeD = (e) => setValueD(e.target.value);
  const onChange_E = (e) => setOperational_E(e.target.value);
  const onChangeF = (e) => setValueF(e.target.value);
  const onChangeG = (e) => setValueG(e.target.value);
  const onChange_H_I = (e) => setOperational_H_I(e.target.value);
  const onChange_H_IV = (e) => setOperational_H_IV(e.target.value);
  const onChange_H_V = (e) => setOperational_H_V(e.target.value);
  const onChange_H_VI = (e) => setOperational_H_VI(e.target.value);
  const onChange_I_I = (e) => setOperational_I_I(e.target.value);
  const onChange_I_II = (e) => setOperational_I_II(e.target.value);
  const onChange_I_III = (e) => setOperational_I_III(e.target.value);
  const onChange_NOTE = (e) => setOperational_NOTE(e.target.value);
  const onChangeJ = (e) => setValueJ(e.target.value);
  const onChange_OPENING = (e) => setOperational_OPENING(e.target.value);
  const onChange_CLOSING = (e) => setOperational_CLOSING(e.target.value);
  const onChangeK = (e) => setValueK(e.target.value);

  const addOperational = async (values) => {
    setButtonDisabled(true);
    setLoading(true);
    let result = (operational_H_V - operational_H_I) * (4187 / 30);
    result = Math.round(result);
    values.OPERATIONAL_H_VI = result;
    {
      values.OPERATIONAL_NOTE == undefined
        ? (values.OPERATIONAL_NOTE = "")
        : "";
    }
    await setDoc(doc(db, "OperationalInspection", `${props.serial}`), {
      OPERATIONAL_A_I: values.OPERATIONAL_A_I,
      OPERATIONAL_A_II: values.OPERATIONAL_A_II,
      OPERATIONAL_A_III: values.OPERATIONAL_A_III,
      OPERATIONAL_A_IV: values.OPERATIONAL_A_IV,
      OPERATIONAL_A_V: values.OPERATIONAL_A_V,
      OPERATIONAL_B_I_I: values.OPERATIONAL_B_I_I,
      OPERATIONAL_B_I_II: values.OPERATIONAL_B_I_II,
      OPERATIONAL_B_II_I: values.OPERATIONAL_B_II_I,
      OPERATIONAL_C: values.OPERATIONAL_C,
      OPERATIONAL_D_I: values.OPERATIONAL_D_I,
      OPERATIONAL_D_II: values.OPERATIONAL_D_II,
      OPERATIONAL_D_III: values.OPERATIONAL_D_III,
      OPERATIONAL_D_IV: values.OPERATIONAL_D_IV,
      OPERATIONAL_E: values.OPERATIONAL_E,
      OPERATIONAL_F: values.OPERATIONAL_F,
      OPERATIONAL_G: values.OPERATIONAL_G,
      OPERATIONAL_H_I: values.OPERATIONAL_H_I,
      OPERATIONAL_H_IV: values.OPERATIONAL_H_IV,
      OPERATIONAL_H_V: values.OPERATIONAL_H_V,
      OPERATIONAL_H_VI: values.OPERATIONAL_H_VI,
      OPERATIONAL_I_I: values.OPERATIONAL_I_I,
      OPERATIONAL_I_II: values.OPERATIONAL_I_II,
      OPERATIONAL_I_III: values.OPERATIONAL_I_III,
      OPERATIONAL_NOTE: values.OPERATIONAL_NOTE,
      OPERATIONAL_J: values.OPERATIONAL_J,
      OPERATIONAL_OPENING: values.OPERATIONAL_OPENING,
      OPERATIONAL_CLOSING: values.OPERATIONAL_CLOSING,
      OPERATIONAL_K: values.OPERATIONAL_K,
    })
      .then(async () => {
        await setDoc(
          doc(db, "Excel", `${props.serial}`),
          {
            softwareVersion: values.OPERATIONAL_D_I,
            voltage: values.OPERATIONAL_D_II,
            amps: values.OPERATIONAL_H_IV,
            powerOutput: values.OPERATIONAL_H_VI,
            notes: values.OPERATIONAL_NOTE,
            actionTaken: "--",
          },
          { merge: true }
        )
          .then(() => {
            setLoading(false);
            message.success("Operational Inspection Completed");
            window.scrollTo(0, 0);
          })
          .catch((error) => {
            message.error("Error Sending the data");
            setButtonDisabled(false);
            setLoading(false);
          });
      })
      .catch((error) => {
        message.error("Error Sending the data");
        setButtonDisabled(false);
        setLoading(false);
      });
  };
  const getDataOven = async () => {
    try {
      const docRef = doc(db, "OperationalInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setOperational_A_I(data?.OPERATIONAL_A_I);
      setOperational_A_II(data?.OPERATIONAL_A_II);
      setOperational_A_III(data?.OPERATIONAL_A_III);
      setOperational_A_IV(data?.OPERATIONAL_A_IV);
      setOperational_A_V(data?.OPERATIONAL_A_V);
      setOperational_B_I_I(data?.OPERATIONAL_B_I_I);
      setOperational_B_I_II(data?.OPERATIONAL_B_I_II);
      setOperational_B_II_I(data?.OPERATIONAL_B_II_I);
      setValueC(data?.OPERATIONAL_C);
      setOperational_D_I(data?.OPERATIONAL_D_I);
      setOperational_D_II(data?.OPERATIONAL_D_II);
      setOperational_D_III(data?.OPERATIONAL_D_III);
      setValueD(data?.OPERATIONAL_D_IV);
      setOperational_E(data?.OPERATIONAL_E);
      setValueF(data?.OPERATIONAL_F);
      setValueG(data?.OPERATIONAL_G);
      setOperational_H_I(data?.OPERATIONAL_H_I);
      setOperational_H_IV(data?.OPERATIONAL_H_IV);
      setOperational_H_V(data?.OPERATIONAL_H_V);
      setOperational_H_VI(data?.OPERATIONAL_H_VI);
      setOperational_I_I(data?.OPERATIONAL_I_I);
      setOperational_I_II(data?.OPERATIONAL_I_II);
      setOperational_I_III(data?.OPERATIONAL_I_III);
      setOperational_NOTE(data?.OPERATIONAL_NOTE);
      setValueJ(data?.OPERATIONAL_J);
      setOperational_OPENING(data?.OPERATIONAL_OPENING);
      setOperational_CLOSING(data?.OPERATIONAL_CLOSING);
      setValueK(data?.OPERATIONAL_K);
    } catch (error) {
      console.error("error", error);
    }
  };
  form.setFieldsValue({
    OPERATIONAL_A_I: operational_A_I,
    OPERATIONAL_A_II: operational_A_II,
    OPERATIONAL_A_III: operational_A_III,
    OPERATIONAL_A_IV: operational_A_IV,
    OPERATIONAL_A_V: operational_A_V,
    OPERATIONAL_B_I_I: operational_B_I_I,
    OPERATIONAL_B_I_II: operational_B_I_II,
    OPERATIONAL_B_II_I: operational_B_II_I,
    OPERATIONAL_C: valueC,
    OPERATIONAL_D_I: operational_D_I,
    OPERATIONAL_D_II: operational_D_II,
    OPERATIONAL_D_III: props.serial,
    OPERATIONAL_D_IV: valueD,
    OPERATIONAL_E: operational_E,
    OPERATIONAL_F: valueF,
    OPERATIONAL_G: valueG,
    OPERATIONAL_H_I: operational_H_I,
    OPERATIONAL_H_IV: operational_H_IV,
    OPERATIONAL_H_V: operational_H_V,
    OPERATIONAL_H_VI: operational_H_VI,
    OPERATIONAL_I_I: operational_I_I,
    OPERATIONAL_I_II: operational_I_II,
    OPERATIONAL_I_III: operational_I_III,
    OPERATIONAL_NOTE: operational_NOTE,
    OPERATIONAL_J: valueJ,
    OPERATIONAL_OPENING: operational_OPENING,
    OPERATIONAL_CLOSING: operational_CLOSING,
    OPERATIONAL_K: valueK,
  });
  const onFinishFailed = (errorInfo) => {
    message.error("Finish the inspection!");
  };
  useEffect(() => {
    getDataOven();
  }, []);
  return (
    <Form
      form={form}
      name="ECONewOperationalInspection"
      initialValues={{ remember: true }}
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
      onFinish={addOperational}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row justify="center">
        <Col xs={20} align="center">
          <strong>
            2) OPERATIONAL INSPECTION: DO NOT APPLY POWER TO OVEN.
          </strong>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22}>
          <Text>
            A) Using the OHMS function on your meter Measure and Record the
            resistance between the:
          </Text>
        </Col>
        <Col span={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="center">
                <Col xs={22}>
                  <Text>i) Frame and the Ground Pin on the plug:</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_A_I}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_A_I}
                  >
                    <Input style={{ width: 150 }} size="small" />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>ii) L1 & Ground:</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_A_II}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_A_II}
                  >
                    <Input style={{ width: 150 }} size="small" />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>iii) L2 & Ground:</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_A_III}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_A_III}
                  >
                    <Input style={{ width: 150 }} size="small" />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>iv) L3 & Ground:</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_A_IV}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_A_IV}
                  >
                    <Input style={{ width: 150 }} size="small" />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>V) Neutral (N) & Ground:</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_A_V}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_A_V}
                  >
                    <Input style={{ width: 150 }} size="small" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22}>
          <Text>
            B) Remove the fastons from the Primary and the secondary of the of
            Voltage and the Filament XFMRs. Measure and Record the isolated
            resistance of the:
          </Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="center">
                <Col xs={22}>
                  <Text>i) HV XFMR #1 Primary</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_B_I_I}
                    label="terminals 1 & 2"
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_B_I_I}
                  >
                    <Input style={{ width: 150 }} size="small" type="number" />
                  </Form.Item>
                  <Form.Item
                    name={OPERATIONAL_B_I_II}
                    label="terminals 1 & 3"
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_B_I_II}
                  >
                    <Input style={{ width: 150 }} size="small" type="number" />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>ii) HV XFMR #1 Primary</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_B_II_I}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_B_II_I}
                    label="terminal #4 & frame"
                  >
                    <Input style={{ width: 150 }} size="small" type="number" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text>
            C) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR
            12 and ATMR 15 respectively
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Form.Item
            name={OPERATIONAL_C}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
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
      <Row justify="center">
        <Col xs={22}>
          <Text>D) Plug in the oven, as the Display Boots, check for:</Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="center">
                <Col xs={22}>
                  <Text>i) Displayed software version</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_D_I}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_D_I}
                  >
                    <Input
                      placeholder="Version"
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>ii) Display voltage</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_D_II}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_D_II}
                  >
                    <Input
                      placeholder="VAC"
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>iii) Serial Number</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_D_III}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_D_III}
                  >
                    <Input
                      placeholder="S/N"
                      style={{ width: 150 }}
                      size="small"
                      type="text"
                      disabled
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>
                    iv) DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?
                  </Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_D_IV}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
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
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text>
            E) Set your meter to Volts AC: Measure the AC voltage at EMI Filter
            Terminals.
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Form.Item
            name={OPERATIONAL_E}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
            onChange={onChange_E}
          >
            <Input
              type="number"
              size="small"
              style={{ width: 150 }}
              placeholder="VAC"
            />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text>
            F) Enter the "Test Mode", make sure "Faults" are cleared and then
            run "Self Test". Pass all test?
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Form.Item
            name={OPERATIONAL_F}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
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
      <Row justify="center">
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text>
            G) Using an insulated screwdriver check the EC Cooling Fan by
            bridging between the terminals on the "Close on Rise" Switch, which
            controls the EC cooling fan.
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Form.Item
            name={OPERATIONAL_G}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
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
      <Row justify="center">
        <Col xs={22}>
          <Text>
            H) Water Rise Test: Place Oven into the "UNIT" mode, and then scroll
            down to "Microwave" on the first screen.
          </Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="center">
                <Col xs={22}>
                  <Text>
                    i) Using Gradiated Cylinder measure 1 liter +/- 5ml of
                    water. While in graduated cylinder, measure and record the
                    Temp, T<sub>initial</sub>
                  </Text>
                </Col>
                <Col xs={22}>
                  <Text>enter T inicial via Keypad</Text>
                  <Form.Item
                    name={OPERATIONAL_H_I}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_H_I}
                  >
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      placeholder="°C"
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>
                    ii) inmidiately pur water into 1000 ml vessel, place into
                    Cook Chamber and close the door.
                  </Text>
                </Col>
                <Col xs={22}>
                  <Text>
                    iii) Press "ENTER". The microwave will run for 45 seconds.
                  </Text>
                </Col>
                <Col xs={22}>
                  <Text>
                    iv) While test is running, Verify the current is 9.2amps +/-
                    2 amps (208V)
                    <br />
                    (10.64amps +/- 1.6 amps for the unit tested with 230V)
                  </Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_H_IV}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_H_IV}
                  >
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      placeholder="AMPS"
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>
                    v) When the timer reaches Zero, immediately measure T
                    <sub>final</sub> while stirring to blend water as to have
                    one temperature throughout vessel. T<sub>FINAL</sub>=
                  </Text>
                </Col>
                <Col xs={22}>
                  <Text>enter T final via Keypad</Text>
                  <Form.Item name={OPERATIONAL_H_V} onChange={onChange_H_V}>
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      placeholder="°C"
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>
                    vi) The power output will show for 5 seconds. Record
                    microwave oven output power
                  </Text>
                </Col>
                <Col xs={10}>
                  <Form.Item
                    name={OPERATIONAL_H_VI}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      size="small"
                      placeholder={operational_H_VI ? operational_H_VI : "W"}
                      style={{ width: 100 }}
                      disabled
                    />
                  </Form.Item>
                </Col>
                <Col xs={5}>
                  <Button
                    size="small"
                    onClick={() => {
                      let result =
                        (operational_H_V - operational_H_I) * (4187 / 30);
                      result = Math.round(result);
                      setOperational_H_VI(result);
                    }}
                  >
                    calc
                  </Button>
                </Col>
                <Col xs={22}>
                  <Text type="danger">
                    Output Power must be {">="} 400/650 W. But it's more than
                    650W, repeat this test.
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22}>
          <Text>
            I) Push "BACK" until display reads: "OVEN OFF" and then push the
            "OVEN ON" smart key and let the oven warm to its preset temperature.
          </Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="center">
                <Col xs={22}>
                  <Text>i) Record time oven starts warm up:</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_I_I}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_I_I}
                  >
                    <Input type="time" size="small" style={{ width: 150 }} />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>
                    ii) Once the oven reaches the OPERATIONAL Temperature, the
                    menu is displayed, record the displayed menu
                  </Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_I_II}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_I_II}
                  >
                    <Input
                      type="text"
                      size="small"
                      style={{ width: 150 }}
                      placeholder=""
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>iii) And then record the time</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_I_III}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_I_III}
                  >
                    <Input type="time" size="small" style={{ width: 150 }} />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>
                    This time should be 15 minutes or less! Let Oven "heat soak"
                    for 1 hour
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={22}>
          <Text>NOTES</Text>
          <Form.Item name={OPERATIONAL_NOTE} onChange={onChange_NOTE}>
            <TextArea autoSize={{ minRows: 3, maxRows: 4 }} maxLength={320} />
          </Form.Item>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text>J) Is there actuator rotation if door is closed slowly?</Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Form.Item
            name={OPERATIONAL_J}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
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
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Text>
                Slowly opening the Door, the order of the indicators are
              </Text>
            </Col>
            <Col xs={23}>
              <Form.Item
                name={OPERATIONAL_OPENING}
                rules={[
                  {
                    required: true,
                    message: "Finish the inspection before submitting it",
                  },
                ]}
                onChange={onChange_OPENING}
              >
                <Input type="text" size="small" style={{ width: 150 }} />
              </Form.Item>
            </Col>
            <Col xs={23}>
              <Text>
                Slowly closing the Door, the order of the indicators are
              </Text>
            </Col>
            <Col xs={23}>
              <Form.Item
                name={OPERATIONAL_CLOSING}
                rules={[
                  {
                    required: true,
                    message: "Finish the inspection before submitting it",
                  },
                ]}
                onChange={onChange_CLOSING}
              >
                <Input type="text" size="small" style={{ width: 150 }} />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text>
            Are Switch arms .020" to .030" from switch body and is the Actuactor
            at 87° +/- 2°?
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Form.Item
            name={OPERATIONAL_K}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeK}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={20} sm={18}>
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
        </Col>
      </Row>
    </Form>
  );
};
