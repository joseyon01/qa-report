import { Navigate } from "react-router-dom";
import { AuthLoader } from "../AuthLoader";
import { useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

export const PrivateRoute = ({ children }) => {
  const [globalUser, setGlobalUser] = useState(null);
  const [loading, setLoading] = useState(true);
  onAuthStateChanged(getAuth(), (fireBaseUser) => {
    if (fireBaseUser) {
      const uid = fireBaseUser.uid;
      setGlobalUser(uid);
      setLoading(false);
    }
  });
  if (loading) {
    return <AuthLoader />;
  }
  return auth.currentUser ? children : <Navigate to="/" />;
};
