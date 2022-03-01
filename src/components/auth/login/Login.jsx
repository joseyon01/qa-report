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
import QaReportFirebase from "../../../../Credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
const auth = getAuth(QaReportFirebase);

export const Login = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const showModal2 = () => {
    setModalVisible(true);
  };

  const handleOk2 = () => {
    setModalVisible(false);
    navigate(`/dashboard`);
  };

  const handleCancel2 = () => {
    setModalVisible(false);
    navigate(`/dashboard`);
  };
  const persistenceLocal = (auth, email, password) =>
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return signInWithEmailAndPassword(auth, email, password);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });

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
          wrapperCol={{ span: 10 }}
          initialValues={{ remember: true }}
          onFinish={onLogin}
          onFinishFailed={onLoginFailed}
          autoComplete="off"
        >
          <Row justify="center"></Row>
          <Row justify="center">
            <Col xs={5} style={{ paddingBottom: "1em" }}>
              <Image width={200} src={Logo} />
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

              <Form.Item wrapperCol={{ offset: 11, span: 6 }}>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
                <Modal
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  style={{ backgroundColor: "#E74C3C" }}
                >
                  <Title level={3}>Error..!</Title>
                  <Text>User or Password Incorrect</Text>
                </Modal>
                <Modal
                  visible={modalVisible}
                  onOk={handleOk2}
                  onCancel={handleCancel2}
                  style={{ backgroundColor: "#2ECC71" }}
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
