import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { FilePdfOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import Logo from "../../assets/img/turboChefLogo.png";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const db = getFirestore();

export const ECOSTPdf = (props) => {
  const ovenType = props.oven;
  const ovenSerial = props.serial;
  const [isDisabled, setIsDisabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [serial, setSerial] = useState(null);
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);

  const [valueA, setValueA] = useState(null);
  const [valueB, setValueB] = useState(null);
  const [valueC, setValueC] = useState(null);
  const [valueD, setValueD] = useState(null);
  const [valueE, setValueE] = useState(null);
  const [valueF, setValueF] = useState(null);
  const [valueG, setValueG] = useState(null);
  const [valueH, setValueH] = useState(null);

  const [operational_B_I_I, setOperational_B_I_I] = useState(null);
  const [valueC_I, setValueC_I] = useState(null);
  const [operational_D_I, setOperational_D_I] = useState(null);
  const [operational_D_II, setOperational_D_II] = useState(null);
  const [operational_D_III, setOperational_D_III] = useState(null);
  const [valueD_I, setValueD_I] = useState(null);
  const [operational_E, setOperational_E] = useState(null);
  const [valueF_I, setValueF_I] = useState(null);
  const [valueG_I, setValueG_I] = useState(null);
  const [operational_H_I, setOperational_H_I] = useState(null);
  const [operational_H_IV, setOperational_H_IV] = useState(null);
  const [operational_H_V, setOperational_H_V] = useState(null);
  const [operational_H_VI, setOperational_H_VI] = useState(null);
  const [operational_I_I, setOperational_I_I] = useState(null);
  const [operational_I_II, setOperational_I_II] = useState(null);
  const [operational_I_III, setOperational_I_III] = useState(null);
  const [operational_NOTE, setOperational_NOTE] = useState(null);
  const [operational_OPENING, setOperational_OPENING] = useState(null);
  const [operational_CLOSING, setOperational_CLOSING] = useState(null);
  const [valueJ, setValueJ] = useState(null);

  const [valueDoor, setValueDoor] = useState(null);
  const [valueSides, setValueSides] = useState(null);
  const [valueTopR, setValueTopR] = useState(null);
  const [valueTopL, setValueTopL] = useState(null);
  const [valueBotR, setValueBotR] = useState(null);
  const [valueBotL, setValueBotL] = useState(null);
  const [valueOvenR, setValueOvenR] = useState(null);
  const [value_C, setValue_C] = useState(null);
  const [value_D, setValue_D] = useState(null);
  const [valueRepairedStatus, setvalueRepairedStatus] = useState([]);
  const [valueAON, setValueAON] = useState(null);

  const getHotOven = async () => {
    try {
      setIsDisabled(true);
      setLoading(true);
      const docRef = doc(db, "HotOvenInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setValueDoor(data?.HOT_OVEN_B_DOOR);
      setValueSides(data?.HOT_OVEN_B_SIDES);
      setValueTopR(data?.HOT_OVEN_TOP_R);
      setValueTopL(data?.HOT_OVEN_TOP_L);
      setValueBotR(data?.HOT_OVEN_BOT_R);
      setValueBotL(data?.HOT_OVEN_BOT_L);
      setValue_C(data?.HOT_OVEN_C);
      setValue_D(data?.HOT_OVEN_D);
      setValueOvenR(data?.HOT_OVEN_RECHECK);
      setvalueRepairedStatus(data?.OVEN_REPAIRED_OPTIONS);
      setValueAON(data?.OVEN_APROVE_OR_NOT);
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
      setOperational_B_I_I(data?.OPERATIONAL_B_I_I);
      setValueC_I(data?.OPERATIONAL_C);
      setOperational_D_I(data?.OPERATIONAL_D_I);
      setOperational_D_II(data?.OPERATIONAL_D_II);
      setOperational_D_III(data?.OPERATIONAL_D_III);
      setValueD_I(data?.OPERATIONAL_D_IV);
      setOperational_E(data?.OPERATIONAL_E);
      setValueF_I(data?.OPERATIONAL_F);
      setValueG_I(data?.OPERATIONAL_G);
      setOperational_H_I(data?.OPERATIONAL_H_I);
      setOperational_H_IV(data?.OPERATIONAL_H_IV);
      setOperational_H_V(data?.OPERATIONAL_H_V);
      setOperational_H_VI(data?.OPERATIONAL_H_VI);
      setOperational_I_I(data?.OPERATIONAL_I_I);
      setOperational_I_II(data?.OPERATIONAL_I_II);
      setOperational_I_III(data?.OPERATIONAL_I_III);
      setOperational_NOTE(data?.OPERATIONAL_NOTE);
      setOperational_OPENING(data?.OPERATIONAL_OPENING);
      setOperational_CLOSING(data?.OPERATIONAL_CLOSING);
      setValueJ(data?.OPERATIONAL_J);
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
      if (valueA == null) {
        setValueA(data?.VISUALQA);
        setValueB(data?.VISUALQB);
        setValueC(data?.VISUALQC);
        setValueD(data?.VISUALQD);
        setValueE(data?.VISUALQE);
        setValueF(data?.VISUALQF);
        setValueG(data?.VISUALQG);
        setValueH(data?.VISUALQH);
      }
      setIsDisabled(false);
      setLoading(false);
    } catch (error) {
      console.error("error", error);
    }
  };
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
      setSerial(data.serial);
      setDate(data.date);
      setName(data.name);
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
  }, [serial]);

  const jspdfGenerator = (s, o) => {
    let doc = new jsPDF("p", "px", "a4", true);
    doc.addImage(Logo, "PNG", 120, 10, 220, 40);
    doc.setFontSize(13);

    doc.text(
      "ECO ST new and Refurbished Ovens Quality Assurance CheckList",
      50,
      70
    );
    doc.text(`DATE: ${date}`, 15, 90);
    doc.text(`NAME: ${name}`, 120, 90);
    doc.text(`S/N: ${serial}`, 270, 90);
    doc.text("1) VISUAL INSPECTION: DO NOT APPLY POWER TO OVEN!!!", 15, 120);
    doc.setFontSize(10);
    doc.text(
      "A) Check Consumables and Accessories to comply with proper Packaging",
      15,
      140
    );
    doc.text(
      "Kit. Remove Rack, Left, Right and Top panels. Confirm proper Schematics ",
      25,
      150
    );
    doc.text("on RS Panel.", 25, 160);
    doc.text(`${valueA ? "ACC" : "NO ACC "}`, 370, 140);
    doc.text(
      "B) Make sure that the OvenJetplace is flush, makes contact with all ",
      15,
      175
    );
    doc.text("surfaces and is easily removable from the oven.", 25, 185);
    doc.text(`${valueB ? "ACC" : "NO ACC "}`, 370, 175);
    doc.text(
      "C) Check wiring wiring heaters, Mag 1 & 2, Dual SSR, Mag. EC fans,",
      15,
      200
    );
    doc.text("Convection Blower. Hi-Limit and Control circuits.", 25, 210);
    doc.text(`${valueC ? "ACC" : "NO ACC "}`, 370, 200);
    doc.text(
      "D) Check for loose hardware and debris on floor of the oven cabinet.",
      15,
      225
    );
    doc.text(`${valueD ? "ACC" : "NO ACC "}`, 370, 225);
    doc.text("E) Check for Door opens and close freely,", 15, 240);
    doc.text(`${valueE ? "ACC" : "NO ACC "}`, 370, 240);
    doc.text(
      "F) Ensure Heater Terminal Posts have Silicone Caps and Mica.",
      15,
      255
    );
    doc.text(`${valueF ? "ACC" : "NO ACC "}`, 370, 255);
    doc.text(
      "G) Split open insulation over Hi-Limit Capillary, is it mounted in",
      15,
      270
    );
    doc.text("the correct position?", 25, 280);
    doc.text(`${valueG ? "ACC" : "NO ACC "}`, 370, 270);
    doc.text(
      "H) Make sure that the interlock Switches are fully secure and adjusted.",
      15,
      295
    );
    doc.text(`${valueH ? "ACC" : "NO ACC "}`, 370, 295);

    doc.line(5, 305, 440, 305);

    doc.setFontSize(13);
    doc.text("2) OPERATIONAL INSPECTION: DO NOT APPLY POWER TO OVEN.", 15, 325);
    doc.setFontSize(10);
    doc.text(
      "A) Using the OHMS function on your meter Measure and Record the resistance between the:",
      15,
      345
    );
    doc.text("i) Frame and the Ground Pin on the plug:", 25, 355);
    doc.text(`${operational_B_I_I}`, 190, 355);
    doc.text(
      "C) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12,",
      15,
      380
    );
    doc.text(" ATMR 12 and ATMR 15 respectively", 25, 390);
    doc.text(`${valueC_I ? "ACC" : "NO ACC "}`, 370, 380);
    doc.text("D) Plug in the oven, as the Display Boots, check for:", 15, 405);
    doc.text("i) Displayed software version", 25, 415);
    doc.text(`${operational_D_I}`, 200, 415);
    doc.text("ii) Display voltage", 25, 425);
    doc.text(`${operational_D_II}`, 200, 425);
    doc.text("iii) Serial Number", 25, 435);
    doc.text(`${operational_D_III}`, 200, 435);
    doc.text("iv) DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?", 25, 445);
    doc.text(`${valueD_I ? "ACC" : "NO ACC"}`, 370, 445);
    doc.text(
      "E) Set your meter to Volts AC: Measure the AC voltage at power supply.",
      15,
      460
    );
    doc.text(`${operational_E} VAC`, 370, 460);
    doc.text(
      "F) Enter the 'Test Mode', make sure 'Faults' are cleared and then run ",
      15,
      475
    );
    doc.text("'Self Test' (individual). Pass all test?", 25, 485);
    doc.text(`${valueF_I ? "ACC" : "NO ACC"}`, 370, 475);

    doc.text(
      "G) Check the EC Cooling Fan in the TEST mode with Diagnostics on and confirm: ",
      15,
      500
    );
    doc.text(
      "During idle: 60% or 1800 RPM   During Water rise: 90% or 2700 RPM",
      25,
      510
    );
    doc.text(`${valueG_I ? "ACC" : "NO ACC"}`, 370, 510);
    doc.text("note: these speed are pre-written in the code.", 25, 520);

    doc.addPage("a4", "p");
    doc.addImage(Logo, "PNG", 120, 10, 220, 40);
    doc.text(
      "H) Water Rise Test: Place Oven into the 'TEST' mode and scroll ",
      15,
      70
    );
    doc.text(
      "i) Using Gradiated Cylinder measure 1 liter +/- 5ml of water. While in graduated cylinder, measure ",
      25,
      80
    );
    doc.text(
      `and record the Temp, Tinitial   ${operational_H_I}   enter T inicial via Keypad`,
      25,
      90
    );
    doc.text(
      "ii) inmidiately pur water into 1000 ml vessel, place into Cook Chamber and close the door. ",
      25,
      100
    );
    doc.text(
      "iii) Press 'ENTER'. The microwave will run for 30 seconds. ",
      25,
      110
    );
    doc.text(
      "iv) While test is running, Verify the current is 19amps +/- 2 amps (208V)",
      25,
      120
    );
    doc.text(
      `(18amps +/- 2 amps for the unit tested with 230V)   ${operational_H_IV} Amps`,
      25,
      130
    );

    doc.text(
      "v) When the timer reaches Zero, immediately measure Tfinal while stirring to blend water as to have ",
      25,
      140
    );
    doc.text(
      `one temperature throughout vessel. TFINAL= ${operational_H_V} enter T final via Keypad`,
      25,
      150
    );
    doc.text(
      `vi) The power output will show for 5 seconds. Record microwave oven output power:  ${operational_H_VI} W`,
      25,
      160
    );
    doc.text("Output Power must be >= 1700-1900 W.", 70, 175);
    doc.text(
      "I) Push 'BACK' until display reads: 'OVEN OFF' and then push the 'OVEN ON' smart key and let the oven ",
      15,
      190
    );
    doc.text("warm to its preset temperature.", 25, 200);
    doc.text("i) Record time oven starts warm up:", 25, 210);
    doc.text(`${operational_I_I}`, 180, 210);
    doc.text(
      "ii) Once the oven reaches the OPERATIONAL Temperature, the menu is displayed ",
      25,
      220
    );
    doc.text("record the displayed menu", 25, 230);
    doc.text(`${operational_I_II}`, 140, 230);
    doc.text("iii) And then record the time", 25, 240);
    doc.text(`${operational_I_III}`, 140, 240);
    doc.text(
      "This time should be 15 minutes or less! Let Oven 'heat soak' for 1 hour",
      25,
      250
    );
    doc.setTextColor(0, 0.61, 0.67, 0.09);
    doc.text(`NOTES: ${operational_NOTE}`, 15, 265, { maxWidth: 400 });
    doc.setTextColor(0, 0, 0, 1);
    doc.text(
      `Slowly opening the Door, the order of the indicators are ${operational_OPENING}`,
      15,
      295
    );
    doc.text(
      `Slowly closing the Door, the order of the indicators are ${operational_CLOSING}`,
      15,
      305
    );
    doc.text("J) Are Switch arms still engaging?", 15, 315);
    doc.text(`${valueJ ? "ACC" : "NO ACC"}`, 370, 315);
    doc.line(5, 320, 440, 320);

    doc.setFontSize(13);
    doc.text("3) HOT OVEN OPERATIONAL CHECKOUT:", 30, 335);
    doc.setFontSize(10);
    doc.text(
      "The equipment needed to complete the Oven inspection is a moder 501 Survey Meter, ",
      15,
      350
    );
    doc.text(
      "three 500 ml beakers with 275 ml +/- 15ml of cold water, spring loaded tongs",
      15,
      360
    );
    doc.text("A) Door Closed Microwave Leakege Test:", 15, 375);
    doc.text(
      "B) Repeat process checking the IR Element exits, around the Magnetrons and waveguide ",
      15,
      390
    );
    doc.text("ends, left and right sides.", 25, 400);
    doc.text(
      "Maximum allowale leakage is 0.8mW/cm2 surrounding the perimeter of the door ",
      25,
      410
    );
    doc.text(
      "and 0.2mW/cm2 around the EC and left and right side IR Element through hole.",
      25,
      420
    );
    doc.text(`DOOR  ${valueDoor} mW/cm2`, 90, 430);
    doc.text(`Rt & Lt sides  ${valueSides} mW/cm2`, 230, 430);
    doc.text(`TL${valueTopL} `, 120, 445);
    doc.line(140, 445, 260, 445);
    doc.line(140, 445, 140, 480);
    doc.text(`${valueTopR} TR`, 265, 445);
    doc.text("Mark and record peak levels.", 150, 463);
    doc.text(`BL${valueBotL} `, 120, 490);
    doc.line(140, 480, 260, 480);
    doc.line(260, 445, 260, 480);
    doc.text(`${valueBotR} BR`, 265, 490);
    doc.text(
      "Recheck Waveguide Covers ! Reset Cook Count and Accumulation Settings !",
      15,
      510
    );
    doc.text(`${valueOvenR ? "ACC" : "NO ACC"}`, 370, 510);
    doc.text(`C) Reset all faults and count: ${value_C}`, 15, 525);
    doc.text(`D) Survey meter#: ${value_D}`, 15, 535);
    if (valueRepairedStatus.length > 0) {
      doc.text(`Repair reasons: `, 100, 580);
      for (let i = 0; i < valueRepairedStatus.length; i++) {
        doc.text(`${valueRepairedStatus[i]}`, 160 + i * 40, 580);
      }
    }
    {
      typeof valueAON == "string"
        ? doc.text(`${valueAON}`, 170, 600)
        : doc.text(`APROOVED: ${valueAON ? "YES" : "NO"}`, 170, 600);
    }
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
