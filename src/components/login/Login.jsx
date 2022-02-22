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
  onAuthStateChanged,
} from "firebase/auth";
const auth = getAuth(QaReportFirebase);

export const Login = () => {
  const [globalUser, setGlobalUser] = useState(null);
  onAuthStateChanged(auth, (fireBaseUser) => {
    if (fireBaseUser) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = fireBaseUser.uid;
      setGlobalUser(uid);
      return uid;
      // ...
    }
  });
  const navigate = useNavigate();
  async function onLogin(values) {
    const email = values.email;
    const password = values.password;
    const logIn = await signInWithEmailAndPassword(auth, email, password);
    navigate(`/dashboard`);
  }
  const onLoginFailed = (errorInfo) => {
    alert("error");
  };

  async function onRegister(values) {
    const email = values.email;
    const password = values.password;
    Tabs.key = 1;
    const usuario = await createUserWithEmailAndPassword(auth, email, password);

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
