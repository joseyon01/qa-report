import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { Button, Col, Row } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import Logo from "../../assets/img/turboChefLogo.png";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const db = getFirestore();

export const ECONewPdf = (props) => {
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
  const [operational_A_III, setoperational_A_III] = useState("");
  const [operational_A_IV, setoperational_A_IV] = useState("");
  const [operational_A_V, setoperational_A_V] = useState("");
  const [operational_B_I_I, setoperational_B_I_I] = useState("");
  const [operational_B_I_II, setoperational_B_I_II] = useState("");
  const [operational_B_II_I, setoperational_B_II_I] = useState("");
  const [value_C_I, setvalue_C_I] = useState("");
  const [operational_D_I, setoperational_D_I] = useState("");
  const [operational_D_II, setoperational_D_II] = useState("");
  const [operational_D_III, setoperational_D_III] = useState("");
  const [value_D_IV, setvalue_D_IV] = useState("");
  const [operational_E, setoperational_E] = useState("");
  const [value_F, setvalue_F] = useState("");
  const [value_G, setvalue_G] = useState("");
  const [operational_H_I, setoperational_H_I] = useState("");
  const [operational_H_IV, setoperational_H_IV] = useState("");
  const [operational_H_V, setoperational_H_V] = useState("");
  const [operational_H_VI, setoperational_H_VI] = useState("");
  const [operational_I_I, setoperational_I_I] = useState("");
  const [operational_I_II, setoperational_I_II] = useState("");
  const [operational_I_III, setoperational_I_III] = useState("");
  const [operational_NOTE, setoperational_NOTE] = useState("");
  const [valueJ, setvalueJ] = useState("");
  const [operational_OPENING, setoperational_OPENING] = useState("");
  const [operational_CLOSING, setoperational_CLOSING] = useState("");
  const [valueK, setvalueK] = useState("");
  const [valueDoor, setvalueDoor] = useState("");
  const [valueSides, setvalueSides] = useState("");
  const [valueTopR, setvalueTopR] = useState("");
  const [valueTopL, setvalueTopL] = useState("");
  const [valueBotR, setvalueBotR] = useState("");
  const [valueBotL, setvalueBotL] = useState("");
  const [valueOvenR, setvalueOvenR] = useState("");
  const [value_C, setvalue_C] = useState("");
  const [value_D, setvalue_D] = useState("");
  const [value_E, setvalue_E] = useState("");
  const [valueAON, setvalueAON] = useState("");

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
      setvalue_D(data?.HOT_OVEN_D);
      setvalue_C(data?.HOT_OVEN_C);
      setvalue_E(data?.HOT_OVEN_E);
      setvalueOvenR(data?.HOT_OVEN_RECHECK);
      setvalueAON(data?.OVEN_APROVE_OR_NOT);
      setIsDisabled(false);
      setLoading(false);
    } catch (error) {
      console.error("error", error);
    }
  };
  const getOperational = async () => {
    try {
      const docRef = doc(db, "OperationalInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setIsDisabled(true);
      setLoading(true);
      setoperational_A_I(data?.OPERATIONAL_A_I);
      setoperational_A_II(data?.OPERATIONAL_A_II);
      setoperational_A_III(data?.OPERATIONAL_A_III);
      setoperational_A_IV(data?.OPERATIONAL_A_IV);
      setoperational_A_V(data?.OPERATIONAL_A_V);
      setoperational_B_I_I(data?.OPERATIONAL_B_I_I);
      setoperational_B_I_II(data?.OPERATIONAL_B_I_II);
      setoperational_B_II_I(data?.OPERATIONAL_B_II_I);
      setvalue_C_I(data?.OPERATIONAL_C);
      setoperational_D_I(data?.OPERATIONAL_D_I);
      setoperational_D_II(data?.OPERATIONAL_D_II);
      setoperational_D_III(data?.OPERATIONAL_D_III);
      setvalue_D_IV(data?.OPERATIONAL_D_IV);
      setoperational_E(data?.OPERATIONAL_E);
      setvalue_F(data?.OPERATIONAL_F);
      setvalue_G(data?.OPERATIONAL_G);
      setoperational_H_I(data?.OPERATIONAL_H_I);
      setoperational_H_IV(data?.OPERATIONAL_H_IV);
      setoperational_H_V(data?.OPERATIONAL_H_V);
      setoperational_H_VI(data?.OPERATIONAL_H_VI);
      setoperational_I_I(data?.OPERATIONAL_I_I);
      setoperational_I_II(data?.OPERATIONAL_I_II);
      setoperational_I_III(data?.OPERATIONAL_I_III);
      setoperational_NOTE(data?.OPERATIONAL_NOTE);
      setvalueJ(data?.OPERATIONAL_J);
      setoperational_OPENING(data?.OPERATIONAL_OPENING);
      setoperational_CLOSING(data?.OPERATIONAL_CLOSING);
      setvalueK(data?.OPERATIONAL_K);
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
      setserial(data.serial);
      setdate(data.date);
      setname(data.name);

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

  const jspdfGenerator = (s) => {
    let doc = new jsPDF("p", "px", "a4", true);
    doc.addImage(Logo, "PNG", 120, 10, 220, 40);
    doc.setFontSize(13);

    doc.text(
      "ECO New and Refurbished Ovens Quality Assurance CheckList",
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
      "A) Check Consumables and Accessories to comply with proper Packaging Kit. Remove Rack, Left, Right and Top panels. Confirm proper Schematics on RS Panel.",
      15,
      125,
      { maxWidth: 350 }
    );

    doc.text(`${valueA ? "ACC" : "NO ACC "}`, 370, 125);
    doc.text(
      "B) Remove the Bubble wrap and insert the Oven Rack insuring flush contact with all surfaces. Check IR Element lies flat and Clips/Standoffs are tight and in correct position. Check Waveguide Covers (ar the ends only) by squeezing with hands for looseness.",
      15,
      145,
      { maxWidth: 350 }
    );
    doc.text("", 25, 170);
    doc.text("", 25, 180);
    doc.text("", 25, 190);
    doc.text(`${valueB ? "ACC" : "NO ACC "}`, 370, 145);
    doc.text(
      "C) Check wiring wiring heaters, Mag 1 & 2, Dual SSR, Mag. EC fans, Convection Blower. Hi-Limit and Control circuits.",
      15,
      175,
      { maxWidth: 350 }
    );
    doc.text(`${valueC ? "ACC" : "NO ACC "}`, 370, 175);
    doc.text(
      "D) Check for loose hardware and debris on floor of the oven cabinet.",
      15,
      195
    );
    doc.text(`${valueD ? "ACC" : "NO ACC "}`, 370, 195);
    doc.text(
      "E) Check for Door flush to the Oven Flange (no pinching on bottom), door clears Louvered Panel?",
      15,
      210
    );
    doc.text(`${valueE ? "ACC" : "NO ACC "}`, 370, 210);
    doc.text(
      "F) Are the CC Heater Terminal Posts insulated with Silicone Caps and Mica Disks?",
      15,
      225
    );
    doc.text(`${valueF ? "ACC" : "NO ACC "}`, 370, 225);
    doc.text(
      "G) Split open insulation over Hi-Limit Capillary, is it mounted in the correct position?",
      15,
      240
    );
    doc.text(`${valueG ? "ACC" : "NO ACC "}`, 370, 240);
    doc.text(
      "H) Are interlock Switches adjusted with actuator rotation if door is     closed slowly, are the switch arms .020'' to .030'' fron switch body? is the actuator at 87° +- 2°?",
      15,
      255,
      { maxWidth: 350 }
    );
    doc.text(`${valueH ? "ACC" : "NO ACC "}`, 370, 255);

    doc.line(5, 270, 440, 270);

    doc.setFontSize(13);
    doc.text("2) OPERATIONAL INSPECTION: DO NOT APPLY POWER TO OVEN.", 15, 285);
    doc.setFontSize(10);
    doc.text(
      "A) Using the OHMS function on your meter Measure and Record the resistance between the:",
      15,
      300
    );
    doc.text(
      `i) Frame and the Ground Pin on the plug: ${operational_A_I} | ii) L1 & Ground: ${operational_A_II}`,
      25,
      310
    );
    doc.text(
      `iii) L2 & Ground: ${operational_A_III} | iv) L3 & Ground: ${operational_A_IV} | V) Neutral (N) & Ground: ${operational_A_V}`,
      25,
      320
    );
    doc.text(
      " B) Remove the fastons from the Primary and the secondary of the of Voltage and the Filament XFMRs. Measure and Record the isolated resistance of the:",
      15,
      335,
      { maxWidth: 350 }
    );

    doc.text(
      `i) HV XFMR #1: terminals 1 & 2: ${operational_B_I_I}, terminals 1 & 3: ${operational_B_I_II}`,
      25,
      355
    );
    doc.text(
      `ii) HV XFMR #1 Primary: terminal #4 & frame: ${operational_B_II_I}`,
      25,
      365
    );

    doc.text(
      "C) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR 12 and ATMR 15 respectively",
      15,
      380,
      { maxWidth: 350 }
    );
    doc.text(`${value_C_I ? "YES" : "NO"}`, 370, 380);

    doc.text("D) Plug in the oven, as the Display Boots, check for:", 15, 395);
    doc.text(`i) Displayed software version: ${operational_D_I}`, 25, 405);
    doc.text(`ii) Display voltage: ${operational_D_II}`, 25, 415);
    doc.text(`iii) Serial Number: ${operational_D_III}`, 25, 425);
    doc.text("iv) DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?", 25, 435);
    doc.text(`${value_D_IV ? "ACC" : "NO ACC"}`, 370, 435);
    doc.text("", 15, 450);
    doc.text(
      `E) Set your meter to Volts AC: Measure the AC voltage at power supply: ${operational_E} VAC`,
      15,
      450
    );
    doc.text(
      "F) Enter the 'Test Mode', make sure 'Faults' are cleared and then run 'Self Test' (individual). Pass all test?",
      15,
      465
    );
    doc.text(`${value_F ? "YES" : "NO"}`, 370, 465);

    doc.text(
      "G) Check the EC Cooling Fan in the TEST mode with Diagnostics on and confirm: ",
      15,
      480
    );
    doc.text(
      "During idle: 60% or 1800 RPM   During Water rise: 90% or 2700 RPM",
      25,
      490
    );
    doc.text(`${value_G ? "ACC" : "NO ACC"}`, 370, 480);
    doc.text("note: these speed are pre-written in the code.", 25, 500);

    doc.text(
      "H) Water Rise Test:Place Oven into the 'UNIT' mode, and then scroll down to 'Microwave' on the first screen.",
      15,
      515
    );
    doc.text(
      "i) Using Graduated Cylinder measure 1 liter +/- 5ml of water. While in graduated cylinder, measure ",
      25,
      525
    );
    doc.text(
      `and record the Temp, Tinitial: ${operational_H_I} | enter T inicial via Keypad`,
      25,
      535
    );
    doc.text(
      "ii) inmidiately pur water into 1000 ml vessel, place into Cook Chamber and close the door. ",
      25,
      545
    );
    doc.text(
      "iii) Press 'ENTER'. The microwave will run for 45 seconds. ",
      25,
      555
    );
    doc.text(
      "iv) While test is running, Verify the current is 9.2amps +/- 2 amps (208V)",
      25,
      565
    );
    doc.text(
      `(10.64amps +/- 1.6 amps for the unit tested with 230V): ${operational_H_IV} Amps`,
      25,
      575
    );

    doc.text(
      "v) When the timer reaches Zero, immediately measure Tfinal while stirring to blend water as to have ",
      25,
      585
    );
    doc.text(
      `one temperature throughout vessel. TFINAL: ${operational_H_V} | enter T final via Keypad`,
      25,
      595
    );

    /* new Page*/

    doc.addPage("a4", "p");
    doc.addImage(Logo, "PNG", 120, 10, 220, 40);

    doc.text(
      `vi) The power output will show for 5 seconds. Record microwave oven output power: ${operational_H_VI} W`,
      25,
      70
    );
    doc.setTextColor(0, 0.61, 0.67, 0.09);
    doc.setFontSize(12);
    doc.text(
      "Output Power must be >=  400/650 W. But it's more than 650W, repeat this test.",
      40,
      85
    );
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0, 1);
    doc.text(
      "I) Push 'BACK' until display reads: 'OVEN OFF' and then push the 'OVEN ON' smart key and let the oven warm to its preset temperature.",
      15,
      100,
      { maxWidth: 350 }
    );
    doc.text(`i) Record time oven starts warm up: ${operational_I_I}`, 25, 120);
    doc.text(
      "ii) Once the oven reaches the OPERATIONAL Temperature, the menu is displayed ",
      25,
      130
    );
    doc.text(`record the displayed menu: ${operational_I_II}`, 25, 140);
    doc.text(`iii) And then record the time: ${operational_I_III}`, 25, 150);
    doc.text(
      "This time should be 15 minutes or less! Let Oven 'heat soak' for 1 hour",
      25,
      160
    );
    doc.text(`NOTES: ${operational_NOTE}`, 15, 175, { maxWidth: 400 });
    doc.text("J) Is there actuator rotation if door closed slowly?", 15, 205);
    doc.text(`${valueJ ? "YES" : "NO"}`, 370, 205);
    doc.text(
      `Slowly opening the Door, the order of the indicators are: ${operational_OPENING}`,
      15,
      220
    );
    doc.text(
      `Slowly closing the Door, the order of the indicators are: ${operational_CLOSING}`,
      15,
      230
    );
    doc.text(
      "Are switch arms .020'' to .030'' from switch body and is the Actuator at 87° +/- 2°?",
      15,
      240
    );
    doc.text(`${valueK ? "YES" : "NO"}`, 370, 240);
    doc.line(5, 250, 440, 250);
    doc.setFontSize(13);
    doc.text("3) HOT OVEN OPERATIONAL CHECKOUT:", 15, 265);
    doc.setFontSize(10);
    doc.text(
      "The equipment needed to complete the Oven inspection is a moder 1501 Survey Meter, three 500 ml beakers with 275 ml +/- 15ml of cold water, pring loaded tongs",
      15,
      280,
      { maxWidth: 350 }
    );
    doc.text(
      "A) Door Closed Microwave Leakege Test: With the oven warmed to operating temperature, use the 'UNIT' (8648) then the 'up arrow' to access the second screen where the 'MWLEAKAGE' resides on the menu to give time to run the Magnetron independently for 45 seconds to perfon the leakage test. The test can be an indicator of an oven which has problems with containing the leakage. the 275 ml beakers of water are for simulating a low leven load for the Microwave system. The chart below is to indicate the two or three regions of greatest leakage. Indicate the position with an 'X' and record the peak leven in mW/cm2 as read from the meter while performing the test.",
      15,
      305,
      { maxWidth: 350 }
    );

    doc.text(
      " Once the oven is set to run the test, set up the survey meter and place into the lowest operating range if 2 mW/cm2, place the beaker of water in the oven and close the door. Next, activate the microwave and slowly move the wand of the survey meter, making sure you are holding it perpendicular to the gap as you traverse the perimeter of the Door at a slow pace of 1.25 inches/second. ",
      15,
      370,
      { maxWidth: 350 }
    );
    doc.text("", 25, 240);
    doc.text(
      "Using the tongs, replace de beaker of hot water and re initiate the Magnetron for another 45 seconds and search around the entire oven, being Very careful not to contact the High Voltage components to wiring. Refresh the beaker as needed to complete the survey.",
      15,
      410,
      { maxWidth: 350 }
    );

    doc.text(
      "B) Repeat process checking the IR Element exits, around the Magnetrons and waveguide ends, left and right sides. Maximum allowale leakage is 0.8mW/cm2 surrounding the perimeter of the door and 0.2mW/cm2 around the EC and left and right side IR Element through hole.",
      15,
      440,
      { maxWidth: 350 }
    );
    doc.text(`DOOR  ${valueDoor} mW/cm2`, 90, 470);
    doc.text(`Rt & Lt sides  ${valueSides} mW/cm2`, 230, 470);
    doc.text(`TL ${valueTopL} `, 120, 485);
    doc.line(140, 485, 260, 485);
    doc.line(140, 485, 140, 525);
    doc.text(`${valueTopR} TR`, 265, 485);
    doc.text("Mark and record peak levels.", 150, 505);
    doc.text(`BL ${valueBotL} `, 120, 535);
    doc.line(140, 525, 260, 525);
    doc.line(260, 485, 260, 525);
    doc.text(`${valueBotR} BR`, 265, 535);
    doc.text(
      "Recheck Waveguide Covers ! Reset Cook Count and Accumulation Settings !",
      15,
      550
    );
    doc.text(`${valueOvenR ? "ACC" : "NO ACC"}`, 370, 550);
    doc.text(`Cook time count: ${value_C}`, 15, 565);
    doc.text(`Survey meter#: ${value_D}`, 15, 575);
    doc.text(`Clear cook time foults: ${value_E}`, 15, 585);
    doc.text(`APROOVED: ${valueAON ? "YES" : "NO"}`, 170, 600);
    doc.save(`${s}.pdf`);
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
          onClick={() => jspdfGenerator(ovenSerial)}
        >
          {loading ? "" : "Generate PDF"} <FilePdfOutlined />
        </Button>
      </Col>
    </Row>
  );
};
