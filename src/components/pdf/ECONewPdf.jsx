import react, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { Button, Col, Row } from "antd";
import Logo from "../../assets/img/turboChefLogo.png";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import moment from "moment";
const db = getFirestore();

export const ECONewPdf = (props) => {
  const ovenSerial = props.serial;
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

  const [operational_A_I, setOperational_A_I] = useState(null);
  const [operational_A_II, setOperational_A_II] = useState(null);
  const [operational_A_III, setOperational_A_III] = useState(null);
  const [operational_A_IV, setOperational_A_IV] = useState(null);
  const [operational_A_V, setOperational_A_V] = useState(null);
  const [operational_B_I_I, setOperational_B_I_I] = useState(null);
  const [operational_B_I_II, setOperational_B_I_II] = useState(null);
  const [operational_B_II_I, setOperational_B_II_I] = useState(null);
  const [value_C_I, setValue_C_I] = useState(null);
  const [operational_D_I, setOperational_D_I] = useState(null);
  const [operational_D_II, setOperational_D_II] = useState(null);
  const [operational_D_III, setOperational_D_III] = useState(null);
  const [value_D_IV, setValue_D_IV] = useState(null);
  const [operational_E, setOperational_E] = useState(null);
  const [value_F, setValue_F] = useState(null);
  const [value_G, setValue_G] = useState(null);
  const [operational_H_I, setOperational_H_I] = useState(null);
  const [operational_H_IV, setOperational_H_IV] = useState(null);
  const [operational_H_V, setOperational_H_V] = useState(null);
  const [operational_H_VI, setOperational_H_VI] = useState(null);
  const [operational_I_I, setOperational_I_I] = useState(null);
  const [operational_I_II, setOperational_I_II] = useState(null);
  const [operational_I_III, setOperational_I_III] = useState(null);
  const [operational_NOTE, setOperational_NOTE] = useState(null);
  const [valueJ, setValueJ] = useState(null);
  const [operational_OPENING, setOperational_OPENING] = useState(null);
  const [operational_CLOSING, setOperational_CLOSING] = useState(null);
  const [valueK, setValueK] = useState(null);

  const [valueDoor, setValueDoor] = useState(null);
  const [valueSides, setValueSides] = useState(null);
  const [valueTopR, setValueTopR] = useState(null);
  const [valueTopL, setValueTopL] = useState(null);
  const [valueBotR, setValueBotR] = useState(null);
  const [valueBotL, setValueBotL] = useState(null);
  const [valueOvenR, setValueOvenR] = useState(null);
  const [value_C, setValue_C] = useState(null);
  const [value_D, setValue_D] = useState(null);
  const [value_E, setValue_E] = useState(null);
  const [valueAON, setValueAON] = useState(null);
  const getHotOven = async () => {
    try {
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
      setValue_E(data?.HOT_OVEN_E);
      setValueOvenR(data?.HOT_OVEN_RECHECK);
      setValueAON(data?.OVEN_APROVE_OR_NOT);
    } catch (error) {
      console.error("error", error);
    }
  };
  const getOperational = async () => {
    try {
      const docRef = doc(db, "OperationalInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setOperational_A_I(data?.OPERATIONAL_A_I);
      setOperational_A_II(data?.OPERATIONAL_A_II);
      setOperational_A_III(data?.OPERATIONAL_A_III);
      setOperational_A_IV(data?.OPERATIONAL_A_IV);
      setOperational_A_V(data?.OPERATIONAL_A_V);
      setOperational_B_I_I(data?.OPERATIONAL_B_I_I);
      setOperational_B_I_II(data?.OPERATIONAL_B_I_II);
      setOperational_B_II_I(data?.OPERATIONAL_B_II_I);
      setValue_C_I(data?.OPERATIONAL_C);
      setOperational_D_I(data?.OPERATIONAL_D_I);
      setOperational_D_II(data?.OPERATIONAL_D_II);
      setOperational_D_III(data?.OPERATIONAL_D_III);
      setValue_D_IV(data?.OPERATIONAL_D_IV);
      setOperational_E(data?.OPERATIONAL_E);
      setValue_F(data?.OPERATIONAL_F);
      setValue_G(data?.OPERATIONAL_G);
      setOperational_H_I(data?.OPERATIONAL_H_I);
      setOperational_H_IV(data?.OPERATIONAL_H_IV);
      setOperational_H_V(data?.OPERATIONAL_H_V);
      setOperational_H_VI(data?.OPERATIONAL_H_VI);
      setOperational_I_I(data?.OPERATIONAL_I_I);
      setOperational_I_II(data?.OPERATIONAL_I_II);
      setOperational_I_III(data?.OPERATIONAL_I_III);
      setOperational_NOTE(data?.OPERATIONAL_NOTE);
      setValueJ(data?.OPERATIONAL_J);
      setOperational_OPENING(data?.OPERATIONAL_OPENING);
      setOperational_CLOSING(data?.OPERATIONAL_CLOSING);
      setValueK(data?.OPERATIONAL_K);
    } catch (error) {
      console.error("error", error);
    }
  };

  const getDataVisual = async () => {
    try {
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
    } catch (error) {
      console.error("error", error);
    }
  };
  const getDataOven = async () => {
    try {
      const docRef = doc(db, "oven", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      const docRefO = doc(db, "OperationalInspection", `${ovenSerial}`);
      const docSnapO = await getDoc(docRefO);
      const dataO = docSnapO.data();
      setSerial(data.serial);
      setDate(data.date);
      setName(data.name);
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
    let doc = new jsPDF("p", "px", "a4", "false");
    doc.addImage(Logo, "PNG", 120, 10, 220, 40);
    doc.setFontSize(15);

    doc.text(
      "ECO ST new and Refurbished Ovens Quality Assurance CheckList",
      40,
      70
    );
    doc.text("DATE:", 15, 90);
    doc.text(`${date}`, 55, 90);
    doc.text("NAME:", 120, 90);
    doc.text(`${name}`, 160, 90);
    doc.text("S/N:", 270, 90);
    doc.text(`${serial}`, 300, 90);
    doc.text("1) VISUAL INSPECTION: DO NOT APPLY POWER TO OVEN!!!", 30, 110);
    doc.setFontSize(12);
    doc.text(
      "A) Check Consumables and Accessories to comply with proper Packaging",
      15,
      125
    );
    doc.text(
      "Kit. Remove Rack, Left, Right and Top panels. Confirm proper Schematics ",
      25,
      135
    );
    doc.text("on RS Panel.", 25, 145);
    doc.text(`${valueA ? "ACC" : "NO ACC "}`, 370, 125);
    doc.text(
      "B) Remove the Bubble wrap and insert the Oven Rack insuring flush contact with ",
      15,
      160
    );
    doc.text(
      "all surfaces. Check IR Element lies flat and Clips/Standoffs are tight and in",
      25,
      170
    );
    doc.text(
      "correct position. Check Waveguide Covers (ar the ends only)",
      25,
      180
    );
    doc.text("by squeezing with hands for looseness.", 25, 190);
    doc.text(`${valueB ? "ACC" : "NO ACC "}`, 370, 170);
    doc.text(
      "C) Check wiring wiring heaters, Mag 1 & 2, Dual SSR, Mag. EC fans,",
      15,
      205
    );
    doc.text("Convection Blower. Hi-Limit and Control circuits.", 25, 215);
    doc.text(`${valueC ? "ACC" : "NO ACC "}`, 370, 205);
    doc.text(
      "D) Check for loose hardware and debris on floor of the oven cabinet.",
      15,
      230
    );
    doc.text(`${valueD ? "ACC" : "NO ACC "}`, 370, 230);
    doc.text(
      "E) Check for Door flush to the Oven Flange (no pinching on bottom), door",
      15,
      245
    );
    doc.text("clears Louvered Panel?", 25, 255);
    doc.text(`${valueE ? "ACC" : "NO ACC "}`, 370, 245);
    doc.text(
      "F) Are the CC Heater Terminal Posts insulated with Silicone Caps and Mica Disks?",
      15,
      270
    );
    doc.text(`${valueF ? "ACC" : "NO ACC "}`, 370, 270);
    doc.text(
      "G) Split open insulation over Hi-Limit Capillary, is it mounted in",
      15,
      285
    );
    doc.text("the correct position?", 25, 295);
    doc.text(`${valueG ? "ACC" : "NO ACC "}`, 370, 285);
    doc.text(
      "H) Are interlock Switches adjusted with actuator rotation if door is     closed slowly, ",
      15,
      310
    );
    doc.text(
      "are the switch arms .020'' to .030'' fron switch body? is the actuator at 87° +- 2°?",
      25,
      320
    );
    doc.text(`${valueH ? "ACC" : "NO ACC "}`, 370, 310);

    doc.setFontSize(15);
    doc.text("2) OPERATIONAL INSPECTION: DO NOT APPLY POWER TO OVEN.", 30, 340);
    doc.setFontSize(12);
    doc.text(
      "A) Using the OHMS function on your meter Measure and Record the resistance between the:",
      15,
      360
    );
    doc.text(
      `i) Frame and the Ground Pin on the plug: ${operational_A_I} | ii) L1 & Ground: ${operational_A_II}`,
      25,
      370
    );
    doc.text(
      `iii) L2 & Ground: ${operational_A_III} | iv) L3 & Ground: ${operational_A_IV} | V) Neutral (N) & Ground: ${operational_A_V}`,
      25,
      380
    );
    doc.text(
      " B) Remove the fastons from the Primary and the secondary of the of Voltage",
      15,
      395
    );
    doc.text(
      "and the Filament XFMRs. Measure and Record the isolated resistance of the:",
      25,
      405
    );
    doc.text(
      `i) HV XFMR #1: terminals 1 & 2: ${operational_B_I_I}, terminals 1 & 3: ${operational_B_I_II}`,
      130,
      415
    );
    doc.text(
      `ii) HV XFMR #1 Primary: terminal #4 & frame: ${operational_B_II_I}`,
      130,
      425
    );

    doc.text(
      "C) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR 12 ",
      15,
      440
    );
    doc.text("and ATMR 15 respectively", 25, 450);
    doc.text(`${value_C_I ? "ACC" : "NO ACC "}`, 370, 460);
    doc.text("D) Plug in the oven, as the Display Boots, check for:", 15, 475);
    doc.text(`i) Displayed software version: ${operational_D_I}`, 25, 485);
    doc.text(`ii) Display voltage: ${operational_D_II}`, 25, 495);
    doc.text(`iii) Serial Number: ${operational_D_III}`, 25, 505);
    doc.text("iv) DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?", 25, 515);
    doc.text(`${value_D_IV ? "ACC" : "NO ACC"}`, 370, 515);
    doc.text(
      "E) Set your meter to Volts AC: Measure the AC voltage at power supply.",
      15,
      530
    );
    doc.text(`${operational_E} VAC`, 370, 530);
    doc.text(
      "F) Enter the 'Test Mode', make sure 'Faults' are cleared and then run ",
      15,
      545
    );
    doc.text("'Self Test' (individual). Pass all test?", 25, 555);
    doc.text(`${value_F ? "ACC" : "NO ACC"}`, 370, 545);

    doc.text(
      "G) Check the EC Cooling Fan in the TEST mode with Diagnostics on and confirm: ",
      15,
      570
    );
    doc.text(
      "During idle: 60% or 1800 RPM   During Water rise: 90% or 2700 RPM",
      25,
      580
    );
    doc.text(`${value_G ? "ACC" : "NO ACC"}`, 370, 570);
    doc.text("note: these speed are pre-written in the code.", 25, 590);

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
      "i) Using Gradiated Cylinder measure 1 liter +/- 5ml of water. While in graduated cylinder, measure ",
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
    doc.text(`NOTES: ${operational_NOTE}`, 15, 275);
    doc.text(
      `Slowly opening the Door, the order of the indicators are: ${operational_OPENING}`,
      15,
      290
    );
    doc.text(
      `Slowly closing the Door, the order of the indicators are: ${operational_CLOSING}`,
      15,
      305
    );
    doc.text("J) Are Switch arms still engaging?", 15, 320);
    doc.text(`${valueJ ? "ACC" : "NO ACC"}`, 370, 320);

    /* new Page*/

    doc.addPage("a4", "p");
    doc.addImage(Logo, "PNG", 120, 10, 220, 40);
    doc.setFontSize(15);
    doc.text("3) HOT OVEN OPERATIONAL CHECKOUT:", 30, 70);
    doc.setFontSize(12);
    doc.text(
      "The equipment needed to complete the Oven inspection is a moder 1501 Survey Meter, ",
      15,
      90
    );
    doc.text(
      "three 500 ml beakers with 275 ml +/- 15ml of cold water, spring loaded tongs",
      15,
      100
    );
    doc.text(
      "A) Door Closed Microwave Leakege Test: With the oven warmed to operating temperature,",
      15,
      115
    );
    doc.text(
      "use the 'UNIT' (8648) then the 'up arrow' to access the second screen where the 'MWLEAKAGE'",
      25,
      125
    );
    doc.text(
      "resides on the menu to give time to run the Magnetron independently for 45 seconds to perfon ",
      25,
      135
    );
    doc.text(
      "the leakage test. The test can be an indicator of an oven which has problems with containing ",
      25,
      145
    );
    doc.text(
      "the leakage. the 275 ml beakers of water are for simulating a low leven load for the Microwave ",
      25,
      155
    );
    doc.text(
      "system. The chart below is to indicate the two or three regions of greatest leakage. ",
      25,
      165
    );
    doc.text(
      "Indicate the position with an 'X' and record the peak leven in mW/cm2 as read from the meter",
      25,
      175
    );
    doc.text(" while performing the test.", 25, 185);

    doc.text(
      " Once the oven is set to run the test, set up the survey meter and place into the lowest ",
      25,
      200
    );
    doc.text(
      "operating range if 2 mW/cm2, place the beaker of water in the oven and close the door.  ",
      25,
      210
    );
    doc.text(
      "Next, activate the microwave and slowly move the wand of the survey meter, making sure ",
      25,
      220
    );
    doc.text(
      "you are holding it perpendicular to the gap as you traverse the perimeter of the ",
      25,
      230
    );
    doc.text("Door at a slow pace of 1.25 inches/second.", 25, 240);
    doc.text(
      "Using the tongs, replace de beaker of hot water and re initiate the Magnetron for another ",
      25,
      255
    );
    doc.text(
      "45 seconds and search around the entire oven, being Very careful not to contact the High ",
      25,
      265
    );
    doc.text(
      "Voltage components to wiring. Refresh the beaker as needed to complete the survey.",
      25,
      275
    );
    doc.text(
      "B) Repeat process checking the IR Element exits, around the Magnetrons and waveguide ",
      15,
      290
    );
    doc.text("ends, left and right sides.", 25, 300);
    doc.text(
      "Maximum allowale leakage is 0.8mW/cm2 surrounding the perimeter of the door ",
      25,
      320
    );
    doc.text(
      "and 0.2mW/cm2 around the EC and left and right side IR Element through hole.",
      25,
      340
    );
    doc.text(`DOOR  ${valueDoor} mW/cm2`, 90, 355);
    doc.text(`Rt & Lt sides  ${valueSides} mW/cm2`, 230, 355);
    doc.text(`TL${valueTopL} `, 140, 370);
    doc.text(`${valueTopR} TR`, 230, 370);
    doc.text("Mark and record peak levels.", 150, 398);
    doc.text(`BL${valueBotL} `, 140, 415);
    doc.text(`${valueBotR} BR`, 230, 415);
    doc.text(
      "Recheck Waveguide Covers ! Reset Cook Count and Accumulation Settings !",
      15,
      430
    );
    doc.text(`${valueOvenR}`, 370, 430);
    doc.text(`COOCK: ${value_C}`, 15, 445);
    doc.text(`METER: ${value_D}`, 15, 455);
    doc.text(`FAULTS AND COUNTERS: ${value_E}`, 15, 465);
    doc.text(`APROOVED: ${valueAON ? "YES" : "NO"}`, 170, 600);
    doc.save(`${s}.pdf`);
  };
  return (
    <Row justify="center">
      <Col xs={12}>
        <Button
          block
          style={{ width: "100%" }}
          type={"primary"}
          onClick={() => jspdfGenerator(serial)}
        >
          pdf
        </Button>
      </Col>
    </Row>
  );
};
