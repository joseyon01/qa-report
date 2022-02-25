import { Form, Input, DatePicker, Row, Col, Select, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { SERIAL, DATE, NAME, OVEN } from "../constants/ConstFormTop";
import QaReportFirebase from "../../../Credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
const firestore = getFirestore(QaReportFirebase);
const auth = getAuth(QaReportFirebase);
const { Option } = Select;
const db = getFirestore();

export const EditFormTop = (props) => {
  console.log(props.serial);
  const [buttonDisabled, setButtonDisabled] = useState(null);

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
    const docRef = await setDoc(doc(db, "oven", `${serial}`), {
      serial: serial,
      date: date,
      name: name,
      oven: oven,
      userId: userId,
      key: serial,
    });
    const newDocRef = doc(db, "oven", `${serial}`);
    const docSnap = await getDoc(newDocRef);
    setOvenSerial(docSnap.serial);
    setOvenName(docSnap.name);
    setOvenDate(docSnap.date);
    setOvenUserId(docSnap.userId);
    setOvenId(docSnap.id);
    setButtonDisabled(true);
    handleChange(oven);
    console.log(docRef);
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

  function addOven(values, arrayOvens) {
    const userUID = globalUser.uid;
    const serialNumber = values.SERIAL;
    const date = startDate.format("YYYY-MM-DD").toString();
    const name = values.NAME;
    const oven = values.OVEN;
    const key = values.SERIAL;
    setOvenId(serialNumber);
    onClickF(serialNumber, date, name, oven, userUID, key);
  }

  return (
    <Form labelCol={{ span: 4 }} onFinish={addOven} initialValues>
      <Row>
        <Col xs={12}>
          <Form.Item label="S/N" name={SERIAL}>
            <Input
              size="large"
              onChange={props.onChangeCN}
              value={props.serial}
              placeholder="Serial Number"
              disabled={true}
              defaultValue={props.serial}
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
              defaultValue={props.date}
              disabled={true}
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
              disabled={true}
              defaultValue={props.name}
              required
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Type" name={OVEN}>
            <Select
              size="large"
              placeholder="Oven"
              required
              disabled={true}
              defaultValue={props.oven}
            >
              <Option value="Oven1">Oven1</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24}>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button
              size="middle"
              type="primary"
              htmlType="submit"
              disabled={true}
            >
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
