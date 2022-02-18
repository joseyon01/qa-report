import React from "react";

import { render } from "react-dom";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <Link to="register">Formulario</Link>
      <br />
      <div>Dashboard</div>
    </>
  );
};
