import { useState } from "react";
import {
  Row,
  Col,
  Tabs,
  Form,
  Input,
  Button,
  Typography,
  Modal,
  Image,
} from "antd";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;
const { TabPane } = Tabs;
import Logo from "../../../assets/img/turboChefLogo.png";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
const auth = getAuth();

export const Login = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);
  const showModal2 = () => setModalVisible(true);

  const handleOk2 = () => {
    setModalVisible(false);
    navigate(`/dashboard`);
  };

  const handleCancel2 = () => {
    setModalVisible(false);
    navigate(`/dashboard`);
  };
  const persistenceLocal = (auth, email, password) =>
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  onAuthStateChanged(auth, (fireBaseUser) => {
    if (fireBaseUser) {
      const uid = fireBaseUser.uid;
      return uid;
      // ...
    }
  });

  async function onLogin(values) {
    const email = values.email;
    const password = values.password;
    const logIn = await persistenceLocal(auth, email, password);
    if (logIn) {
      showModal2();
    } else {
      showModal();
    }
  }
  const onLoginFailed = (errorInfo) => {
    showModal();
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
      <TabPane tab="Login" key="1" style={{ paddingTop: "2em" }}>
        <Form
          name="logIn"
          labelCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onLogin}
          onFinishFailed={onLoginFailed}
          autoComplete="off"
        >
          <Row justify="center">
            <Col
              xs={12}
              sm={{ span: 5 }}
              md={{ span: 4 }}
              style={{ paddingBottom: "1em" }}
            >
              <Image width={"100%"} src={Logo} preview={false} />
            </Col>
          </Row>
          <Row>
            <Col xs={15} sm={{ span: 9, offset: 6 }}>
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
            </Col>
          </Row>
          <Row>
            <Col sm={{ offset: 11 }}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
                <Modal
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  style={{ backgroundColor: "#E74C3C", borderRadius: "1em" }}
                >
                  <Title level={3}>Error..!</Title>
                  <Text>User or Password Incorrect</Text>
                </Modal>
                <Modal
                  visible={modalVisible}
                  onOk={handleOk2}
                  onCancel={handleCancel2}
                  style={{ backgroundColor: "#2ECC71", borderRadius: "1em" }}
                >
                  <Title level={3}>Welcome Back User</Title>
                  <Text>Have a productive Day</Text>
                </Modal>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </TabPane>

      {/* <TabPane tab="Register" key="2" >
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
      </TabPane>*/}
    </Tabs>
  );
};
