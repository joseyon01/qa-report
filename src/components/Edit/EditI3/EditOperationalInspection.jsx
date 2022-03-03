import React, { useEffect } from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Typography,
  Radio,
  Divider,
  Button,
  Modal,
  message,
} from "antd";

import QaReportFirebase from "../../../../Credentials";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { useState } from "react";
const firestore = getFirestore(QaReportFirebase);
const auth = getAuth(QaReportFirebase);
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

export const EditOperationalInspection = (props) => {
  const [form] = Form.useForm();
  const ovenSerial = props.serial;
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [operational_A_I, setOperational_A_I] = useState(null);
  const [valueB, setValueB] = useState(null);
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
  const [operational_NOTE, setOperational_NOTE] = useState(null);
  const [valueJ, setValueJ] = useState(null);
  const [operational_OPENING, setOperational_OPENING] = useState(null);
  const [operational_CLOSING, setOperational_CLOSING] = useState(null);
  const [valueTo, setValueTo] = useState(null);
  const onChangeB = (e) => {
    setValueB(e.target.value);
  };
  const onChangeG = (e) => {
    setValueG(e.target.value);
  };
  const onChangeD = (e) => {
    setValueD(e.target.value);
  };
  const onChangeF = (e) => {
    setValueF(e.target.value);
  };
  const onChangeJ = (e) => {
    setValueJ(e.target.value);
  };
  const onChange_A_I = (e) => {
    setOperational_A_I(e.target.value);
  };
  const onChange_B_I_I = (e) => {
    setOperational_B_I_I(e.target.value);
  };

  const onChange_D_I = (e) => {
    setOperational_D_I(e.target.value);
  };
  const onChange_D_II = (e) => {
    setOperational_D_II(e.target.value);
  };
  const onChange_D_III = (e) => {
    setOperational_D_III(e.target.value);
  };
  const onChange_E = (e) => {
    setOperational_E(e.target.value);
  };
  const onChange_H_I = (e) => {
    setOperational_H_I(e.target.value);
  };
  const onChange_H_IV = (e) => {
    setOperational_H_IV(e.target.value);
  };
  const onChange_H_V = (e) => {
    setOperational_H_V(e.target.value);
  };
  const onChange_H_VI = (e) => {
    setOperational_H_VI(e.target.value);
  };
  const onChange_I_I = (e) => {
    setOperational_I_I(e.target.value);
  };
  const onChange_I_II = (e) => {
    setOperational_I_II(e.target.value);
  };
  const onChange_I_III = (e) => {
    setOperational_I_III(e.target.value);
  };
  const onChange_NOTE = (e) => {
    setOperational_NOTE(e.target.value);
  };
  const onChange_OPENING = (e) => {
    setOperational_OPENING(e.target.value);
  };
  const onChange_CLOSING = (e) => {
    setOperational_CLOSING(e.target.value);
  };
  function placeHolderValue(a, b) {
    let result = (b - a) * (4187 / 30);
    console.log(result);
    setValueTo(result);
  }
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const showModal2 = () => {
    setModalVisible(true);
  };

  const handleOk2 = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
  };

  const handleCancel2 = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
  };
  const [loading, setLoading] = useState(false);

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
    const docRef = await setDoc(
      doc(db, "OperationalInspection", `${props.serial}`),
      {
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
      }
    );
    setLoading(false);
  }

  async function addOperational(values) {
    const OPERATIONAL_A_I = values?.OPERATIONAL_A_I;
    const OPERATIONAL_B_I_I = valueB;
    const OPERATIONAL_D_I = values?.OPERATIONAL_D_I;
    const OPERATIONAL_D_II = values?.OPERATIONAL_D_II;
    const OPERATIONAL_D_III = values?.OPERATIONAL_D_III;
    const OPERATIONAL_D_IV = valueD;
    const OPERATIONAL_E = values?.OPERATIONAL_E;
    const OPERATIONAL_F = valueF;
    const OPERATIONAL_G = valueG;
    const OPERATIONAL_H_I = values?.OPERATIONAL_H_I;
    const OPERATIONAL_H_IV = values?.OPERATIONAL_H_IV;
    const OPERATIONAL_H_V = values?.OPERATIONAL_H_V;

    const value = (a, b) => {
      let result = (b - a) * (4187 / 30);
      result = Math.round(result);
      return result;
    };

    const OPERATIONAL_H_VI = value(
      values?.OPERATIONAL_H_I,
      values?.OPERATIONAL_H_V
    );
    const OPERATIONAL_I_I = values?.OPERATIONAL_I_I;
    const OPERATIONAL_I_II = values?.OPERATIONAL_I_II;
    const OPERATIONAL_NOTE = values?.OPERATIONAL_NOTE;
    const OPERATIONAL_J = valueJ;
    const OPERATIONAL_OPENING = values?.OPERATIONAL_OPENING;
    const OPERATIONAL_CLOSING = values?.OPERATIONAL_CLOSING;

    if (
      OPERATIONAL_B_I_I == null ||
      OPERATIONAL_D_IV == null ||
      OPERATIONAL_F == null ||
      OPERATIONAL_G == null ||
      OPERATIONAL_J == null
    ) {
      showModal();
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
      showModal2();
    }
  }

  const getDataOven = async () => {
    try {
      const docRef = doc(db, "OperationalInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setOperational_A_I(data?.OPERATIONAL_A_I);
      setValueB(data?.OPERATIONAL_B_I_I);
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
      setOperational_NOTE(data?.OPERATIONAL_NOTE);
      setValueJ(data?.OPERATIONAL_J);
      setOperational_OPENING(data?.OPERATIONAL_OPENING);
      setOperational_CLOSING(data?.OPERATIONAL_CLOSING);
      message.success("Load complete");
    } catch (error) {
      console.error("error", error);
    }
  };
  form.setFieldsValue({
    OPERATIONAL_A_I: operational_A_I,
    OPERATIONAL_B_I_I: valueB,
    OPERATIONAL_D_I: operational_D_I,
    OPERATIONAL_D_II: operational_D_II,
    OPERATIONAL_D_III: operational_D_III,
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
    OPERATIONAL_NOTE: operational_NOTE,
    OPERATIONAL_J: valueJ,
    OPERATIONAL_OPENING: operational_OPENING,
    OPERATIONAL_CLOSING: operational_CLOSING,
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
      <Divider orientation="rigth">
        2) OPERATIONAL INSPECTION: DO NOT APPLY POWER TO OVEN.
      </Divider>
      <Row>
        <Col span={24}>
          <Text>
            A) Using the OHMS function on your meter:{" "}
            <strong>Measure and Record the resistance between:</strong>
          </Text>
        </Col>
        <Col span={24}>
          <Row className="sub-question">
            <Col xs={10}>
              <Text>i) Frame and the Ground Pin on the plug:</Text>
            </Col>
            <Col xs={4}>
              <Form.Item
                name={OPERATIONAL_A_I}
                value={operational_A_I}
                onChange={onChange_A_I}
              >
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
      <Row>
        <Col xs={16}>
          <Text>
            B) Remove the fastons from the Primary and the secondary of the of
            Voltage and the Filament XFMRs. Measure and Record the isolated
            resistance of the:
          </Text>
        </Col>
        <Col xs={4}>
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
      <Divider orientation="rigth">
        3) <strong>APPLY POWER</strong>
      </Divider>
      <Row>
        <Col xs={24}>
          <Text>D) Plug in the oven, as the Display Boots, check for:</Text>
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
                    name={OPERATIONAL_D_I}
                    onChange={onChange_D_I}
                    value={operational_D_I}
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
                    name={OPERATIONAL_D_II}
                    onChange={onChange_D_II}
                    value={operational_D_II}
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
                    name={OPERATIONAL_D_III}
                    onChange={onChange_D_III}
                    value={operational_D_III}
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
                    <Col xs={18}>
                      <Text>
                        iv) DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?
                      </Text>
                    </Col>
                    <Col xs={4}>
                      <Radio.Group
                        required
                        name={OPERATIONAL_D_IV}
                        onChange={onChangeD}
                        value={valueD}
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
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            E) Set your meter to Volts AC: Measure the AC voltage at EMI Filter
            Terminals.
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item
            name={OPERATIONAL_E}
            onChange={onChange_E}
            value={operational_E}
          >
            <Input type="number" size="small" placeholder="VAC" required />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            F) Press info Button: Test Mode (9428). Enter Fault Mode, Make sure
            all faults are cleared and run self-test. Pass all Tests?
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name={OPERATIONAL_F} onChange={onChangeF} value={valueF}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            G) "Close on Rise" Switch, which controls the EC cooling fan.
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name={OPERATIONAL_G} onChange={onChangeG} value={valueG}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={24}>
          <Text>
            H) Water Rise Test: Place Oven into the Manufacture mode, and then
            scroll down to <strong>MW PWR TEST</strong> on the first screen.
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
                    name={OPERATIONAL_H_I}
                    label="enter T inicial via Keypad"
                    onChange={onChange_H_I}
                    value={operational_H_I}
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
                <Col xs={16}>
                  <Text>
                    iv) While test is running, Verify the current is 16amps. +/-
                    2 amps. (208V)
                    <br />
                    (14amps. +/- 1.6amps. for the unit tested with 240V)
                  </Text>
                </Col>
                <Col xs={3}>
                  <Form.Item
                    name={OPERATIONAL_H_IV}
                    onChange={onChange_H_IV}
                    value={operational_H_IV}
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
                    name={OPERATIONAL_H_V}
                    label="enter T final via Keypad"
                    onChange={onChange_H_V}
                    value={operational_H_V}
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
              <Row align="center">
                <Col xs={16}>
                  <Text>
                    vi) The power output will show for 5 seconds. Record
                    microwave oven output power
                  </Text>
                </Col>
                <Col xs={4}>
                  <Form.Item
                    name={OPERATIONAL_H_VI}
                    onChange={onChange_H_VI}
                    value={operational_H_VI}
                  >
                    <Input
                      type="number"
                      size="small"
                      placeholder={"W"}
                      style={{ width: 100 }}
                      disabled
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={3}>
                  <Button
                    size="small"
                    onClick={() => {
                      let result =
                        (operational_H_V - operational_H_I) * (4187 / 30);
                      result = Math.round(result);
                      console.log(result);
                      setOperational_H_VI(result);
                    }}
                  >
                    calc
                  </Button>
                </Col>
              </Row>
              <Row justify="center">
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
      <Row>
        <Col xs={24}>
          <Text>
            I) Push "BACK" until display reads: "OVEN OFF" and then push the
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
                    name={OPERATIONAL_I_I}
                    onChange={onChange_I_I}
                    value={operational_I_I}
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
                  <Text>iii) Record the time</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_I_II}
                    onChange={onChange_I_II}
                    value={operational_I_II}
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
        <Col xs={3}>
          <Text>NOTES</Text>
        </Col>
        <Col xs={20}>
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
        <Col xs={16}>
          <Text>J) Is there actuator rotation if door is closed slowly?</Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name={OPERATIONAL_J} onChange={onChangeJ} value={valueJ}>
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
          </Row>
        </Col>
      </Row>
      <Row justify="end">
        <Col xs={24}>
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
              style={{ backgroundColor: "#E74C3C" }}
              onCancel={handleCancel}
            >
              <Title level={3}>Error..!</Title>
              <Text>All fields are required</Text>
            </Modal>
            <Modal
              visible={modalVisible}
              onOk={handleCancel2}
              style={{ backgroundColor: "#2ECC71" }}
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
