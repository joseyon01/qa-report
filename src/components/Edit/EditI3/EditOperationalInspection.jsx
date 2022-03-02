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
  OPERATIONAL_B_I_II,
  OPERATIONAL_B_II_I,
  OPERATIONAL_B_II_II,
  OPERATIONAL_B_III,
  OPERATIONAL_B_IV,
  OPERATIONAL_B_V_I,
  OPERATIONAL_B_V_II,
  OPERATIONAL_B_VI_I,
  OPERATIONAL_B_VI_II,
  OPERATIONAL_B_VII,
  OPERATIONAL_B_VIII,
  OPERATIONAL_C,
  OPERATIONAL_D_I,
  OPERATIONAL_D_II,
  OPERATIONAL_D_III,
  OPERATIONAL_D_IV,
  OPERATIONAL_E,
  OPERATIONAL_F,
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
} from "../../constants/ConstOperational";

export const EditOperationalInspection = (props) => {
  const ovenSerial = props.serial;
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [operational_A_I, setOperational_A_I] = useState(null);
  const [operational_B_I_I, setOperational_B_I_I] = useState(null);
  const [operational_B_I_II, setOperational_B_I_II] = useState(null);
  const [operational_B_II_I, setOperational_B_II_I] = useState(null);
  const [operational_B_II_II, setOperational_B_II_II] = useState(null);
  const [operational_B_III, setOperational_B_III] = useState(null);
  const [operational_B_IV, setOperational_B_IV] = useState(null);
  const [operational_B_V_I, setOperational_B_V_I] = useState(null);
  const [operational_B_V_II, setOperational_B_V_II] = useState(null);
  const [operational_B_VI_I, setOperational_B_VI_I] = useState(null);
  const [operational_B_VI_II, setOperational_B_VI_II] = useState(null);
  const [operational_B_VII, setOperational_B_VII] = useState(null);
  const [operational_B_VIII, setOperational_B_VIII] = useState(null);
  const [operational_D_I, setOperational_D_I] = useState(null);
  const [operational_D_II, setOperational_D_II] = useState(null);
  const [operational_D_III, setOperational_D_III] = useState(null);
  const [operational_E, setOperational_E] = useState(null);
  const [operational_H_I, setOperational_H_I] = useState(null);
  const [operational_H_IV, setOperational_H_IV] = useState(null);
  const [operational_H_V, setOperational_H_V] = useState(null);
  const [operational_H_VI, setOperational_H_VI] = useState(null);
  const [operational_I_I, setOperational_I_I] = useState(null);
  const [operational_I_II, setOperational_I_II] = useState(null);
  const [operational_I_III, setOperational_I_III] = useState(null);
  const [operational_NOTE, setOperational_NOTE] = useState(null);
  const [operational_OPENING, setOperational_OPENING] = useState(null);
  const [operational_CLOSING, setOperational_CLOSING] = useState(null);
  const [valueC, setValueC] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueJ, setValueJ] = useState(null);
  const onChangeC = (e) => {
    setValueC(e.target.value);
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
  const onChange_B_I_II = (e) => {
    setOperational_B_I_II(e.target.value);
  };
  const onChange_B_II_I = (e) => {
    setOperational_B_II_I(e.target.value);
  };
  const onChange_B_II_II = (e) => {
    setOperational_B_II_II(e.target.value);
  };
  const onChange_B_III = (e) => {
    setOperational_B_III(e.target.value);
  };
  const onChange_B_IV = (e) => {
    setOperational_B_IV(e.target.value);
  };
  const onChange_B_V_I = (e) => {
    setOperational_B_V_I(e.target.value);
  };
  const onChange_B_V_II = (e) => {
    setOperational_B_V_II(e.target.value);
  };
  const onChange_B_VI_I = (e) => {
    setOperational_B_VI_I(e.target.value);
  };
  const onChange_B_VI_II = (e) => {
    setOperational_B_VI_II(e.target.value);
  };
  const onChange_B_VII = (e) => {
    setOperational_B_VII(e.target.value);
  };
  const onChange_B_VIII = (e) => {
    setOperational_B_VIII(e.target.value);
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
    OPERATIONAL_B_I_II,
    OPERATIONAL_B_II_I,
    OPERATIONAL_B_II_II,
    OPERATIONAL_B_III,
    OPERATIONAL_B_IV,
    OPERATIONAL_B_V_I,
    OPERATIONAL_B_V_II,
    OPERATIONAL_B_VI_I,
    OPERATIONAL_B_VI_II,
    OPERATIONAL_B_VII,
    OPERATIONAL_B_VIII,
    OPERATIONAL_C,
    OPERATIONAL_D_I,
    OPERATIONAL_D_II,
    OPERATIONAL_D_III,
    OPERATIONAL_D_IV,
    OPERATIONAL_E,
    OPERATIONAL_F,
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
    OPERATIONAL_CLOSING
  ) {
    setButtonDisabled(true);
    setLoading(true);
    const docRef = await setDoc(
      doc(db, "OperationalInspection", `${props.serial}`),
      {
        OPERATIONAL_A_I: OPERATIONAL_A_I,
        OPERATIONAL_B_I_I: OPERATIONAL_B_I_I,
        OPERATIONAL_B_I_II: OPERATIONAL_B_I_II,
        OPERATIONAL_B_II_I: OPERATIONAL_B_II_I,
        OPERATIONAL_B_II_II: OPERATIONAL_B_II_II,
        OPERATIONAL_B_III: OPERATIONAL_B_III,
        OPERATIONAL_B_IV: OPERATIONAL_B_IV,
        OPERATIONAL_B_V_I: OPERATIONAL_B_V_I,
        OPERATIONAL_B_V_II: OPERATIONAL_B_V_II,
        OPERATIONAL_B_VI_I: OPERATIONAL_B_VI_I,
        OPERATIONAL_B_VI_II: OPERATIONAL_B_VI_II,
        OPERATIONAL_B_VII: OPERATIONAL_B_VII,
        OPERATIONAL_B_VIII: OPERATIONAL_B_VIII,
        OPERATIONAL_C: OPERATIONAL_C,
        OPERATIONAL_D_I: OPERATIONAL_D_I,
        OPERATIONAL_D_II: OPERATIONAL_D_II,
        OPERATIONAL_D_III: OPERATIONAL_D_III,
        OPERATIONAL_D_IV: OPERATIONAL_D_IV,
        OPERATIONAL_E: OPERATIONAL_E,
        OPERATIONAL_F: OPERATIONAL_F,
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
      }
    );
    setLoading(false);
  }

  async function addOperational(values) {
    const OPERATIONAL_A_I = values?.OPERATIONAL_A_I;
    const OPERATIONAL_B_I_I = values?.OPERATIONAL_B_I_I;
    const OPERATIONAL_B_I_II = values?.OPERATIONAL_B_I_II;
    const OPERATIONAL_B_II_I = values?.OPERATIONAL_B_II_I;
    const OPERATIONAL_B_II_II = values?.OPERATIONAL_B_II_II;
    const OPERATIONAL_B_III = values?.OPERATIONAL_B_III;
    const OPERATIONAL_B_IV = values?.OPERATIONAL_B_IV;
    const OPERATIONAL_B_V_I = values?.OPERATIONAL_B_V_I;
    const OPERATIONAL_B_V_II = values?.OPERATIONAL_B_V_II;
    const OPERATIONAL_B_VI_I = values?.OPERATIONAL_B_VI_I;
    const OPERATIONAL_B_VI_II = values?.OPERATIONAL_B_VI_II;
    const OPERATIONAL_B_VII = values?.OPERATIONAL_B_VII;
    const OPERATIONAL_B_VIII = values?.OPERATIONAL_B_VIII;
    const OPERATIONAL_C = valueC;
    const OPERATIONAL_D_I = values?.OPERATIONAL_D_I;
    const OPERATIONAL_D_II = values?.OPERATIONAL_D_II;
    const OPERATIONAL_D_III = values?.OPERATIONAL_D_III;
    const OPERATIONAL_D_IV = valueD;
    const OPERATIONAL_E = values?.OPERATIONAL_E;
    const OPERATIONAL_F = valueF;
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
    const OPERATIONAL_I_III = values?.OPERATIONAL_I_III;
    const OPERATIONAL_NOTE = values?.OPERATIONAL_NOTE;
    const OPERATIONAL_J = valueJ;
    const OPERATIONAL_OPENING = values?.OPERATIONAL_OPENING;
    const OPERATIONAL_CLOSING = values?.OPERATIONAL_CLOSING;

    if (
      OPERATIONAL_C == null ||
      OPERATIONAL_D_IV == null ||
      OPERATIONAL_J == null
    ) {
      showModal();
    } else {
      onClickF(
        OPERATIONAL_A_I,
        OPERATIONAL_B_I_I,
        OPERATIONAL_B_I_II,
        OPERATIONAL_B_II_I,
        OPERATIONAL_B_II_II,
        OPERATIONAL_B_III,
        OPERATIONAL_B_IV,
        OPERATIONAL_B_V_I,
        OPERATIONAL_B_V_II,
        OPERATIONAL_B_VI_I,
        OPERATIONAL_B_VI_II,
        OPERATIONAL_B_VII,
        OPERATIONAL_B_VIII,
        OPERATIONAL_C,
        OPERATIONAL_D_I,
        OPERATIONAL_D_II,
        OPERATIONAL_D_III,
        OPERATIONAL_D_IV,
        OPERATIONAL_E,
        OPERATIONAL_F,
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
      setOperational_B_I_I(data?.OPERATIONAL_B_I_I);
      setOperational_B_I_II(data?.OPERATIONAL_B_I_II);
      setOperational_B_II_I(data?.OPERATIONAL_B_II_I);
      setOperational_B_II_II(data?.OPERATIONAL_B_II_II);
      setOperational_B_III(data?.OPERATIONAL_B_III);
      setOperational_B_IV(data?.OPERATIONAL_B_IV);
      setOperational_B_V_I(data?.OPERATIONAL_B_V_I);
      setOperational_B_V_II(data?.OPERATIONAL_B_V_II);
      setOperational_B_VI_I(data?.OPERATIONAL_B_VI_I);
      setOperational_B_VI_II(data?.OPERATIONAL_B_VI_II);
      setOperational_B_VII(data?.OPERATIONAL_B_VII);
      setOperational_B_VIII(data?.OPERATIONAL_B_VIII);
      setOperational_D_I(data?.OPERATIONAL_D_I);
      setOperational_D_II(data?.OPERATIONAL_D_II);
      setOperational_D_III(data?.OPERATIONAL_D_III);
      setOperational_E(data?.OPERATIONAL_E);
      setOperational_H_I(data?.OPERATIONAL_H_I);
      setOperational_H_IV(data?.OPERATIONAL_H_IV);
      setOperational_H_V(data?.OPERATIONAL_H_V);
      setOperational_H_VI(data?.OPERATIONAL_H_VI);
      setOperational_I_I(data?.OPERATIONAL_I_I);
      setOperational_I_II(data?.OPERATIONAL_I_II);
      setOperational_I_III(data?.OPERATIONAL_I_III);
      setOperational_NOTE(data?.OPERATIONAL_NOTE);
      setOperational_OPENING(data?.OPERATIONAL_OPENING);
      setOperational_CLOSING(data?.OPERATIONAL_CLOSING);
      setValueC(data?.OPERATIONAL_C);
      setValueD(data?.OPERATIONAL_D_IV);
      setValueF(data?.OPERATIONAL_F);
      setValueJ(data?.OPERATIONAL_J);
      message.success("Load complete");
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    getDataOven();
  }, []);
  const [form] = Form.useForm();
  return (
    <Form
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
            A) Using the OHMS function on your meter Measure and Record the
            resistance between the:
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
                  style={{ width: 150 }}
                  size="small"
                  required
                  placeholder={operational_A_I ? operational_A_I : ""}
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Text>
            B) Remove the fastons from the Primary and the secondary of the of
            Voltage and the Filament XFMRs. Measure and Record the isolated
            resistance of the:
          </Text>
        </Col>
        <Col xs={24}>
          <Row className="sub-question">
            <Col xs={24}>
              <Row>
                <Col xs={24}>
                  <Text>i) HV XFMR #1 Primary</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_B_I_I}
                    label="terminals 1 & 2"
                    value={operational_B_I_I}
                    onChange={onChange_B_I_I}
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      placeholder={operational_B_I_I ? operational_B_I_I : ""}
                      required
                    />
                  </Form.Item>
                  <Form.Item
                    name={OPERATIONAL_B_I_II}
                    label="terminals 1 & 3"
                    value={operational_B_I_II}
                    onChange={onChange_B_I_II}
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                      placeholder={operational_B_I_II ? operational_B_I_II : ""}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>ii) HV XFMR #1 Primary</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_B_II_I}
                    label="terminals 1 & 2"
                    value={operational_B_II_I}
                    onChange={onChange_B_II_I}
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                      placeholder={operational_B_II_I ? operational_B_II_I : ""}
                    />
                  </Form.Item>
                  <Form.Item
                    name={OPERATIONAL_B_II_II}
                    label="terminals 1 & 3"
                    value={operational_B_II_II}
                    onChange={onChange_B_II_II}
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                      placeholder={
                        operational_B_II_II ? operational_B_II_II : ""
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col xs={24}>
                  <Text>iii) HV XFMR #1 Secondary</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_B_III}
                    label="terminal #4 and the frame"
                    value={operational_B_III}
                    onChange={onChange_B_III}
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                      placeholder={operational_B_III}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>iv) HV XFMR #2</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_B_IV}
                    value={operational_B_IV}
                    onChange={onChange_B_IV}
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                      placeholder={operational_B_IV ? operational_B_IV : ""}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>v) Filament XFMR #1 Primary </Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_B_V_I}
                    label="terminal 1 & 2"
                    value={operational_B_V_I}
                    onChange={onChange_B_V_I}
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                      placeholder={operational_B_V_I ? operational_B_V_I : ""}
                    />
                  </Form.Item>
                  <Form.Item
                    name={OPERATIONAL_B_V_II}
                    label="terminal 1 & 3"
                    value={operational_B_V_II}
                    onChange={onChange_B_V_II}
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                      placeholder={operational_B_V_II ? operational_B_V_II : ""}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>vi) Filament XFMR #2 Primary </Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_B_VI_I}
                    label="terminal 1 & 2"
                    value={operational_B_VI_I}
                    onChange={onChange_B_VI_I}
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                      placeholder={operational_B_VI_I ? operational_B_VI_I : ""}
                    />
                  </Form.Item>
                  <Form.Item
                    name={OPERATIONAL_B_VI_II}
                    label="terminal 1 & 3"
                    value={operational_B_VI_II}
                    onChange={onChange_B_VI_II}
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                      placeholder={
                        operational_B_VI_II ? operational_B_VI_II : ""
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>vii) Filament XFMR #1 Secondary</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_B_VII}
                    label="terminal 4 & 5"
                    value={operational_B_VII}
                    onChange={onChange_B_VII}
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                      placeholder={operational_B_VII ? operational_B_VII : ""}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>
                    viii) Filament XFMR #2 Secondary (terminals #4 and #5)
                  </Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_B_VIII}
                    label="terminal 4 & 5"
                    value={operational_B_VIII}
                    onChange={onChange_B_VIII}
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                      placeholder={operational_B_VIII}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            C) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR
            12 and ATMR 15 respectively
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group
            required
            name={OPERATIONAL_C}
            onChange={onChangeC}
            value={valueC}
          >
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
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
                      placeholder={
                        operational_D_I ? operational_D_I : "Version"
                      }
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
                      placeholder={operational_D_II ? operational_D_II : "VAC"}
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
                      placeholder={
                        operational_D_III ? operational_D_III : "S/N"
                      }
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
            <Input
              type="number"
              size="small"
              placeholder={operational_E ? operational_E : "VAC"}
              required
            />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            F) Using an insulated screwdriver check the EC Cooling Fan by
            bridging between the terminals on the "Close on Rise" switch, witch
            controls the EC cooling fan.
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
      <Row>
        <Col xs={24}>
          <Text>
            H) Water Rise Test: Place Oven into the "UNIT" mode, and then scroll
            down to "Microwave" on the first screen.
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
                      placeholder={operational_H_I ? operational_H_I : "°C"}
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
                    iv) While test is running, Verify the current is 9.2amps +/-
                    2 amps (208V)
                    <br />
                    (10.64amps +/- 1.6 amps for the unit tested with 240V)
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
                      placeholder={operational_H_IV ? operational_H_IV : "AMPS"}
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>
                    v) While the timer reaches Zero, immediately measure T
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
                      placeholder={operational_H_V ? operational_H_V : "°C"}
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
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
                      size="small"
                      style={{ width: 100 }}
                      placeholder={operational_H_VI ? operational_H_VI : "W"}
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
                    Output Power must be {">="} 1600 W. But it's more than 2000
                    W, repeat this test.
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
                      placeholder={operational_I_I ? operational_I_I : ""}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>
                    ii) Once the oven reaches the OPERATIONAL Temperature, the
                    menu is displayed, record the displayed menu
                  </Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_I_II}
                    onChange={onChange_I_II}
                    value={operational_I_II}
                  >
                    <Input
                      type="text"
                      size="small"
                      style={{ width: 150 }}
                      placeholder={operational_I_II ? operational_I_II : ""}
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>iii) And then record the time</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_I_III}
                    onChange={onChange_I_III}
                    value={operational_I_III}
                  >
                    <Input
                      type="time"
                      size="small"
                      style={{ width: 150 }}
                      required
                      placeholder={operational_I_III ? operational_I_III : ""}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
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
            <TextArea
              autoSize={{ minRows: 3, maxRows: 4 }}
              placeholder={operational_NOTE ? operational_NOTE : ""}
            />
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
                  placeholder={operational_OPENING ? operational_OPENING : ""}
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
                  placeholder={operational_CLOSING ? operational_CLOSING : ""}
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
              onOk={handleOk2}
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
