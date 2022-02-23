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
  const [globalUser, setGlobalUser] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [ovenSerial, setOvenSerial] = useState(null);
  const [ovenName, setOvenName] = useState(null);
  const [ovenDate, setOvenDate] = useState(null);
  const [ovenUserId, setOvenUserId] = useState(null);
  const [ovenId, setOvenId] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  async function onClickF(serial, date, name, oven, userId) {
    const docRef = await addDoc(collection(db, "oven"), {
      serial: serial,
      date: date,
      name: name,
      oven: oven,
      userId: userId,
    });
    setOvenSerial(docRef.serial);
    setOvenName(docRef.name);
    setOvenDate(docRef.date);
    setOvenUserId(docRef.userId);
    setOvenId(docRef.id);
    handleChange(oven);
  }

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

  function handleChange(value) {
    navigate(`/register/${value}`);
  }

  async function addOven(values, arrayOvens) {
    const userUID = globalUser.uid;
    const serialNumber = values.SERIAL;
    const date = startDate.format("YYYY-MM-DD").toString();
    const name = values.NAME;
    const oven = values.OVEN;
    onClickF(serialNumber, date, name, oven, userUID);
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
