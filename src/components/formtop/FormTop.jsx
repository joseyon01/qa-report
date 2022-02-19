import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import { DatePicker, Space } from "antd";
import { Link, Routes, Route } from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;

export const FormTop = (props) => {
  const [form] = Form.useForm();
  function handleChange(value) {
    console.log(value);
  }
  return (
    <Form>
      <Form.Item label="Serial Number">
        <Input
          onChange={props.onChangeCN}
          value={props.serial}
          placeholder="Serial Number"
          type="text"
        />
      </Form.Item>
      <Form.Item label="Date">
        <DatePicker onChange={props.onChangeDate} value={props.date} />
      </Form.Item>
      <Form.Item label="Name">
        <Input type="text" placeholder="Name" />
      </Form.Item>
      <Select
        defaultValue="Oven"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="Oven1">Oven1</Option>
        <Option value="Oven2">Oven2</Option>
        <Option value="Oven3">Oven3</Option>
      </Select>
    </Form>
  );
};
{
  /*return (
    <>
      <input onChange={props.onChangeCN} value={props.serial} />
      <br />
      <input onChange={props.onChangeName} value={props.name} />
      <br />
      <input onChange={props.onChangeDate} value={props.date} />
    </>
  );
};*/
}
