import React from "react";
import { Form, Input, Row, Col, Typography, Radio, Button, Modal } from "antd";
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [valueC, setValueC] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueG, setValueG] = useState(null);
  const [valueJ, setValueJ] = useState(null);
  const [valueK, setValueK] = useState(null);
  const [valueTf, setValueTf] = useState(null);
  const [valueTi, setValueTi] = useState(null);
  const [valueTo, setValueTo] = useState(null);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);
  const showModal2 = () => setModalVisible(true);
  const onChangeC = (e) => setValueC(e.target.value);
  const onChangeD = (e) => setValueD(e.target.value);
  const onChangeF = (e) => setValueF(e.target.value);
  const onChangeG = (e) => setValueG(e.target.value);
  const onChangeJ = (e) => setValueJ(e.target.value);
  const onChangeK = (e) => setValueK(e.target.value);

  const onChangeTf = (e) => setValueTf(e.target.value);
  const onChangeTi = (e) => setValueTi(e.target.value);

  const handleOk2 = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
  };

  const handleCancel2 = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
  };

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
    const docRef = await setDoc(
      doc(db, "OperationalInspection", `${props.serial}`),
      {
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
      }
    );
    setLoading(false);
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
    const OPERATIONAL_NOTE = values.OPERATIONAL_NOTE;
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
      showModal();
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
      showModal2();
    }
  }

  return (
    <Form
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
      onFinish={addOperational}
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
                  <Form.Item name={OPERATIONAL_A_I}>
                    <Input style={{ width: 150 }} size="small" required />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={23}>
                  <Text>ii) L1 & Ground:</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item name={OPERATIONAL_A_II}>
                    <Input style={{ width: 150 }} size="small" required />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={23}>
                  <Text>iii) L2 & Ground:</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item name={OPERATIONAL_A_III}>
                    <Input style={{ width: 150 }} size="small" required />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={23}>
                  <Text>iv) L3 & Ground:</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item name={OPERATIONAL_A_IV}>
                    <Input style={{ width: 150 }} size="small" required />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={23}>
                  <Text>V) Neutral (N) & Ground:</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item name={OPERATIONAL_A_V}>
                    <Input style={{ width: 150 }} size="small" required />
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
                  <Form.Item name={OPERATIONAL_B_I_I} label="terminals 1 & 2">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                  <Form.Item name={OPERATIONAL_B_I_II} label="terminals 1 & 3">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={23}>
                  <Text>ii) HV XFMR #1 Primary</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_B_II_I}
                    label="terminal #4 & frame"
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text>
            C) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR
            12 and ATMR 15 respectively
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group required name={OPERATIONAL_C} onChange={onChangeC}>
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
                  <Form.Item name={OPERATIONAL_D_I}>
                    <Input
                      placeholder="Version"
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={23}>
                  <Text>ii) Display voltage</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item name={OPERATIONAL_D_II}>
                    <Input
                      placeholder="VAC"
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={23}>
                  <Text>iii) Serial Number</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item name={OPERATIONAL_D_III}>
                    <Input
                      placeholder="S/N"
                      style={{ width: 150 }}
                      size="small"
                      type="text"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={23}>
                  <Row justify="space-between">
                    <Col xs={20} sm={18}>
                      <Text>
                        iv) DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?
                      </Text>
                    </Col>
                    <Col xs={{ span: 20, offset: 1 }} sm={5}>
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
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text>
            E) Set your meter to Volts AC: Measure the AC voltage at EMI Filter
            Terminals.
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Form.Item name={OPERATIONAL_E}>
            <Input
              type="number"
              size="small"
              style={{ width: 150 }}
              placeholder="VAC"
              required
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text>
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
          <Text>
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
                  >
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      placeholder="°C"
                      required
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
                  <Form.Item name={OPERATIONAL_H_IV}>
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      placeholder="AMPS"
                      required
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
                  >
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      placeholder="°C"
                      required
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
                      required
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
                  <Form.Item name={OPERATIONAL_I_I}>
                    <Input
                      type="time"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={23}>
                  <Text>
                    ii) Once the oven reaches the OPERATIONAL Temperature, the
                    menu is displayed, record the displayed menu
                  </Text>
                </Col>
                <Col xs={23}>
                  <Form.Item name={OPERATIONAL_I_II}>
                    <Input
                      type="text"
                      size="small"
                      style={{ width: 150 }}
                      placeholder=""
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={23}>
                  <Text>iii) And then record the time</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item name={OPERATIONAL_I_III}>
                    <Input
                      type="time"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
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
          <Text>J) Is there actuator rotation if door is closed slowly?</Text>
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
              <Form.Item name={OPERATIONAL_OPENING}>
                <Input
                  type="text"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
            <Col xs={23}>
              <Text>
                Slowly closing the Door, the order of the indicators are
              </Text>
            </Col>
            <Col xs={23}>
              <Form.Item name={OPERATIONAL_CLOSING}>
                <Input
                  type="text"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text>
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
            <Modal
              visible={isModalVisible}
              onOk={handleOk}
              style={{ backgroundColor: "#E74C3C", borderRadius: "1em" }}
              onCancel={handleCancel}
            >
              <Title level={3}>Error..!</Title>
              <Text>All fields are required</Text>
            </Modal>
            <Modal
              visible={modalVisible}
              onOk={handleCancel2}
              style={{ backgroundColor: "#2ECC71", borderRadius: "1em" }}
              onCancel={handleCancel2}
            >
              <Title level={3}>OK..!</Title>
              <Text>The data has been successfully stored</Text>
            </Modal>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
