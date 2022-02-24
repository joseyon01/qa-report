import React, { useState } from "react";
import { Layout, Typography, Button, Row, Col } from "antd";
import QaReportFirebase from "../../../Credentials";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
const auth = getAuth(QaReportFirebase);

const { Title } = Typography;
const { Header: ANTDHeader } = Layout;
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
      onClick={() => {
        signOut(auth);
      }}
    >
      <Link to="/">logout</Link>
    </Button>
  );
};

export const Header = (props) => {
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
          <Title style={{ color: "#fff", margin: "0px" }}>QA-Report</Title>
        </Col>
        <Col xs={3} offset={10}>
          {!globalUser ? <LoginButton /> : <LogOutButton />}
        </Col>
        <Col xs={3}>
          <Button>
            <Link to="/dashboard">dasboard</Link>
          </Button>
        </Col>
      </Row>
    </ANTDHeader>
  );
};
