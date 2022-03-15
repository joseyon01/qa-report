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

export const OperationalInspection = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [valueB, setValueB] = useState(null);
  const [valueC, setValueC] = useState(null);
  const [valueE, setValueE] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueI, setValueI] = useState(null);
  const [valueJ, setValueJ] = useState(null);
  const [valueTf, setValueTf] = useState(null);
  const [valueTi, setValueTi] = useState(null);
  const [valueTo, setValueTo] = useState(null);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);
  const showModal2 = () => setModalVisible(true);
  const onChangeB = (e) => setValueB(e.target.value);
  const onChangeC = (e) => setValueC(e.target.value);
  const onChangeE = (e) => setValueE(e.target.value);
  const onChangeF = (e) => setValueF(e.target.value);
  const onChangeI = (e) => setValueI(e.target.value);
  const onChangeJ = (e) => setValueJ(e.target.value);
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
    OPERATIONAL_I_II
  ) {
    setButtonDisabled(true);
    setLoading(true);
    const docRef = await setDoc(
      doc(db, "OperationalInspection", `${props.serial}`),
      {
        OPERATIONAL_A_I: OPERATIONAL_A_I,
        OPERATIONAL_A_II: OPERATIONAL_A_II,
        OPERATIONAL_B_I_I: OPERATIONAL_B_I_I,
        OPERATIONAL_C_I: OPERATIONAL_C_I,
        OPERATIONAL_C_II: OPERATIONAL_C_II,
        OPERATIONAL_C_III: OPERATIONAL_C_III,
        OPERATIONAL_C_IV: OPERATIONAL_C_IV,
        OPERATIONAL_D_I: OPERATIONAL_D_I,
        OPERATIONAL_E: OPERATIONAL_E,
        OPERATIONAL_F: OPERATIONAL_F,
        OPERATIONAL_G_I: OPERATIONAL_G_I,
        OPERATIONAL_G_IV: OPERATIONAL_G_IV,
        OPERATIONAL_G_V: OPERATIONAL_G_V,
        OPERATIONAL_G_VI: OPERATIONAL_G_VI,
        OPERATIONAL_H_I: OPERATIONAL_H_I,
        OPERATIONAL_H_II: OPERATIONAL_H_II,
        OPERATIONAL_H_III: OPERATIONAL_H_III,
        OPERATIONAL_NOTE: OPERATIONAL_NOTE,
        OPERATIONAL_I_I: OPERATIONAL_I_I,
        OPERATIONAL_OPENING: OPERATIONAL_OPENING,
        OPERATIONAL_CLOSING: OPERATIONAL_CLOSING,
        OPERATIONAL_I_II: OPERATIONAL_I_II,
      }
    );
    setLoading(false);
  }

  function addOperational(values) {
    const OPERATIONAL_A_I = values.OPERATIONAL_A_I;
    const OPERATIONAL_A_II = values.OPERATIONAL_A_II;
    const OPERATIONAL_B_I_I = valueB;
    const OPERATIONAL_C_I = values.OPERATIONAL_C_I;
    const OPERATIONAL_C_II = values.OPERATIONAL_C_II;
    const OPERATIONAL_C_III = values.OPERATIONAL_C_III;
    const OPERATIONAL_C_IV = valueC;
    const OPERATIONAL_D_I = values.OPERATIONAL_D_I;
    const OPERATIONAL_E = valueE;
    const OPERATIONAL_F = valueF;
    const OPERATIONAL_G_I = values.OPERATIONAL_G_I;
    const OPERATIONAL_G_IV = values.OPERATIONAL_G_IV;
    const OPERATIONAL_G_V = values.OPERATIONAL_G_V;

    const value = (a, b) => {
      let result = (b - a) * (4187 / 30);
      result = Math.round(result);
      return result;
    };

    const OPERATIONAL_G_VI = value(
      values.OPERATIONAL_G_I,
      values.OPERATIONAL_G_V
    );
    const OPERATIONAL_H_I = values.OPERATIONAL_H_I;
    const OPERATIONAL_H_II = values.OPERATIONAL_H_II;
    const OPERATIONAL_H_III = values.OPERATIONAL_H_III;
    const OPERATIONAL_NOTE = values.OPERATIONAL_NOTE;
    const OPERATIONAL_I_I = valueI;
    const OPERATIONAL_OPENING = values.OPERATIONAL_OPENING;
    const OPERATIONAL_CLOSING = values.OPERATIONAL_CLOSING;
    const OPERATIONAL_I_II = valueJ;

    if (
      OPERATIONAL_B_I_I == null ||
      OPERATIONAL_C_IV == null ||
      OPERATIONAL_E == null ||
      OPERATIONAL_F == null ||
      OPERATIONAL_I_I == null ||
      OPERATIONAL_I_II == null
    ) {
      showModal();
    } else {
      onClickF(
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
        OPERATIONAL_I_II
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
                  <Form.Item name={OPERATIONAL_A_I}>
                    <Input
                      type="number"
                      style={{ width: 150 }}
                      size="small"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>ii) L1 & Ground: </Text>
                </Col>
                <Col xs={22}>
                  <Form.Item name={OPERATIONAL_A_II}>
                    <Input
                      type="number"
                      style={{ width: 150 }}
                      size="small"
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
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text>
            B) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR
            12, and ATMR 20 respectively.
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
                  <Form.Item name={OPERATIONAL_C_I}>
                    <Input
                      placeholder="Version"
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>ii) Display voltage</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item name={OPERATIONAL_C_II}>
                    <Input
                      placeholder="VAC"
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>iii) Serial Number</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item name={OPERATIONAL_C_III}>
                    <Input
                      placeholder="S/N"
                      style={{ width: 150 }}
                      size="small"
                      type="text"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Col xs={22}>
                    <Text>
                      iv) DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?
                    </Text>
                  </Col>
                  <Col xs={22}>
                    <Radio.Group
                      required
                      name={OPERATIONAL_C_IV}
                      onChange={onChangeC}
                    >
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text>
            D) Set your meter to Volts AC: Measure the AC voltage at EMI Filter
            Terminals.
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Form.Item name={OPERATIONAL_D_I}>
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
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text>
            E) Enter "Test Mode". Make sure "Faults" are Cleared and then run
            "Self Test". Pass all test?
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Radio.Group name={OPERATIONAL_E} onChange={onChangeE}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
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
          <Radio.Group name={OPERATIONAL_F} onChange={onChangeF}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 22 }}>
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
                  <Text>enter T inicial via Keypad</Text>
                  <Form.Item
                    name={OPERATIONAL_G_I}
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
                  <Form.Item name={OPERATIONAL_G_IV}>
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      placeholder="AMPS"
                      required
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
                    name={OPERATIONAL_G_V}
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
                <Col xs={22}>
                  <Text>
                    vi) The power output will show for 5 seconds. Record
                    microwave oven output power
                  </Text>
                </Col>
                <Col xs={10}>
                  <Form.Item name={OPERATIONAL_G_VI}>
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
                  <Form.Item name={OPERATIONAL_H_I}>
                    <Input
                      type="time"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
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
                  <Form.Item name={OPERATIONAL_H_II}>
                    <Input size="small" style={{ width: 150 }} required />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>iv) Record the time</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item name={OPERATIONAL_H_III}>
                    <Input
                      type="time"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
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
          <Text>I) Is there actuator rotation if door is closed slowly?</Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Radio.Group name={OPERATIONAL_I_I} onChange={onChangeI}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Row justify="center">
            <Col xs={22}>
              <Text>
                Slowly opening the Door, the order of the indicators are
              </Text>
            </Col>
            <Col xs={22}>
              <Form.Item name={OPERATIONAL_OPENING}>
                <Input
                  type="text"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
            <Col xs={22}>
              <Text>
                Slowly closing the Door, the order of the indicators are
              </Text>
            </Col>
            <Col xs={22}>
              <Form.Item name={OPERATIONAL_CLOSING}>
                <Input
                  type="text"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
            <Col xs={22}>
              <Text>
                Are Switch arms .020" to .030" from Switch body and is the
                actuator at 87° +/- 2°
              </Text>
            </Col>
            <Col xs={22}>
              <Radio.Group name={OPERATIONAL_I_II} onChange={onChangeJ}>
                <Radio value={true}>ACC</Radio>
                <Radio value={false}>NO ACC</Radio>
              </Radio.Group>
            </Col>
          </Row>
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
