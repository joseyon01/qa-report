import react, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  message,
  DatePicker,
  Row,
  Col,
  Typography,
} from "antd";
import moment from "moment";
import { getFirestore, getDocs, collection } from "firebase/firestore";
const db = getFirestore();
const { Text, Title } = Typography;
const { RangePicker } = DatePicker;

export const ExcelForm = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [range, setRange] = useState([]);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    setLoading(true);
    setButtonDisabled(true);
    const dayFormat = "DD";
    const monthFormat = "MM";
    const yearFormat = "YYYY";
    const value = values.rangePicker;
    let day1, day2, month1, month2, year1, year2;
    day1 = parseInt(moment(value[0]).format(dayFormat));
    day2 = parseInt(moment(value[1]).format(dayFormat));
    month1 = parseInt(moment(value[0]).format(monthFormat));
    month2 = parseInt(moment(value[1]).format(monthFormat));
    year1 = parseInt(moment(value[0]).format(yearFormat));
    year2 = parseInt(moment(value[1]).format(yearFormat));
    if (year1 == year2) {
      if (month1 < month2) {
        switch (month1) {
          case 1:
            day1 = 31 - day1;
            console.log(day1);
            break;
          case 2:
            day1 = 28 - day1;
            console.log(day1);
            break;
          case 3:
            day1 = 31 - day1;
            console.log(day1);
            break;
          case 4:
            day1 = 30 - day1;
            console.log(day1);
            break;
          case 5:
            day1 = 31 - day1;
            console.log(day1);
            break;
          case 6:
            day1 = 30 - day1;
            console.log(day1);
            break;
          case 7:
            day1 = 31 - day1;
            console.log(day1);
            break;
          case 8:
            day1 = 31 - day1;
            console.log(day1);
            break;
          case 9:
            day1 = 30 - day1;
            console.log(day1);
            break;
          case 10:
            day1 = 31 - day1;
            console.log(day1);
            break;
          case 11:
            day1 = 30 - day1;
            console.log(day1);
            break;
          case 12:
            day1 = 31 - day1;
            console.log(day1);
            break;
          default:
            console.log("Error");
            break;
        }
        switch (month2) {
          case 1:
            console.log(day2);
            break;
          case 2:
            console.log(day2);
            break;
          case 3:
            console.log(day2);
            break;
          case 4:
            console.log(day2);
            break;
          case 5:
            console.log(day2);
            break;
          case 6:
            console.log(day2);
            break;
          case 7:
            console.log(day2);
            break;
          case 8:
            console.log(day2);
            break;
          case 9:
            console.log(day2);
            break;
          case 10:
            console.log(day2);
            break;
          case 11:
            console.log(day2);
            break;
          case 12:
            console.log(day2);
            break;
          default:
            console.log("Error");
            break;
        }
      } else if (month1 == month2) {
        console.log(day2, day1);
      }
    }

    value.map((e) => {
      console.log(
        parseInt(moment(e).format(dayFormat)),
        "/",
        parseInt(moment(e).format(monthFormat)),
        "/",
        parseInt(moment(e).format(yearFormat))
      );
      console.log();
      console.log();
    });
    setLoading(false);
    setButtonDisabled(false);
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item name="rangePicker">
        <RangePicker />
      </Form.Item>
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
    </Form>
  );
};
