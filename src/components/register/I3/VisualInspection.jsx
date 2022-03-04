import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Typography,
  Radio,
  Divider,
  Button,
  Modal,
} from "antd";
const { Text, Title } = Typography;
import {
  VISUALQA,
  VISUALQB,
  VISUALQC,
  VISUALQD,
  VISUALQE,
  VISUALQF,
  VISUALQG,
} from "../../constants/ConstVisualInspection";
import QaReportFirebase from "../../../../Credentials";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const firestore = getFirestore(QaReportFirebase);
const auth = getAuth(QaReportFirebase);
const db = getFirestore();

const MySwal = withReactContent(Swal);

export const VisualInspection = (props) => {
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
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  async function onClickF(
    VISUALQA,
    VISUALQB,
    VISUALQC,
    VISUALQD,
    VISUALQE,
    VISUALQF,
    VISUALQG
  ) {
    setButtonDisabled(true);
    setLoading(true);
    const docRef = await setDoc(
      doc(db, "VisualInspection", `${props.serial}`),
      {
        VISUALQA: VISUALQA,
        VISUALQB: VISUALQB,
        VISUALQC: VISUALQC,
        VISUALQD: VISUALQD,
        VISUALQE: VISUALQE,
        VISUALQF: VISUALQF,
        VISUALQG: VISUALQG,
      }
    );
    setLoading(false);
  }

  const [form] = Form.useForm();
  const [valueA, setValueA] = useState(null);
  const onChangeA = (e) => {
    setValueA(e.target.value);
  };
  const [valueB, setValueB] = useState(null);
  const onChangeB = (e) => {
    setValueB(e.target.value);
  };
  const [valueC, setValueC] = useState(null);
  const onChangeC = (e) => {
    setValueC(e.target.value);
  };
  const [valueD, setValueD] = useState(null);
  const onChangeD = (e) => {
    setValueD(e.target.value);
  };
  const [valueE, setValueE] = useState(null);
  const onChangeE = (e) => {
    setValueE(e.target.value);
  };
  const [valueF, setValueF] = useState(null);
  const onChangeF = (e) => {
    setValueF(e.target.value);
  };
  const [valueG, setValueG] = useState(null);
  const onChangeG = (e) => {
    setValueG(e.target.value);
  };
  function addVisualInspection() {
    const VISUALQA = valueA;
    const VISUALQB = valueB;
    const VISUALQC = valueC;
    const VISUALQD = valueD;
    const VISUALQE = valueE;
    const VISUALQF = valueF;
    const VISUALQG = valueG;
    if (
      valueA == null ||
      valueB == null ||
      valueC == null ||
      valueD == null ||
      valueE == null ||
      valueF == null ||
      valueG == null
    ) {
      showModal();
    } else {
      onClickF(
        VISUALQA,
        VISUALQB,
        VISUALQC,
        VISUALQD,
        VISUALQE,
        VISUALQF,
        VISUALQG
      );
      showModal2();
    }
  }
  return (
    <Form
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
      onFinish={addVisualInspection}
    >
      <Row justify="center">
        <Col xs={20} align="center">
          <strong>1) VISUAL INSPECTION: DO NOT APPLY POWER TO OVEN!!!</strong>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            A) Check Consumables and Accessories to comply with proper Packaging
            Kit. Remove Rack, Left, Right and Top panels. Confirm proper
            Schematic is on RS Panel.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group required name={VISUALQA} onChange={onChangeA}>
            <Radio name={VISUALQA} value={true}>
              ACC
            </Radio>
            <Radio name={VISUALQA} value={false}>
              NO ACC
            </Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            B) Remove contents of oven cavity and insure the{" "}
            <strong>Grease pan</strong> is in place
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group name={VISUALQB} required onChange={onChangeB}>
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
            C){" "}
            <strong>
              Check wiring CC & IR Heaters, Mags 1 & 2, Dual SSR, Mag EC Fans,
              Convection Blower, Hi-Limit and Control ciruits.
            </strong>
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group name={VISUALQC} required onChange={onChangeC}>
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
            D) Check for loose hardware and debris on floor of the oven cabinet.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group name={VISUALQD} required onChange={onChangeD}>
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
            E) Check for <strong>Door flush</strong> to the{" "}
            <strong>Oven Flange</strong> and{" "}
            <strong>Door open and close smoothly (no pinching on bottom</strong>
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group name={VISUALQE} required onChange={onChangeE}>
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
            F) Are the CC Heater Terminal Posts insulated with Silicone Caps and
            Mica Disks and terminals are torque to 33lbs-?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group name={VISUALQF} required onChange={onChangeF}>
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
            G) Split open insulation over Hi-Limit Capillary, is it mounted in
            the correct position?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group name={VISUALQG} required onChange={onChangeG}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} sm={18}>
          <div style={{ paddingTop: "1em" }}>
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
                onOk={handleCancel2}
                style={{ backgroundColor: "#2ECC71", borderRadius: "1em" }}
                onCancel={handleCancel2}
              >
                <Title level={3}>OK..!</Title>
                <Text>The data has been successfully stored</Text>
              </Modal>
              <Modal
                visible={isModalVisible}
                onOk={handleOk}
                style={{ backgroundColor: "#E74C3C", borderRadius: "1em" }}
                onCancel={handleCancel}
              >
                <Title level={3}>Error..!</Title>
                <Text>All fields are required</Text>
              </Modal>
            </Form.Item>
          </div>
        </Col>
      </Row>
    </Form>
  );
};
