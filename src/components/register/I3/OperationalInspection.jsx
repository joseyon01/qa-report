import React from "react";
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
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
const db = getFirestore();
const { Text, Title } = Typography;
const { TextArea } = Input;
import {
  OPERATIONAL_A_I,
  OPERATIONAL_B_I_I,
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
  OPERATIONAL_NOTE,
  OPERATIONAL_J,
  OPERATIONAL_OPENING,
  OPERATIONAL_CLOSING,
} from "../../constants/ConstOperational";

export const OperationalInspection = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [valueB, setValueB] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueG, setValueG] = useState(null);
  const [valueJ, setValueJ] = useState(null);
  const [valueTf, setValueTf] = useState(null);
  const [valueTi, setValueTi] = useState(null);
  const [valueTo, setValueTo] = useState(null);
  const [textB, setTextB] = useState("default");
  const [textD, setTextD] = useState("default");
  const [textF, setTextF] = useState("default");
  const [textG, setTextG] = useState("default");
  const [textJ, setTextJ] = useState("default");

  const onChangeB = (e) => {
    setTextB("default");
    setValueB(e.target.value);
  };
  const onChangeD = (e) => {
    setTextD("default");
    setValueD(e.target.value);
  };
  const onChangeF = (e) => {
    setTextF("default");
    setValueF(e.target.value);
  };
  const onChangeG = (e) => {
    setTextG("default");
    setValueG(e.target.value);
  };
  const onChangeJ = (e) => {
    setTextJ("default");
    setValueJ(e.target.value);
  };
  const onChangeTf = (e) => setValueTf(e.target.value);
  const onChangeTi = (e) => setValueTi(e.target.value);

  async function onClickF(
    OPERATIONAL_A_I,
    OPERATIONAL_B_I_I,
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
    OPERATIONAL_NOTE,
    OPERATIONAL_J,
    OPERATIONAL_OPENING,
    OPERATIONAL_CLOSING
  ) {
    setButtonDisabled(true);
    setLoading(true);
    await setDoc(doc(db, "OperationalInspection", `${props.serial}`), {
      OPERATIONAL_A_I: OPERATIONAL_A_I,
      OPERATIONAL_B_I_I: OPERATIONAL_B_I_I,
      OPERATIONAL_D_I: OPERATIONAL_D_I,
      OPERATIONAL_D_II: OPERATIONAL_D_II,
      OPERATIONAL_D_III: OPERATIONAL_D_III,
      OPERATIONAL_D_IV: OPERATIONAL_D_IV,
      OPERATIONAL_E: OPERATIONAL_E,
      OPERATIONAL_F: OPERATIONAL_F,
      OPERATIONAL_G: OPERATIONAL_G,
      OPERATIONAL_H_I: OPERATIONAL_H_I,
      OPERATIONAL_H_IV: OPERATIONAL_H_IV,
      OPERATIONAL_H_V: OPERATIONAL_H_V,
      OPERATIONAL_H_VI: OPERATIONAL_H_VI,
      OPERATIONAL_I_I: OPERATIONAL_I_I,
      OPERATIONAL_I_II: OPERATIONAL_I_II,
      OPERATIONAL_NOTE: OPERATIONAL_NOTE,
      OPERATIONAL_J: OPERATIONAL_J,
      OPERATIONAL_OPENING: OPERATIONAL_OPENING,
      OPERATIONAL_CLOSING: OPERATIONAL_CLOSING,
    });
    await setDoc(
      doc(db, "Excel", `${props.serial}`),
      {
        softwareVersion: OPERATIONAL_D_I,
        voltage: OPERATIONAL_D_II,
        amps: OPERATIONAL_H_IV,
        powerOutput: OPERATIONAL_H_VI,
        notes: OPERATIONAL_NOTE,
        actionTaken: "--",
      },
      { merge: true }
    );
    setLoading(false);
  }
  function onFinishFailed() {
    if (valueB == null) {
      setTextB("danger");
    }
    if (valueD == null) {
      setTextD("danger");
    }
    if (valueF == null) {
      setTextF("danger");
    }
    if (valueG == null) {
      setTextG("danger");
    }
    if (valueJ == null) {
      setTextJ("danger");
    }
    message.error("Complete all the fields");
  }
  function addOperational(values) {
    const OPERATIONAL_A_I = values.OPERATIONAL_A_I;
    const OPERATIONAL_B_I_I = valueB;
    const OPERATIONAL_D_I = values.OPERATIONAL_D_I;
    const OPERATIONAL_D_II = values.OPERATIONAL_D_II;
    const OPERATIONAL_D_III = values.OPERATIONAL_D_III;
    const OPERATIONAL_D_IV = valueD;
    const OPERATIONAL_E = values.OPERATIONAL_E;
    const OPERATIONAL_F = valueF;
    const OPERATIONAL_G = valueG;
    const OPERATIONAL_H_I = values.OPERATIONAL_H_I;
    const OPERATIONAL_H_IV = values.OPERATIONAL_H_IV;
    const OPERATIONAL_H_V = values.OPERATIONAL_H_V;

    const value = (a, b) => {
      let result = (b - a) * (4187 / 30);
      result = Math.round(result);
      return result;
    };

    const OPERATIONAL_H_VI = value(
      values.OPERATIONAL_H_I,
      values.OPERATIONAL_H_V
    );
    const OPERATIONAL_I_I = values.OPERATIONAL_I_I;
    const OPERATIONAL_I_II = values.OPERATIONAL_I_II;
    const OPERATIONAL_NOTE = values.OPERATIONAL_NOTE
      ? values.OPERATIONAL_NOTE
      : "";
    const OPERATIONAL_J = valueJ;
    const OPERATIONAL_OPENING = values.OPERATIONAL_OPENING;
    const OPERATIONAL_CLOSING = values.OPERATIONAL_CLOSING;

    if (
      OPERATIONAL_B_I_I == null ||
      OPERATIONAL_D_IV == null ||
      OPERATIONAL_F == null ||
      OPERATIONAL_G == null ||
      OPERATIONAL_J == null
    ) {
      if (OPERATIONAL_B_I_I == null) {
        setTextB("danger");
      }
      if (OPERATIONAL_D_IV == null) {
        setTextD("danger");
      }
      if (OPERATIONAL_F == null) {
        setTextF("danger");
      }
      if (OPERATIONAL_G == null) {
        setTextG("danger");
      }
      if (OPERATIONAL_J == null) {
        setTextJ("danger");
      }
      message.error("Complete all the fields");
    } else {
      onClickF(
        OPERATIONAL_A_I,
        OPERATIONAL_B_I_I,
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
        OPERATIONAL_NOTE,
        OPERATIONAL_J,
        OPERATIONAL_OPENING,
        OPERATIONAL_CLOSING
      );
      message.success("Operational Inspection Completed");
      props.setState("3");
      window.scrollTo(0, 0);
    }
  }

  const [form] = Form.useForm();
  return (
    <Form
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
      onFinish={addOperational}
      onFinishFailed={onFinishFailed}
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
        <Col xs={23}>
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
          <Text type={textB}>
            B) Check Fuses #1, #2 are All ATMR, Fuse #3 20AMPS
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Radio.Group required name={OPERATIONAL_B_I_I} onChange={onChangeB}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={20} align="center">
          <strong>3) APPLY POWER</strong>
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
                  <Row justify="space-between">
                    <Col xs={22}>
                      <Text type={textD}>
                        iv) DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?
                      </Text>
                    </Col>
                    <Col xs={22}>
                      <Radio.Group
                        required
                        name={OPERATIONAL_D_IV}
                        onChange={onChangeD}
                      >
                        <Radio value={true}>ACC</Radio>
                        <Radio value={false}>NO ACC</Radio>
                      </Radio.Group>
                    </Col>
                  </Row>
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
      <Row justify="center">
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textF}>
            F) Press info Button: Test Mode (9428). Enter Fault Mode, Make sure
            all faults are cleared and run self-test. Pass all Tests?
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Radio.Group name={OPERATIONAL_F} onChange={onChangeF}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textG}>
            G) "Close on Rise" Switch, which controls the EC cooling fan.
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Radio.Group name={OPERATIONAL_G} onChange={onChangeG}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={22}>
          <Text>
            H) Water Rise Test: Place Oven into the Manufacture mode, and then
            scroll down to <strong>MW PWR TEST</strong> on the first screen.
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
                    onChange={onChangeTi}
                    value={valueTi}
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
                    name={OPERATIONAL_H_IV}
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
                  <Text>enter T final via Keypad</Text>
                  <Form.Item
                    name={OPERATIONAL_H_V}
                    value={valueTf}
                    onChange={onChangeTf}
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
                  <Form.Item name={OPERATIONAL_H_VI}>
                    <Input
                      type="number"
                      size="small"
                      placeholder={valueTo ? valueTo : "W"}
                      style={{ width: 100 }}
                      disabled
                    />
                  </Form.Item>
                </Col>
                <Col xs={5}>
                  <Button
                    size="small"
                    onClick={() => {
                      let result = (valueTf - valueTi) * (4187 / 30);
                      result = Math.round(result);
                      setValueTo(result);
                    }}
                  >
                    calc
                  </Button>
                </Col>
                <Col xs={22}>
                  <Text type="danger">
                    Output Power must be {">="} 1550 W. But if it's more than
                    1770W repeat this test.
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
                  <Text>iii) Record the time</Text>
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
          <Form.Item name={OPERATIONAL_NOTE}>
            <TextArea autoSize={{ minRows: 3, maxRows: 4 }} maxLength={320} />
          </Form.Item>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textJ}>
            J) Is there actuator rotation if door is closed slowly?
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Radio.Group name={OPERATIONAL_J} onChange={onChangeJ}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />

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
