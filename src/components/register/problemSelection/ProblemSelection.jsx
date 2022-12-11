import react, { useEffect, useState } from "react";
import { Row, Col, Checkbox } from "antd";

export const ProblemSelection = (props) => {
  const [problems, setProblems] = useState({
    COSMETICS: false,
    ELECTRICALCOMPONENTS: false,
    BLOWERSYSTEM: false,
    HEATINGANDTEMPERATURESYSTEM: false,
    WIRING: false,
    LOOSEOREXTRAPARTS: false,
    INCORRECTSOFTWAREUPLOADED: false,
    INCORRECTMENUUPLOADED: false,
    MICROWAVCIRCUIT: false,
    COOCKINGCOMPONENTS: false,
    DOORSYSTEM: false,
  });
  const options = [
    { label: "Cosmetics", value: "COSMETICS" },
    { label: "Electrical components", value: "ELECTRICALCOMPONENTS" },
    { label: "Blower system", value: "BLOWERSYSTEM" },
    {
      label: "Heating and temperature system",
      value: "HEATINGANDTEMPERATURESYSTEM",
    },
    { label: "Wiring", value: "WIRING" },
    { label: "Loose or extra parts", value: "LOOSEOREXTRAPARTS" },
    {
      label: "Incorrect software uploaded",
      value: "INCORRECTSOFTWAREUPLOADED",
    },
    { label: "Incorrect menu uploaded", value: "INCORRECTMENUUPLOADED" },
    { label: "Microwave circuit", value: "MICROWAVCIRCUIT" },
    { label: "Cooking components", value: "COOCKINGCOMPONENTS" },
    { label: "Door system", value: "DOORSYSTEM" },
  ];
  function onProblemSelection(checkedValues) {
    if (checkedValues.length != 0) {
      if (checkedValues.indexOf("COSMETICS") != -1) {
        problems.COSMETICS = true;
      } else {
        problems.COSMETICS = false;
      }
      if (checkedValues.indexOf("ELECTRICALCOMPONENTS") != -1) {
        problems.ELECTRICALCOMPONENTS = true;
      } else {
        problems.ELECTRICALCOMPONENTS = false;
      }
      if (checkedValues.indexOf("BLOWERSYSTEM") != -1) {
        problems.BLOWERSYSTEM = true;
      } else {
        problems.BLOWERSYSTEM = false;
      }
      if (checkedValues.indexOf("HEATINGANDTEMPERATURESYSTEM") != -1) {
        problems.HEATINGANDTEMPERATURESYSTEM = true;
      } else {
        problems.HEATINGANDTEMPERATURESYSTEM = false;
      }
      if (checkedValues.indexOf("WIRING") != -1) {
        problems.WIRING = true;
      } else {
        problems.WIRING = false;
      }
      if (checkedValues.indexOf("LOOSEOREXTRAPARTS") != -1) {
        problems.LOOSEOREXTRAPARTS = true;
      } else {
        problems.LOOSEOREXTRAPARTS = false;
      }
      if (checkedValues.indexOf("INCORRECTSOFTWAREUPLOADED") != -1) {
        problems.INCORRECTSOFTWAREUPLOADED = true;
      } else {
        problems.INCORRECTSOFTWAREUPLOADED = false;
      }
      if (checkedValues.indexOf("INCORRECTMENUUPLOADED") != -1) {
        problems.INCORRECTMENUUPLOADED = true;
      } else {
        problems.INCORRECTMENUUPLOADED = false;
      }
      if (checkedValues.indexOf("MICROWAVCIRCUIT") != -1) {
        problems.MICROWAVCIRCUIT = true;
      } else {
        problems.MICROWAVCIRCUIT = false;
      }
      if (checkedValues.indexOf("COOCKINGCOMPONENTS") != -1) {
        problems.COOCKINGCOMPONENTS = true;
      } else {
        problems.COOCKINGCOMPONENTS = false;
      }
      if (checkedValues.indexOf("DOORSYSTEM") != -1) {
        problems.DOORSYSTEM = true;
      } else {
        problems.DOORSYSTEM = false;
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
