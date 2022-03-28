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
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { SERIAL, DATE, NAME, OVEN } from "../constants/ConstFormTop";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import moment from "moment";
import { useState, useEffect } from "react";
const auth = getAuth();
const { Option } = Select;
const db = getFirestore();
const { Text, Title } = Typography;

export const FormTop = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [globalUser, setGlobalUser] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [userName, setUserName] = useState(null);

  const showModal2 = () => setIsModalVisible2(true);
  const handleOk2 = () => {
    setIsModalVisible2(false);
    navigate(`/dashboard`);
  };
  const handleCancel2 = () => {
    setIsModalVisible2(false);
    navigate(`/dashboard`);
  };

  async function onClickF(serial, date, status, name, oven, userId) {
    setLoading(true);

    await setDoc(doc(db, "oven", `${serial}`), {
      serial: serial,
      date: date,
      status: status,
      name: name,
      oven: oven,
      userId: userId,
      key: serial,
    }).catch((error) => {});

    await setDoc(doc(db, "Excel", `${serial}`), {
      oven: oven,
      serial: serial,
      date: date,
      status: status,
      name: name,
    });
    const docRef = doc(db, "oven", `${serial}`);
    const docSnap = await getDoc(docRef).catch((error) => {});

    setButtonDisabled(true);
    message.success("You May Start with the Inspection");
    handleChange(serial, oven);
    setLoading(false);
  }

  async function handleChange(serial, oven) {
    navigate(`/register/${oven}/${serial}`);
  }

  async function addOven(values) {
    const userUID = globalUser.uid;
    const serialNumber = values.SERIAL;
    const date = values.DATE.format("MM/DD/YY");
    const name = values.NAME;
    const oven = values.OVEN;
    const key = values.SERIAL;
    const status = "Rejected";

    const docRefOven = doc(db, "oven", `${serialNumber}`);
    const docSnapOven = await getDoc(docRefOven).catch((error) => {});
    const data = docSnapOven.data();
    if (data) {
      showModal2();
    } else if (serialNumber == undefined || oven == undefined) {
      message.error("all fields are required");
    } else {
      onClickF(serialNumber, date, status, name, oven, userUID, key);
    }
  }

  const getDataOven = async () => {
    try {
      if (globalUser) {
        const docRef = doc(db, "User", `${globalUser.uid}`);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        setUserName(data.NAME);
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  form.setFieldsValue({
    NAME: userName,
    DATE: moment(),
  });

  useEffect(() => {
    onAuthStateChanged(auth, (fireBaseUser) => {
      if (fireBaseUser) {
        const uid = fireBaseUser;
        setGlobalUser(uid);
      }
    });
    getDataOven();
  });

  return (
    <Form
      form={form}
      initialValues={{
        remember: true,
      }}
      labelCol={{ span: 4 }}
      onFinish={addOven}
    >
      <Row justify="space-around">
        <Col xs={11} sm={12}>
          <Form.Item label="S/N" name={SERIAL}>
            <Input
              xs={11}
              style={{ width: "100%" }}
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
        <Col xs={11} sm={12}>
          <Form.Item label="Date" name={DATE} required>
            <DatePicker
              style={{ width: "100%" }}
              size="large"
              format="MM/DD/YY"
              disabled={true}
              required
            />
          </Form.Item>
        </Col>
        <Col xs={11} sm={12}>
          <Form.Item label="Name" name={NAME} required>
            <Input
              style={{ width: "100%" }}
              size="large"
              onChange={props.onChangeName}
              value={props.name}
              type="text"
              placeholder="Name"
              disabled={true}
            />
          </Form.Item>
        </Col>
        <Col xs={11} sm={12}>
          <Form.Item
            label="Type"
            name={OVEN}
            rules={[
              {
                required: true,
                message: "Select",
              },
            ]}
          >
            <Select
              style={{ width: "100%" }}
              size="large"
              placeholder="Oven"
              disabled={buttonDisabled}
            >
              <Option value="I1">I1</Option>
              <Option value="I3">I3</Option>
              <Option value="ENC">ENC</Option>
              <Option value="HHD">HHD</Option>
              <Option value="ECOST">ECOST</Option>
              <Option value="ECONew">ECONew</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={12}>
          <Form.Item>
            <Button
              size="middle"
              type="primary"
              htmlType="submit"
              disabled={buttonDisabled}
              loading={loading}
              style={{ width: "100%" }}
            >
              {loading ? "" : "Submit"}
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Modal
        style={{
          backgroundColor: "#E74C3C",
          borderRadius: "1em",
        }}
        visible={isModalVisible2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
        <Title level={3}>Error..!</Title>

        <Text>The oven is already registered. try again</Text>
      </Modal>
    </Form>
  );
};
