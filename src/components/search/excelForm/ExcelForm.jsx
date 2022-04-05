import react, { useState, useEffect } from "react";
import { Form, Button, DatePicker, Row, Col, Typography, Modal } from "antd";
import moment from "moment";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { FileExcelOutlined } from "@ant-design/icons";
import { CSVLink } from "react-csv";
const db = getFirestore();
const { Text, Title } = Typography;
const { RangePicker } = DatePicker;

export const ExcelForm = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [data, setData] = useState([]);
  const [range, setRange] = useState([]);
  const [noData, setNoData] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  let _data = [];
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [form] = Form.useForm();
  const headers = [
    { label: "Oven", key: "oven" },
    { label: "Serial", key: "serial" },
    { label: "Date", key: "date" },
    { label: "Name", key: "name" },
    { label: "Voltage Selection", key: "voltage" },
    { label: "current verification value (AMPS)", key: "amps" },
    { label: "MW Power Output Result", key: "powerOutput" },
    { label: "Sage Frimware", key: "sageFrimware" },
    { label: "Phoniex/HLUI Frimwae", key: "phoniexFrimware" },
    { label: "Notes", key: "notes" },
    { label: "Action Taken", key: "actionTaken" },
  ];

  function onChange(e) {
    setRange(e);
    setData([]);
  }

  const sendData = () => {
    getData();
    if (data.length == 0) {
      setNoData(true);
    } else {
      setNoData(false);
    }
    setIsModalVisible(true);
  };

  const getData = () => {
    let dateArr = [];
    const dayFormat = "DD";
    const monthFormat = "MM";
    const yearFormat = "YY";
    let day1, day2, month1, month2, year1, year2;
    if (range.length != 2) {
      setData([]);
    } else {
      day1 = parseInt(moment(range[0]).format(dayFormat));
      day2 = parseInt(moment(range[1]).format(dayFormat));
      month1 = parseInt(moment(range[0]).format(monthFormat));
      month2 = parseInt(moment(range[1]).format(monthFormat));
      year1 = parseInt(moment(range[0]).format(yearFormat));
      year2 = parseInt(moment(range[1]).format(yearFormat));
      if (month1 == month2) {
        for (let i = day1; i <= day2; i++) {
          if (i < 10 && month1 < 10) {
            dateArr.push(`0${month1}/0${i}/${year1}`);
          } else if (i < 10 && month1 > 10) {
            dateArr.push(`${month1}/0${i}/${year1}`);
          } else if (i > 10 && month1 < 10) {
            dateArr.push(`0${month1}/${i}/${year1}`);
          } else {
            dateArr.push(`${month1}/${i}/${year1}`);
          }
        }
      }

      dateArr?.forEach(async (e) => {
        const q = query(collection(db, "Excel"), where("date", "==", e));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          _data.push(doc.data());
          setData(_data);
        });
        if (data == []) {
          setButtonDisabled(true);
        } else {
          data?.length == _data?.length
            ? setButtonDisabled(false)
            : setButtonDisabled(true);
        }
      });
    }
  };

  useEffect(() => {
    getData();
  }, [range]);
  return (
    <Form>
      <Row justify="space-around">
        <Col xs={22} md={10}>
          <Form.Item name="rangePicker">
            <RangePicker
              value={range}
              onChange={onChange}
              format={"MM/DD/YY"}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col xs={22} md={10}>
          <Button type="primary" block={true} size="middle" onClick={sendData}>
            Get CSV
          </Button>
          <Modal
            title={"QA-Report.csv"}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleOk}
          >
            {noData ? (
              "No Oven Found"
            ) : (
              <CSVLink
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                headers={headers}
                data={data}
                onClick={() => {
                  setIsModalVisible(false);
                }}
                disabled={buttonDisabled}
                filename={"QA-Report.csv"}
              >
                {" "}
                <FileExcelOutlined />
              </CSVLink>
            )}
          </Modal>
        </Col>
      </Row>
    </Form>
  );
};