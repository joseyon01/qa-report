import {
  Form,
  Input,
  DatePicker,
  Row,
  Col,
  Select,
  Card,
  Typography,
  message,
} from "antd";
import { SERIAL, DATE, NAME, OVEN } from "../constants/ConstFormTop";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import moment from "moment";
const { Text } = Typography;
const { Option } = Select;
const db = getFirestore();

export const EditFormTop = (props) => {
  const ovenSerial = props.serial;
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
      setSerial(data.serial);
      setDate(data.date);
      setName(data.name);
      setTypeOfOven(data.oven);
      setOven(dataO);
      message.success("Load complete");
    } catch (error) {
      console.error("error", error);
    }
  };
  const dateFormat = "MM/DD/YY";

  form.setFieldsValue({
    SERIAL: serial,
    NAME: name,
    DATE: moment(`${date}`, dateFormat),
  });
  useEffect(() => {
    getDataOven();
  }, [serial]);
  return (
    <Form
      form={form}
      initialValues={{
        remember: true,
      }}
      labelCol={{ span: 4 }}
    >
      <Row justify="space-around">
        <Col xs={11} sm={12}>
          <Form.Item label="S/N" name={SERIAL} value={serial}>
            <Input
              size="large"
              type="text"
              placeholder="Serial Number"
              disabled
            />
          </Form.Item>
        </Col>
        <Col xs={11} sm={12}>
          <Form.Item label="Date" name={DATE}>
            <DatePicker
              label="Date"
              format={dateFormat}
              style={{ width: "100%" }}
              size="large"
              placeholder="Date"
              disabled
            />
          </Form.Item>
        </Col>
        <Col xs={11} sm={12}>
          <Form.Item label="Name" name={NAME}>
            <Input size="large" type="text" placeholder="Name" disabled />
          </Form.Item>
        </Col>
        <Col xs={11} sm={12}>
          <Form.Item label="Type">
            <Select size="large" name={OVEN} value={`${typeOfOven}`} disabled>
              <Option value="ENC">ENC</Option>
              <Option value="I1">I1</Option>
              <Option value="I3">I3</Option>
              <Option value="HHD">HHD</Option>
              <Option value="ECOST">ECOST</Option>
              <Option value="ECONew">ECONew</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={23} sm={12}>
          <Card size="small" title="Note" style={{ width: "100%" }}>
            <Text>{oven?.OPERATIONAL_NOTE}</Text>
          </Card>
        </Col>
      </Row>
      <br />
    </Form>
  );
};
