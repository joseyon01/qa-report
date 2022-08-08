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
  Checkbox,
  message,
} from "antd";
import {
  HOT_OVEN_B_DOOR,
  HOT_OVEN_B_SIDES,
  HOT_OVEN_TOP_R,
  HOT_OVEN_TOP_L,
  HOT_OVEN_BOT_R,
  HOT_OVEN_BOT_L,
  HOT_OVEN_RECHECK,
  HOT_OVEN_C,
  HOT_OVEN_D,
  HOT_OVEN_E,
  OVEN_APROVE_OR_NOT,
} from "../../constants/ConstantHotOven";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { ProblemSelection } from "../problemSelection/ProblemSelection";

const db = getFirestore();
const { Text, Title } = Typography;

export const EditHotOven = (props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const ovenSerial = props.serial;
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valueDoor, setValueDoor] = useState(null);
  const [valueSides, setValueSides] = useState(null);
  const [valueTopR, setValueTopR] = useState(null);
  const [valueTopL, setValueTopL] = useState(null);
  const [valueBotR, setValueBotR] = useState(null);
  const [valueBotL, setValueBotL] = useState(null);
  const [valueOvenR, setValueOvenR] = useState(null);
  const [valueC, setValueC] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [valueE, setValueE] = useState(null);
  const [valueAON, setValueAON] = useState(null);
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
  const onChangeRC = (e) => setValueOvenR(e.target.value);
  const onChangeAON = (e) => setValueAON(e.target.value);
  const onChangeDoor = (e) => setValueDoor(e.target.value);
  const onChangeSides = (e) => setValueSides(e.target.value);
  const onChangeTopR = (e) => setValueTopR(e.target.value);
  const onChangeTopL = (e) => setValueTopL(e.target.value);
  const onChangeBotR = (e) => setValueBotR(e.target.value);
  const onChangeBotL = (e) => setValueBotL(e.target.value);
  const onChangeC = (e) => setValueC(e.target.value);
  const onChangeD = (e) => setValueD(e.target.value);
  const onChangeE = (e) => setValueE(e.target.value);
  const handleOk2 = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
    navigate(`/dashboard`);
  };
  const handleCancel2 = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
  };

  const addHotOven = async (values) => {
    setButtonDisabled(true);
    setLoading(true);
    values.OVEN_REPAIRED_OPTIONS == undefined
      ? (values.OVEN_REPAIRED_OPTIONS = [])
      : null;
    const docRef = await setDoc(
      doc(db, "HotOvenInspection", `${props.serial}`),
      {
        HOT_OVEN_B_DOOR: values.HOT_OVEN_B_DOOR,
        HOT_OVEN_B_SIDES: values.HOT_OVEN_B_SIDES,
        HOT_OVEN_TOP_R: values.HOT_OVEN_TOP_R,
        HOT_OVEN_TOP_L: values.HOT_OVEN_TOP_L,
        HOT_OVEN_BOT_R: values.HOT_OVEN_BOT_R,
        HOT_OVEN_BOT_L: values.HOT_OVEN_BOT_L,
        HOT_OVEN_RECHECK: values.HOT_OVEN_RECHECK,
        HOT_OVEN_C: values.HOT_OVEN_C,
        HOT_OVEN_D: values.HOT_OVEN_D,
        HOT_OVEN_E: values.HOT_OVEN_E,
        OVEN_APROVE_OR_NOT: values.OVEN_APROVE_OR_NOT,
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
      }
    )
      .then(async () => {
        const ovenRef = doc(db, "oven", `${props.serial}`);
        await setDoc(
          ovenRef,
          { status: values.OVEN_APROVE_OR_NOT },
          { merge: true }
        );
        await setDoc(
          doc(db, "Excel", `${props.serial}`),
          { status: values.OVEN_APROVE_OR_NOT },
          { merge: true }
        );
        setLoading(false);
        message.success("Final Inspection Completed");
        setModalVisible(true);
      })
      .catch((error) => {
        setLoading(false);
        setButtonDisabled(false);
        message.error("Error sending the Data");
      });
  };
  const getDataOven = async () => {
    try {
      const docRef = doc(db, "HotOvenInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setValueDoor(data?.HOT_OVEN_B_DOOR);
      setValueSides(data?.HOT_OVEN_B_SIDES);
      setValueTopR(data?.HOT_OVEN_TOP_R);
      setValueTopL(data?.HOT_OVEN_TOP_L);
      setValueBotR(data?.HOT_OVEN_BOT_R);
      setValueBotL(data?.HOT_OVEN_BOT_L);
      setValueC(data?.HOT_OVEN_C);
      setValueD(data?.HOT_OVEN_D);
      setValueE(data?.HOT_OVEN_E);
      setValueOvenR(data?.HOT_OVEN_RECHECK);
      setValueAON(data?.OVEN_APROVE_OR_NOT);
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
    } catch (error) {
      console.error("error", error);
    }
  };

  form.setFieldsValue({
    HOT_OVEN_B_DOOR: valueDoor,
    HOT_OVEN_B_SIDES: valueSides,
    HOT_OVEN_TOP_R: valueTopR,
    HOT_OVEN_TOP_L: valueTopL,
    HOT_OVEN_BOT_R: valueBotR,
    HOT_OVEN_BOT_L: valueBotL,
    HOT_OVEN_RECHECK: valueOvenR,
    HOT_OVEN_C: valueC,
    HOT_OVEN_D: 213084,
    HOT_OVEN_E: valueE,
    OVEN_APROVE_OR_NOT: valueAON,
    OVEN_REPAIRED_OPTIONS: valueOptions,
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
      style={{ paddingBottom: "5em", placeholderColor: "green" }}
      onFinish={addHotOven}
    >
      <Row justify="center">
        <Col xs={20} align="center">
          <strong>3) HOT OVEN OPERATIONAL CHECKOUT:</strong>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22}>
          <Text>
            The equipment needed to complete the Oven inspection is a moder 1501
            Survey Meter, three 500 ml beakers with 275 ml +/- 15ml of cold
            water, spring loaded tongs
          </Text>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={22}>
          <Text>A) Door Closed Microwave Leakege Test:</Text>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={22}>
          <Text>
            B) Repeat process checking the IR Element exits, around the
            Magnetrons and waveguide ends, left and right sides. Maximum
            allowale leakage is 0.8mW/cm surrounding the perimeter of the door
            and 0.2mW/cm<sup>2</sup> around the EC and left and right side IR
            Element through hole.
          </Text>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col xs={8} sm={6}>
          <Text>DOOR</Text>
          <Form.Item
            name={HOT_OVEN_B_DOOR}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
            onChange={onChangeDoor}
          >
            <Input type="number" size="small" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={8} sm={6}>
          <Text>Rt & Lt Sides</Text>
          <Form.Item
            name={HOT_OVEN_B_SIDES}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
            onChange={onChangeSides}
          >
            <Input
              type="number"
              placeholder={"mW/cm2"}
              size="small"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 7, offset: 1 }} sm={{ span: 5, offset: 3 }}>
          <Form.Item
            name={HOT_OVEN_TOP_L}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
            style={{ marginBottom: "0" }}
            onChange={onChangeTopL}
          >
            <Input type="number" size="small" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={{ span: 7, offset: 8 }} sm={{ span: 5, offset: 8 }}>
          <Form.Item
            name={HOT_OVEN_TOP_R}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
            style={{ marginBottom: "0" }}
            onChange={onChangeTopR}
          >
            <Input type="number" size="small" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col
          xs={8}
          style={{
            height: "8em",
            border: "dashed 3px #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
          }}
        >
          <Text>Mark and record peak levels.</Text>
        </Col>
      </Row>
      <Row justify="spaceAround">
        <Col xs={{ span: 7, offset: 1 }} sm={{ span: 5, offset: 3 }}>
          <Form.Item
            name={HOT_OVEN_BOT_L}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
            onChange={onChangeBotL}
          >
            <Input type="number" size="small" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={{ span: 7, offset: 8 }} sm={{ span: 5, offset: 8 }}>
          <Form.Item
            name={HOT_OVEN_BOT_R}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
            onChange={onChangeBotR}
          >
            <Input type="number" size="small" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text type="danger">
            Recheck Waveguide Covers ! Reset Cook Count and Accumulation
            Settings !
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Form.Item
            name={HOT_OVEN_RECHECK}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeRC}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22}>
          <Row>
            <Col xs={24}>
              <Form.Item
                label="C) Cook time Count"
                name={HOT_OVEN_C}
                rules={[
                  {
                    required: true,
                    message: "Finish the inspection before submitting it",
                  },
                ]}
                onChange={onChangeC}
              >
                <Input type="number" size="small" style={{ width: 150 }} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Form.Item
                label="D) Survey meter #"
                name={HOT_OVEN_D}
                rules={[
                  {
                    required: true,
                    message: "Finish the inspection before submitting it",
                  },
                ]}
                onChange={onChangeD}
              >
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  disabled
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Form.Item
                label="E) Clear Cook time foults"
                name={HOT_OVEN_E}
                rules={[
                  {
                    required: true,
                    message: "Finish the inspection before submitting it",
                  },
                ]}
                onChange={onChangeE}
              >
                <Input type="number" size="small" style={{ width: 150 }} />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={4}>
          <Form.Item
            name={OVEN_APROVE_OR_NOT}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeAON}>
              <Radio value={"Aprooved"}>Aprooved</Radio>
              <Radio value={"Rejected"}>Rejected</Radio>
              <Radio value={"Repaired"}>Repaired</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      {valueAON == "Rejected" ? (
        <ProblemSelection problems={problems} setProblems={setProblems} />
      ) : valueAON == "Repaired" ? (
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
              Submit
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
