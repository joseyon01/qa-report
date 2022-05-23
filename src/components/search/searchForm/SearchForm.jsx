import {
  Button,
  Checkbox,
  Col,
  Row,
  DatePicker,
  Form,
  Select,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { SearchTable } from "../searchTable/SearchTable";
const db = getFirestore();
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Text } = Typography;
export const SearchForm = () => {
  const [range, setRange] = useState([]);
  const [textrange, setTextRange] = useState([]);
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(false);
  const [inspector, setInspector] = useState(false);
  const [status, setStatus] = useState(false);
  const [oven, setOven] = useState(false);
  const [total, setTotal] = useState(false);
  let dayRange = [];
  let textDayRange = [];
  let allOvens = [];
  let newOvenArr = [];

  function onChange(e) {
    console.log(e);
    const day1 = new Date(e[0].format("MM/DD/YY")).getTime();
    const day2 = new Date(e[1].format("MM/DD/YY")).getTime();
    const textDay1 = new Date(e[0].format("MM/DD/YY")).toLocaleDateString();
    const textDay2 = new Date(e[1].format("MM/DD/YY")).toLocaleDateString();
    dayRange = [day1, day2 + 86400000];
    textDayRange = [textDay1, textDay2];
    setRange(dayRange);
    setTextRange(textDayRange);
    setData([]);
    setDisabled(false);
  }
  async function onDateSelected() {
    setLoading(true);
    setSearch(false);
    setInspector(false);
    setStatus(false);
    setOven(false);
    setTotal(false);
    const q = query(
      collection(db, "oven"),
      where("timeStamp", ">=", range[0]),
      where("timeStamp", "<=", range[1])
    );
    const querySnapshot = await getDocs(q);
    querySnapshot?.forEach((doc) => {
      allOvens.push(doc.data());
    });
    setData(allOvens);
    setLoading(false);
    setSearch(true);
  }
  function searchChange(value) {
    if (value == "inspector") {
      setInspector(true);
      setStatus(false);
      setOven(false);
      setTotal(false);
    } else if (value == "status") {
      setInspector(false);
      setStatus(true);
      setOven(false);
      setTotal(false);
    } else if (value == "oven") {
      setInspector(false);
      setStatus(false);
      setOven(true);
      setTotal(false);
    } else if (value == "total") {
      setNewData([]);
      setInspector(false);
      setStatus(false);
      setOven(false);
      setTotal(true);
    }
  }
  function inspectorChange(value) {
    newOvenArr = data.filter((oven) => oven.name == value);
    setNewData(newOvenArr);
  }
  function statusChange(value) {
    newOvenArr = data.filter((oven) => oven.status == value);
    setNewData(newOvenArr);
  }
  function ovenChange(value) {
    newOvenArr = data.filter((oven) => oven.oven == value);
    setNewData(newOvenArr);
  }
  function totalChange(value) {
    setNewData([]);
    let count = 0;
    data.map((e) => {
      count++;
    });
    newOvenArr = [count];
    setNewData(newOvenArr);
  }

  useEffect(() => {}, []);
  return (
    <Form>
      <Row justify="space-around">
        <Col xs={22} md={10}>
          <Form.Item name="rangePicker">
            <RangePicker
              size="large"
              value={range}
              format="MM/DD/YY"
              onChange={onChange}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col xs={22} md={10}>
          <Button
            size="large"
            disabled={disabled}
            loading={loading}
            onClick={onDateSelected}
            type="primary"
            block={true}
          >
            Search
          </Button>
        </Col>
      </Row>

      {search ? (
        <Row justify="space-around">
          <Col xs={22} md={10}>
            <Select
              size="large"
              style={{ width: "100%" }}
              onChange={searchChange}
              placeholder="Search Options"
            >
              <Option value="inspector">Inspector Name</Option>
              <Option value="status">Oven Status</Option>
              <Option value="oven">Oven Type</Option>
              <Option value="total">Total of Ovens</Option>
            </Select>
          </Col>

          <Col xs={22} md={10}>
            {inspector ? (
              <Select
                size="large"
                style={{ width: " 100% " }}
                onChange={inspectorChange}
                placeholder="Select Inspector"
              >
                <Option value="David">David Castillo</Option>
                <Option value="Ruben">Ruben Becerra</Option>
                <Option value="Ary">Ary Ventura</Option>
                <Option value="Josh">Josh Kempf</Option>
                <Option value="Rolando">Rolando Parada</Option>
                <Option value="Michele">Michele Quintero</Option>
                <Option value="Lucio">Lucio Gamboa</Option>
              </Select>
            ) : (
              ""
            )}
            {status ? (
              <Select
                size="large"
                style={{ width: " 100% " }}
                onChange={statusChange}
                placeholder="Select Status"
              >
                <Option value="Aprooved">Aprooved</Option>
                <Option value="Rejected">Rejected</Option>
                <Option value="In Progress">In Progress</Option>
              </Select>
            ) : (
              ""
            )}
            {oven ? (
              <Select
                size="large"
                style={{ width: " 100% " }}
                onChange={ovenChange}
                placeholder="Select Oven Type"
              >
                <Option value="ECONew">ECONew</Option>
                <Option value="ECOST">ECOST</Option>
                <Option value="ENC">ENC</Option>
                <Option value="HHD">HHD</Option>
                <Option value="I1">I1</Option>
                <Option value="I3">I3</Option>
              </Select>
            ) : (
              ""
            )}
            {total ? (
              <Select
                size="large"
                style={{ width: " 100% " }}
                onChange={totalChange}
                placeholder="Total of Ovens"
              >
                <Option value="Total ">Total of Ovens</Option>
              </Select>
            ) : (
              ""
            )}
          </Col>

          <Col xs={22}>
            <br />
            {newData.length == 0 ? (
              ""
            ) : total ? (
              <Text size="large">
                The total of Ovens inspected from {textrange[0]} to{" "}
                {textrange[1]} is{" "}
                <strong style={{ fontSize: "1.25em" }}>{newData}</strong>
              </Text>
            ) : (
              <SearchTable data={newData} />
            )}
          </Col>
        </Row>
      ) : (
        ""
      )}
    </Form>
  );
};
