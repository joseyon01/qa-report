import React, { useState, useEffect } from "react";
import { Form, Row, Col, Typography, Radio, Button, Modal } from "antd";
const { Text, Title } = Typography;
import {
  VISUALQA,
  VISUALQB,
  VISUALQC,
  VISUALQD,
  VISUALQE,
  VISUALQF,
  VISUALQG,
  VISUALQH,
} from "../../constants/ConstVisualInspection";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
const db = getFirestore();

export const EditVisualInspection = (props) => {
  const ovenSerial = props.serial;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [valueA, setValueA] = useState(null);
  const [valueB, setValueB] = useState(null);
  const [valueC, setValueC] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [valueE, setValueE] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueG, setValueG] = useState(null);
  const [valueH, setValueH] = useState(null);
  const onChangeA = (e) => setValueA(e.target.value);
  const onChangeB = (e) => setValueB(e.target.value);
  const onChangeC = (e) => setValueC(e.target.value);
  const onChangeD = (e) => setValueD(e.target.value);
  const onChangeE = (e) => setValueE(e.target.value);
  const onChangeF = (e) => setValueF(e.target.value);
  const onChangeG = (e) => setValueG(e.target.value);
  const onChangeH = (e) => setValueH(e.target.value);
  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);
  const showModal2 = () => setModalVisible(true);
  const handleOk2 = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
  };

  const handleCancel2 = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
  };

  async function onClickF(
    VISUALQA,
    VISUALQB,
    VISUALQC,
    VISUALQD,
    VISUALQE,
    VISUALQF,
    VISUALQG,
    VISUALQH
  ) {
    setButtonDisabled(true);
    setLoading(true);
    const docRef = await setDoc(doc(db, "VisualInspection", `${ovenSerial}`), {
      VISUALQA: VISUALQA,
      VISUALQB: VISUALQB,
      VISUALQC: VISUALQC,
      VISUALQD: VISUALQD,
      VISUALQE: VISUALQE,
      VISUALQF: VISUALQF,
      VISUALQG: VISUALQG,
      VISUALQH: VISUALQH,
    });
    setLoading(false);
  }

  const getDataOven = async () => {
    try {
      const docRef = doc(db, "VisualInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if (valueA == null) {
        setValueA(data?.VISUALQA);
        setValueB(data?.VISUALQB);
        setValueC(data?.VISUALQC);
        setValueD(data?.VISUALQD);
        setValueE(data?.VISUALQE);
        setValueF(data?.VISUALQF);
        setValueG(data?.VISUALQG);
        setValueH(data?.VISUALQH);
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    getDataOven();
  }, []);
  function addVisualInspection() {
    const VISUALQA = valueA;
    const VISUALQB = valueB;
    const VISUALQC = valueC;
    const VISUALQD = valueD;
    const VISUALQE = valueE;
    const VISUALQF = valueF;
    const VISUALQG = valueG;
    const VISUALQH = valueH;
    if (
      valueA == null ||
      valueB == null ||
      valueC == null ||
      valueD == null ||
      valueE == null ||
      valueF == null ||
      valueG == null ||
      valueH == null
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
        VISUALQG,
        VISUALQH
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
          <Radio.Group
            required
            name={VISUALQA}
            onChange={onChangeA}
            value={valueA}
          >
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
            B) Remove the Bubble wrap and insert the Oven Rack insuring flush
            contact with all surfaces. Check IR Element lies flat and
            Clips/Standoffs are tight and in correct position. Check Waveguide
            Covers (at the ends only) by squeezing with hands for looseness.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group
              name={VISUALQB}
              required
              onChange={onChangeB}
              value={valueB}
            >
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
            C) Check wiring CC & IR Heaters, Mags 1 & 2, Dual SSR, Mag EC Fans,
            Convection Blower, Hi-Limit and Control ciruits.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group
              name={VISUALQC}
              required
              onChange={onChangeC}
              value={valueC}
            >
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
            <Radio.Group
              name={VISUALQD}
              required
              onChange={onChangeD}
              value={valueD}
            >
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
            E) Check for Door flush to the Oven Flange (no pinching on bottom),
            door clears louvered panel?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group
              name={VISUALQE}
              required
              onChange={onChangeE}
              value={valueE}
            >
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
            Mica Disks?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group
              name={VISUALQF}
              required
              onChange={onChangeF}
              value={valueF}
            >
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
            <Radio.Group
              name={VISUALQG}
              required
              onChange={onChangeG}
              value={valueG}
            >
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            H) Are Interlock Switches adjusted with actuatorrotation if door is
            closed slowly, are the switch arms .020'' from switch body? is the
            Actuator at 87° +/- 2°?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group
              name={VISUALQH}
              required
              onChange={onChangeH}
              value={valueH}
            >
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