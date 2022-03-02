import { Navigate, Route } from "react-router-dom";
import QaReportFirebase from "../../../Credentials";
import react, { useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(QaReportFirebase);

export const PrivateRoute = ({ children }) => {
  const [globalUser, setGlobalUser] = useState(null);
  onAuthStateChanged(auth, (fireBaseUser) => {
    if (fireBaseUser) {
      const uid = fireBaseUser.uid;
      setGlobalUser(uid);
    }
  });
  return auth.currentUser ? children : <Navigate to="/" />;
};
