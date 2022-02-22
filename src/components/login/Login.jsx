import react, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Tabs,
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
} from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
const { TabPane } = Tabs;

import QaReportFirebase from "../../../Credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(QaReportFirebase);

export const Login = () => {
  const navigate = useNavigate();

  async function onLogin(values) {
    const email = values.email;
    const password = values.password;
    signInWithEmailAndPassword(auth, email, password);

    navigate(`/`);
  }
  const onLoginFailed = (errorInfo) => {
    alert(errorInfo);
  };

  async function onRegister(values) {
    const email = values.email;
    const password = values.password;
    const user = values.name;

    const usuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      user
    );
    console.log(usuario);
    navigate(`/`);
  }
  const onRegisterFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Tabs defaultActiveKey="1" style={{ paddingLeft: "1em", width: "100%" }}>
      <TabPane tab="Login" key="1">
        <Form
          name="logIn"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          initialValues={{ remember: true }}
          onFinish={onLogin}
          onFinishFailed={onLoginFailed}
          autoComplete="off"
        >
          <Row justify="center">
            <Col xs={4}>
              <Title level={3}>Login</Title>
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={16}>
              <Form.Item
                label="Email"
                name="email"
                id="logEmail"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                id="logPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </TabPane>
      <TabPane tab="Register" key="2">
        <Form
          name="register"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          initialValues={{ remember: true }}
          onFinish={onRegister}
          onFinishFailed={onRegisterFailed}
          autoComplete="off"
        >
          <Row justify="center">
            <Col xs={4}>
              <Title level={3}>Register</Title>
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={16}>
              <Form.Item
                id="registerEmail"
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                id="registerName"
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                id="registerPassword"
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </TabPane>
    </Tabs>
  );
};
