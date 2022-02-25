import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth } from "firebase/auth";
import QaReportFirebase from "../Credentials";
const auth = getAuth(QaReportFirebase);
import { Dashboard } from "./components/dashboard/Dashboard";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { EditPage } from "./components/Edit/EditPage";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/edit/:id/*" element={<EditPage />} />
          <Route path="/register/*" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
