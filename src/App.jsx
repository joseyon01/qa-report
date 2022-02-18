import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Dashboard } from "./components/dashboard/Dashboard";
import { Login } from "./components/auth/Login";
import { Register } from "./components/register/Register";
import { User } from "./components/pages/user/User";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="register/*" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
