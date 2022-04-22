import react, { useEffect, useState } from "react";
import { Row, Col, Checkbox } from "antd";

export const ProblemSelection = (props) => {
  const [problems, setProblems] = useState({
    MECHANICAL: false,
    ELECTRICAL: false,
    TEMPERATURE: false,
  });
  const options = [
    { label: "Mechanical", value: "MECHANICAL" },
    { label: "Electrical", value: "ELECTRICAL" },
    { label: "Temperature", value: "TEMPERATURE" },
  ];
  function onProblemSelection(checkedValues) {
    if (checkedValues.length != 0) {
      if (checkedValues.indexOf("MECHANICAL") != -1) {
        problems.MECHANICAL = true;
      } else {
        problems.MECHANICAL = false;
      }
      if (checkedValues.indexOf("ELECTRICAL") != -1) {
        problems.ELECTRICAL = true;
      } else {
        problems.ELECTRICAL = false;
      }
      if (checkedValues.indexOf("TEMPERATURE") != -1) {
        problems.TEMPERATURE = true;
      } else {
        problems.TEMPERATURE = false;
      }
    }
    props.setProblems(problems);
  }
  return (
    <Row justify="center">
      <Col xs={22} md={10}>
        <Checkbox.Group options={options} onChange={onProblemSelection} />
      </Col>
    </Row>
  );
};
