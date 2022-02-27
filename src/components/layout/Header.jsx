import React, { useEffect, useState } from "react";
import { Layout, Typography, Button, Row, Col } from "antd";
import QaReportFirebase from "../../../Credentials";
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
        <Link to="/">{loading ? "" : "LogOut"}</Link>
      </Button>
    );
  };
  const [globalUser, setGlobalUser] = useState(null);
  onAuthStateChanged(auth, (fireBaseUser) => {
    if (fireBaseUser) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = fireBaseUser.uid;
      setGlobalUser(uid);
      // ...
    }
  });
  return (
    <ANTDHeader>
      <Row>
        <Col xs={8}>
          <Title style={{ color: "#fff", margin: "6px" }}>QA-Report</Title>
        </Col>
        <Col xs={3} offset={9}>
          {props.dashboard ? (
            ""
          ) : (
            <Button>
              <Link to="/dashboard">Principal</Link>
            </Button>
          )}
        </Col>
        <Col xs={3} offset={1}>
          {!globalUser ? <LoginButton /> : <LogOutButton />}
        </Col>
      </Row>
    </ANTDHeader>
  );
};
