import React, { useState } from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Typography,
  Radio,
  Button,
  Upload,
  TimePicker,
  message,
  Modal,
} from "antd";
import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import moment from "moment";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
const db = getFirestore();
const storage = getStorage();
const { Text, Title } = Typography;
const { TextArea } = Input;
import {
  OPERATIONAL_A_I_I,
  OPERATIONAL_A_I_II,
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

export const OperationalInspection = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [valueC, setValueC] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [valueE, setValueE] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueG, setValueG] = useState(null);
  const [valueH, setValueH] = useState(null);
  const [valueI_I, setValueI_I] = useState(null);
  const [valueI_II, setValueI_II] = useState(null);
  const [valueJ, setValueJ] = useState(null);
  const [valueK, setValueK] = useState(null);
  const [valueM, setValueM] = useState(null);
  const [valueN, setValueN] = useState(null);
  const [valueO, setValueO] = useState(null);
  const [valueP, setValueP] = useState(null);
  const [valuePON, setValuePON] = useState(null);
  const [textC, setTextC] = useState("default");
  const [textD, setTextD] = useState("default");
  const [textE, setTextE] = useState("default");
  const [textF, setTextF] = useState("default");
  const [textG, setTextG] = useState("default");
  const [textH, setTextH] = useState("default");
  const [textJ, setTextJ] = useState("default");
  const [textK, setTextK] = useState("default");
  const [textM, setTextM] = useState("default");
  const [textN, setTextN] = useState("default");
  const [textO, setTextO] = useState("default");
  const [textP, setTextP] = useState("default");
  const [textPON, setTextPON] = useState("default");
  const [upLoadDisabled, setUpLoadDisabled] = useState(false);
  const [uploading, setUploading] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const handleOk = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
    navigate(`/dashboard`);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const showModal = () => setModalVisible(true);
  const onChangeC = (e) => {
    setTextC("default");
    setValueC(e.target.value);
  };
  const onChangeD = (e) => {
    setTextD("default");
    setValueD(e.target.value);
  };
  const onChangeE = (e) => {
    setTextE("default");
    setValueE(e.target.value);
  };
  const onChangeF = (e) => {
    setTextF("default");
    setValueF(e.target.value);
  };
  const onChangeG = (e) => {
    setTextG("default");
    setValueG(e.target.value);
  };
  const onChangeH = (e) => {
    setTextH("default");
    setValueH(e.target.value);
  };
  const onChangeI_I = (e) => setValueI_I(e);
  const onChangeI_II = (e) => setValueI_II(e);
  const onChangeJ = (e) => {
    setTextJ("default");
    setValueJ(e.target.value);
  };
  const onChangeK = (e) => {
    setTextK("default");
    setValueK(e.target.value);
  };
  const onChangeM = (e) => {
    setTextM("default");
    setValueM(e.target.value);
  };
  const onChangeN = (e) => {
    setTextN("default");
    setValueN(e.target.value);
  };
  const onChangeO = (e) => {
    setTextO("default");
    setValueO(e.target.value);
  };
  const onChangeP = (e) => {
    setTextP("default");
    setValueP(e.target.value);
  };
  const onChangePON = (e) => {
    setTextPON("default");
    setValuePON(e.target.value);
  };

  const fileProps = {
    action: "none",
    onChange({ file, fileList }) {
      file.status = uploading;
    },
    showUploadList: {
      showDownloadIcon: false,
      showRemoveIcon: false,
    },
    customRequest: async (e) => {
      const file = e.file;
      if (file) {
        setCount(count + 1);
        setUpLoadDisabled(true);
        setImageLoading(true);
        const storageRef = ref(storage, `${props.serial}/image-${count}`);
        const name = `image-${count}`;
        const uploadTask = await uploadBytesResumable(storageRef, file).catch(
          (error) => {}
        );
        const urlRef = await getDownloadURL(storageRef).catch((error) => {});
        const ovenRef = doc(db, "Images", `${props.serial}`);
        await setDoc(ovenRef, { [count]: `${urlRef}` }, { merge: true });
        setImageLoading(false);
        setUploading("done");
        setUpLoadDisabled(false);
        if (count >= 4) {
          setUpLoadDisabled(true);
        } else {
          setUpLoadDisabled(false);
        }
      }
    },
  };

  async function onClickF(
    OPERATIONAL_A_I_I,
    OPERATIONAL_A_I_II,
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
    await setDoc(doc(db, "OperationalInspection", `${props.serial}`), {
      OPERATIONAL_A_I_I: OPERATIONAL_A_I_I,
      OPERATIONAL_A_I_II: OPERATIONAL_A_I_II,
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
    });
    await setDoc(
      doc(db, "Excel", `${props.serial}`),
      {
        voltage: OPERATIONAL_A_II,
        amps: "--",
        powerOutput: "--",
        sageFrimware: OPERATIONAL_A_I_I,
        phoniexFrimware: OPERATIONAL_A_I_II,
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
    if (valueE == null) {
      setTextE("danger");
    }
    if (valueF == null) {
      setTextF("danger");
    }
    if (valueG == null) {
      setTextG("danger");
    }
    if (valueH == null) {
      setTextH("danger");
    }
    if (valueJ == null) {
      setTextJ("danger");
    }
    if (valueK == null) {
      setTextK("danger");
    }
    if (valueM == null) {
      setTextM("danger");
    }
    if (valueN == null) {
      setTextN("danger");
    }
    if (valueO == null) {
      setTextO("danger");
    }
    if (valueP == null) {
      setTextP("danger");
    }
    if (valuePON == null) {
      setTextPON("danger");
    }
    message.error("Complete all the fields");
  }

  function addOperational(values) {
    const OPERATIONAL_A_I_I = values.OPERATIONAL_A_I_I;
    const OPERATIONAL_A_I_II = values.OPERATIONAL_A_I_II;
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
    const OPERATIONAL_NOTE = values.OPERATIONAL_NOTE
      ? values.OPERATIONAL_NOTE
      : "";
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
      if (valueC == null) {
        setTextC("danger");
      }
      if (valueD == null) {
        setTextD("danger");
      }
      if (valueE == null) {
        setTextE("danger");
      }
      if (valueF == null) {
        setTextF("danger");
      }
      if (valueG == null) {
        setTextG("danger");
      }
      if (valueH == null) {
        setTextH("danger");
      }
      if (valueJ == null) {
        setTextJ("danger");
      }
      if (valueK == null) {
        setTextK("danger");
      }
      if (valueM == null) {
        setTextM("danger");
      }
      if (valueN == null) {
        setTextN("danger");
      }
      if (valueO == null) {
        setTextO("danger");
      }
      if (valueP == null) {
        setTextP("danger");
      }
      if (valuePON == null) {
        setTextPON("danger");
      }
      message.error("Complete all the fields");
    } else {
      if (OPERATIONAL_PON) {
        const ovenRef = doc(db, "oven", `${props.serial}`);
        setDoc(ovenRef, { status: "Aprooved" }, { merge: true });
      } else {
        const ovenRef = doc(db, "oven", `${props.serial}`);
        setDoc(ovenRef, { status: "Rejected" }, { merge: true });
      }
      onClickF(
        OPERATIONAL_A_I_I,
        OPERATIONAL_A_I_II,
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
      showModal();
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
          <Text>A) Plug in the oven, as the Display Boots, check for:</Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row>
                <Col xs={23}>
                  <Text>i) Displayed software version</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_A_I_I}
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
                  <Form.Item
                    name={OPERATIONAL_A_I_II}
                    label="Phoniex/HLUI"
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Phoniex/HLUI"
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
                  <Text>iii) VAC, Serial Number HHD/HHS</Text>
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
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text>
            B) Meter to Volts AC: Measure the Voltage at Power Supply Input
            Terminals.
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Form.Item
            name={OPERATIONAL_B_I}
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
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textC}>
            C) Does Voltage & Frequency (on rating plate) match the Ratings on
            traveler?
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
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textD}>
            D) Entein INFO MODE, check that the menu version and firmware are
            correct according to oven spec.
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_D} onChange={onChangeD}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textE}>
            E) Enter "Test Mode", make sure "Faults" are cleared.
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_E} onChange={onChangeE}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textF}>
            F) Make sure the Door says closed when it is closed.
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
            G) Using an insulated screw driver check the EC Cooling Fan by
            bridging between the terminals on the "Close on Rise" switch, which
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
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textH}>
            H) Install jet plates and rack. Ensure the rack oscilates when cold.
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_H_I} onChange={onChangeH}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 22 }} sm={23}>
          <Text>I) Turn oven on. Heat Oven to its preset temperature.</Text>
        </Col>
        <Col xs={23}>
          <Row className={"sub-question"}>
            <Col xs={23}>
              <Row justify="space-around">
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
                    <TimePicker
                      size="small"
                      style={{ width: 150 }}
                      onChange={onChangeI_I}
                      value={valueI_I}
                      format={"HH:mm"}
                    />
                  </Form.Item>
                </Col>
                <Col xs={23}>
                  <Text>
                    ii) Record time when oven reaches preset temperature and
                    menu appears
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
                    <TimePicker
                      size="small"
                      style={{ width: 150 }}
                      value={valueI_II}
                      onChange={onChangeI_II}
                      format={"HH:mm"}
                    />
                  </Form.Item>
                </Col>
                <Col xs={23} sm={14}>
                  <Text>
                    Total Warm-Up time:{" "}
                    {valueI_I
                      ? valueI_II
                        ? parseInt(moment(valueI_II).format("HH")) * 60 +
                          parseInt(moment(valueI_II).format("mm")) -
                          (parseInt(moment(valueI_I).format("HH")) * 60 +
                            parseInt(moment(valueI_I).format("mm")))
                        : ""
                      : ""}{" "}
                    minutes
                  </Text>
                </Col>
                <Col xs={0} sm={8}></Col>
                <Col xs={23} sm={14}>
                  <Text>Allow Oven "heat soak" for 1 hour</Text>
                </Col>
                <Col xs={0} sm={8}></Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textJ}>
            J) Ensure the rack oscilates when oven is hot.
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_J} onChange={onChangeJ}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textK}>
            K) Ensure Blower Fan is rotating counter-clockwise
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_K} onChange={onChangeK}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 22 }} sm={23}>
          <Text>L) Conduct Amp drawn of Heaters A and B</Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="space-around">
                <Col xs={23}>
                  <Text>i) Heater A:</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_L_I}
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
                <Col xs={23}>
                  <Text>ii) Heater B:</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_L_II}
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
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textM}>M) Check the Door Switch</Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_M} onChange={onChangeM}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textN}>N) Install panels.</Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_N} onChange={onChangeN}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textO}>O) Clear all Cook Cycles and Faults.</Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_O} onChange={onChangeO}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textP}>
            P) Check packaged accessories. Do they match oven model checklist?
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Radio.Group name={OPERATIONAL_P} onChange={onChangeP}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 3, offset: 0 }}>
          <Text>NOTES</Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 19, offset: 0 }}>
          <Form.Item name={OPERATIONAL_NOTE}>
            <TextArea autoSize={{ minRows: 3, maxRows: 4 }} maxLength={320} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center" style={{ paddingBottom: "1em" }}>
        <Col xs={5}>
          <Upload {...fileProps}>
            <Button
              loading={imageLoading}
              disabled={upLoadDisabled}
              icon={imageLoading ? "" : <UploadOutlined />}
            >
              Upload
            </Button>
          </Upload>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Text type={textPON}>Aprooved</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group name={OPERATIONAL_PON} onChange={onChangePON}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      {!valuePON ? <ProblemSelection /> : ""}
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
              onOk={handleOk}
              onCancel={handleCancel}
              style={{ backgroundColor: "#2ECC71", borderRadius: "1em" }}
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
