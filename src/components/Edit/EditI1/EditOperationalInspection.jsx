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
import React, { useState, useEffect } from "react";
const db = getFirestore();
const { Text, Title } = Typography;
const { TextArea } = Input;
import {
  OPERATIONAL_A_I,
  OPERATIONAL_A_II,
  OPERATIONAL_B_I_I,
  OPERATIONAL_C_I,
  OPERATIONAL_C_II,
  OPERATIONAL_C_III,
  OPERATIONAL_C_IV,
  OPERATIONAL_D_I,
  OPERATIONAL_E,
  OPERATIONAL_F,
  OPERATIONAL_G_I,
  OPERATIONAL_G_IV,
  OPERATIONAL_G_V,
  OPERATIONAL_G_VI,
  OPERATIONAL_H_I,
  OPERATIONAL_H_II,
  OPERATIONAL_H_III,
  OPERATIONAL_NOTE,
  OPERATIONAL_I_I,
  OPERATIONAL_OPENING,
  OPERATIONAL_CLOSING,
  OPERATIONAL_I_II,
} from "../../constants/ConstOperational";

export const EditOperationalInspection = (props) => {
  const [form] = Form.useForm();
  const ovenSerial = props.serial;
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [operational_A_I, setOperational_A_I] = useState(null);
  const [operational_A_II, setOperational_A_II] = useState(null);
  const [valueB, setValueB] = useState(null);
  const [operational_C_I, setOperational_C_I] = useState(null);
  const [operational_C_II, setOperational_C_II] = useState(null);
  const [operational_C_III, setOperational_C_III] = useState(null);
  const [valueC, setValueC] = useState(null);
  const [operational_D_I, setOperational_D_I] = useState(null);
  const [valueE, setValueE] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [operational_G_I, setOperational_G_I] = useState(null);
  const [operational_G_IV, setOperational_G_IV] = useState(null);
  const [operational_G_V, setOperational_G_V] = useState(null);
  const [operational_G_VI, setOperational_G_VI] = useState(null);
  const [operational_H_I, setOperational_H_I] = useState(null);
  const [operational_H_II, setOperational_H_II] = useState(null);
  const [operational_H_III, setOperational_H_III] = useState(null);
  const [operational_NOTE, setOperational_NOTE] = useState(null);
  const [valueI, setValueI] = useState(null);
  const [operational_OPENING, setOperational_OPENING] = useState(null);
  const [operational_CLOSING, setOperational_CLOSING] = useState(null);
  const [valueJ, setValueJ] = useState(null);

  const onChange_A_I = (e) => setOperational_A_I(e.target.value);
  const onChange_A_II = (e) => setOperational_A_II(e.target.value);
  const onChangeB = (e) => setValueB(e.target.value);
  const onChange_C_I = (e) => setOperational_C_I(e.target.value);
  const onChange_C_II = (e) => setOperational_C_II(e.target.value);
  const onChange_C_III = (e) => setOperational_C_III(e.target.value);
  const onChangeC = (e) => setValueC(e.target.value);
  const onChange_D_I = (e) => setOperational_D_I(e.target.value);
  const onChangeE = (e) => setValueE(e.target.value);
  const onChangeF = (e) => setValueF(e.target.value);
  const onChange_G_I = (e) => setOperational_G_I(e.target.value);
  const onChange_G_IV = (e) => setOperational_G_IV(e.target.value);
  const onChange_G_V = (e) => setOperational_G_V(e.target.value);
  const onChange_G_VI = (e) => setOperational_G_VI(e.target.value);
  const onChange_H_I = (e) => setOperational_H_I(e.target.value);
  const onChange_H_II = (e) => setOperational_H_II(e.target.value);
  const onChange_H_III = (e) => setOperational_H_III(e.target.value);
  const onChange_NOTE = (e) => setOperational_NOTE(e.target.value);
  const onChangeI = (e) => setValueI(e.target.value);
  const onChange_OPENING = (e) => setOperational_OPENING(e.target.value);
  const onChange_CLOSING = (e) => setOperational_CLOSING(e.target.value);
  const onChangeJ = (e) => setValueJ(e.target.value);

  const addOperational = async (values) => {
    setButtonDisabled(true);
    setLoading(true);
    let result = (operational_G_V - operational_G_I) * (4187 / 30);
    result = Math.round(result);
    values.OPERATIONAL_G_VI = result;
    {
      values.OPERATIONAL_NOTE == undefined
        ? (values.OPERATIONAL_NOTE = "")
        : "";
    }
    await setDoc(doc(db, "OperationalInspection", `${props.serial}`), {
      OPERATIONAL_A_I: values.OPERATIONAL_A_I,
      OPERATIONAL_A_II: values.OPERATIONAL_A_II,
      OPERATIONAL_B_I_I: values.OPERATIONAL_B_I_I,
      OPERATIONAL_C_I: values.OPERATIONAL_C_I,
      OPERATIONAL_C_II: values.OPERATIONAL_C_II,
      OPERATIONAL_C_III: values.OPERATIONAL_C_III,
      OPERATIONAL_C_IV: values.OPERATIONAL_C_IV,
      OPERATIONAL_D_I: values.OPERATIONAL_D_I,
      OPERATIONAL_E: values.OPERATIONAL_E,
      OPERATIONAL_F: values.OPERATIONAL_F,
      OPERATIONAL_G_I: values.OPERATIONAL_G_I,
      OPERATIONAL_G_IV: values.OPERATIONAL_G_IV,
      OPERATIONAL_G_V: values.OPERATIONAL_G_V,
      OPERATIONAL_G_VI: values.OPERATIONAL_G_VI,
      OPERATIONAL_H_I: values.OPERATIONAL_H_I,
      OPERATIONAL_H_II: values.OPERATIONAL_H_II,
      OPERATIONAL_H_III: values.OPERATIONAL_H_III,
      OPERATIONAL_NOTE: values.OPERATIONAL_NOTE,
      OPERATIONAL_I_I: values.OPERATIONAL_I_I,
      OPERATIONAL_OPENING: values.OPERATIONAL_OPENING,
      OPERATIONAL_CLOSING: values.OPERATIONAL_CLOSING,
      OPERATIONAL_I_II: values.OPERATIONAL_I_II,
    })
      .then(async () => {
        await setDoc(
          doc(db, "Excel", `${props.serial}`),
          {
            softwareVersion: values.OPERATIONAL_C_I,
            voltage: values.OPERATIONAL_C_II,
            amps: values.OPERATIONAL_G_IV,
            powerOutput: values.OPERATIONAL_G_VI,
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
      setValueB(data?.OPERATIONAL_B_I_I);
      setOperational_C_I(data?.OPERATIONAL_C_I);
      setOperational_C_II(data?.OPERATIONAL_C_II);
      setOperational_C_III(data?.OPERATIONAL_C_III);
      setValueC(data?.OPERATIONAL_C_IV);
      setOperational_D_I(data?.OPERATIONAL_D_I);
      setValueE(data?.OPERATIONAL_E);
      setValueF(data?.OPERATIONAL_F);
      setOperational_G_I(data?.OPERATIONAL_G_I);
      setOperational_G_IV(data?.OPERATIONAL_G_IV);
      setOperational_G_V(data?.OPERATIONAL_G_V);
      setOperational_G_VI(data?.OPERATIONAL_G_VI);
      setOperational_H_I(data?.OPERATIONAL_H_I);
      setOperational_H_II(data?.OPERATIONAL_H_II);
      setOperational_H_III(data?.OPERATIONAL_H_III);
      setOperational_NOTE(data?.OPERATIONAL_NOTE);
      setValueI(data?.OPERATIONAL_I_I);
      setOperational_OPENING(data?.OPERATIONAL_OPENING);
      setOperational_CLOSING(data?.OPERATIONAL_CLOSING);
      setValueJ(data?.OPERATIONAL_I_II);
    } catch (error) {
      console.error("error", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Finish the inspection!");
  };

  form.setFieldsValue({
    OPERATIONAL_A_I: operational_A_I,
    OPERATIONAL_A_II: operational_A_II,
    OPERATIONAL_B_I_I: valueB,
    OPERATIONAL_C_I: operational_C_I,
    OPERATIONAL_C_II: operational_C_II,
    OPERATIONAL_C_III: operational_C_III,
    OPERATIONAL_C_IV: valueC,
    OPERATIONAL_D_I: operational_D_I,
    OPERATIONAL_E: valueE,
    OPERATIONAL_F: valueF,
    OPERATIONAL_G_I: operational_G_I,
    OPERATIONAL_G_IV: operational_G_IV,
    OPERATIONAL_G_V: operational_G_V,
    OPERATIONAL_G_VI: operational_G_VI,
    OPERATIONAL_H_I: operational_H_I,
    OPERATIONAL_H_II: operational_H_II,
    OPERATIONAL_H_III: operational_H_III,
    OPERATIONAL_NOTE: operational_NOTE,
    OPERATIONAL_I_I: valueI,
    OPERATIONAL_OPENING: operational_OPENING,
    OPERATIONAL_CLOSING: operational_CLOSING,
    OPERATIONAL_I_II: valueJ,
  });
  useEffect(() => {
    getDataOven();
  }, []);

  return (
    <Form
      form={form}
      name="I1OperationalInspection"
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
            A) Using the OHMS function on your meter:{" "}
            <strong>Measure and Record the resistance between:</strong>
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
                    <Input type="number" style={{ width: 150 }} size="small" />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>ii) L1 & Ground: </Text>
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
                    <Input type="number" style={{ width: 150 }} size="small" />
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
            B) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR
            12, and ATMR 20 respectively.
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Form.Item
            name={OPERATIONAL_B_I_I}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
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
      <Row justify="center">
        <Col xs={22}>
          <Text>C) Plug in the oven, as the Display Boots, check for:</Text>
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
                    name={OPERATIONAL_C_I}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_C_I}
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
                    name={OPERATIONAL_C_II}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                    onChange={onChange_C_II}
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
                    name={OPERATIONAL_C_III}
                    value={operational_C_III}
                    onChange={onChange_C_III}
                  >
                    <Input
                      placeholder="S/N"
                      style={{ width: 150 }}
                      size="small"
                      type="text"
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
                    name={OPERATIONAL_C_IV}
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
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text>
            D) Set your meter to Volts AC: Measure the AC voltage at EMI Filter
            Terminals.
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
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
            E) Enter "Test Mode". Make sure "Faults" are Cleared and then run
            "Self Test". Pass all test?
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
          >
            <Radio.Group onChange={onChangeE}>
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
            F) Using an insulated screwdriver check the EC Cooling Fan by
            bringing between the terminals on the "Close on Rise" Switch, which
            controls the EC cooling fan.
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
        <Col xs={22}>
          <Text>
            G) Water Rise Test: Place Oven into the "UNIT" mode, and then scroll
            down to <strong>microwave</strong> on the first screen.
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
                  <Form.Item
                    name={OPERATIONAL_G_I}
                    label="enter T inicial via Keypad"
                    onChange={onChange_G_I}
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
                    iii) Press "ENTER". The microwave will run for 30 seconds.
                  </Text>
                </Col>
                <Col xs={22}>
                  <Text>
                    iv) While test is running, Verify the current is 16amps. +/-
                    2 amps. (208V)
                    <br />
                    (14amps. +/- 1.6amps. for the unit tested with 240V)
                  </Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_G_IV}
                    onChange={onChange_G_IV}
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
                  <Form.Item
                    name={OPERATIONAL_G_V}
                    label="enter T final via Keypad"
                    onChange={onChange_G_V}
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
                  <Form.Item name={OPERATIONAL_G_VI} onChange={onChange_G_VI}>
                    <Input
                      type="number"
                      size="small"
                      placeholder={operational_G_VI ? operational_G_VI : "W"}
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
                        (operational_G_V - operational_G_I) * (4187 / 30);
                      result = Math.round(result);
                      setOperational_G_VI(result);
                    }}
                  >
                    calc
                  </Button>
                </Col>
                <Col xs={22}>
                  <Text type="danger">
                    Output Power must be {">="} 1600W. But if it's more than
                    2000W repeat this test.
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
            H) Push "BACK" until display reads: "OVEN OFF" and then push the
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
                    name={OPERATIONAL_H_I}
                    onChange={onChange_H_I}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input type="time" size="small" style={{ width: 150 }} />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>
                    ii) Once the oven reaches the OPERATIONAL Temperature, the
                    menu is displayed
                  </Text>
                </Col>
                <Col xs={22}>
                  <Text>iii) Record the displayed menu</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_H_II}
                    onChange={onChange_H_II}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input size="small" style={{ width: 150 }} />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>iv) Record the time</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_H_III}
                    onChange={onChange_H_III}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input type="time" size="small" style={{ width: 150 }} />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>
                    This time should be 15 minutes or less!
                    <br />
                    Let Oven "heat soak" for 1 hour
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
          <Text>I) Is there actuator rotation if door is closed slowly?</Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Form.Item
            name={OPERATIONAL_I_I}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeI}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={23}>
          <Row justify="center">
            <Col xs={22}>
              <Text>
                Slowly opening the Door, the order of the indicators are
              </Text>
            </Col>
            <Col xs={22}>
              <Form.Item
                name={OPERATIONAL_OPENING}
                onChange={onChange_OPENING}
                rules={[
                  {
                    required: true,
                    message: "Finish the inspection before submitting it",
                  },
                ]}
              >
                <Input type="text" size="small" style={{ width: 150 }} />
              </Form.Item>
            </Col>
            <Col xs={22}>
              <Text>
                Slowly closing the Door, the order of the indicators are
              </Text>
            </Col>
            <Col xs={22}>
              <Form.Item
                name={OPERATIONAL_CLOSING}
                onChange={onChange_CLOSING}
                rules={[
                  {
                    required: true,
                    message: "Finish the inspection before submitting it",
                  },
                ]}
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
            Are Switch arms .020" to .030" from Switch body and is the actuator
            at 87° +/- 2°
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Form.Item
            name={OPERATIONAL_I_II}
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
