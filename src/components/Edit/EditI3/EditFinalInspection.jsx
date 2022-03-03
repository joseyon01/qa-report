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

export const EditFinalInspection = (props) => {
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
    const docRef = await setDoc(doc(db, "FinalInspection", `${props.serial}`), {
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
    });
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
      const docRef = doc(db, "FinalInspection", `${ovenSerial}`);
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
  form.setFieldsValue({
    HOT_OVEN_B_DOOR: valueDoor,
    HOT_OVEN_B_SIDES: valueSides,
    HOT_OVEN_TOP_R: valueTopR,
    HOT_OVEN_TOP_L: valueTopL,
    HOT_OVEN_BOT_R: valueBotR,
    HOT_OVEN_BOT_L: valueBotL,
    HOT_OVEN_RECHECK: valueOvenR,
    HOT_OVEN_C: valueC,
    HOT_OVEN_D: valueD,
    HOT_OVEN_E: valueE,
    OVEN_APROVE_OR_NOT: valueAON,
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
      <Divider orientation="rigth">4) FINAL INSPECTION</Divider>
      <Row>
        <Col xs={24}>
          <Text>
            The equipment needed to complete the Oven inspection is a model 1501
            Survey Meter, three 500ml beakers with 275 ml +/- 15ml of cold
            water, spring loaded tongs
          </Text>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={20}>
          <Text>
            A) Door Closed Microwave Leakege Test: Whith the oven warmed to
            operating temperature, use the "UNIT" (9428) then the "up arrow" to
            access the second screen where the "MW LEAKAGE" resides on the menu
            to give time to run the mMagnetron independently for 45 seconds to
            perform the leakage test. the test can be an indicator of an oven
            which has problems containing the leakage. the 275ml beakers of
            water are for simulating a low level load for the Microwave system.
            The chart below is to indicate the twi ir three regions of greatest
            leakage. <strong>Indicate</strong> the position with an "X" and
            record the peak in Mw/cm<sup>2</sup> as read from the meter while
            performing the test.
          </Text>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={24}>
          <Text>
            Once the oven is set to run the test, set up the survey meter and
            place into the lowest operating range of 2mW/cm<sup>2</sup>, place
            the beaker of water in the oven and close the door. Next, activate
            the mivrowave and slowly move the wand of the survey meter, making
            sure toy are holding it perpendicular to the pag as you traverse the
            perimeter of the door at a slow pace of 1.25 inches/second.
          </Text>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={24}>
          <Text>
            <strong>
              Maximum allowable leakage is 0.8mW/cm<sup>2</sup>
            </strong>{" "}
            surrounding the perimeter of the door and{" "}
            <strong>
              0.2mW/cm<sup>2</sup>
            </strong>{" "}
            around the EC and left and rigth side through hole.
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
            <Input type="number" size="small" style={{ width: 150 }} required />
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
              size="small"
              placeholder={"mW/cm2"}
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
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form.Item>
        </Col>
        <Col xs={3} offset={10}>
          <Form.Item
            name={HOT_OVEN_TOP_R}
            value={valueTopR}
            onChange={onChangeTopR}
          >
            <Input type="number" size="small" style={{ width: 150 }} required />
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
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form.Item>
        </Col>
        <Col xs={3} offset={10}>
          <Form.Item
            name={HOT_OVEN_BOT_R}
            value={valueBotR}
            onChange={onChangeBotR}
          >
            <Input type="number" size="small" style={{ width: 150 }} required />
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
                label="C) Meter:"
                name={HOT_OVEN_C}
                value={valueC}
                onChange={onChangeC}
              >
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Form.Item
                label="D) Counter and faults:"
                name={HOT_OVEN_D}
                value={valueD}
                onChange={onChangeD}
              >
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Form.Item
                label="E) Coock:"
                name={HOT_OVEN_E}
                value={valueE}
                onChange={onChangeE}
              >
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  required
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