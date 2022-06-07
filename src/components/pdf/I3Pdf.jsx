import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { Button, Col, Row } from "antd";
import Logo from "../../assets/img/turboChefLogo.png";
import { FilePdfOutlined } from "@ant-design/icons";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const db = getFirestore();

export const I3Pdf = (props) => {
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
  const [operational_A_I, setoperational_A_I] = useState("");
  const [value_B, setvalue_B] = useState("");
  const [operational_D_I, setoperational_D_I] = useState("");
  const [operational_D_II, setoperational_D_II] = useState("");
  const [operational_D_III, setoperational_D_III] = useState("");
  const [value_D, setvalue_D] = useState("");
  const [operational_E, setoperational_E] = useState("");
  const [value_F, setvalue_F] = useState("");
  const [value_G, setvalue_G] = useState("");
  const [operational_H_I, setoperational_H_I] = useState("");
  const [operational_H_IV, setoperational_H_IV] = useState("");
  const [operational_H_V, setoperational_H_V] = useState("");
  const [operational_H_VI, setoperational_H_VI] = useState("");
  const [operational_I_I, setoperational_I_I] = useState("");
  const [operational_I_II, setoperational_I_II] = useState("");
  const [operational_NOTE, setoperational_NOTE] = useState("");
  const [value_J, setvalue_J] = useState("");
  const [operational_OPENING, setoperational_OPENING] = useState("");
  const [operational_CLOSING, setoperational_CLOSING] = useState("");
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
      setvalue_B(data?.OPERATIONAL_B_I_I);
      setoperational_D_I(data?.OPERATIONAL_D_I);
      setoperational_D_II(data?.OPERATIONAL_D_II);
      setoperational_D_III(data?.OPERATIONAL_D_III);
      setvalue_D(data?.OPERATIONAL_D_IV);
      setoperational_E(data?.OPERATIONAL_E);
      setvalue_F(data?.OPERATIONAL_F);
      setvalue_G(data?.OPERATIONAL_G);
      setoperational_H_I(data?.OPERATIONAL_H_I);
      setoperational_H_IV(data?.OPERATIONAL_H_IV);
      setoperational_H_V(data?.OPERATIONAL_H_V);
      setoperational_H_VI(data?.OPERATIONAL_H_VI);
      setoperational_I_I(data?.OPERATIONAL_I_I);
      setoperational_I_II(data?.OPERATIONAL_I_II);
      setoperational_NOTE(data?.OPERATIONAL_NOTE);
      setvalue_J(data?.OPERATIONAL_J);
      setoperational_OPENING(data?.OPERATIONAL_OPENING);
      setoperational_CLOSING(data?.OPERATIONAL_CLOSING);
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
      const docRef = doc(db, "FinalInspection", `${ovenSerial}`);
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
      "I3 NEW AND REFURBISHED OVENS QUALITY ASSURANCE CHECKLIST",
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
      "B) Remove contents of oven cavity and insure the Grease pan is in place",
      15,
      150,
      { maxWidth: 350 }
    );
    doc.text(`${valueB ? "ACC" : "NO ACC "}`, 370, 150);

    doc.text(
      "C) Check wiring CC & IR Heaters, Mags 1 & 2, Dual SSR, Mag EC Fans, Convection Blower, Hi-Limit and Control ciruits.",
      15,
      165,
      { maxWidth: 350 }
    );
    doc.text(`${valueC ? "ACC" : "NO ACC "}`, 370, 165);
    doc.text(
      "D) Check for loose hardware and debris on floor of the oven cabinet.",
      15,
      190,
      { maxWidth: 350 }
    );
    doc.text(`${valueD ? "ACC" : "NO ACC "}`, 370, 190);
    doc.text(
      "E) Check for Door flush to the Oven Flange (no pinching on bottom), Door open and close smoothly",
      15,
      205,
      { maxWidth: 350 }
    );
    doc.text(`${valueE ? "ACC" : "NO ACC "}`, 370, 205);
    doc.text(
      "F) Are the CC Heater Terminal Posts insulated with Silicone Caps and Mica Disks and terminals are torque to 33lbs-?",
      15,
      220,
      { maxWidth: 350 }
    );
    doc.text(`${valueF ? "ACC" : "NO ACC "}`, 370, 220);
    doc.text(
      "G) Split open insulation over Hi-Limit Capillary, is it mounted in the correct position?",
      15,
      245,
      { maxWidth: 350 }
    );
    doc.text(`${valueG ? "ACC" : "NO ACC "}`, 370, 245);

    doc.line(5, 255, 440, 255);

    doc.setFontSize(13);
    doc.text("2) OPERATIONAL INSPECTION: DO NOT APPLY POWER TO OVEN.", 15, 270);
    doc.setFontSize(10);
    doc.text(
      "A) Using the OHMS function on your meter Measure and Record the resistance between the:",
      15,
      285,
      { maxWidth: 350 }
    );
    doc.text(
      `i) Frame and the Ground Pin on the plug: ${operational_A_I}`,
      25,
      295
    );
    doc.text(
      "B) Check fuses #1, #2 are all ATMR 12. Fuse #3 20amps.",
      15,
      310,
      { maxWidth: 350 }
    );
    doc.text(`${value_B ? "Pass" : "Fail"}`, 370, 310);
    doc.setFontSize(13);
    doc.text("3) APPLY POWER", 15, 325);
    doc.setFontSize(10);
    doc.text("D) Plug in the oven, as the Displat Boots, check for:", 15, 340);
    doc.text(`i) Displayed software version: ${operational_D_I}`, 25, 350);
    doc.text(
      `ii) Display voltage: ${operational_D_II} | iii) Serial Number: ${operational_D_III}`,
      25,
      360
    );
    doc.text(
      `DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING? -- ${
        value_D ? "YES" : "NO"
      }`,
      25,
      370
    );
    doc.text(
      `E) Set your meter to Volts AC: Measure the AC voltage at EMI filer terminals: ${operational_E} VAC`,
      15,
      385,
      { maxWidth: 350 }
    );
    doc.text(
      `F) Press info Button: Test Mode (9428). Enter Fault Mode, Make sure all faults are cleared and run self-test. Pass all Tests?`,
      15,
      400,
      { maxWidth: 350 }
    );
    doc.text(`${value_F ? "ACC" : "NO ACC"}`, 370, 400);
    doc.text(
      `G) "Close on Rise" Switch, which controls the EC cooling fan.`,
      15,
      425,
      { maxWidth: 350 }
    );
    doc.text(`${value_G ? "ACC" : "NO ACC"}`, 370, 425);

    doc.text(
      "H) Water Rise Test: Place Oven into the Manufacture mode, and then scroll down to 'MW PWR TEST' on the first screen.",
      15,
      440,
      { maxWidth: 350 }
    );
    doc.text(
      `i) Using Graduated Cylinder measure 1 liter +/- 5ml of water. While in graduated cylinder, measure and record the Temp, Tinitial: ${operational_H_I}°C | enter T inicial via Keypad`,
      25,
      460,
      { maxWidth: 350 }
    );
    doc.text(
      "ii) inmidiately pur water into 1000 ml vessel, place into Cook Chamber and close the door. ",
      25,
      480
    );
    doc.text(
      "iii) Press 'ENTER'. The microwave will run for 45 seconds. ",
      25,
      490
    );
    doc.text(
      "iv) While test is running, Verify the current is 9.2amps +/- 2 amps (208V)",
      25,
      500
    );
    doc.text(
      `(10.64amps +/- 1.6 amps for the unit tested with 230V): ${operational_H_IV} Amps`,
      25,
      510
    );

    doc.text(
      `v) When the timer reaches Zero, immediately measure Tfinal while stirring to blend water as to have one temperature throughout vessel. Tfinal: ${operational_H_V}°C | enter T final via Keypad`,
      25,
      520,
      { maxWidth: 340 }
    );
    doc.text(
      `vi) The power output will show for 5 seconds. Record microwave oven output power: ${operational_H_VI} W`,
      25,
      540
    );
    doc.setTextColor(0, 0.61, 0.67, 0.09);
    doc.setFontSize(12);
    doc.text(
      "Output Power must be >=  400/650 W. But it's more than 650W, repeat this test.",
      40,
      555
    );
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0, 1);
    /* new Page*/

    doc.addPage("a4", "p");
    doc.addImage(Logo, "PNG", 120, 10, 220, 40);

    doc.text(
      "I) Push 'BACK' until display reads: 'OVEN OFF' and then push the 'OVEN ON' smart key and let the oven warm to its preset temperature.",
      15,
      70,
      { maxWidth: 350 }
    );
    doc.text(`i) Record time oven starts warm up: ${operational_I_I}`, 25, 90);
    doc.text(
      "ii) Once the oven reaches the OPERATIONAL Temperature, the menu is displayed ",
      25,
      100
    );
    doc.text(`iii) Record the time: ${operational_I_II}`, 25, 110);
    doc.text(
      "This time should be 15 minutes or less! Let Oven 'heat soak' for 1 hour",
      25,
      120
    );
    doc.text(`NOTES: ${operational_NOTE}`, 15, 135, { maxWidth: 400 });

    doc.text(
      `J) Is there actuator rotation if door is closed slowly? -- ${
        value_J ? "YES" : "NO"
      }`,
      15,
      170
    );
    doc.text(
      `Slowly opening the Door, the order of the indicators are: ${operational_OPENING}`,
      15,
      185
    );
    doc.text(
      `Slowly closing the Door, the order of the indicators are: ${operational_CLOSING}`,
      15,
      195
    );

    doc.line(5, 205, 440, 205);
    doc.setFontSize(13);
    doc.text("3) FINAL INSPECTION:", 15, 225);
    doc.setFontSize(10);
    doc.text(
      "The equipment needed to complete the Oven inspection is a model 1501 Survey Meter, three 500ml beakers with 275 ml +/- 15ml of cold water, spring loaded tongs",
      15,
      240,
      { maxWidth: 350 }
    );

    doc.text(
      "A) Door Closed Microwave Leakege Test: Whith the oven warmed to operating temperature, use the 'UNIT' (9428) then the 'up arrow' to access the second screen where the 'MW LEAKAGE' resides on the menu to give time to run the mMagnetron independently for 45 seconds to perform the leakage test. the test can be an indicator of an oven which has problems containing the leakage. the 275ml beakers of water are for simulating a low level load for the Microwave system. The chart below is to indicate the twi ir three regions of greatest leakage. <strong>Indicate</strong> the position with an 'X' and record the peak in Mw/cm<sup>2</sup> as read from the meter while performing the test.",
      15,
      265,
      { maxWidth: 350 }
    );
    doc.text(
      "  Once the oven is set to run the test, set up the survey meter and place into the lowest operating range of 2mW/cm2, place the beaker of water in the oven and close the door. Next, activate the mivrowave and slowly move the wand of the survey meter, making sure toy are holding it perpendicular to the pag as you traverse the perimeter of the door at a slow pace of 1.25 inches/second.",
      15,
      330,
      { maxWidth: 350 }
    );
    doc.text(
      "B) Repeat process checking the IR Element exits, around the Magnetrons and waveguide ends, left and right sides. Maximum allowale leakage is 0.8mW/cm2 surrounding the perimeter of the door and 0.2mW/cm2 around the EC and left and right side IR Element through hole.",
      15,
      370,
      { maxWidth: 350 }
    );
    doc.text(`DOOR  ${valueDoor} mW/cm2`, 90, 400);
    doc.text(`Rt & Lt sides  ${valueSides} mW/cm2`, 230, 400);
    doc.text(`TL ${valueTopL} `, 120, 415);
    doc.line(140, 415, 260, 415);
    doc.line(140, 415, 140, 455);
    doc.text(`${valueTopR} TR`, 265, 415);
    doc.text("Mark and record peak levels.", 150, 435);
    doc.text(`BL ${valueBotL} `, 120, 465);
    doc.line(140, 455, 260, 455);
    doc.line(260, 415, 260, 455);
    doc.text(`${valueBotR} BR`, 265, 465);
    doc.text(
      "Recheck Waveguide Covers ! Reset Cook Count and Accumulation Settings !",
      15,
      480
    );
    doc.text(`${valueOvenR ? "ACC" : "NO ACC"}`, 370, 480);
    doc.text(`Cook time count: ${value_C_H}`, 15, 495);
    doc.text(`Survey meter#: ${value_D_H}`, 15, 505);
    doc.text(`Clear cook time foults: ${value_E_H}`, 15, 515);
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
