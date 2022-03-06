import { Form, Input, Row, Col, Typography, Radio, Button, Modal } from "antd";
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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
  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);
  const showModal2 = () => setModalVisible(true);

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
      initialValues={{
        remember: true,
      }}
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
        <Col xs={22} sm={24}>
          <Text>
            A) Using the OHMS function on your meter:{" "}
            <strong>Measure and Record the resistance between:</strong>
          </Text>
        </Col>
        <Col span={24}>
          <Row className="sub-question">
            <Col xs={20} sm={10}>
              <Text>i) Frame and the Ground Pin on the plug:</Text>
            </Col>
            <Col xs={10} sm={6}>
              <Form.Item
                name={OPERATIONAL_A_I}
                value={operational_A_I}
                onChange={onChange_A_I}
              >
                <Input
                  type="number"
                  style={{ width: "100%" }}
                  size="small"
                  required
                />
              </Form.Item>
            </Col>
          </Row>
          <Row className="sub-question">
            <Col xs={20} sm={10}>
              <Text>ii) L1 & Ground: </Text>
            </Col>
            <Col xs={10} sm={6}>
              <Form.Item
                name={OPERATIONAL_A_II}
                value={operational_A_II}
                onChange={onChange_A_II}
              >
                <Input
                  type="number"
                  style={{ width: "100%" }}
                  size="small"
                  required
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22} sm={20}>
          <Text>
            B) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR
            12, and ATMR 20 respectively.
          </Text>
        </Col>
        <Col xs={22} sm={4}>
          <Radio.Group
            required
            name={OPERATIONAL_B_I_I}
            onChange={onChangeB}
            value={valueB}
          >
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={22} sm={24}>
          <Text>C) Plug in the oven, as the Display Boots, check for:</Text>
        </Col>
        <Col xs={24}>
          <Row className="sub-question">
            <Col xs={24}>
              <Row>
                <Col xs={24}>
                  <Text>i) Displayed software version</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_C_I}
                    value={operational_C_I}
                    onChange={onChange_C_I}
                  >
                    <Input
                      placeholder="Version"
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Text>ii) Display voltage</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_C_II}
                    value={operational_C_II}
                    onChange={onChange_C_II}
                  >
                    <Input
                      placeholder="VAC"
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Text>iii) Serial Number</Text>
                </Col>
                <Col xs={24}>
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
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Row justify="space-between">
                    <Col xs={20} sm={16}>
                      <Text>
                        iv) DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?
                      </Text>
                    </Col>
                    <Col xs={20} sm={5}>
                      <Radio.Group
                        required
                        name={OPERATIONAL_C_IV}
                        onChange={onChangeC}
                        value={valueC}
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
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>
            D) Set your meter to Volts AC: Measure the AC voltage at EMI Filter
            Terminals.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item
            name={OPERATIONAL_D_I}
            value={operational_D_I}
            onChange={onChange_D_I}
          >
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
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>
            E) Enter "Test Mode". Make sure "Faults" are Cleared and then run
            "Self Test". Pass all test?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_E} onChange={onChangeE} value={valueE}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>
            F) Using an insulated screwdriver check the EC Cooling Fan by
            bringing between the terminals on the "Close on Rise" Switch, which
            controls the EC cooling fan.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_F} onChange={onChangeF} value={valueF}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={{ span: 22, offset: 1 }} sm={24}>
          <Text>
            G) Water Rise Test: Place Oven into the "UNIT" mode, and then scroll
            down to <strong>microwave</strong> on the first screen.
          </Text>
        </Col>
        <Col xs={24}>
          <Row className="sub-question">
            <Col xs={24}>
              <Row>
                <Col xs={24}>
                  <Text>
                    i) Using Gradiated Cylinder measure 1 liter +/- 5ml of
                    water. While in graduated cylinder, measure and record the
                    Temp, T<sub>initial</sub>
                  </Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_G_I}
                    label="enter T inicial via Keypad"
                    onChange={onChange_G_I}
                    value={operational_G_I}
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
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>
                    ii) inmidiately pur water into 1000 ml vessel, place into
                    Cook Chamber and close the door.
                  </Text>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={24}>
                  <Text>
                    iii) Press "ENTER". The microwave will run for 30 seconds.
                  </Text>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={20} sm={16}>
                  <Text>
                    iv) While test is running, Verify the current is 16amps. +/-
                    2 amps. (208V)
                    <br />
                    (14amps. +/- 1.6amps. for the unit tested with 240V)
                  </Text>
                </Col>
                <Col xs={20} sm={3}>
                  <Form.Item
                    name={OPERATIONAL_G_IV}
                    onChange={onChange_G_IV}
                    value={operational_G_IV}
                  >
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      placeholder="AMPS"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>
                    v) When the timer reaches Zero, immediately measure T
                    <sub>final</sub> while stirring to blend water as to have
                    one temperature throughout vessel. T<sub>FINAL</sub>=
                  </Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_G_V}
                    label="enter T final via Keypad"
                    onChange={onChange_G_V}
                    value={operational_G_V}
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
              </Row>
              <Row>
                <Col xs={23} sm={16}>
                  <Text>
                    vi) The power output will show for 5 seconds. Record
                    microwave oven output power
                  </Text>
                </Col>
                <Col xs={10} sm={4}>
                  <Form.Item
                    name={OPERATIONAL_G_VI}
                    onChange={onChange_G_VI}
                    value={operational_G_VI}
                  >
                    <Input
                      type="number"
                      size="small"
                      placeholder={operational_G_VI ? operational_G_VI : "W"}
                      style={{ width: 100 }}
                      disabled
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={5} sm={3}>
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
              </Row>
              <Row justify="center">
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
      <Row>
        <Col xs={{ span: 20, offset: 1 }} sm={24}>
          <Text>
            H) Push "BACK" until display reads: "OVEN OFF" and then push the
            "OVEN ON" smart key and let the oven warm to its preset temperature.
          </Text>
        </Col>
        <Col xs={24}>
          <Row className="sub-question">
            <Col xs={24}>
              <Row>
                <Col xs={24}>
                  <Text>i) Record time oven starts warm up:</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_H_I}
                    onChange={onChange_H_I}
                    value={operational_H_I}
                  >
                    <Input
                      type="time"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>
                    ii) Once the oven reaches the OPERATIONAL Temperature, the
                    menu is displayed
                  </Text>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>iii) Record the displayed menu</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_H_II}
                    onChange={onChange_H_II}
                    value={operational_H_II}
                  >
                    <Input size="small" style={{ width: 150 }} required />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>iv) Record the time</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_H_III}
                    onChange={onChange_H_III}
                    value={operational_H_III}
                  >
                    <Input
                      type="time"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
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

      <Row>
        <Col xs={{ span: 20, offset: 1 }} sm={3}>
          <Text>NOTES</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={20}>
          <Form.Item
            name={OPERATIONAL_NOTE}
            onChange={onChange_NOTE}
            value={operational_NOTE}
          >
            <TextArea autoSize={{ minRows: 3, maxRows: 4 }} />
          </Form.Item>
        </Col>
      </Row>

      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>I) Is there actuator rotation if door is closed slowly?</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group
            name={OPERATIONAL_I_I}
            onChange={onChangeI}
            value={valueI}
          >
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Row className="sub-question">
            <Col xs={24}>
              <Text>
                Slowly opening the Door, the order of the indicators are
              </Text>
            </Col>
            <Col xs={24}>
              <Form.Item
                name={OPERATIONAL_OPENING}
                onChange={onChange_OPENING}
                value={operational_OPENING}
              >
                <Input
                  type="text"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Text>
                Slowly closing the Door, the order of the indicators are
              </Text>
            </Col>
            <Col xs={24}>
              <Form.Item
                name={OPERATIONAL_CLOSING}
                onChange={onChange_CLOSING}
                value={operational_CLOSING}
              >
                <Input
                  type="text"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
            <Col xs={20} sm={16}>
              <Text>
                Are Switch arms .020" to .030" from Switch body and is the
                actuator at 87° +/- 2°
              </Text>
            </Col>
            <Col xs={20} sm={5}>
              <Radio.Group
                name={OPERATIONAL_I_II}
                onChange={onChangeJ}
                value={valueJ}
              >
                <Radio value={true}>ACC</Radio>
                <Radio value={false}>NO ACC</Radio>
              </Radio.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} sm={24}>
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
