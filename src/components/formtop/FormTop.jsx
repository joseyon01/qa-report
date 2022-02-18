import React from "react";

export const FormTop = (props) => {
  return (
    <>
      <input onChange={props.onChangeCN} value={props.serial} />
      <br />
      <input onChange={props.onChangeName} value={props.name} />
      <br />
      <input onChange={props.onChangeDate} value={props.date} />
    </>
  );
};
