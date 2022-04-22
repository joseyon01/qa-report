import { Button, Checkbox, Col, Row, DatePicker, Form, Select } from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
const db = getFirestore();
const { RangePicker } = DatePicker;
const { Option } = Select;

export const SearchForm = () => {
  const [range, setRange] = useState([]);
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
  let allOvens = [];
  let newOvenArr = [];

  function onChange(e) {
    const day1 = new Date(e[0].format("MM/DD/YY")).getTime();
    const day2 = new Date(e[1].format("MM/DD/YY")).getTime();
    dayRange = [day1, day2 + 86400000];
    setRange(dayRange);
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
              value={range}
              onChange={onChange}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col xs={22} md={10}>
          <Button
            disabled={disabled}
            loading={loading}
            onClick={onDateSelected}
            type="primary"
            block={true}
            size="middle"
          >
            Search
          </Button>
        </Col>
      </Row>
      {search ? (
        <Row justify="space-around">
          <Col xs={22} md={10}>
            <Select
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
        </Row>
      ) : (
        ""
      )}
    </Form>
  );
};
