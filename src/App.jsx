import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/auth/login/Login";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Register } from "./components/register/Register";
import { EditPage } from "./components/Edit/EditPage";
import { Search } from "./components/search/Search";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import { Grafics } from "./components/grafics/Grafics";
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
                <Register />
              </PrivateRoute>
            }
          />
          <Route
            path="/statistics/*"
            element={
              <PrivateRoute>
                <Grafics />
              </PrivateRoute>
            }
          />
          <Route
            path="/search/*"
            element={
              <PrivateRoute>
                <Search />
              </PrivateRoute>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
