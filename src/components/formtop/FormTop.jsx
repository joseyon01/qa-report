import {
  Form,
  Input,
  DatePicker,
  Row,
  Col,
  Select,
  Button,
  Modal,
  Typography,
} from "antd";
import { useNavigate } from "react-router-dom";
import { SERIAL, DATE, NAME, OVEN } from "../constants/ConstFormTop";
import QaReportFirebase from "../../../Credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
const firestore = getFirestore(QaReportFirebase);
const auth = getAuth(QaReportFirebase);
const { Option } = Select;
const db = getFirestore();
const { Text, Title } = Typography;

export const FormTop = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [globalUser, setGlobalUser] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [ovenSerial, setOvenSerial] = useState(null);
  const [ovenName, setOvenName] = useState(null);
  const [ovenDate, setOvenDate] = useState(null);
  const [ovenUserId, setOvenUserId] = useState(null);
  const [ovenId, setOvenId] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
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
  async function onClickF(serial, date, status, name, oven, userId) {
    setLoading(true);
    const docRef = await setDoc(doc(db, "oven", `${serial}`), {
      serial: serial,
      date: date,
      status: status,
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
    setLoading(false);
    showModal();
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

  function addOven(values) {
    const userUID = globalUser.uid;
    const serialNumber = values.SERIAL;
    const date = startDate.format("YYYY-MM-DD").toString();
    const name = values.NAME;
    const oven = values.OVEN;
    const key = values.SERIAL;
    const status = "Rejected";
    const serialTimeOut = new Promise((resolve) => {
      setTimeout(() => {
        resolve(serialNumber);
      }, 500);
    });
    setOvenId(serialNumber);

    onClickF(serialNumber, date, status, name, oven, userUID, key);
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
              disabled={buttonDisabled}
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
              disabled={buttonDisabled}
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
              disabled={buttonDisabled}
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
              disabled={buttonDisabled}
            >
              <Option value="Oven1">Oven1</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24}>
          <Form.Item wrapperCol={{ offset: 10, span: 6 }}>
            <Button
              size="middle"
              type="primary"
              htmlType="submit"
              disabled={buttonDisabled}
              loading={loading}
              style={{ width: "80%" }}
            >
              {loading ? "" : "Submit"}
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Modal
        style={{ backgroundColor: "#E74C3C" }}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Title level={3}>OK..!</Title>

        <Text>The data has been successfully stored</Text>
      </Modal>
    </Form>
  );
};
