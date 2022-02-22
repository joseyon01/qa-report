import React from "react";
import { useState, useEffect } from "react";
import { Layout, Typography, Button } from "antd";
import QaReportFirebase from "../../../Credentials";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
const auth = getAuth(QaReportFirebase);
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormProvider } from "rc-field-form";

const { Title } = Typography;
const { Header: ANTDHeader } = Layout;
const LoginButton = () => {
  return (
    <Button>
      <Link to="/LogIn">Login</Link>
    </Button>
  );
};
const LogOutButton = () => {
  return <Button onClick={() => signOut(auth)}>logout</Button>;
};

export const Header = (props) => {
  const [globalUser, setGlobalUser] = useState(null);

  onAuthStateChanged(auth, (fireBaseUser) => {
    if (fireBaseUser) {
      setGlobalUser(fireBaseUser);
    } else {
      setGlobalUser(null);
    }
  });

  return (
    <ANTDHeader
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Title style={{ color: "#fff", textAlign: "center", margin: "0px" }}>
        QA-Report
      </Title>
      {!globalUser ? <LoginButton /> : <LogOutButton />}
    </ANTDHeader>
  );
};
