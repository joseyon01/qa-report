import {
  Form,
  Input,
  DatePicker,
  Row,
  Col,
  Select,
  Card,
  Typography,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { SERIAL, DATE, NAME, OVEN } from "../constants/ConstFormTop";
import QaReportFirebase from "../../../Credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
const { Text } = Typography;
import TextArea from "antd/lib/input/TextArea";
import moment from "moment";
const firestore = getFirestore(QaReportFirebase);
const auth = getAuth(QaReportFirebase);
const { Option } = Select;
const db = getFirestore();

export const EditFormTop = (props) => {
  const params = useParams();
  const ovenSerial = params.id;

  const [startDate, setStartDate] = useState(new Date());
  const [editOven, setEditOven] = useState(null);
  const [oven, setOven] = useState(null);
  const [form] = Form.useForm();
  const [serial, setSerial] = useState(null);
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);
  const [typeOfOven, setTypeOfOven] = useState(null);

  const getDataOven = async () => {
    try {
      const docRef = doc(db, "oven", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      const docRefO = doc(db, "OperationalInspection", `${ovenSerial}`);
      const docSnapO = await getDoc(docRefO);
      const dataO = docSnapO.data();
      setEditOven(data);
      setSerial(data.serial);
      setDate(data.date);
      setName(data.name);
      setTypeOfOven(data.oven);
      setOven(dataO);
    } catch (error) {
      console.error("error", error);
    }
  };
  const onChangeA = () => {
    console.log(serial);
  };
  useEffect(() => {
    getDataOven();
  }, []);
  return (
    <Form labelCol={{ span: 4 }}>
      <Row>
        <Col xs={12}>
          <Form.Item label="S/N" name={SERIAL} value={serial}>
            <Input
              size="large"
              type="text"
              value={`${serial}`}
              onChange={onChangeA}
              disabled
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Date" name={DATE} value={date}>
            <DatePicker
              style={{ width: "100%" }}
              size="large"
              value={date}
              defaultValue={moment(date, "YYYY-MM-DD")}
              disabled
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Name" name={NAME} value={name}>
            <Input size="large" value={`${name}`} type="text" disabled={true} />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Type">
            <Select size="large" required value={oven} disabled={true}>
              <Option value="Oven1">Oven1</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16}>
          <Card size="small" title="Note" style={{ width: "100%" }}>
            <Text>{oven?.OPERATIONAL_NOTE}</Text>
          </Card>
        </Col>
      </Row>
      <br />
    </Form>
  );
};
