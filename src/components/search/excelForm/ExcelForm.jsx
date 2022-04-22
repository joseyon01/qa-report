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
    { label: "Voltage Selection", key: "voltage" },
    { label: "current verification value (AMPS)", key: "amps" },
    { label: "MW Power Output Result", key: "powerOutput" },
    { label: "Notes", key: "notes" },
    { label: "Action Taken", key: "actionTaken" },
  ];
  const HHDheaders = [
    { label: "Oven", key: "oven" },
    { label: "Serial", key: "serial" },
    { label: "Date", key: "date" },
    { label: "Name", key: "name" },
    { label: "Voltage Selection", key: "voltage" },
    { label: "Sage Frimware", key: "sageFrimware" },
    { label: "Phoniex/HLUI Frimwae", key: "phoniexFrimware" },
    { label: "current verification value A(AMPS)", key: "ampsA" },
    { label: "current verification value B(AMPS)", key: "ampsB" },
    { label: "Notes", key: "notes" },
    { label: "Action Taken", key: "actionTaken" },
  ];

  function onChange(e) {
    const day1 = new Date(e[0].format("MM/DD/YY")).getTime();
    const day2 = new Date(e[1].format("MM/DD/YY")).getTime();
    dayRange = [day1, day2 + 86400000];
    setRange(dayRange);
    setDateRange([
      moment(e[0].format("MM/DD/YY"))._i,
      moment(e[1].format("MM/DD/YY"))._i,
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
      if (doc.data().oven != "HHD") {
        _data.push(doc.data());
        setData(_data);
        setButtonDisabled(false);
      } else {
        _dataHHD.push(doc.data());
        setDataHHD(_dataHHD);
        setHHDButtonDisabled(false);
      }
    });
    if (_data.length == 0 && _dataHHD.length == 0) {
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
                    I1-I3-ENC-ECOST-ECONew-CSV
                    <FileExcelOutlined />
                    <br />
                  </CSVLink>
                ) : (
                  ""
                )}

                {!HHDbuttonDisabled ? (
                  <CSVLink
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    headers={HHDheaders}
                    data={dataHHD}
                    disabled={HHDbuttonDisabled}
                    filename={`QA-Report-HHD-${dateRange[0]}-${dateRange[1]}.csv`}
                  >
                    {" "}
                    HHD-CSV
                    <FileExcelOutlined />
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
