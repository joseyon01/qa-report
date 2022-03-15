import React, { useState } from "react";
import { Form, Row, Col, Typography, Radio, Button, Modal, Input } from "antd";
const { Text, Title } = Typography;
import {
  VISUALQA,
  VISUALQB_1,
  VISUALQB_2,
  VISUALQB_3,
  VISUALQB_4,
  VISUALQB_5,
  VISUALQB_6,
  VISUALQB_7,
  VISUALQC,
  VISUALQD,
  VISUALQE,
  VISUALQF,
  VISUALQG,
  VISUALQH,
  VISUALQI_1,
  VISUALQI_2,
  VISUALQI_3,
  VISUALQI_4,
  VISUALQI_5,
  VISUALQJ,
} from "../../constants/ConstVisualInspection";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore();

export const VisualInspection = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [valueA, setValueA] = useState(null);
  const [valueB_1, setValueB_1] = useState(null);
  const [valueB_2, setValueB_2] = useState(null);
  const [valueB_3, setValueB_3] = useState(null);
  const [valueB_4, setValueB_4] = useState(null);
  const [valueB_5, setValueB_5] = useState(null);
  const [valueB_6, setValueB_6] = useState(null);
  const [valueB_7, setValueB_7] = useState(null);
  const [valueC, setValueC] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [valueE, setValueE] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueG, setValueG] = useState(null);
  const [valueH, setValueH] = useState(null);
  const [valueI_1, setValueI_1] = useState(null);
  const [valueI_2, setValueI_2] = useState(null);
  const [valueI_3, setValueI_3] = useState(null);
  const [valueI_4, setValueI_4] = useState(null);
  const [valueI_5, setValueI_5] = useState(null);
  const [valueJ, setValueJ] = useState(null);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);
  const showModal2 = () => setModalVisible(true);
  const onChangeA = (e) => setValueA(e.target.value);
  const onChangeB_1 = (e) => setValueB_1(e.target.value);
  const onChangeB_2 = (e) => setValueB_2(e.target.value);
  const onChangeB_3 = (e) => setValueB_3(e.target.value);
  const onChangeB_4 = (e) => setValueB_4(e.target.value);
  const onChangeB_5 = (e) => setValueB_5(e.target.value);
  const onChangeB_6 = (e) => setValueB_6(e.target.value);
  const onChangeB_7 = (e) => setValueB_7(e.target.value);
  const onChangeC = (e) => setValueC(e.target.value);
  const onChangeD = (e) => setValueD(e.target.value);
  const onChangeE = (e) => setValueE(e.target.value);
  const onChangeF = (e) => setValueF(e.target.value);
  const onChangeG = (e) => setValueG(e.target.value);
  const onChangeH = (e) => setValueH(e.target.value);
  const onChangeI_1 = (e) => setValueI_1(e.target.value);
  const onChangeI_2 = (e) => setValueI_2(e.target.value);
  const onChangeI_3 = (e) => setValueI_3(e.target.value);
  const onChangeI_4 = (e) => setValueI_4(e.target.value);
  const onChangeI_5 = (e) => setValueI_5(e.target.value);
  const onChangeJ = (e) => setValueJ(e.target.value);

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
    VISUALQB_1,
    VISUALQB_2,
    VISUALQB_3,
    VISUALQB_4,
    VISUALQB_5,
    VISUALQB_6,
    VISUALQB_7,
    VISUALQC,
    VISUALQD,
    VISUALQE,
    VISUALQF,
    VISUALQG,
    VISUALQH,
    VISUALQI_1,
    VISUALQI_2,
    VISUALQI_3,
    VISUALQI_4,
    VISUALQI_5,
    VISUALQJ
  ) {
    setButtonDisabled(true);
    setLoading(true);
    const docRef = await setDoc(
      doc(db, "VisualInspection", `${props.serial}`),
      {
        VISUALQA: VISUALQA,
        VISUALQB_1: VISUALQB_1,
        VISUALQB_2: VISUALQB_2,
        VISUALQB_3: VISUALQB_3,
        VISUALQB_4: VISUALQB_4,
        VISUALQB_5: VISUALQB_5,
        VISUALQB_6: VISUALQB_6,
        VISUALQB_7: VISUALQB_7,
        VISUALQC: VISUALQC,
        VISUALQD: VISUALQD,
        VISUALQE: VISUALQE,
        VISUALQF: VISUALQF,
        VISUALQG: VISUALQG,
        VISUALQH: VISUALQH,
        VISUALQI_1: VISUALQI_1,
        VISUALQI_2: VISUALQI_2,
        VISUALQI_3: VISUALQI_3,
        VISUALQI_4: VISUALQI_4,
        VISUALQI_5: VISUALQI_5,
        VISUALQJ: VISUALQJ,
      }
    );
    setLoading(false);
  }

  function addVisualInspection(values) {
    const VISUALQA = valueA;
    const VISUALQB_1 = valueB_1;
    const VISUALQB_2 = valueB_2;
    const VISUALQB_3 = valueB_3;
    const VISUALQB_4 = valueB_4;
    const VISUALQB_5 = valueB_5;
    const VISUALQB_6 = valueB_6;
    const VISUALQB_7 = valueB_7;
    const VISUALQC = valueC;
    const VISUALQD = valueD;
    const VISUALQE = valueE;
    const VISUALQF = valueF;
    const VISUALQG = valueG;
    const VISUALQH = valueH;
    const VISUALQI_1 = values.VISUALQI_1;
    const VISUALQI_2 = values.VISUALQI_2;
    const VISUALQI_3 = values.VISUALQI_3;
    const VISUALQI_4 = values.VISUALQI_4;
    const VISUALQI_5 = values.VISUALQI_5;
    const VISUALQJ = valueJ;
    if (
      valueA == null ||
      valueB_1 == null ||
      valueB_2 == null ||
      valueB_3 == null ||
      valueB_4 == null ||
      valueB_5 == null ||
      valueB_6 == null ||
      valueB_7 == null ||
      valueC == null ||
      valueD == null ||
      valueE == null ||
      valueF == null ||
      valueG == null ||
      valueH == null ||
      valueJ == null
    ) {
      showModal();
    } else {
      onClickF(
        VISUALQA,
        VISUALQB_1,
        VISUALQB_2,
        VISUALQB_3,
        VISUALQB_4,
        VISUALQB_5,
        VISUALQB_6,
        VISUALQB_7,
        VISUALQC,
        VISUALQD,
        VISUALQE,
        VISUALQF,
        VISUALQG,
        VISUALQH,
        VISUALQI_1,
        VISUALQI_2,
        VISUALQI_3,
        VISUALQI_4,
        VISUALQI_5,
        VISUALQJ
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
            A) Remove side panels. Check the Schematic on RS panel. Correct?
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Radio.Group required name={VISUALQA} onChange={onChangeA}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>B) Perform Quality Control Check before continuing.</Text>
        </Col>
        <Col xs={23}>
          <Row className={"sub-question"}>
            <Col xs={23}>
              <Row justify="space-around">
                <Col xs={22} sm={14}>
                  <Text>1) Tug test the Line Voltage Wires.</Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item>
                    <Radio.Group
                      name={VISUALQB_1}
                      required
                      onChange={onChangeB_1}
                    >
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={22} sm={14}>
                  <Text>
                    2) Ensure the wires going to the Heater Terminals are not
                    Kinked.
                  </Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item>
                    <Radio.Group
                      name={VISUALQB_2}
                      required
                      onChange={onChangeB_2}
                    >
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={22} sm={14}>
                  <Text>3) Ensure all insulation Tape is neatly applied.</Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item>
                    <Radio.Group
                      name={VISUALQB_3}
                      required
                      onChange={onChangeB_3}
                    >
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={22} sm={14}>
                  <Text>
                    4) Ensure tape around the Heater Terminals is at least 1/4
                    inch away from the terminals.
                  </Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item>
                    <Radio.Group
                      name={VISUALQB_4}
                      required
                      onChange={onChangeB_4}
                    >
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={22} sm={14}>
                  <Text>
                    5) Ensure the oven door hinge screws are seated tight.
                  </Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item>
                    <Radio.Group
                      name={VISUALQB_5}
                      required
                      onChange={onChangeB_5}
                    >
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={22} sm={14}>
                  <Text>
                    6) Ensure the oven door fits squarely and is not crooked
                  </Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item>
                    <Radio.Group
                      name={VISUALQB_6}
                      required
                      onChange={onChangeB_6}
                    >
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={22} sm={14}>
                  <Text>
                    7) Ensure the oven door opens and closes smoothly and
                    doesn't get caught on sides.
                  </Text>
                </Col>
                <Col xs={22} sm={5}>
                  <Form.Item>
                    <Radio.Group
                      name={VISUALQB_7}
                      required
                      onChange={onChangeB_7}
                    >
                      <Radio value={true}>ACC</Radio>
                      <Radio value={false}>NO ACC</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            C) Check wiring of Line Voltage Components, EX: CC Heaters, Dual
            SSR, EC Fans, Hi-Limint Switch, Control Circuits, Motor Racks,
            Replays and Convection Blower.
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
            D) Check the screws that hold base to cavity. Ensure they are tight
            and there are no gaps.
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
            E) Check for loose hardware and debris on floor of the oven cabinet.
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
            F) open both doors. ensure door switch is not bent (switch plate
            should be straight)
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
            G) If the thermostat wire is rubbing against power supply box, add
            tape to protect it.
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
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            H) Check that no wire are loose. if loose wires are found, tie with
            tie rod.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item required>
            <Radio.Group name={VISUALQH} required onChange={onChangeH}>
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
            I) Using the OHMS function on your meter, measure and record the
            resistances between the:
          </Text>
        </Col>
        <Col xs={23}>
          <Row className={"sub-question"}>
            <Col xs={23}>
              <Row justify="space-around">
                <Col xs={22}>
                  <Text>1) Frane and the Ground pin on the plug:</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item name={VISUALQI_1}>
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>2) L1 & Gnd</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item name={VISUALQI_2}>
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>3) L2 & Gnd</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item name={VISUALQI_3}>
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>4) L3 & Gnd</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item name={VISUALQI_4}>
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>5) Neutral & Gnd</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item name={VISUALQI_5}>
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
        </Col>
      </Row>
      <Row justify="space-between">
        <Col xs={{ span: 20, offset: 1 }} sm={18}>
          <Text>
            J) Open Fuse #1, #2 and check rating, should be Class CC ATMR 12.
          </Text>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} sm={4}>
          <Form.Item>
            <Radio.Group name={VISUALQJ} required onChange={onChangeJ}>
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
