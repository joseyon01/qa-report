import react, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { FilePdfOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import Logo from "../../assets/img/turboChefLogo.png";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const db = getFirestore();

export const ENCPdf = (props) => {
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
  const [operational_B_I_I, setoperational_B_I_I] = useState("");
  const [operational_B_I_II, setoperational_B_I_II] = useState("");
  const [operational_B_II_I, setoperational_B_II_I] = useState("");
  const [operational_B_II_II, setoperational_B_II_II] = useState("");
  const [operational_B_III, setoperational_B_III] = useState("");
  const [operational_B_IV, setoperational_B_IV] = useState("");
  const [operational_B_V_I, setoperational_B_V_I] = useState("");
  const [operational_B_V_II, setoperational_B_V_II] = useState("");
  const [operational_B_VI_I, setoperational_B_VI_I] = useState("");
  const [operational_B_VI_II, setoperational_B_VI_II] = useState("");
  const [operational_B_VII, setoperational_B_VII] = useState("");
  const [operational_B_VIII, setoperational_B_VIII] = useState("");
  const [operational_D_I, setoperational_D_I] = useState("");
  const [operational_D_II, setoperational_D_II] = useState("");
  const [operational_D_III, setoperational_D_III] = useState("");
  const [operational_E, setoperational_E] = useState("");
  const [operational_H_I, setoperational_H_I] = useState("");
  const [operational_H_IV, setoperational_H_IV] = useState("");
  const [operational_H_V, setoperational_H_V] = useState("");
  const [operational_H_VI, setoperational_H_VI] = useState("");
  const [operational_I_I, setoperational_I_I] = useState("");
  const [operational_I_II, setoperational_I_II] = useState("");
  const [operational_I_III, setoperational_I_III] = useState("");
  const [operational_NOTE, setoperational_NOTE] = useState("");
  const [operational_OPENING, setoperational_OPENING] = useState("");
  const [operational_CLOSING, setoperational_CLOSING] = useState("");
  const [value_C, setvalue_C] = useState("");
  const [value_D, setvalue_D] = useState("");
  const [value_F, setvalue_F] = useState("");
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
      }
      setIsDisabled(false);
      setLoading(false);
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
      setoperational_B_I_I(data?.OPERATIONAL_B_I_I);
      setoperational_B_I_II(data?.OPERATIONAL_B_I_II);
      setoperational_B_II_I(data?.OPERATIONAL_B_II_I);
      setoperational_B_II_II(data?.OPERATIONAL_B_II_II);
      setoperational_B_III(data?.OPERATIONAL_B_III);
      setoperational_B_IV(data?.OPERATIONAL_B_IV);
      setoperational_B_V_I(data?.OPERATIONAL_B_V_I);
      setoperational_B_V_II(data?.OPERATIONAL_B_V_II);
      setoperational_B_VI_I(data?.OPERATIONAL_B_VI_I);
      setoperational_B_VI_II(data?.OPERATIONAL_B_VI_II);
      setoperational_B_VII(data?.OPERATIONAL_B_VII);
      setoperational_B_VIII(data?.OPERATIONAL_B_VIII);
      setoperational_D_I(data?.OPERATIONAL_D_I);
      setoperational_D_II(data?.OPERATIONAL_D_II);
      setoperational_D_III(data?.OPERATIONAL_D_III);
      setoperational_E(data?.OPERATIONAL_E);
      setoperational_H_I(data?.OPERATIONAL_H_I);
      setoperational_H_IV(data?.OPERATIONAL_H_IV);
      setoperational_H_V(data?.OPERATIONAL_H_V);
      setoperational_H_VI(data?.OPERATIONAL_H_VI);
      setoperational_I_I(data?.OPERATIONAL_I_I);
      setoperational_I_II(data?.OPERATIONAL_I_II);
      setoperational_I_III(data?.OPERATIONAL_I_III);
      setoperational_NOTE(data?.OPERATIONAL_NOTE);
      setoperational_OPENING(data?.OPERATIONAL_OPENING);
      setoperational_CLOSING(data?.OPERATIONAL_CLOSING);
      setvalue_C(data?.OPERATIONAL_C);
      setvalue_D(data?.OPERATIONAL_D_IV);
      setvalue_F(data?.OPERATIONAL_F);
      setvalue_J(data?.OPERATIONAL_J);
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
      "A) Check Consumables and Accessories to comply with proper Packaging kit. Remove Rack, Left, Right and Top panels. Confirm proper Schematics on RS Panel.",
      15,
      125,
      { maxWidth: 350 }
    );
    doc.text(`${valueA ? "ACC" : "NO ACC "}`, 370, 125);
    doc.text(
      "B) Remove the Bubble wrap and insert the Oven Rack insuring flush contact with all surfaces. Check IR Element lies flat and Clips/Standoffs are tight and in correct position. Check Waveguide Covers (ar the ends only) by squeezing with hands for looseness.",
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
      "H) Are interlock Switches adjusted with actuator rotation if door is     closed slowly, are the switch arms .020'' to .030'' fron switch body? is the actuator at 87° +- 2°?",
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
      `i) Frame and the Ground Pin on the plug: ${operational_A_I}`,
      25,
      325
    );
    doc.text(
      "B) Remove the fastons from the Primary and the secondary of the of Voltage and the Filament XFMRs. Measure and Record the isolated resistance of the:",
      15,
      340,
      { maxWidth: 350 }
    );
    doc.text(
      `i) HV XFMR #1 Primary: terminals 1 & 2: ${operational_B_I_I} | terminals 1 & 3: ${operational_B_I_II}`,
      25,
      360
    );
    doc.text(
      `ii) HV XFMR #1 Primary: terminals 1 & 2: ${operational_B_II_I} | terminals 1 & 3: ${operational_B_II_II}`,
      25,
      370
    );
    doc.text(
      `iii) HV XFMR #1 Secondary: terminal #4 and the frame: ${operational_B_III} `,
      25,
      380
    );
    doc.text(`iv) HV XFMR #2: ${operational_B_IV}`, 25, 390);
    doc.text(
      `v) Filament XFMR #1 Primary: terminal 1 & 2: ${operational_B_V_I} | terminal 1 & 3: ${operational_B_V_II}`,
      25,
      400
    );
    doc.text(
      `vi) Filament XFMR #2 Primary: terminal 1 & 2: ${operational_B_VI_I} | terminal 1 & 3: ${operational_B_VI_II}`,
      25,
      410
    );
    doc.text(
      `vii) Filament XFMR #1 Secondary: terminal 4 & 5: ${operational_B_VII}`,
      25,
      420
    );
    doc.text(
      `viii) Filament XFMR #2 Secondary: terminal 4 & 5: ${operational_B_VIII}`,
      25,
      430
    );
    doc.text(
      "C) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR 12 and ATMR 15 respectively",
      15,
      445,
      { maxWidth: 350 }
    );
    doc.text(`${value_C ? "ACC" : "NO ACC "}`, 370, 445);

    doc.text("D) Plug in the oven, as the Display Boots, check for:", 15, 460);
    doc.text(`i) Displayed software version: ${operational_D_I}`, 25, 470);
    doc.text(
      `ii) Display voltage: ${operational_D_II} | iii) Serial Number: ${operational_D_III}`,
      25,
      480
    );
    doc.text(
      `DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING? -- ${
        value_D ? "YES" : "NO"
      }`,
      25,
      490
    );
    doc.text(
      `E) Set your meter to Volts AC: Measure the AC voltage at EMI filer terminals: ${operational_E} VAC`,
      15,
      505,
      { maxWidth: 350 }
    );
    doc.text(
      `F) Using an insulated screwdriver check the EC Cooling Fan by
      bridging between the terminals on the "Close on Rise" switch, witch
      controls the EC cooling fan.`,
      15,
      520,
      { maxWidth: 350 }
    );
    doc.text(`${value_F ? "PASS" : "FAIL"}`, 370, 520);

    /* new Page*/

    doc.addPage("a4", "p");
    doc.addImage(Logo, "PNG", 120, 10, 220, 40);
    doc.text(
      "H) Water Rise Test:Place Oven into the 'UNIT' mode, and then scroll down to",
      15,
      70
    );
    doc.text("'Microwave' on the first screen.", 25, 80);
    doc.text(
      "i) Using Graduated Cylinder measure 1 liter +/- 5ml of water. While in graduated cylinder, measure ",
      25,
      90
    );
    doc.text(
      `and record the Temp, Tinitial: ${operational_H_I} | enter T inicial via Keypad`,
      25,
      100
    );
    doc.text(
      "ii) inmidiately pur water into 1000 ml vessel, place into Cook Chamber and close the door. ",
      25,
      110
    );
    doc.text(
      "iii) Press 'ENTER'. The microwave will run for 45 seconds. ",
      25,
      120
    );
    doc.text(
      "iv) While test is running, Verify the current is 9.2amps +/- 2 amps (208V)",
      25,
      130
    );
    doc.text(
      `(10.64amps +/- 1.6 amps for the unit tested with 230V): ${operational_H_IV} Amps`,
      25,
      140
    );

    doc.text(
      "v) When the timer reaches Zero, immediately measure Tfinal while stirring to blend water as to have ",
      25,
      150
    );
    doc.text(
      `one temperature throughout vessel. TFINAL: ${operational_H_V} | enter T final via Keypad`,
      25,
      160
    );
    doc.text(
      `vi) The power output will show for 5 seconds. Record microwave oven output power: ${operational_H_VI} W`,
      25,
      170
    );
    doc.text(
      "Output Power must be >=  400/650 W. But it's more than 650W, repeat this test.",
      40,
      185
    );
    doc.text(
      "I) Push 'BACK' until display reads: 'OVEN OFF' and then push the 'OVEN ON' smart key and let the oven ",
      15,
      200
    );
    doc.text("warm to its preset temperature.", 25, 210);
    doc.text(`i) Record time oven starts warm up: ${operational_I_I}`, 25, 220);
    doc.text(
      "ii) Once the oven reaches the OPERATIONAL Temperature, the menu is displayed ",
      25,
      230
    );
    doc.text(`record the displayed menu: ${operational_I_II}`, 25, 240);
    doc.text(`iii) And then record the time: ${operational_I_III}`, 25, 250);
    doc.text(
      "This time should be 15 minutes or less! Let Oven 'heat soak' for 1 hour",
      25,
      260
    );
    doc.text(`NOTES: ${operational_NOTE}`, 15, 275, { maxWidth: 400 });
    doc.text("J) Are Switch arms still engaging?", 15, 305);
    doc.text(`${value_J ? "YES" : "NO"}`, 370, 305);
    doc.text(
      `Slowly opening the Door, the order of the indicators are: ${operational_OPENING}`,
      15,
      320
    );
    doc.text(
      `Slowly closing the Door, the order of the indicators are: ${operational_CLOSING}`,
      15,
      330
    );
    doc.line(5, 335, 440, 335);
    doc.setFontSize(13);
    doc.text("3) HOT OVEN OPERATIONAL CHECKOUT:", 15, 350);
    doc.setFontSize(10);
    doc.text(
      "The equipment needed to complete the Oven inspection is a moder 1501 Survey Meter, ",
      15,
      365
    );
    doc.text(
      "three 500 ml beakers with 275 ml +/- 15ml of cold water, spring loaded tongs",
      15,
      375
    );
    doc.text("A) Door Closed Microwave Leakege Test:", 15, 390);
    doc.text(
      "B) Repeat process checking the IR Element exits, around the Magnetrons and waveguide ",
      15,
      405
    );
    doc.text(
      "ends, left and right sides. Maximum allowale leakage is 0.8mW/cm2 surrounding the",
      25,
      415
    );
    doc.text(
      "perimeter of the door and 0.2mW/cm2 around the EC and left and right side IR Element ",
      25,
      425
    );
    doc.text("through hole.", 25, 435);
    doc.text(`DOOR  ${valueDoor} mW/cm2`, 90, 450);
    doc.text(`Rt & Lt sides  ${valueSides} mW/cm2`, 230, 450);
    doc.text(`TL ${valueTopL} `, 120, 475);
    doc.line(140, 475, 260, 475);
    doc.line(140, 475, 140, 510);
    doc.text(`${valueTopR} TR`, 265, 475);
    doc.text("Mark and record peak levels.", 150, 498);
    doc.text(`BL ${valueBotL} `, 120, 520);
    doc.line(140, 510, 260, 510);
    doc.line(260, 475, 260, 510);
    doc.text(`${valueBotR} BR`, 265, 520);
    doc.text(
      "Recheck Waveguide Covers ! Reset Cook Count and Accumulation Settings !",
      15,
      535
    );
    doc.text(`${valueOvenR ? "ACC" : "NO ACC"}`, 370, 535);
    doc.text(`Cook time count: ${value_C_H}`, 15, 550);
    doc.text(`Survey meter#: ${value_D_H}`, 15, 560);
    doc.text(`Clear cook time foults: ${value_E_H}`, 15, 570);
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
