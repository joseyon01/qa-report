import React from "react";
import { Form, Input, DatePicker, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;

export const FormTop = (props) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  function handleChange(value) {
    navigate(`/register/${value}`);
  }
  return (
    <Form  labelCol={{ span: 4 }}>
      <Row justify="center">
        <Col xs={18}>
          <Row >
          <Col xs={12}>
            <Form.Item label="Serial Number">
            <Input
              size="large"
              onChange={props.onChangeCN}
              value={props.serial}
              placeholder="Serial Number"
              type="text"
            />
          </Form.Item>
          </Col>
          <Col xs={12}>
            <Form.Item label="Date">
              <DatePicker style={{ width: '100%' }} size="large" onChange={props.onChangeDate} value={props.date} />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <Form.Item label="Name">
              <Input size="large" type="text" placeholder="Name" />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <Form.Item label="Date">
              <Select
                size="large"  
                defaultValue="Oven"
                onChange={handleChange}
              >
                <Option value="Oven1">Oven1</Option>
                <Option value="Oven2">Oven2</Option>
                <Option value="Oven3">Oven3</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        </Col>
      </Row>
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
