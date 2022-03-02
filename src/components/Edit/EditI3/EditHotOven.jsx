import React from "react";
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
import QaReportFirebase from "../../../../Credentials";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
const firestore = getFirestore(QaReportFirebase);
const auth = getAuth(QaReportFirebase);
const db = getFirestore();
const { Text, Title } = Typography;

export const EditHotOven = (props) => {
  const navigate = useNavigate();
  const ovenSerial = props.serial;
  const [buttonDisabled, setButtonDisabled] = useState(null);
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

  const onChangeRC = (e) => {
    setValueOvenR(e.target.value);
  };
  const onChangeAON = (e) => {
    setValueAON(e.target.value);
  };
  const onChangeDoor = (e) => {
    setValueDoor(e.target.value);
  };
  const onChangeSides = (e) => {
    setValueSides(e.target.value);
  };
  const onChangeTopR = (e) => {
    setValueTopR(e.target.value);
  };
  const onChangeTopL = (e) => {
    setValueTopL(e.target.value);
  };
  const onChangeBotR = (e) => {
    setValueBotL(e.target.value);
  };
  const onChangeBotL = (e) => {
    setValueBotL(e.target.value);
  };
  const onChangeC = (e) => {
    setValueC(e.target.value);
  };
  const onChangeD = (e) => {
    setValueD(e.target.value);
  };
  const onChangeE = (e) => {
    setValueE(e.target.value);
  };

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
    navigate(`/dashboard`);
  };

  const handleCancel2 = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
  };
  const [loading, setLoading] = useState(false);

  async function onClickF(
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
    OVEN_APROVE_OR_NOT
  ) {
    setButtonDisabled(true);
    setLoading(true);
    const docRef = await setDoc(
      doc(db, "HotOvenInspection", `${props.serial}`),
      {
        HOT_OVEN_B_DOOR: HOT_OVEN_B_DOOR,
        HOT_OVEN_B_SIDES: HOT_OVEN_B_SIDES,
        HOT_OVEN_TOP_R: HOT_OVEN_TOP_R,
        HOT_OVEN_TOP_L: HOT_OVEN_TOP_L,
        HOT_OVEN_BOT_R: HOT_OVEN_BOT_R,
        HOT_OVEN_BOT_L: HOT_OVEN_BOT_L,
        HOT_OVEN_RECHECK: HOT_OVEN_RECHECK,
        HOT_OVEN_C: HOT_OVEN_C,
        HOT_OVEN_D: HOT_OVEN_D,
        HOT_OVEN_E: HOT_OVEN_E,
        OVEN_APROVE_OR_NOT: OVEN_APROVE_OR_NOT,
      }
    );
    setLoading(false);
  }
  const [form] = Form.useForm();
  async function addHotOven(values, arrayOvens) {
    const HOT_OVEN_B_DOOR = values.HOT_OVEN_B_DOOR;
    const HOT_OVEN_B_SIDES = values.HOT_OVEN_B_SIDES;
    const HOT_OVEN_TOP_R = values.HOT_OVEN_TOP_R;
    const HOT_OVEN_TOP_L = values.HOT_OVEN_TOP_L;
    const HOT_OVEN_BOT_R = values.HOT_OVEN_BOT_R;
    const HOT_OVEN_BOT_L = values.HOT_OVEN_BOT_L;
    const HOT_OVEN_RECHECK = valueOvenR;
    const HOT_OVEN_C = values.HOT_OVEN_C;
    const HOT_OVEN_D = values.HOT_OVEN_D;
    const HOT_OVEN_E = values.HOT_OVEN_E;
    const OVEN_APROVE_OR_NOT = valueAON;
    if (OVEN_APROVE_OR_NOT) {
      const ovenRef = doc(db, "oven", `${props.serial}`);
      setDoc(ovenRef, { status: "Aprooved" }, { merge: true });
    } else {
      const ovenRef = doc(db, "oven", `${props.serial}`);
      setDoc(ovenRef, { status: "Rejected" }, { merge: true });
    }
    if (HOT_OVEN_RECHECK == null || OVEN_APROVE_OR_NOT == null) {
      showModal();
    } else {
      onClickF(
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
        OVEN_APROVE_OR_NOT
      );
      showModal2();
    }
  }
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
      message.success("Load complete");
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    getDataOven();
  }, []);
  return (
    <Form
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em", placeholderColor: "green" }}
      onFinish={addHotOven}
    >
      <Divider orientation="rigth">3) HOT OVEN OPERATIONAL CHECKOUT:</Divider>
      <Row>
        <Col xs={24}>
          <Text>
            The equipment needed to complete the Oven inspection is a moder 1501
            Survey Meter, three 500 ml beakers with 275 ml +/- 15ml of cold
            water, spring loaded tongs
          </Text>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={20}>
          <Text>A) Door Closed Microwave Leakege Test:</Text>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={24}>
          <Text>
            B) Repeat process checking the IR Element exits, around the
            Magnetrons and waveguide ends, left and right sides. Maximum
            allowale leakage is 0.8mW/cm surrounding the perimeter of the door
            and 0.2mW/cm<sup>2</sup> around the EC and left and right side IR
            Element through hole.
          </Text>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Item
            name={HOT_OVEN_B_DOOR}
            label="DOOR"
            value={valueDoor}
            onChange={onChangeDoor}
          >
            <Input
              type="number"
              size="small"
              style={{ width: 150 }}
              required
              placeholder={valueDoor ? valueDoor : ""}
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item
            name={HOT_OVEN_B_SIDES}
            label="Rt & Lt Sides"
            value={valueSides}
            onChange={onChangeSides}
          >
            <Input
              type="number"
              placeholder={valueSides ? valueSides : "mW/cm2"}
              size="small"
              style={{ width: 150 }}
              required
            />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="spaceAround">
        <Col xs={3} offset={3}>
          <Form.Item
            name={HOT_OVEN_TOP_L}
            value={valueTopL}
            onChange={onChangeTopL}
          >
            <Input
              type="number"
              size="small"
              style={{ width: 150 }}
              required
              placeholder={valueTopL ? valueTopL : ""}
            />
          </Form.Item>
        </Col>
        <Col xs={3} offset={10}>
          <Form.Item
            name={HOT_OVEN_TOP_R}
            value={valueTopR}
            onChange={onChangeTopR}
          >
            <Input
              type="number"
              size="small"
              style={{ width: 150 }}
              required
              placeholder={valueTopR ? valueTopR : ""}
            />
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
        <Col xs={3} offset={3}>
          <Form.Item
            name={HOT_OVEN_BOT_L}
            value={valueBotL}
            onChange={onChangeBotL}
          >
            <Input
              type="number"
              size="small"
              style={{ width: 150 }}
              required
              placeholder={valueBotL ? valueBotL : ""}
            />
          </Form.Item>
        </Col>
        <Col xs={3} offset={10}>
          <Form.Item
            name={HOT_OVEN_BOT_R}
            value={valueBotR}
            onChange={onChangeBotR}
          >
            <Input
              type="number"
              size="small"
              style={{ width: 150 }}
              required
              placeholder={valueBotR ? valueBotR : ""}
            />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text type="danger">
            Recheck Waveguide Covers ! Reset Cook Count and Accumulation
            Settings !
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group
            name={HOT_OVEN_RECHECK}
            onChange={onChangeRC}
            value={valueOvenR}
          >
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Row>
            <Col xs={24}>
              <Form.Item
                label="C) Cook time Count"
                name={HOT_OVEN_C}
                value={valueC}
                onChange={onChangeC}
              >
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  required
                  placeholder={valueC ? valueC : ""}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Form.Item
                label="D) Survey meter #"
                name={HOT_OVEN_D}
                value={valueD}
                onChange={onChangeD}
              >
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  required
                  placeholder={valueD ? valueD : ""}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Form.Item
                label="E) Clear Cook time foults"
                name={HOT_OVEN_E}
                value={valueE}
                onChange={onChangeE}
              >
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  required
                  placeholder={valueE ? valueE : ""}
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={10}>
          <Form.Item label="APROVED">
            <Radio.Group
              name={OVEN_APROVE_OR_NOT}
              onChange={onChangeAON}
              value={valueAON}
            >
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              block
              disabled={buttonDisabled}
            >
              Submit
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
