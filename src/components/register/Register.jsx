import React from "react";
import { render } from "react-dom";
import { Link, Routes, Route } from "react-router-dom";
import { FormTop } from "../formtop/FormTop";
import { Oven1 } from "../oven1/Oven1";
import { Oven2 } from "../oven2/Oven2";
import { Oven3 } from "../oven3/Oven3";

export const Register = (props) => {
  const [serial, setSerial] = React.useState("S/N");
  const onChange = (event) => {
    setSerial(event.target.value);
  };
  return (
    <>
      <FormTop onChangeCN={onChange} serial={serial} />
      <br />
      <Link to="Oven1">Rendering with 1</Link>
      <br />
      <Link to="Oven2">Rendering with 2</Link>
      <br />
      <Link to="Oven3">Rendering with 3</Link>
      <br />
      <br />
      <Routes>
        {/*<Route path="Oven1" element={Oven1(props.serial)} />*/}
        <Route path="Oven1" element={<Oven1 serial={serial} />} />
        <Route path="Oven2" element={<Oven2 serial={serial} />} />
        <Route path="Oven3" element={<Oven3 serial={serial} />} />
      </Routes>
    </>
  );
};
