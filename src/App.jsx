import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import QaReportFirebase from "../Credentials";
const auth = getAuth(QaReportFirebase);
import { Dashboard } from "./components/dashboard/Dashboard";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register/*" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
