import React, { useEffect, useState } from "react";
import { Layout, Typography, Button, Row, Col } from "antd";
import firebaseApp from "../../../Credentials";
import { AiFillHome } from "react-icons/ai";
import {
  PoweroffOutlined,
  MenuOutlined,
  HomeOutlined,
  SearchOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import "./header.css";
const auth = getAuth(firebaseApp);
const { Title } = Typography;
const { Header: ANTDHeader } = Layout;

export const Header = (props) => {
  const [loading, setLoading] = useState(false);
  const [menuDisplayed, setMenuDisplayed] = useState(false);
  const [globalUser, setGlobalUser] = useState(null);
  onAuthStateChanged(auth, (fireBaseUser) => {
    if (fireBaseUser) {
      const uid = fireBaseUser.uid;
      setGlobalUser(uid);
    }
  });

  const btnMinClick = (e) => {
    setMenuDisplayed(!menuDisplayed);
    const classList = e.target.classList;
    const displayMenu = document.querySelector("#header--navigation-menu");
    displayMenu.classList.toggle("header--navigation-menu--closed");
    displayMenu.classList.toggle("header--navigation-menu");
  };
  return (
    <ANTDHeader style={{ padding: 0 }}>
      <Row justify="space-between">
        <Col xs={19} sm={10}>
          <Title style={{ color: "#fff", margin: "5px", paddingLeft: "0.5em" }}>
            QA-Report
          </Title>
        </Col>
        <Col xs={2}>
          <Button onClick={btnMinClick}>
            <MenuOutlined />
          </Button>
        </Col>
      </Row>
      <nav
        id="header--navigation-menu"
        className="header--navigation-menu--closed"
      >
        <ul className={"header--navigation-list"}>
          <li>
            <button className={"header--navigation-btn"}>
              <Link
                to="/"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HomeOutlined />
                <span className={"header--navigation-btn-text"}> Home</span>
              </Link>
            </button>
          </li>
          <li>
            <button className={"header--navigation-btn"}>
              <Link
                to="/search"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SearchOutlined />
                <span className={"header--navigation-btn-text"}> Search</span>
              </Link>
            </button>
          </li>
          <li>
            <button className={"header--navigation-btn"}>
              <Link
                to="/statistics"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LineChartOutlined />
                <span className={"header--navigation-btn-text"}>
                  Statistics
                </span>
              </Link>
            </button>
          </li>
        </ul>
        <ul className={"header--navigation-auth"}>
          <li className="header--navigation-login">
            <Button
              loading={loading}
              danger
              type="primary"
              style={{
                height: "60%",
                width: "60%",
                margin: "auto",
              }}
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
          </li>
        </ul>
      </nav>
    </ANTDHeader>
  );
};
