import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Typography,
  Radio,
  Button,
  Modal,
  TimePicker,
} from "antd";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import moment from "moment";
const db = getFirestore();
const { Text, Title } = Typography;
const { TextArea } = Input;
import {
  OPERATIONAL_A_I,
  OPERATIONAL_A_II,
  OPERATIONAL_A_III,
  OPERATIONAL_B_I,
  OPERATIONAL_C,
  OPERATIONAL_D,
  OPERATIONAL_E,
  OPERATIONAL_F,
  OPERATIONAL_G,
  OPERATIONAL_H_I,
  OPERATIONAL_I_I,
  OPERATIONAL_I_II,
  OPERATIONAL_I_III,
  OPERATIONAL_J,
  OPERATIONAL_K,
  OPERATIONAL_L_I,
  OPERATIONAL_L_II,
  OPERATIONAL_M,
  OPERATIONAL_N,
  OPERATIONAL_O,
  OPERATIONAL_P,
  OPERATIONAL_NOTE,
  OPERATIONAL_PON,
} from "../../constants/ConstOperational";

export const EditOperationalInspection = (props) => {
  const ovenSerial = props.serial;
  const [form] = Form.useForm();
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [valueA_I, setValueA_I] = useState(null);
  const [valueA_II, setValueA_II] = useState(null);
  const [valueA_III, setValueA_III] = useState(null);
  const [valueB_I, setValueB_I] = useState(null);
  const [valueC, setValueC] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [valueE, setValueE] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueG, setValueG] = useState(null);
  const [valueH, setValueH] = useState(null);
  const [valueI_I, setValueI_I] = useState(null);
  const [valueI_II, setValueI_II] = useState(null);
  const [valueI_III, setValueI_III] = useState(null);
  const [valueJ, setValueJ] = useState(null);
  const [valueK, setValueK] = useState(null);
  const [valueL_I, setValueL_I] = useState(null);
  const [valueL_II, setValueL_II] = useState(null);
  const [valueM, setValueM] = useState(null);
  const [valueN, setValueN] = useState(null);
  const [valueO, setValueO] = useState(null);
  const [valueP, setValueP] = useState(null);
  const [valueNOTE, setValueNOTE] = useState(null);
  const [valuePON, setValuePON] = useState(null);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);
  const showModal2 = () => setModalVisible(true);
  const onChangeA_I = (e) => setValueA_I(e.target.value);
  const onChangeA_II = (e) => setValueA_II(e.target.value);
  const onChangeA_III = (e) => setValueA_III(e.target.value);
  const onChangeB_I = (e) => setValueB_I(e.target.value);
  const onChangeC = (e) => setValueC(e.target.value);
  const onChangeD = (e) => setValueD(e.target.value);
  const onChangeE = (e) => setValueE(e.target.value);
  const onChangeF = (e) => setValueF(e.target.value);
  const onChangeG = (e) => setValueG(e.target.value);
  const onChangeH = (e) => setValueH(e.target.value);
  const onChangeI_I = (e) => setValueI_I(e);
  const onChangeI_II = (e) => setValueI_II(e);
  const onChangeJ = (e) => setValueJ(e.target.value);
  const onChangeK = (e) => setValueK(e.target.value);
  const onChangeL_I = (e) => setValueL_I(e.target.value);
  const onChangeL_II = (e) => setValueL_II(e.target.value);
  const onChangeM = (e) => setValueM(e.target.value);
  const onChangeN = (e) => setValueN(e.target.value);
  const onChangeO = (e) => setValueO(e.target.value);
  const onChangeP = (e) => setValueP(e.target.value);
  const onChangeNOTE = (e) => setValueNOTE(e.target.value);
  const onChangePON = (e) => setValuePON(e.target.value);

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
    OPERATIONAL_B_I,
    OPERATIONAL_C,
    OPERATIONAL_D,
    OPERATIONAL_E,
    OPERATIONAL_F,
    OPERATIONAL_G,
    OPERATIONAL_H_I,
    OPERATIONAL_I_I,
    OPERATIONAL_I_II,
    OPERATIONAL_I_III,
    OPERATIONAL_J,
    OPERATIONAL_K,
    OPERATIONAL_L_I,
    OPERATIONAL_L_II,
    OPERATIONAL_M,
    OPERATIONAL_N,
    OPERATIONAL_O,
    OPERATIONAL_P,
    OPERATIONAL_NOTE,
    OPERATIONAL_PON
  ) {
    setButtonDisabled(true);
    setLoading(true);
    const docRef = await setDoc(
      doc(db, "OperationalInspection", `${props.serial}`),
      {
        OPERATIONAL_A_I: OPERATIONAL_A_I,
        OPERATIONAL_A_II: OPERATIONAL_A_II,
        OPERATIONAL_A_III: OPERATIONAL_A_III,
        OPERATIONAL_B_I: OPERATIONAL_B_I,
        OPERATIONAL_C: OPERATIONAL_C,
        OPERATIONAL_D: OPERATIONAL_D,
        OPERATIONAL_E: OPERATIONAL_E,
        OPERATIONAL_F: OPERATIONAL_F,
        OPERATIONAL_G: OPERATIONAL_G,
        OPERATIONAL_H_I: OPERATIONAL_H_I,
        OPERATIONAL_I_I: OPERATIONAL_I_I,
        OPERATIONAL_I_II: OPERATIONAL_I_II,
        OPERATIONAL_I_III: OPERATIONAL_I_III,
        OPERATIONAL_J: OPERATIONAL_J,
        OPERATIONAL_K: OPERATIONAL_K,
        OPERATIONAL_L_I: OPERATIONAL_L_I,
        OPERATIONAL_L_II: OPERATIONAL_L_II,
        OPERATIONAL_M: OPERATIONAL_M,
        OPERATIONAL_N: OPERATIONAL_N,
        OPERATIONAL_O: OPERATIONAL_O,
        OPERATIONAL_P: OPERATIONAL_P,
        OPERATIONAL_NOTE: OPERATIONAL_NOTE,
        OPERATIONAL_PON: OPERATIONAL_PON,
      }
    );
    setLoading(false);
  }
  const getDataOven = async () => {
    try {
      const docRef = doc(db, "OperationalInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if (valueA_I == null) {
        setValueA_I(data?.OPERATIONAL_A_I);
        setValueA_II(data?.OPERATIONAL_A_II);
        setValueA_III(data?.OPERATIONAL_A_III);
        setValueB_I(data?.OPERATIONAL_B_I);
        setValueC(data?.OPERATIONAL_C);
        setValueD(data?.OPERATIONAL_D);
        setValueE(data?.OPERATIONAL_E);
        setValueF(data?.OPERATIONAL_F);
        setValueG(data?.OPERATIONAL_G);
        setValueH(data?.OPERATIONAL_H_I);
        setValueI_I(moment(data?.OPERATIONAL_I_I, "HH:mm"));
        setValueI_II(moment(data?.OPERATIONAL_I_II, "HH:mm"));
        setValueI_III(data?.OPERATIONAL_I_III);
        setValueJ(data?.OPERATIONAL_J);
        setValueK(data?.OPERATIONAL_K);
        setValueL_I(data?.OPERATIONAL_L_I);
        setValueL_II(data?.OPERATIONAL_L_II);
        setValueM(data?.OPERATIONAL_M);
        setValueN(data?.OPERATIONAL_N);
        setValueO(data?.OPERATIONAL_O);
        setValueP(data?.OPERATIONAL_P);
        setValueNOTE(data?.OPERATIONAL_NOTE);
        setValuePON(data?.OPERATIONAL_PON);
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    getDataOven();
  }, []);

  function addOperational(values) {
    const OPERATIONAL_A_I = values.OPERATIONAL_A_I;
    const OPERATIONAL_A_II = values.OPERATIONAL_A_II;
    const OPERATIONAL_A_III = values.OPERATIONAL_A_III;
    const OPERATIONAL_B_I = values.OPERATIONAL_B_I;
    const OPERATIONAL_C = valueC;
    const OPERATIONAL_D = valueD;
    const OPERATIONAL_E = valueE;
    const OPERATIONAL_F = valueF;
    const OPERATIONAL_G = valueG;
    const OPERATIONAL_H_I = valueH;
    const OPERATIONAL_I_I = moment(valueI_I).format("HH:mm");
    const OPERATIONAL_I_II = moment(valueI_II).format("HH:mm");
    const value_I_III = (a, b) => {
      let c = a;
      let d = b;
      let e =
        parseInt(moment(d).format("HH")) * 60 +
        parseInt(moment(d).format("mm")) -
        (parseInt(moment(c).format("HH")) * 60 +
          parseInt(moment(c).format("mm")));
      return e;
    };
    const OPERATIONAL_I_III = value_I_III(valueI_I, valueI_II);
    const OPERATIONAL_J = valueJ;
    const OPERATIONAL_K = valueK;
    const OPERATIONAL_L_I = values.OPERATIONAL_L_I;
    const OPERATIONAL_L_II = values.OPERATIONAL_L_II;
    const OPERATIONAL_M = valueM;
    const OPERATIONAL_N = valueN;
    const OPERATIONAL_O = valueO;
    const OPERATIONAL_P = valueP;
    const OPERATIONAL_NOTE = values.OPERATIONAL_NOTE;
    const OPERATIONAL_PON = valuePON;

    if (
      OPERATIONAL_C == null ||
      OPERATIONAL_D == null ||
      OPERATIONAL_E == null ||
      OPERATIONAL_F == null ||
      OPERATIONAL_G == null ||
      OPERATIONAL_H_I == null ||
      OPERATIONAL_J == null ||
      OPERATIONAL_K == null ||
      OPERATIONAL_M == null ||
      OPERATIONAL_N == null ||
      OPERATIONAL_O == null ||
      OPERATIONAL_P == null ||
      OPERATIONAL_PON == null
    ) {
      showModal();
    } else {
      if (OPERATIONAL_PON) {
        const ovenRef = doc(db, "oven", `${props.serial}`);
        setDoc(ovenRef, { status: "Aprooved" }, { merge: true });
      } else {
        const ovenRef = doc(db, "oven", `${props.serial}`);
        setDoc(ovenRef, { status: "Rejected" }, { merge: true });
      }
      onClickF(
        OPERATIONAL_A_I,
        OPERATIONAL_A_II,
        OPERATIONAL_A_III,
        OPERATIONAL_B_I,
        OPERATIONAL_C,
        OPERATIONAL_D,
        OPERATIONAL_E,
        OPERATIONAL_F,
        OPERATIONAL_G,
        OPERATIONAL_H_I,
        OPERATIONAL_I_I,
        OPERATIONAL_I_II,
        OPERATIONAL_I_III,
        OPERATIONAL_J,
        OPERATIONAL_K,
        OPERATIONAL_L_I,
        OPERATIONAL_L_II,
        OPERATIONAL_M,
        OPERATIONAL_N,
        OPERATIONAL_O,
        OPERATIONAL_P,
        OPERATIONAL_NOTE,
        OPERATIONAL_PON
      );
      showModal2();
    }
  }
  form.setFieldsValue({
    OPERATIONAL_A_I: valueA_I,
    OPERATIONAL_A_II: valueA_II,
    OPERATIONAL_A_III: valueA_III,
    OPERATIONAL_B_I: valueB_I,
    OPERATIONAL_I_I: moment(valueI_I, "HH:mm"),
    OPERATIONAL_I_II: moment(valueI_II, "HH:mm"),
    OPERATIONAL_I_III: valueI_III,
    OPERATIONAL_L_I: valueL_I,
    OPERATIONAL_L_II: valueL_II,
    OPERATIONAL_NOTE: valueNOTE,
  });
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
      <br />
      <Row justify="center">
        <Col xs={22} sm={22}>
          <Text>A) Plug in the oven, as the Display Boots, check for:</Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="space-around">
                <Col xs={23}>
                  <Text>i) Displayed software version</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_A_I}
                    onChange={onChangeA_I}
                    value={valueA_I}
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
                <Col xs={23}>
                  <Text>ii) Display voltage</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_A_II}
                    onChange={onChangeA_II}
                    value={valueA_II}
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
                <Col xs={23}>
                  <Text>iii) VAC, Serial Number HHD/HHS</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_A_III}
                    onChange={onChangeA_III}
                    value={valueA_III}
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
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>
            B) Meter to Volts AC: Measure the Voltage at Power Supply Input
            Terminals.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item
            name={OPERATIONAL_B_I}
            onChange={onChangeB_I}
            value={valueB_I}
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
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            C) Does Voltage & Frequency (on rating plate) match the Ratings on
            traveler?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
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

      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            D) Entein INFO MODE, check that the menu version and firmware are
            correct according to oven spec.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_D} onChange={onChangeD} value={valueD}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>E) Enter "Test Mode", make sure "Faults" are cleared.</Text>
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
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>F) Make sure the Door says closed when it is closed.</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_F} onChange={onChangeF} value={valueF}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            G) Using an insulated screw driver check the EC Cooling Fan by
            bridging between the terminals on the "Close on Rise" switch, which
            controls the EC cooling fan.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_G} onChange={onChangeG} value={valueG}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            H) Install jet plates and rack. Ensure the rack oscilates when cold.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group
            name={OPERATIONAL_H_I}
            onChange={onChangeH}
            value={valueH}
          >
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={{ span: 20, offset: 1 }} sm={23}>
          <Text>I) Turn oven on. Heat Oven to its preset temperature.</Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="space-around">
                <Col xs={22} sm={14}>
                  <Text>i) Record time oven starts warm up:</Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item name={OPERATIONAL_I_I}>
                    <TimePicker
                      size="small"
                      style={{ width: 150 }}
                      value={valueI_I}
                      onChange={onChangeI_I}
                      format={"HH:mm"}
                      placeholder={valueI_I}
                      showNow={false}
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={22} sm={14}>
                  <Text>
                    ii) Record time when oven reaches preset temperature and
                    menu appears
                  </Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item name={OPERATIONAL_I_II}>
                    <TimePicker
                      size="small"
                      style={{ width: 150 }}
                      value={valueI_II}
                      onChange={onChangeI_II}
                      format={"HH:mm"}
                      placeholder={valueI_II}
                      showNow={false}
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={22} sm={22}>
                  <Text>
                    Total Warm-Up time: {" " + valueI_III + " minutes"}{" "}
                  </Text>
                  <Button
                    size="small"
                    onClick={() => {
                      let minutesF =
                        parseInt(moment(valueI_II).format("HH")) * 60 +
                        parseInt(moment(valueI_II).format("mm"));
                      let minutesI =
                        parseInt(moment(valueI_I).format("HH")) * 60 +
                        parseInt(moment(valueI_I).format("mm"));
                      setValueI_III(minutesF - minutesI);
                    }}
                  >
                    calc
                  </Button>
                  <br />
                  <Text>Allow Oven "heat soak" for 1 hour</Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>J) Ensure the rack oscilates when oven is hot.</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_J} onChange={onChangeJ} value={valueJ}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>K) Ensure Blower Fan is rotating counter-clockwise</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_K} onChange={onChangeK} value={valueK}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={{ span: 20, offset: 1 }} sm={23}>
          <Text>L) Conduct Amp drawn of Heaters A and B</Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="space-around">
                <Col xs={22} sm={22}>
                  <Text>i) Heater A:</Text>
                </Col>
                <Col xs={22} sm={22}>
                  <Form.Item
                    name={OPERATIONAL_L_I}
                    onChange={onChangeL_I}
                    value={valueL_I}
                  >
                    <Input
                      placeholder={"Amps"}
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={22} sm={22}>
                  <Text>ii) Heater B:</Text>
                </Col>
                <Col xs={22} sm={22}>
                  <Form.Item
                    name={OPERATIONAL_L_II}
                    onChange={onChangeL_II}
                    value={valueL_II}
                  >
                    <Input
                      placeholder={"Amps"}
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row></Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>M) Check the Door Switch</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_M} onChange={onChangeM} value={valueM}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>N) Install panels.</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_N} onChange={onChangeN} value={valueN}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>O) Clear all Cook Cycles and Faults.</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_O} onChange={onChangeO} value={valueO}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>
            P) Check packaged accessories. Do they match oven model checklist?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_P} onChange={onChangeP} value={valueP}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={{ span: 20, offset: 1 }} sm={3}>
          <Text>NOTES</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={20}>
          <Form.Item
            name={OPERATIONAL_NOTE}
            onChange={onChangeNOTE}
            value={valueNOTE}
          >
            <TextArea autoSize={{ minRows: 3, maxRows: 4 }} maxLength={320} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={10}>
          <Form.Item label="APROOVED">
            <Radio.Group
              name={OPERATIONAL_PON}
              onChange={onChangePON}
              value={valuePON}
            >
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
              onOk={handleOk2}
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
