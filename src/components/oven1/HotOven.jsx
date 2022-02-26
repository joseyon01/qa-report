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
} from "../constants/ConstantHotOven";

import QaReportFirebase from "../../../Credentials";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
const firestore = getFirestore(QaReportFirebase);
const auth = getAuth(QaReportFirebase);
const db = getFirestore();
const { Text } = Typography;

export const HotOven = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [valueRC, setValueRC] = useState(null);
  const onChangeRC = (e) => {
    setValueRC(e.target.value);
  };
  const [valueAON, setValueAON] = useState(null);
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

    if (OVEN_APROVE_OR_NOT) {
      const ovenRef = doc(db, "oven", `${props.serial}`);
      setDoc(ovenRef, { status: "Aprooved" }, { merge: true });
    } else {
      const ovenRef = doc(db, "oven", `${props.serial}`);
      setDoc(ovenRef, { status: "Rejected" }, { merge: true });
    }

    if (HOT_OVEN_RECHECK == null || OVEN_APROVE_OR_NOT == null) {
      alert("pleace finish the form before you submit it");
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
    }
  }
  return (
    <Form
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
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
          <Form.Item name={HOT_OVEN_B_DOOR} label="DOOR">
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item name={HOT_OVEN_B_SIDES} label="Rt & Lt Sides">
            <Input
              type="number"
              placeholder={"mW/cm2"}
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
          <Form.Item name={HOT_OVEN_TOP_L}>
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form.Item>
        </Col>
        <Col xs={3} offset={10}>
          <Form.Item name={HOT_OVEN_TOP_R}>
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
          <Form.Item name={HOT_OVEN_BOT_L}>
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form.Item>
        </Col>
        <Col xs={3} offset={10}>
          <Form.Item name={HOT_OVEN_BOT_R}>
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
          <Radio.Group name={HOT_OVEN_RECHECK} onChange={onChangeRC}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Row>
            <Col xs={24}>
              <Form.Item label="C) Cook time Count" name={HOT_OVEN_C}>
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
              <Form.Item label="D) Survey meter #" name={HOT_OVEN_D}>
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
              <Form.Item label="E) Clear Cook time foults" name={HOT_OVEN_E}>
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
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
