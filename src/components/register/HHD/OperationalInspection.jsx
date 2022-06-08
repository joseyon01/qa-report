import React, { useState, useEffect } from "react";
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

  const onChangeC = () => setTextC("default");
  const onChangeD = () => setTextD("default");
  const onChangeE = () => setTextE("default");
  const onChangeF = () => setTextF("default");
  const onChangeG = () => setTextG("default");
  const onChangeH = () => setTextH("default");
  const onChangeI_I = (e) => setValueI_I(e);
  const onChangeI_II = (e) => setValueI_II(e);
  const onChangeJ = () => setTextJ("default");
  const onChangeK = () => setTextK("default");
  const onChangeM = () => setTextM("default");
  const onChangeN = () => setTextN("default");
  const onChangeO = () => setTextO("default");
  const onChangeP = () => setTextP("default");
  const onChangePON = () => setTextPON("default");

  const fileProps = {
    maxCount: 5,
    onChange({ file, fileList }) {
      file.status = "done";
      file.progres = 100;
    },
    beforeUpload: (file) => {
      return true;
    },
    customRequest: async (e) => {
      const file = e.file;
    },
  };

  function onFinishFailed(errorInfo) {
    if (errorInfo.values.OPERATIONAL_C == null) setTextC("danger");
    if (errorInfo.values.OPERATIONAL_D == null) setTextD("danger");
    if (errorInfo.values.OPERATIONAL_E == null) setTextE("danger");
    if (errorInfo.values.OPERATIONAL_F == null) setTextF("danger");
    if (errorInfo.values.OPERATIONAL_G == null) setTextG("danger");
    if (errorInfo.values.OPERATIONAL_H == null) setTextH("danger");
    if (errorInfo.values.OPERATIONAL_J == null) setTextJ("danger");
    if (errorInfo.values.OPERATIONAL_K == null) setTextK("danger");
    if (errorInfo.values.OPERATIONAL_M == null) setTextM("danger");
    if (errorInfo.values.OPERATIONAL_N == null) setTextN("danger");
    if (errorInfo.values.OPERATIONAL_O == null) setTextO("danger");
    if (errorInfo.values.OPERATIONAL_P == null) setTextP("danger");
    if (errorInfo.values.OPERATIONAL_PON == null) setTextPON("danger");
    message.error("Complete all the fields");
  }

  const addOperational = async (values) => {
    {
      values.OPERATIONAL_NOTE === undefined
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

    setButtonDisabled(true);
    setLoading(true);
    let imageArr = values.image?.fileList;
    imageArr?.map(async (img) => {
      let i = imageArr.indexOf(img);
      const name = `image-${i}`;
      const storageRef = ref(storage, `${props.serial}/image-${i}`);
      await uploadBytesResumable(storageRef, img.originFileObj);
      const urlRef = await getDownloadURL(storageRef);
      const ovenRef = doc(db, "Images", `${props.serial}`);
      await setDoc(ovenRef, { [i]: `${urlRef}` }, { merge: true });
    });
    await setDoc(doc(db, "OperationalInspection", `${props.serial}`), {
      OPERATIONAL_A_I_I: values.OPERATIONAL_A_I_I,
      OPERATIONAL_A_I_II: values.OPERATIONAL_A_I_II,
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
        if (values.OPERATIONAL_PON) {
          const ovenRef = doc(db, "oven", `${props.serial}`);
          setDoc(ovenRef, { status: "Aprooved" }, { merge: true });
          setDoc(
            doc(db, "Excel", `${props.serial}`),
            { status: "Aprooved" },
            { merge: true }
          );
        } else {
          const ovenRef = doc(db, "oven", `${props.serial}`);
          setDoc(ovenRef, { status: "Rejected" }, { merge: true });
          setDoc(
            doc(db, "Excel", `${props.serial}`),
            { status: "Rejected" },
            { merge: true }
          );
        }
        await setDoc(
          doc(db, "Excel", `${props.serial}`),
          {
            voltage: values.OPERATIONAL_A_II,
            ampsA: values.OPERATIONAL_L_I,
            ampsB: values.OPERATIONAL_L_II,
            sageFrimware: values.OPERATIONAL_A_I_I,
            phoniexFrimware: values.OPERATIONAL_A_I_II,
            notes: values.OPERATIONAL_NOTE,
            actionTaken: "--",
          },
          { merge: true }
        )
          .then(() => {
            setLoading(false);
            message.success("Operational Inspection Completed");
            showModal();
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

  const [form] = Form.useForm();
  form.setFieldsValue({});
  return (
    <Form
      form={form}
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
      onFinish={addOperational}
      initialValues={{
        OPERATIONAL_A_III: props.serial,
      }}
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
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textD}>
            D) Entein INFO MODE, check that the menu version and firmware are
            correct according to oven spec.
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
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
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textE}>
            E) Enter "Test Mode", make sure "Faults" are cleared.
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
            <Radio.Group onChange={onChangeE}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
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
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textG}>
            G) Using an insulated screw driver check the EC Cooling Fan by
            bridging between the terminals on the "Close on Rise" switch, which
            controls the EC cooling fan.
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
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
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textH}>
            H) Install jet plates and rack. Ensure the rack oscilates when cold.
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
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
                    Total Warm-Up time:
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
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textK}>
            K) Ensure Blower Fan is rotating counter-clockwise
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
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
          <Form.Item
            name={OPERATIONAL_M}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group name={OPERATIONAL_M} onChange={onChangeM}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textN}>N) Install panels.</Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
          <Form.Item
            name={OPERATIONAL_N}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group name={OPERATIONAL_N} onChange={onChangeN}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textO}>O) Clear all Cook Cycles and Faults.</Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
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
      <Row justify="center">
        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 18, offset: 0 }}>
          <Text type={textP}>
            P) Check packaged accessories. Do they match oven model checklist?
          </Text>
        </Col>
        <Col xs={{ span: 23, offset: 1 }} sm={4}>
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
          <Form.Item
            name="image"
            rules={[{ required: false, message: "Please upload your file!" }]}
          >
            <Upload {...fileProps}>
              <Button
                loading={imageLoading}
                disabled={upLoadDisabled}
                icon={imageLoading ? "" : <UploadOutlined />}
              >
                Upload
              </Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Text type={textPON}>Aprooved</Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item
            name={OPERATIONAL_PON}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group name={OPERATIONAL_PON} onChange={onChangePON}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      {valuePON == false ? (
        <ProblemSelection problems={problems} setProblems={setProblems} />
      ) : (
        ""
      )}
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
