import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./css/global.css";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
