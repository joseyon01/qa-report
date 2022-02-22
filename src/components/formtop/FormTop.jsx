import { Form, Input, DatePicker, Row, Col, Select, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { SERIAL, DATE, NAME, OVEN } from "../constants/ConstFormTop";

import QaReportFirebase from "../../../Credentials";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  getFirestore,
  updateDoc,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { useState, useEffect } from "react";
const firestore = getFirestore(QaReportFirebase);
const auth = getAuth(QaReportFirebase);
const { Option } = Select;
const db = getFirestore();

export const FormTop = (props) => {
  async function onClickF(serial, date, name, oven, userID) {
    const docRef = await addDoc(collection(db, "oven"), {
      serial: serial,
      date: date,
      name: name,
      oven: oven,
      userId: userID,
    });
  }
  const [globalUser, setGlobalUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (fireBaseUser) => {
      if (fireBaseUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = fireBaseUser;
        setGlobalUser(uid);
        // ...
      }
    });
  });

  const [form] = Form.useForm();
  const navigate = useNavigate();
  function handleChange(value) {
    navigate(`/register/${value}`);
  }

  const [startDate, setStartDate] = useState(new Date());
  async function addOven(values, arrayOvens) {
    const userUID = globalUser.uid;
    const serialNumber = values.SERIAL;
    const date = startDate.format("YYYY-MM-DD").toString();
    const name = values.NAME;
    const oven = values.OVEN;
    onClickF(serialNumber, date, name, oven, userUID);
    handleChange(oven);
  }

  return (
    <Form labelCol={{ span: 4 }} onFinish={addOven}>
      <Row>
        <Col xs={12}>
          <Form.Item label="S/N" name={SERIAL}>
            <Input
              size="large"
              onChange={props.onChangeCN}
              value={props.serial}
              placeholder="Serial Number"
              type="text"
              required
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Date" name={DATE}>
            <DatePicker
              style={{ width: "100%" }}
              size="large"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              required
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Name" name={NAME}>
            <Input
              size="large"
              onChange={props.onChangeName}
              value={props.name}
              type="text"
              placeholder="Name"
              required
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Type" name={OVEN}>
            <Select size="large" placeholder="Oven" required>
              <Option value="Oven1">Oven1</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24}>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button size="middle" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
