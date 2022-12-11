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
  message,
  Checkbox,
} from "antd";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import moment from "moment";
const db = getFirestore();
const { Text, Title } = Typography;
const { TextArea } = Input;
import {
  OPERATIONAL_A_I_I,
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
import { ProblemSelection } from "../problemSelection/ProblemSelection";

export const EditOperationalInspection = (props) => {
  const ovenSerial = props.serial;
  const [form] = Form.useForm();
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [valueA_I_I, setValueA_I_I] = useState(null);
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
  const [valueOptions, setValueOptions] = useState(null);
  const [problemSelected, setProblemSelected] = useState([]);
  const [problems, setProblems] = useState({
    COSMETICS: false,
    ELECTRICALCOMPONENTS: false,
    BLOWERSYSTEM: false,
    HEATINGANDTEMPERATURESYSTEM: false,
    WIRING: false,
    LOOSEOREXTRAPARTS: false,
    INCORRECTSOFTWAREUPLOADED: false,
    INCORRECTMENUUPLOADED: false,
    MICROWAVCIRCUIT: false,
    COOCKINGCOMPONENTS: false,
    DOORSYSTEM: false,
  });
  const repariedChecker = (checkedValues) => {
    setValueOptions(checkedValues);
  };
  const repariedOptions = [
    {
      label: "Electric",
      value: "Electric",
    },
    {
      label: "Mechanic",
      value: "Mechanic",
    },
    {
      label: "Workmanship",
      value: "Workmanship",
    },
  ];
  const showModal2 = () => setModalVisible(true);
  const onChangeA_I_I = (e) => setValueA_I_I(e.target.value);
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
    navigate(`/dashboard`);
  };

  const handleCancel2 = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
  };

  const getDataOven = async () => {
    try {
      const docRef = doc(db, "OperationalInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if (valueA_I_I == null) {
        setValueA_I_I(data?.OPERATIONAL_A_I_I);
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
        setValueOptions(data?.OVEN_REPAIRED_OPTIONS);
        if (data?.COSMETICS == undefined) {
          problems.COSMETICS = false;
          problems.ELECTRICALCOMPONENTS = false;
          problems.BLOWERSYSTEM = false;
          problems.HEATINGANDTEMPERATURESYSTEM = false;
          problems.WIRING = false;
          problems.LOOSEOREXTRAPARTS = false;
          problems.INCORRECTSOFTWAREUPLOADED = false;
          problems.INCORRECTMENUUPLOADED = false;
          problems.MICROWAVCIRCUIT = false;
          problems.COOCKINGCOMPONENTS = false;
          problems.DOORSYSTEM = false;
        } else {
          problems.COSMETICS = data?.COSMETICS;
          problems.ELECTRICALCOMPONENTS = data?.ELECTRICALCOMPONENTS;
          problems.BLOWERSYSTEM = data?.BLOWERSYSTEM;
          problems.HEATINGANDTEMPERATURESYSTEM =
            data?.HEATINGANDTEMPERATURESYSTEM;
          problems.WIRING = data?.WIRING;
          problems.LOOSEOREXTRAPARTS = data?.LOOSEOREXTRAPARTS;
          problems.INCORRECTSOFTWAREUPLOADED = data?.INCORRECTSOFTWAREUPLOADED;
          problems.INCORRECTMENUUPLOADED = data?.INCORRECTMENUUPLOADED;
          problems.MICROWAVCIRCUIT = data?.MICROWAVCIRCUIT;
          problems.COOCKINGCOMPONENTS = data?.COOCKINGCOMPONENTS;
          problems.DOORSYSTEM = data?.DOORSYSTEM;
        }
        Object.entries(problems).forEach(([key, value]) => {
          if (value == true) {
            problemSelected.push(key);
          }
        });
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    getDataOven();
  }, []);

  const addOperational = async (values) => {
    setButtonDisabled(true);
    setLoading(true);
    {
      values.OPERATIONAL_NOTE == undefined
        ? (values.OPERATIONAL_NOTE = "")
        : "";
    }
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
    values.OPERATIONAL_I_III = value_I_III(
      values.OPERATIONAL_I_I,
      values.OPERATIONAL_I_II
    );
    values.OPERATIONAL_I_I = moment(values.OPERATIONAL_I_I).format("HH:mm");
    values.OPERATIONAL_I_II = moment(values.OPERATIONAL_I_II).format("HH:mm");
    values.OVEN_REPAIRED_OPTIONS == undefined
      ? (values.OVEN_REPAIRED_OPTIONS = [])
      : null;
    await setDoc(doc(db, "OperationalInspection", `${props.serial}`), {
      OPERATIONAL_A_I_I: values.OPERATIONAL_A_I_I,
      OPERATIONAL_A_II: values.OPERATIONAL_A_II,
      OPERATIONAL_A_III: values.OPERATIONAL_A_III,
      OPERATIONAL_B_I: values.OPERATIONAL_B_I,
      OPERATIONAL_C: values.OPERATIONAL_C,
      OPERATIONAL_D: values.OPERATIONAL_D,
      OPERATIONAL_E: values.OPERATIONAL_E,
      OPERATIONAL_F: values.OPERATIONAL_F,
      OPERATIONAL_G: values.OPERATIONAL_G,
      OPERATIONAL_H_I: values.OPERATIONAL_H_I,
      OPERATIONAL_I_I: values.OPERATIONAL_I_I,
      OPERATIONAL_I_II: values.OPERATIONAL_I_II,
      OPERATIONAL_I_III: values.OPERATIONAL_I_III,
      OPERATIONAL_J: values.OPERATIONAL_J,
      OPERATIONAL_K: values.OPERATIONAL_K,
      OPERATIONAL_L_I: values.OPERATIONAL_L_I,
      OPERATIONAL_L_II: values.OPERATIONAL_L_II,
      OPERATIONAL_M: values.OPERATIONAL_M,
      OPERATIONAL_N: values.OPERATIONAL_N,
      OPERATIONAL_O: values.OPERATIONAL_O,
      OPERATIONAL_P: values.OPERATIONAL_P,
      OPERATIONAL_NOTE: values.OPERATIONAL_NOTE,
      OPERATIONAL_PON: values.OPERATIONAL_PON,
      OVEN_REPAIRED_OPTIONS: values.OVEN_REPAIRED_OPTIONS,
      COSMETICS: problems.COSMETICS,
      ELECTRICALCOMPONENTS: problems.ELECTRICALCOMPONENTS,
      BLOWERSYSTEM: problems.BLOWERSYSTEM,
      HEATINGANDTEMPERATURESYSTEM: problems.HEATINGANDTEMPERATURESYSTEM,
      WIRING: problems.WIRING,
      LOOSEOREXTRAPARTS: problems.LOOSEOREXTRAPARTS,
      INCORRECTSOFTWAREUPLOADED: problems.INCORRECTSOFTWAREUPLOADED,
      INCORRECTMENUUPLOADED: problems.INCORRECTMENUUPLOADED,
      MICROWAVCIRCUIT: problems.MICROWAVCIRCUIT,
      COOCKINGCOMPONENTS: problems.COOCKINGCOMPONENTS,
      DOORSYSTEM: problems.DOORSYSTEM,
    })
      .then(async () => {
        const ovenRef = doc(db, "oven", `${props.serial}`);
        await setDoc(
          ovenRef,
          { status: values.OPERATIONAL_PON },
          { merge: true }
        );
        await setDoc(
          doc(db, "Excel", `${props.serial}`),
          { status: values.OPERATIONAL_PON },
          { merge: true }
        );
        await setDoc(
          doc(db, "Excel", `${props.serial}`),
          {
            voltage: values.OPERATIONAL_A_II,
            ampsA: values.OPERATIONAL_L_I,
            ampsB: values.OPERATIONAL_L_II,
            sageFrimware: values.OPERATIONAL_A_I_I,
            notes: values.OPERATIONAL_NOTE,
            actionTaken: "--",
          },
          { merge: true }
        )
          .then(() => {
            setLoading(false);
            message.success("Operational Inspection Completed");
            showModal2();
          })
          .catch((error) => {
            setButtonDisabled(false);
            setLoading(false);
            message.error("error sending the data");
          });
      })
      .catch((error) => {
        setButtonDisabled(false);
        setLoading(false);
        message.error("error sending the data");
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("error: ", errorInfo.values);
  };
  form.setFieldsValue({
    OPERATIONAL_A_I_I: valueA_I_I,
    OPERATIONAL_A_II: valueA_II,
    OPERATIONAL_A_III: valueA_III,
    OPERATIONAL_B_I: valueB_I,
    OPERATIONAL_C: valueC,
    OPERATIONAL_D: valueD,
    OPERATIONAL_E: valueE,
    OPERATIONAL_F: valueF,
    OPERATIONAL_G: valueG,
    OPERATIONAL_H_I: valueH,
    OPERATIONAL_I_I: moment(valueI_I, "HH:mm"),
    OPERATIONAL_I_II: moment(valueI_II, "HH:mm"),
    OPERATIONAL_I_III: valueI_III,
    OPERATIONAL_J: valueJ,
    OPERATIONAL_K: valueK,
    OPERATIONAL_L_I: valueL_I,
    OPERATIONAL_L_II: valueL_II,
    OPERATIONAL_M: valueM,
    OPERATIONAL_N: valueN,
    OPERATIONAL_O: valueO,
    OPERATIONAL_P: valueP,
    OPERATIONAL_NOTE: valueNOTE,
    OPERATIONAL_PON: valuePON,
    OVEN_REPAIRED_OPTIONS: valueOptions,
  });
  return (
    <Form
      form={form}
      name="HHDOperationalInspection"
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
                    name={OPERATIONAL_A_I_I}
                    onChange={onChangeA_I_I}
                    label="sage"
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input
                      placeholder="sage"
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
                    name={OPERATIONAL_A_II}
                    onChange={onChangeA_II}
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
                  <Text>iii) Serial Number HHD/HHS</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_A_III}
                    onChange={onChangeA_III}
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
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            C) Does Voltage & Frequency (on rating plate) match the Ratings on
            traveler?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
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
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            D) Entein INFO MODE, check that the menu version and firmware are
            correct according to oven spec.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item
            name={OPERATIONAL_D}
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
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>E) Enter "Test Mode", make sure "Faults" are cleared.</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
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
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>F) Make sure the Door says closed when it is closed.</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
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
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            G) Using an insulated screw driver check the EC Cooling Fan by
            bridging between the terminals on the "Close on Rise" switch, which
            controls the EC cooling fan.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
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
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            H) Install jet plates and rack. Ensure the rack oscilates when cold.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item
            name={OPERATIONAL_H_I}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeH}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
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
                  <Form.Item
                    name={OPERATIONAL_I_I}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <TimePicker
                      size="small"
                      style={{ width: 150 }}
                      onChange={onChangeI_I}
                      format={"HH:mm"}
                      placeholder={valueI_I}
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
                  <Form.Item
                    name={OPERATIONAL_I_II}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <TimePicker
                      size="small"
                      style={{ width: 150 }}
                      value={valueI_II}
                      onChange={onChangeI_II}
                      format={"HH:mm"}
                      placeholder={valueI_II}
                    />
                  </Form.Item>
                </Col>
                <Col xs={22} sm={22}>
                  <Form.Item name={OPERATIONAL_I_III} value={valueI_III}>
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
                  </Form.Item>

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
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>K) Ensure Blower Fan is rotating counter-clockwise</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
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
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input
                      placeholder={"Amps"}
                      type="number"
                      size="small"
                      style={{ width: 150 }}
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
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input
                      placeholder={"Amps"}
                      type="number"
                      size="small"
                      style={{ width: 150 }}
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
          <Form.Item
            name={OPERATIONAL_M}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeM}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>N) Install panels.</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item
            name={OPERATIONAL_N}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeN}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={16}>
          <Text>O) Clear all Cook Cycles and Faults.</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item
            name={OPERATIONAL_O}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeO}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
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
          <Form.Item
            name={OPERATIONAL_P}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeP}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={{ span: 20, offset: 1 }} sm={3}>
          <Text>NOTES</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={20}>
          <Form.Item name={OPERATIONAL_NOTE} onChange={onChangeNOTE}>
            <TextArea autoSize={{ minRows: 3, maxRows: 4 }} maxLength={320} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={4}>
          <Form.Item
            name={OPERATIONAL_PON}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangePON}>
              <Radio value={"Aprooved"}>Aprooved</Radio>
              <Radio value={"Rejected"}>Rejected</Radio>
              <Radio value={"Repaired"}>Repaired</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      {valuePON == "Rejected" ? (
        <ProblemSelection problems={problems} setProblems={setProblems} />
      ) : valuePON == "Repaired" ? (
        <Row justify="center">
          <Col xs={10}>
            <Form.Item
              name={"OVEN_REPAIRED_OPTIONS"}
              rules={[
                {
                  required: true,
                  message: "Finish the inspection before submitting it",
                },
              ]}
            >
              <Checkbox.Group
                options={repariedOptions}
                onChange={repariedChecker}
              />
            </Form.Item>
          </Col>
        </Row>
      ) : null}
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
              visible={modalVisible}
              onOk={handleOk2}
              style={{ backgroundColor: "#2ECC71", borderRadius: "1em" }}
              onCancel={handleCancel2}
            >
              <Title level={3}>OK..!</Title>
              <Text>The data has been successfully stored</Text>
              <br />
              <Text>Click Ok to Finish the Inspection</Text>
              <br />
              <Text>Click cancel if you whant to upload some Images</Text>
            </Modal>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
