import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Login } from "./components/auth/login/Login";
import { Register } from "./components/register/Register";
import { EditPage } from "./components/Edit/EditPage";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/edit/:id/*"
            element={
              <PrivateRoute>
                <EditPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/register/*"
            element={
              <PrivateRoute>
                <Register />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="/*" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
