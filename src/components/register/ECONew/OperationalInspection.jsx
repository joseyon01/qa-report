import React from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Typography,
  Radio,
  Button,
  message,
} from "antd";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
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

export const OperationalInspection = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [valueC, setValueC] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueG, setValueG] = useState(null);
  const [valueJ, setValueJ] = useState(null);
  const [valueK, setValueK] = useState(null);
  const [valueTf, setValueTf] = useState(null);
  const [valueTi, setValueTi] = useState(null);
  const [valueTo, setValueTo] = useState(null);
  const [textC, setTextC] = useState("default");
  const [textD, setTextD] = useState("default");
  const [textF, setTextF] = useState("default");
  const [textG, setTextG] = useState("default");
  const [textJ, setTextJ] = useState("default");
  const [textK, setTextK] = useState("default");

  const onChangeC = (e) => {
    setTextC("default");
    setValueC(e.target.value);
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
  const onChangeK = (e) => {
    setTextK("default");
    setValueK(e.target.value);
  };

  const onChangeTf = (e) => setValueTf(e.target.value);
  const onChangeTi = (e) => setValueTi(e.target.value);

  async function onClickF(
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
    OPERATIONAL_K
  ) {
    setButtonDisabled(true);
    setLoading(true);
    await setDoc(doc(db, "OperationalInspection", `${props.serial}`), {
      OPERATIONAL_A_I: OPERATIONAL_A_I,
      OPERATIONAL_A_II: OPERATIONAL_A_II,
      OPERATIONAL_A_III: OPERATIONAL_A_III,
      OPERATIONAL_A_IV: OPERATIONAL_A_IV,
      OPERATIONAL_A_V: OPERATIONAL_A_V,
      OPERATIONAL_B_I_I: OPERATIONAL_B_I_I,
      OPERATIONAL_B_I_II: OPERATIONAL_B_I_II,
      OPERATIONAL_B_II_I: OPERATIONAL_B_II_I,
      OPERATIONAL_C: OPERATIONAL_C,
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
      OPERATIONAL_I_III: OPERATIONAL_I_III,
      OPERATIONAL_NOTE: OPERATIONAL_NOTE,
      OPERATIONAL_J: OPERATIONAL_J,
      OPERATIONAL_OPENING: OPERATIONAL_OPENING,
      OPERATIONAL_CLOSING: OPERATIONAL_CLOSING,
      OPERATIONAL_K: OPERATIONAL_K,
    });
    await setDoc(
      doc(db, "Excel", `${props.serial}`),
      {
        voltage: OPERATIONAL_D_II,
        amps: OPERATIONAL_H_IV,
        powerOutput: OPERATIONAL_H_VI,
        sageFrimware: "--",
        phoniexFrimware: "--",
        notes: OPERATIONAL_NOTE,
        actionTaken: "--",
      },
      { merge: true }
    );
    setLoading(false);
  }
  function onFinishFailed() {
    if (valueC == null) {
      setTextC("danger");
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
    if (valueK == null) {
      setTextK("danger");
    }
    message.error("Complete all the fields");
  }
  function addOperational(values) {
    const OPERATIONAL_A_I = values.OPERATIONAL_A_I;
    const OPERATIONAL_A_II = values.OPERATIONAL_A_II;
    const OPERATIONAL_A_III = values.OPERATIONAL_A_III;
    const OPERATIONAL_A_IV = values.OPERATIONAL_A_IV;
    const OPERATIONAL_A_V = values.OPERATIONAL_A_V;
    const OPERATIONAL_B_I_I = values.OPERATIONAL_B_I_I;
    const OPERATIONAL_B_I_II = values.OPERATIONAL_B_I_II;
    const OPERATIONAL_B_II_I = values.OPERATIONAL_B_II_I;
    const OPERATIONAL_C = valueC;
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
    const OPERATIONAL_I_III = values.OPERATIONAL_I_III;
    const OPERATIONAL_NOTE = values.OPERATIONAL_NOTE
      ? values.OPERATIONAL_NOTE
      : "";
    const OPERATIONAL_J = valueJ;
    const OPERATIONAL_OPENING = values.OPERATIONAL_OPENING;
    const OPERATIONAL_CLOSING = values.OPERATIONAL_CLOSING;
    const OPERATIONAL_K = valueK;

    if (
      OPERATIONAL_C == null ||
      OPERATIONAL_D_IV == null ||
      OPERATIONAL_F == null ||
      OPERATIONAL_G == null ||
      OPERATIONAL_J == null ||
      OPERATIONAL_K == null
    ) {
      if (OPERATIONAL_C == null) {
        setTextC("danger");
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
      if (OPERATIONAL_K == null) {
        setTextK("danger");
      }
      message.error("Complete all the fields");
    } else {
      onClickF(
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
        OPERATIONAL_K
      );
      message.success("Operational Inspection Completed");
      props.setState("3");
      window.scrollTo(0, 0);
    }
  }

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
        <Col xs={22} sm={23}>
          <Text>
            A) Using the OHMS function on your meter Measure and Record the
            resistance between the:
          </Text>
        </Col>
        <Col span={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row>
                <Col xs={23}>
                  <Text>i) Frame and the Ground Pin on the plug:</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_A_I}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input style={{ width: 150 }} size="small" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={23}>
                  <Text>ii) L1 & Ground:</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_A_II}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input style={{ width: 150 }} size="small" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={23}>
                  <Text>iii) L2 & Ground:</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_A_III}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input style={{ width: 150 }} size="small" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={23}>
                  <Text>iv) L3 & Ground:</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_A_IV}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input style={{ width: 150 }} size="small" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={23}>
                  <Text>V) Neutral (N) & Ground:</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_A_V}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
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
        <Col xs={22} sm={23}>
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
                <Col xs={23}>
                  <Text>i) HV XFMR #1 Primary</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_B_I_I}
                    label="terminals 1 & 2"
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
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
                  >
                    <Input style={{ width: 150 }} size="small" type="number" />
                  </Form.Item>
                </Col>
                <Col xs={23}>
                  <Text>ii) HV XFMR #1 Primary</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_B_II_I}
                    label="terminal #4 & frame"
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
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
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textC}>
            C) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR
            12 and ATMR 15 respectively
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_C} onChange={onChangeC}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={22} sm={23}>
          <Text>D) Plug in the oven, as the Display Boots, check for:</Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="center">
                <Col xs={23}>
                  <Text>i) Displayed software version</Text>
                </Col>
                <Col xs={23}>
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
                <Col xs={23}>
                  <Text>ii) Display voltage</Text>
                </Col>
                <Col xs={23}>
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
                <Col xs={23}>
                  <Text>iii) Serial Number</Text>
                </Col>
                <Col xs={23}>
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
                <Col xs={23}>
                  <Row justify="space-between">
                    <Col xs={20} sm={18}>
                      <Text type={textD}>
                        iv) DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?
                      </Text>
                    </Col>
                    <Col xs={{ span: 20, offset: 1 }} sm={5}>
                      <Radio.Group name={OPERATIONAL_D_IV} onChange={onChangeD}>
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
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text>
            E) Set your meter to Volts AC: Measure the AC voltage at EMI Filter
            Terminals.
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
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
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textF}>
            F) Enter the "Test Mode", make sure "Faults" are cleared and then
            run "Self Test". Pass all test?
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_F} onChange={onChangeF}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textG}>
            G) Using an insulated screwdriver check the EC Cooling Fan by
            bridging between the terminals on the "Close on Rise" Switch, which
            controls the EC cooling fan.
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_G} onChange={onChangeG}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 20, offset: 1 }} sm={{ span: 23, offset: 0 }}>
          <Text>
            H) Water Rise Test: Place Oven into the "UNIT" mode, and then scroll
            down to "Microwave" on the first screen.
          </Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="center">
                <Col xs={23}>
                  <Text>
                    i) Using Gradiated Cylinder measure 1 liter +/- 5ml of
                    water. While in graduated cylinder, measure and record the
                    Temp, T<sub>initial</sub>
                  </Text>
                </Col>
                <Col xs={23}>
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
                <Col xs={23}>
                  <Text>
                    ii) inmidiately pur water into 1000 ml vessel, place into
                    Cook Chamber and close the door.
                  </Text>
                </Col>
                <Col xs={23}>
                  <Text>
                    iii) Press "ENTER". The microwave will run for 45 seconds.
                  </Text>
                </Col>
                <Col xs={23}>
                  <Text>
                    iv) While test is running, Verify the current is 9.2amps +/-
                    2 amps (208V)
                    <br />
                    (10.64amps +/- 1.6 amps for the unit tested with 230V)
                  </Text>
                </Col>
                <Col xs={23}>
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
                <Col xs={23}>
                  <Text>
                    v) When the timer reaches Zero, immediately measure T
                    <sub>final</sub> while stirring to blend water as to have
                    one temperature throughout vessel. T<sub>FINAL</sub>=
                  </Text>
                </Col>
                <Col xs={23}>
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
                <Col xs={23}>
                  <Text>
                    vi) The power output will show for 5 seconds. Record
                    microwave oven output power
                  </Text>
                </Col>
                <Col xs={7}>
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
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 23, offset: 0 }}>
          <Text>
            I) Push "BACK" until display reads: "OVEN OFF" and then push the
            "OVEN ON" smart key and let the oven warm to its preset temperature.
          </Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="center">
                <Col xs={23}>
                  <Text>i) Record time oven starts warm up:</Text>
                </Col>
                <Col xs={23}>
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
                <Col xs={23}>
                  <Text>
                    ii) Once the oven reaches the OPERATIONAL Temperature, the
                    menu is displayed, record the displayed menu
                  </Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_I_II}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      size="small"
                      style={{ width: 150 }}
                      placeholder=""
                    />
                  </Form.Item>
                </Col>
                <Col xs={23}>
                  <Text>iii) And then record the time</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_I_III}
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
                <Col xs={23}>
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
        <Col xs={{ span: 23, offset: 0 }} sm={23}>
          <Text>NOTES</Text>
          <Form.Item name={OPERATIONAL_NOTE}>
            <TextArea autoSize={{ minRows: 3, maxRows: 4 }} maxLength={320} />
          </Form.Item>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textJ}>
            J) Is there actuator rotation if door is closed slowly?
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_J} onChange={onChangeJ}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row>
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
              >
                <Input type="text" size="small" style={{ width: 150 }} />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textK}>
            Are Switch arms .020" to .030" from switch body and is the Actuactor
            at 87° +/- 2°?
          </Text>
        </Col>
        <Col xxs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_K} onChange={onChangeK}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
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
