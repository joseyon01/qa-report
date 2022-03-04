import React, { useEffect, useState } from "react";
import { Layout, Typography, Button, Row, Col } from "antd";
import QaReportFirebase from "../../../Credentials";
import { AiOutlineLogout, AiFillHome } from "react-icons/ai";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
const auth = getAuth(QaReportFirebase);
const { Title } = Typography;
const { Header: ANTDHeader } = Layout;

export const Header = (props) => {
  const [loading, setLoading] = useState(false);
  const LoginButton = () => {
    return (
      <Button>
        <Link to="/">Login</Link>
      </Button>
    );
  };
  const LogOutButton = () => {
    return (
      <Button
        loading={loading}
        danger
        type="primary"
        style={{}}
        onClick={() => {
          setLoading(true);
          signOut(auth);
          setLoading(false);
        }}
      >
        <Link to="/">{loading ? "" : <AiOutlineLogout />}</Link>
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
                <Button>
                  <Link to="/dashboard">
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
