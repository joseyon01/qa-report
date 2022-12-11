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
  const [HHDbuttonDisabled, setHHDButtonDisabled] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState([]);
  const [dataHHD, setDataHHD] = useState([]);
  const [range, setRange] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  const [noData, setNoData] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  let _data = [];
  let _dataHHD = [];
  let dayRange = [];

  const handleOk = () => {
    setDisabled(true);
    setButtonDisabled(true);
    setHHDButtonDisabled(true);
    setRange([]);
    setDateRange([]);
    setData([]);
    setDataHHD([]);
    setModalVisible(false);
  };
  const handleCancel = () => {
    setDisabled(true);
    setButtonDisabled(true);
    setHHDButtonDisabled(true);
    setRange([]);
    setDateRange([]);
    setData([]);
    setDataHHD([]);
    setModalVisible(false);
  };
  const [form] = Form.useForm();
  const headers = [
    { label: "Oven", key: "oven" },
    { label: "Serial", key: "serial" },
    { label: "Date", key: "date" },
    { label: "Name", key: "name" },
    { label: "Software version", key: "softwareVersion" },
    { label: "Sage Frimware", key: "sageFrimware" },
    { label: "Phoniex/HLUI Frimwae", key: "phoniexFrimware" },
    { label: "Voltage Selection", key: "voltage" },
    { label: "current verification value (AMPS)", key: "amps" },
    { label: "current verification value A(AMPS)", key: "ampsA" },
    { label: "current verification value B(AMPS)", key: "ampsB" },
    { label: "MW Power Output Result", key: "powerOutput" },
    { label: "Notes", key: "notes" },
    { label: "Action Taken", key: "actionTaken" },
  ];

  function onChange(e) {
    const day1 = new Date(e[0].format("MM/DD/YY")).getTime();
    const day2 = new Date(e[1].format("MM/DD/YY")).getTime();
    dayRange = [day1, day2 + 86400000];
    setRange(dayRange);
    setDateRange([
      new Date(e[0]).toLocaleDateString(),
      new Date(e[1]).toLocaleDateString(),
    ]);
    setData([]);
    setDataHHD([]);
    setDisabled(false);
  }

  const sendData = async () => {
    setLoading(true);
    setButtonDisabled(true);
    setHHDButtonDisabled(true);

    const q = query(
      collection(db, "Excel"),
      where("timeStamp", ">=", range[0]),
      where("timeStamp", "<=", range[1])
    );
    const querySnapshot = await getDocs(q);
    querySnapshot?.forEach((doc) => {
      _data.push(doc?.data());
      setData(_data);
      setButtonDisabled(false);
    });
    if (_data.length == 0) {
      setNoData(true);
    } else {
      setNoData(false);
    }

    setModalVisible(true);
    setLoading(false);
  };

  return (
    <Form>
      <Row justify="space-around">
        <Col xs={22} md={10}>
          <Form.Item name="rangePicker">
            <RangePicker
              format="MM/DD/YY"
              value={range}
              onChange={onChange}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col xs={22} md={10}>
          <Button
            type="primary"
            block={true}
            size="middle"
            loading={loading}
            disabled={disabled}
            onClick={sendData}
          >
            Search
          </Button>
          <Modal
            title={"QA-Report.csv"}
            visible={modalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            {noData ? (
              "No Oven Found"
            ) : (
              <>
                {!buttonDisabled ? (
                  <CSVLink
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    headers={headers}
                    data={data}
                    disabled={buttonDisabled}
                    filename={`QA-Report-${dateRange[0]}-${dateRange[1]}.csv`}
                  >
                    Get CSV
                    <FileExcelOutlined />
                    <br />
                  </CSVLink>
                ) : (
                  ""
                )}
              </>
            )}
          </Modal>
        </Col>
      </Row>
    </Form>
  );
};
