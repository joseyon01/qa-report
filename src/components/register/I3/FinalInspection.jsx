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
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
const firestore = getFirestore(QaReportFirebase);
const auth = getAuth(QaReportFirebase);
const db = getFirestore();
const { Text, Title } = Typography;

export const FinalInspection = (props) => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [valueRC, setValueRC] = useState(null);
  const [valueAON, setValueAON] = useState(null);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
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

  const onChangeRC = (e) => {
    setValueRC(e.target.value);
  };
  const onChangeAON = (e) => {
    setValueAON(e.target.value);
  };
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
    const HOT_OVEN_RECHECK = valueRC;
    const HOT_OVEN_C = values.HOT_OVEN_C;
    const HOT_OVEN_D = values.HOT_OVEN_D;
    const HOT_OVEN_E = values.HOT_OVEN_E;
    const OVEN_APROVE_OR_NOT = valueAON;

    if (HOT_OVEN_RECHECK == null || OVEN_APROVE_OR_NOT == null) {
      showModal();
    } else {
      if (OVEN_APROVE_OR_NOT) {
        const ovenRef = doc(db, "oven", `${props.serial}`);
        setDoc(ovenRef, { status: "Aprooved" }, { merge: true });
      } else {
        const ovenRef = doc(db, "oven", `${props.serial}`);
        setDoc(ovenRef, { status: "Rejected" }, { merge: true });
      }

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
  return (
    <Form
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
      onFinish={addHotOven}
    >
      <Row justify="center">
        <Col xs={20} align="center">
          <strong>4) FINAL INSPECTION</strong>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 22, offset: 1 }} sm={24}>
          <Text>
            The equipment needed to complete the Oven inspection is a model 1501
            Survey Meter, three 500ml beakers with 275 ml +/- 15ml of cold
            water, spring loaded tongs
          </Text>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={{ span: 22, offset: 1 }} sm={24}>
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
        <Col xs={{ span: 22, offset: 1 }} sm={24}>
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
        <Col xs={{ span: 22, offset: 1 }} sm={24}>
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
      <Row justify="space-around">
        <Col xs={8} sm={6}>
          <Form.Item name={HOT_OVEN_B_DOOR} label="DOOR">
            <Input
              type="number"
              size="small"
              style={{ width: "100%" }}
              required
            />
          </Form.Item>
        </Col>
        <Col xs={8} sm={6}>
          <Form.Item name={HOT_OVEN_B_SIDES} label="Rt & Lt Sides">
            <Input
              type="number"
              placeholder={"mW/cm2"}
              size="small"
              style={{ width: "100%" }}
              required
            />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="spaceAround">
        <Col xs={{ span: 7, offset: 1 }} sm={{ span: 5, offset: 3 }}>
          <Form.Item name={HOT_OVEN_TOP_L} style={{ marginBottom: "0" }}>
            <Input
              type="number"
              size="small"
              style={{ width: "100%" }}
              required
            />
          </Form.Item>
        </Col>
        <Col xs={{ span: 7, offset: 8 }} sm={{ span: 5, offset: 8 }}>
          <Form.Item name={HOT_OVEN_TOP_R} style={{ marginBottom: "0" }}>
            <Input
              type="number"
              size="small"
              style={{ width: "100%" }}
              required
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col
          xs={{ span: 8 }}
          sm
          style={{
            height: "8em",
            width: "100%",
            border: "dashed 3px #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            margin: "0",
          }}
        >
          <Text>Mark and record peak levels.</Text>
        </Col>
      </Row>
      <Row justify="spaceAround">
        <Col xs={{ span: 7, offset: 1 }} sm={{ span: 5, offset: 3 }}>
          <Form.Item name={HOT_OVEN_BOT_L}>
            <Input
              type="number"
              size="small"
              style={{ width: "100%" }}
              required
            />
          </Form.Item>
        </Col>
        <Col xs={{ span: 7, offset: 8 }} sm={{ span: 5, offset: 8 }}>
          <Form.Item name={HOT_OVEN_BOT_R}>
            <Input
              type="number"
              size="small"
              style={{ width: "100%" }}
              required
            />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 22, offset: 1 }} sm={16}>
          <Text type="danger">
            Recheck Waveguide Covers ! Reset Cook Count and Accumulation
            Settings !
          </Text>
        </Col>
        <Col xs={{ span: 22, offset: 1 }} sm={4}>
          <Radio.Group name={HOT_OVEN_RECHECK} onChange={onChangeRC}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={22} sm={24}>
          <Row>
            <Col xs={24}>
              <Form.Item label="C) Meter:" name={HOT_OVEN_C}>
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
              <Form.Item label="D) Counter and faults:" name={HOT_OVEN_D}>
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
              <Form.Item label="E) Coock:" name={HOT_OVEN_E}>
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
            <Radio.Group name={OVEN_APROVE_OR_NOT} onChange={onChangeAON}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
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
              onCancel={handleCancel}
              style={{ backgroundColor: "#E74C3C", borderRadius: "1em" }}
            >
              <Title level={3}>Error..!</Title>
              <Text>All fields are required</Text>
            </Modal>
            <Modal
              visible={modalVisible}
              onOk={handleOk2}
              onCancel={handleCancel2}
              style={{ backgroundColor: "#2ECC71", borderRadius: "1em" }}
            >
              <Title level={3}>OK..!</Title>
              <Text>The data has been successfully stored</Text>
              <br />
              <Text>Go to dashboard</Text>
            </Modal>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
