import React from "react";
import { Form, Input, DatePicker, Row, Col, Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

export const FormTop = (props) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  function handleChange(value) {
    navigate(`/register/${value}`);
  }

  return (
    <Form labelCol={{ span: 4 }}>
      <Row>
        <Col xs={12}>
          <Form.Item label="S/N">
            <Input
              size="large"
              onChange={props.onChangeCN}
              value={props.serial}
              placeholder="Serial Number"
              type="text"
              required
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Date">
            <DatePicker
              style={{ width: "100%" }}
              size="large"
              onChange={props.onChangeDate}
              required
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Name">
            <Input
              size="large"
              onChange={props.onChangeName}
              value={props.name}
              type="text"
              placeholder="Name"
              required
            />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Type">
            <Select
              size="large"
              defaultValue="Oven"
              onChange={handleChange}
              required
            >
              <Option value="Oven1">Oven1</Option>
              <Option value="Oven2">Oven2</Option>
              <Option value="Oven3">Oven3</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
