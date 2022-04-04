import react, { useEffect, useState } from "react";
import { Row, Col, Checkbox } from "antd";

export const ProblemSelection = () => {
  const options = [
    { label: "Problem1", value: "problem1" },
    { label: "Problem2", value: "problem2" },
    { label: "Problem3", value: "problem3" },
  ];
  function onProblemSelection(checkedValues) {
    console.log("checked = ", checkedValues);
  }
  return (
    <Row justify="center">
      <Col xs={22} md={10}>
        <Checkbox.Group options={options} onChange={onProblemSelection} />
      </Col>
    </Row>
  );
};
