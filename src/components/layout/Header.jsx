import React, { useEffect, useState } from "react";
import { Layout, Typography, Button, Row, Col } from "antd";
import firebaseApp from "../../../Credentials";
import { AiFillHome } from "react-icons/ai";
import { PoweroffOutlined } from "@ant-design/icons";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
const auth = getAuth(firebaseApp);
const { Title } = Typography;
const { Header: ANTDHeader } = Layout;

export const Header = (props) => {
  const [loading, setLoading] = useState(false);
  const LoginButton = () => {
    return (
      <Button>
        <Link to="/login">Login</Link>
      </Button>
    );
  };
  const LogOutButton = () => {
    return (
      <Button
        loading={loading}
        danger
        type="primary"
        style={{ height: "80%", width: "100%" }}
        onClick={() => {
          setLoading(true);
          signOut(auth);
          setLoading(false);
        }}
      >
        <Link
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          to="/login"
        >
          {loading ? "" : <PoweroffOutlined />}
        </Link>
      </Button>
    );
  };
  const [globalUser, setGlobalUser] = useState(null);
  onAuthStateChanged(auth, (fireBaseUser) => {
    if (fireBaseUser) {
      const uid = fireBaseUser.uid;
      setGlobalUser(uid);
    }
  });
  return (
    <ANTDHeader style={{ padding: 0 }}>
      <Row justify="space-between">
        <Col xs={19} sm={10}>
          <Title style={{ color: "#fff", margin: "5px", paddingLeft: "0.5em" }}>
            QA-Report
          </Title>
        </Col>
        <Col xs={5} sm={4}>
          <Row justify="space-around">
            <Col sm={9}>
              {props.dashboard ? (
                !globalUser ? (
                  <LoginButton />
                ) : (
                  <LogOutButton />
                )
              ) : (
                <Button style={{ height: "80%", width: "100%" }}>
                  <Link
                    to="/"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <AiFillHome />
                  </Link>
                </Button>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </ANTDHeader>
  );
};
