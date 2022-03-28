import react, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { Button, Col, Row } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import Logo from "../../assets/img/turboChefLogo.png";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const db = getFirestore();

export const I1Pdf = (props) => {
  const ovenType = props.oven;
  const ovenSerial = props.serial;
  const [isDisabled, setIsDisabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [serial, setserial] = useState("");
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [valueA, setvalueA] = useState("");
  const [valueB, setvalueB] = useState("");
  const [valueC, setvalueC] = useState("");
  const [valueD, setvalueD] = useState("");
  const [valueE, setvalueE] = useState("");
  const [valueF, setvalueF] = useState("");
  const [valueG, setvalueG] = useState("");
  const [valueH, setvalueH] = useState("");
  const [operational_A_I, setoperational_A_I] = useState("");
  const [operational_A_II, setoperational_A_II] = useState("");
  const [value_B, setvalue_B] = useState("");
  const [operational_C_I, setoperational_C_I] = useState("");
  const [operational_C_II, setoperational_C_II] = useState("");
  const [operational_C_III, setoperational_C_III] = useState("");
  const [value_C, setvalue_C] = useState("");
  const [operational_D_I, setoperational_D_I] = useState("");
  const [value_E, setvalue_E] = useState("");
  const [value_F, setvalue_F] = useState("");
  const [operational_G_I, setoperational_G_I] = useState("");
  const [operational_G_IV, setoperational_G_IV] = useState("");
  const [operational_G_V, setoperational_G_V] = useState("");
  const [operational_G_VI, setoperational_G_VI] = useState("");
  const [operational_H_I, setoperational_H_I] = useState("");
  const [operational_H_II, setoperational_H_II] = useState("");
  const [operational_H_III, setoperational_H_III] = useState("");
  const [operational_NOTE, setoperational_NOTE] = useState("");
  const [value_I, setvalue_I] = useState("");
  const [operational_OPENING, setoperational_OPENING] = useState("");
  const [operational_CLOSING, setoperational_CLOSING] = useState("");
  const [value_J, setvalue_J] = useState("");
  const [valueDoor, setvalueDoor] = useState("");
  const [valueSides, setvalueSides] = useState("");
  const [valueTopR, setvalueTopR] = useState("");
  const [valueTopL, setvalueTopL] = useState("");
  const [valueBotR, setvalueBotR] = useState("");
  const [valueBotL, setvalueBotL] = useState("");
  const [valueOvenR, setvalueOvenR] = useState("");
  const [value_C_H, setvalue_C_H] = useState("");
  const [value_D_H, setvalue_D_H] = useState("");
  const [value_E_H, setvalue_E_H] = useState("");
  const [valueAON, setvalueAON] = useState("");
  const getDataOven = async () => {
    try {
      setIsDisabled(true);
      setLoading(true);
      const docRef = doc(db, "oven", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      const docRefO = doc(db, "OperationalInspection", `${ovenSerial}`);
      const docSnapO = await getDoc(docRefO);
      const dataO = docSnapO.data();
      setserial(data?.serial);
      setdate(data?.date);
      setname(data?.name);
      setIsDisabled(false);
      setLoading(false);
    } catch (error) {
      console.error("error", error);
    }
  };
  const getDataVisual = async () => {
    try {
      setIsDisabled(true);
      setLoading(true);
      const docRef = doc(db, "VisualInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if (valueA == "") {
        setvalueA(data?.VISUALQA);
        setvalueB(data?.VISUALQB);
        setvalueC(data?.VISUALQC);
        setvalueD(data?.VISUALQD);
        setvalueE(data?.VISUALQE);
        setvalueF(data?.VISUALQF);
        setvalueG(data?.VISUALQG);
        setvalueH(data?.VISUALQH);

        setIsDisabled(false);
        setLoading(false);
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  const getOperational = async () => {
    try {
      setIsDisabled(true);
      setLoading(true);
      const docRef = doc(db, "OperationalInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setoperational_A_I(data?.OPERATIONAL_A_I);
      setoperational_A_II(data?.OPERATIONAL_A_II);
      setvalue_B(data?.OPERATIONAL_B_I_I);
      setoperational_C_I(data?.OPERATIONAL_C_I);
      setoperational_C_II(data?.OPERATIONAL_C_II);
      setoperational_C_III(data?.OPERATIONAL_C_III);
      setvalue_C(data?.OPERATIONAL_C_IV);
      setoperational_D_I(data?.OPERATIONAL_D_I);
      setvalue_E(data?.OPERATIONAL_E);
      setvalue_F(data?.OPERATIONAL_F);
      setoperational_G_I(data?.OPERATIONAL_G_I);
      setoperational_G_IV(data?.OPERATIONAL_G_IV);
      setoperational_G_V(data?.OPERATIONAL_G_V);
      setoperational_G_VI(data?.OPERATIONAL_G_VI);
      setoperational_H_I(data?.OPERATIONAL_H_I);
      setoperational_H_II(data?.OPERATIONAL_H_II);
      setoperational_H_III(data?.OPERATIONAL_H_III);
      setoperational_NOTE(data?.OPERATIONAL_NOTE);
      setvalue_I(data?.OPERATIONAL_I_I);
      setoperational_OPENING(data?.OPERATIONAL_OPENING);
      setoperational_CLOSING(data?.OPERATIONAL_CLOSING);
      setvalue_J(data?.OPERATIONAL_I_II);
      setIsDisabled(false);
      setLoading(false);
    } catch (error) {
      console.error("error", error);
    }
  };

  const getHotOven = async () => {
    try {
      setIsDisabled(true);
      setLoading(true);
      const docRef = doc(db, "HotOvenInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setvalueDoor(data?.HOT_OVEN_B_DOOR);
      setvalueSides(data?.HOT_OVEN_B_SIDES);
      setvalueTopR(data?.HOT_OVEN_TOP_R);
      setvalueTopL(data?.HOT_OVEN_TOP_L);
      setvalueBotR(data?.HOT_OVEN_BOT_R);
      setvalueBotL(data?.HOT_OVEN_BOT_L);
      setvalue_C_H(data?.HOT_OVEN_C);
      setvalue_D_H(data?.HOT_OVEN_D);
      setvalue_E_H(data?.HOT_OVEN_E);
      setvalueOvenR(data?.HOT_OVEN_RECHECK);
      setvalueAON(data?.OVEN_APROVE_OR_NOT);
      setIsDisabled(false);
      setLoading(false);
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    getDataOven();
    getDataVisual();
    getOperational();
    getHotOven();
  }, []);

  const jspdfGenerator = (s, o) => {
    let doc = new jsPDF("p", "px", "a4", true);
    doc.addImage(Logo, "PNG", 120, 10, 220, 40);
    doc.setFontSize(13);

    doc.text(
      "ENC NEW AND REFURBISHED OVENS QUALITY ASSURANCE CHECKLIST",
      40,
      70
    );
    doc.text("DATE:", 15, 90);
    doc.text(`${date}`, 55, 90);
    doc.text("NAME:", 120, 90);
    doc.text(`${name}`, 160, 90);
    doc.text("S/N:", 270, 90);
    doc.text(`${serial}`, 300, 90);
    doc.text("1) VISUAL INSPECTION: DO NOT APPLY POWER TO OVEN!!!", 15, 110);
    doc.setFontSize(10);
    doc.text(
      "A)  Check Consumables and Accessories to comply with proper Packaging Kit. Remove Rack, Left, Right and Top panels. Confirm proper Schematic is on RS Panel.",
      15,
      125,
      { maxWidth: 350 }
    );
    doc.text(`${valueA ? "ACC" : "NO ACC "}`, 370, 125);
    doc.text(
      "B) Remove the Bubble wrap and insert the Oven Rack insuring flush contact with all surfaces. Check IR Element lies flat and Clips/Standoffs are tight and in correct position. Check Waveguide Covers (at the ends only) by squeezing with hands for looseness.",
      15,
      150,
      { maxWidth: 350 }
    );
    doc.text(`${valueB ? "ACC" : "NO ACC "}`, 370, 150);

    doc.text(
      "C) Check wiring CC & IR Heaters, Mag1 & 2, Dual SSR, Mag, EC Fans, Convection Blower. Hi-Limit and Control circuits.",
      15,
      185,
      { maxWidth: 350 }
    );
    doc.text(`${valueC ? "ACC" : "NO ACC "}`, 370, 185);
    doc.text(
      "D) Check for loose hardware and debris on floor of the oven cabinet.",
      15,
      210,
      { maxWidth: 350 }
    );
    doc.text(`${valueD ? "ACC" : "NO ACC "}`, 370, 210);
    doc.text(
      "E) Check for Door flush to the Oven Flange (no pinching on bottom), door clears Louvered Panel?",
      15,
      225,
      { maxWidth: 350 }
    );
    doc.text(`${valueE ? "ACC" : "NO ACC "}`, 370, 225);
    doc.text(
      "F) Are the CC Heater Terminal Posts insulated with Silicone Caps and Mica Disks?",
      15,
      240,
      { maxWidth: 350 }
    );
    doc.text(`${valueF ? "ACC" : "NO ACC "}`, 370, 240);
    doc.text(
      "G) Split open insulation over Hi-Limit Capillary, is it mounted in the correct position?",
      15,
      255,
      { maxWidth: 350 }
    );
    doc.text(`${valueG ? "ACC" : "NO ACC "}`, 370, 255);
    doc.text(
      "H) Are Interlock Switches adjusted with actuatorrotation if door is closed slowly, are the switch arms .020'' from switch body? is the Actuator at 87° +/- 2°?",
      15,
      270,
      { maxWidth: 350 }
    );
    doc.text(`${valueH ? "ACC" : "NO ACC "}`, 370, 270);

    doc.line(5, 285, 440, 285);

    doc.setFontSize(13);
    doc.text("2) OPERATIONAL INSPECTION: DO NOT APPLY POWER TO OVEN.", 15, 300);
    doc.setFontSize(10);
    doc.text(
      "A) Using the OHMS function on your meter Measure and Record the resistance between the:",
      15,
      315,
      { maxWidth: 350 }
    );
    doc.text(
      `i) Frame and the Ground Pin on the plug: ${operational_A_I} | ii) L1 & Ground: ${operational_A_II}`,
      25,
      325
    );
    doc.text(
      "B) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR 12, and ATMR 20 respectively.",
      15,
      340,
      { maxWidth: 350 }
    );
    doc.text(`${value_B ? "ACC" : "NO ACC"}`, 370, 340);
    doc.text("C) Plug in the oven, as the Display Boots, check for:", 15, 355);
    doc.text(`i) Displayed software version: ${operational_C_I}`, 25, 365);
    doc.text(
      `ii) Display voltage: ${operational_C_II} | iii) Serial Number: ${operational_C_III}`,
      25,
      375
    );
    doc.text(
      `DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING? -- ${
        value_C ? "YES" : "NO"
      }`,
      25,
      385
    );
    doc.text(
      `D) Set your meter to Volts AC: Measure the AC voltage at EMI filer terminals: ${operational_D_I} VAC`,
      15,
      400,
      { maxWidth: 350 }
    );
    doc.text(
      `E) Enter "Test Mode". Make sure "Faults" are Cleared and then run "Self Test". Pass all test?`,
      15,
      415,
      { maxWidth: 350 }
    );
    doc.text(`${value_E ? "ACC" : "NO ACC"}`, 370, 415);
    doc.text(
      `F) Using an insulated screwdriver check the EC Cooling Fan by bringing between the terminals on the "Close on Rise" Switch, which controls the EC cooling fan.`,
      15,
      430,
      { maxWidth: 350 }
    );
    doc.text(`${value_F ? "ACC" : "NO ACC"}`, 370, 430);

    doc.text(
      "G) Water Rise Test: Place Oven into the 'UNIT' mode, and then scroll down to microwave on the first screen.",
      15,
      450,
      { maxWidth: 350 }
    );
    doc.text(
      `i) Using Graduated Cylinder measure 1 liter +/- 5ml of water. While in graduated cylinder, measure and record the Temp, Tinitial: ${operational_G_I}°C | enter T inicial via Keypad`,
      25,
      470,
      { maxWidth: 350 }
    );
    doc.text(
      "ii) inmidiately pur water into 1000 ml vessel, place into Cook Chamber and close the door. ",
      25,
      490
    );
    doc.text(
      "iii) Press 'ENTER'. The microwave will run for 45 seconds. ",
      25,
      502
    );
    doc.text(
      "iv) While test is running, Verify the current is 9.2amps +/- 2 amps (208V)",
      25,
      515
    );
    doc.text(
      `(10.64amps +/- 1.6 amps for the unit tested with 230V): ${operational_G_IV} Amps`,
      25,
      525
    );

    doc.text(
      "v) When the timer reaches Zero, immediately measure Tfinal while stirring to blend water as to have ",
      25,
      535
    );
    doc.text(
      `one temperature throughout vessel. Tfinal: ${operational_G_V}°C | enter T final via Keypad`,
      25,
      545
    );
    doc.text(
      `vi) The power output will show for 5 seconds. Record microwave oven output power: ${operational_G_VI} W`,
      25,
      555
    );
    doc.setTextColor(0, 0.61, 0.67, 0.09);
    doc.setFontSize(12);
    doc.text(
      "Output Power must be >=  400/650 W. But it's more than 650W, repeat this test.",
      40,
      575
    );
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0, 1);
    /* new Page*/

    doc.addPage("a4", "p");
    doc.addImage(Logo, "PNG", 120, 10, 220, 40);

    doc.text(
      "H) Push 'BACK' until display reads: 'OVEN OFF' and then push the 'OVEN ON' smart key and let the oven warm to its preset temperature.",
      15,
      70,
      { maxWidth: 350 }
    );
    doc.text(`i) Record time oven starts warm up: ${operational_H_I}`, 25, 90);
    doc.text(
      "ii) Once the oven reaches the OPERATIONAL Temperature, the menu is displayed ",
      25,
      100
    );
    doc.text(`record the displayed menu: ${operational_H_II}`, 35, 110);
    doc.text(`iii) And then record the time: ${operational_H_III}`, 25, 120);
    doc.text(
      "This time should be 15 minutes or less! Let Oven 'heat soak' for 1 hour",
      25,
      130
    );
    doc.text(`NOTES: ${operational_NOTE}`, 15, 145, { maxWidth: 400 });

    doc.text(
      `I) Is there actuator rotation if door is closed slowly? -- ${
        value_I ? "YES" : "NO"
      }`,
      15,
      180
    );
    doc.text(
      `Slowly opening the Door, the order of the indicators are: ${operational_OPENING}`,
      15,
      195
    );
    doc.text(
      `Slowly closing the Door, the order of the indicators are: ${operational_CLOSING}`,
      15,
      205
    );
    doc.text(
      `J) Are Switch arms .020" to .030" from Switch body and is the actuator at 87° +/- 2°`,
      15,
      220
    );
    doc.text(`${value_J ? "ACC" : "NO ACC"}`, 370, 220);

    doc.line(5, 230, 440, 225);
    doc.setFontSize(13);
    doc.text("3) HOT OVEN OPERATIONAL CHECKOUT:", 15, 245);
    doc.setFontSize(10);
    doc.text(
      "The equipment needed to complete the Oven inspection is a model 1501 Survey Meter, three 500ml beakers with 275 ml +/- 15ml of cold water, spring loaded tongs",
      15,
      260,
      { maxWidth: 350 }
    );

    doc.text("A) Door Closed Microwave Leakege Test:", 15, 280);
    doc.text(
      "B) Repeat process checking the IR Element exits, around the Magnetrons and waveguide ends, left and right sides. Maximum allowale leakage is 0.8mW/cm2 surrounding the perimeter of the door and 0.2mW/cm2 around the EC and left and right side IR Element through hole.",
      15,
      305
    );
    doc.text(`DOOR  ${valueDoor} mW/cm2`, 90, 320);
    doc.text(`Rt & Lt sides  ${valueSides} mW/cm2`, 230, 320);
    doc.text(`TL ${valueTopL} `, 120, 335);
    doc.line(140, 335, 260, 335);
    doc.line(140, 335, 140, 375);
    doc.text(`${valueTopR} TR`, 265, 335);
    doc.text("Mark and record peak levels.", 150, 353);
    doc.text(`BL ${valueBotL} `, 120, 385);
    doc.line(140, 375, 260, 375);
    doc.line(260, 335, 260, 375);
    doc.text(`${valueBotR} BR`, 265, 385);
    doc.text(
      "Recheck Waveguide Covers ! Reset Cook Count and Accumulation Settings !",
      15,
      400
    );
    doc.text(`${valueOvenR ? "ACC" : "NO ACC"}`, 370, 400);
    doc.text(`Cook time count: ${value_C_H}`, 15, 415);
    doc.text(`Survey meter#: ${value_D_H}`, 15, 425);
    doc.text(`Clear cook time foults: ${value_E_H}`, 15, 435);
    doc.text(`APROOVED: ${valueAON ? "YES" : "NO"}`, 170, 600);

    doc.save(`${o + s}.pdf`);
  };

  return (
    <Row justify="center" style={{ height: 100 }}>
      <Col xs={12} style={{ height: "100%" }}>
        <Button
          disabled={isDisabled}
          loading={loading}
          block
          style={{ width: "100%", height: "100%" }}
          type={"primary"}
          onClick={() => jspdfGenerator(ovenSerial, ovenType)}
        >
          {loading ? "" : "Generate PDF"} <FilePdfOutlined />
        </Button>
      </Col>
    </Row>
  );
};
