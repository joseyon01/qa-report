import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { FilePdfOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import Logo from "../../assets/img/turboChefLogo.png";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const db = getFirestore();

export const HHDPdf = (props) => {
  const ovenType = props.oven;
  const [isDisabled, setIsDisabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const ovenSerial = props.serial;
  const [serial, setserial] = useState("");
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [valueA, setvalueA] = useState("");
  const [valueB_1, setvalueB_1] = useState("");
  const [valueB_2, setvalueB_2] = useState("");
  const [valueB_3, setvalueB_3] = useState("");
  const [valueB_4, setvalueB_4] = useState("");
  const [valueB_5, setvalueB_5] = useState("");
  const [valueB_6, setvalueB_6] = useState("");
  const [valueB_7, setvalueB_7] = useState("");
  const [valueC, setvalueC] = useState("");
  const [valueD, setvalueD] = useState("");
  const [valueE, setvalueE] = useState("");
  const [valueF, setvalueF] = useState("");
  const [valueG, setvalueG] = useState("");
  const [valueH, setvalueH] = useState("");
  const [valueI_1, setvalueI_1] = useState("");
  const [valueI_2, setvalueI_2] = useState("");
  const [valueI_3, setvalueI_3] = useState("");
  const [valueI_4, setvalueI_4] = useState("");
  const [valueI_5, setvalueI_5] = useState("");
  const [valueJ, setvalueJ] = useState("");
  const [valueA_I, setvalueA_I] = useState("");
  const [valueA_II, setvalueA_II] = useState("");
  const [valueA_III, setvalueA_III] = useState("");
  const [valueB_I, setvalueB_I] = useState("");
  const [valueC_I, setvalueC_I] = useState("");
  const [valueD_I, setvalueD_I] = useState("");
  const [valueE_I, setvalueE_I] = useState("");
  const [valueF_I, setvalueF_I] = useState("");
  const [valueG_I, setvalueG_I] = useState("");
  const [valueH_I, setvalueH_I] = useState("");
  const [valueI_I, setvalueI_I] = useState("");
  const [valueI_II, setvalueI_II] = useState("");
  const [valueI_III, setvalueI_III] = useState("");
  const [valueJ_I, setvalueJ_I] = useState("");
  const [valueK, setvalueK] = useState("");
  const [valueL_I, setvalueL_I] = useState("");
  const [valueL_II, setvalueL_II] = useState("");
  const [valueM, setvalueM] = useState("");
  const [valueN, setvalueN] = useState("");
  const [valueO, setvalueO] = useState("");
  const [valueP, setvalueP] = useState("");
  const [valueNOTE, setvalueNOTE] = useState("");
  const [valuePON, setvaluePON] = useState("");

  const getOperational = async () => {
    try {
      setIsDisabled(true);
      setLoading(true);
      const docRef = doc(db, "OperationalInspection", `${ovenSerial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if (valueA_I == "") {
        setvalueA_I(data?.OPERATIONAL_A_I);
        setvalueA_II(data?.OPERATIONAL_A_II);
        setvalueA_III(data?.OPERATIONAL_A_III);
        setvalueB_I(data?.OPERATIONAL_B_I);
        setvalueC_I(data?.OPERATIONAL_C);
        setvalueD_I(data?.OPERATIONAL_D);
        setvalueE_I(data?.OPERATIONAL_E);
        setvalueF_I(data?.OPERATIONAL_F);
        setvalueG_I(data?.OPERATIONAL_G);
        setvalueH_I(data?.OPERATIONAL_H_I);
        setvalueI_I(data?.OPERATIONAL_I_I);
        setvalueI_II(data?.OPERATIONAL_I_II);
        setvalueI_III(data?.OPERATIONAL_I_III);
        setvalueJ_I(data?.OPERATIONAL_J);
        setvalueK(data?.OPERATIONAL_K);
        setvalueL_I(data?.OPERATIONAL_L_I);
        setvalueL_II(data?.OPERATIONAL_L_II);
        setvalueM(data?.OPERATIONAL_M);
        setvalueN(data?.OPERATIONAL_N);
        setvalueO(data?.OPERATIONAL_O);
        setvalueP(data?.OPERATIONAL_P);
        setvalueNOTE(data?.OPERATIONAL_NOTE);
        setvaluePON(data?.OPERATIONAL_PON);
      }
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
        setvalueB_1(data?.VISUALQB_1);
        setvalueB_2(data?.VISUALQB_2);
        setvalueB_3(data?.VISUALQB_3);
        setvalueB_4(data?.VISUALQB_4);
        setvalueB_5(data?.VISUALQB_5);
        setvalueB_6(data?.VISUALQB_6);
        setvalueB_7(data?.VISUALQB_7);
        setvalueC(data?.VISUALQC);
        setvalueD(data?.VISUALQD);
        setvalueE(data?.VISUALQE);
        setvalueF(data?.VISUALQF);
        setvalueG(data?.VISUALQG);
        setvalueH(data?.VISUALQH);
        setvalueI_1(data?.VISUALQI_1);
        setvalueI_2(data?.VISUALQI_2);
        setvalueI_3(data?.VISUALQI_3);
        setvalueI_4(data?.VISUALQI_4);
        setvalueI_5(data?.VISUALQI_5);
        setvalueJ(data?.VISUALQJ);
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
  }, [serial]);

  const jspdfGenerator = (s, o) => {
    let doc = new jsPDF("p", "px", "a4", true);
    doc.addImage(Logo, "PNG", 120, 10, 220, 40);
    doc.setFontSize(13);

    doc.text("HHD ovens Quality Assurance Checklist", 130, 70);
    doc.text("DATE:", 15, 90);
    doc.text(`${date}`, 55, 90);
    doc.text("NAME:", 120, 90);
    doc.text(`${name}`, 160, 90);
    doc.text("S/N:", 270, 90);
    doc.text(`${serial}`, 300, 90);
    doc.text("1) VISUAL INSPECTION: DO NOT APPLY POWER TO OVEN!!!", 30, 120);
    doc.setFontSize(10);
    doc.text(
      "A) Remove side panels. Check the Schematic on RS panel. Correct?",
      15,
      140
    );
    doc.text(`${valueA ? "ACC" : "NO ACC "}`, 370, 140);
    doc.text("B) Perform Quality Control Check before continuing.", 15, 160);
    doc.text("1)", 20, 175);
    doc.text(
      `${valueB_1 ? "ACC       " : "NO ACC "}` +
        ` Tug test the Line Voltage wires`,
      30,
      175
    );
    doc.text("2)", 20, 190);
    doc.text(
      `${valueB_2 ? "ACC       " : "NO ACC "}` +
        ` Ensure the wires going to the heater Terminals are not kinked.`,
      30,
      190
    );
    doc.text("3)", 20, 205);
    doc.text(
      `${valueB_3 ? "ACC       " : "NO ACC "}` +
        ` Ensure all insulation Tape is neatly applied.`,
      30,
      205
    );
    doc.text("4)", 20, 220);
    doc.text(
      `${valueB_4 ? "ACC       " : "NO ACC "}` +
        ` Ensure tape around the Heater Terminals is at least 1/4 inch away from the terminals.`,
      30,
      220
    );
    doc.text("5)", 20, 235);
    doc.text(
      `${valueB_5 ? "ACC       " : "NO ACC "}` +
        ` Ensure the oven door hinge screws are seated tight.`,
      30,
      235
    );
    doc.text("6)", 20, 250);
    doc.text(
      `${valueB_6 ? "ACC       " : "NO ACC "}` +
        ` Ensure the oven door fits squarely and is not crooked.`,
      30,
      250
    );
    doc.text(
      "7) " +
        `${valueB_7 ? "ACC       " : "NO ACC "}` +
        ` Ensure the oven door opend and closes smoothly and doesn't get caught on sides`,
      20,
      265
    );
    doc.text(
      "C) Check wiring of Line Voltages Componets, EX: CC Heaters, Dual SSR, EC Fans,",
      15,
      285
    );
    doc.text(
      "Hi-Limit Switch, Control Circuits, Motor Racks, Replays and Convection Blowers.",
      25,
      295
    );
    doc.text(`${valueC ? "ACC" : "NO ACC"}`, 370, 285);
    doc.text(
      "D) Check for the screws that hold base to cavity. Ensure they are tight and there are",
      15,
      310
    );
    doc.text("no gaps", 25, 320);
    doc.text(`${valueD ? "ACC" : "NO ACC"}`, 370, 310);
    doc.text(
      "E) Check for loose hardware and debrus on floor of the oven cabinet",
      15,
      335
    );
    doc.text(`${valueE ? "ACC" : "NO ACC"}`, 370, 335);
    doc.text(
      "F) Open both doors, Ensure door switch is not bend (switch plate should be straight)",
      15,
      350
    );
    doc.text(`${valueF ? "ACC" : "NO ACC"}`, 370, 350);
    doc.text(
      "G) If thermostad wire is rubbing against power supply box, add tape to protect it",
      15,
      365
    );
    doc.text(`${valueG ? "ACC" : "NO ACC"}`, 370, 365);
    doc.text(
      "H) Check for the screws that hold base to cavity. Ensure they are tight and there are",
      15,
      385
    );
    doc.text(`${valueH ? "ACC" : "NO ACC"}`, 370, 385);
    doc.text(
      "I) Using the OHMS function on your meter, measure and record the resistances between the:",
      15,
      405
    );
    doc.text(
      `1) Frame and the Ground on the plug:  ` + `${valueI_1}` + ` OHMS`,
      20,
      420
    );
    doc.text(`2) L1 and Gnd:  ` + `${valueI_2}` + ` OHMS`, 20, 435);
    doc.text(`3) L2 and Gnd:  ` + `${valueI_3}` + ` OHMS`, 20, 450);
    doc.text(`4) L3 and Gnd:  ` + `${valueI_4}` + ` OHMS`, 20, 465);
    doc.text(`5) Neutral and Gnd:  ` + `${valueI_5}` + ` OHMS`, 20, 480);
    doc.text(
      "J) Open Fuse #1, #2 and check rating, should be Class CC ATMR 12",
      15,
      500
    );
    doc.text(`${valueJ ? "ACC" : "NO ACC"}`, 370, 500);
    doc.addPage("a4", "p");
    doc.addImage(Logo, "PNG", 120, 10, 220, 40);
    doc.setFontSize(13);
    doc.text("2) OPERATIONAL INSPECTION: APPLY POWER TO OVEN.", 30, 70);
    doc.setFontSize(10);
    doc.text("A) Plug in the oven, as the Display Boots, Check for:", 15, 90);
    doc.text(`i) Displayed software version: ${valueA_I}`, 30, 105);
    doc.text(`ii) Displayed Voltage: ${valueA_II} VAC`, 30, 120);
    doc.text(`iii) Serial Number HHD/HHS: ${valueA_III}`, 30, 135);
    doc.text(
      "B) Meter to Volts AC: Measure the Voltage at Power Supply Input Terminals:",
      15,
      155
    );
    doc.text(`${valueB_I}`, 370, 155);
    doc.text(
      "C) Does Voltage & Frequency (on rating plate) match the Ratings on traveler?",
      15,
      170
    );
    doc.text(`${valueC_I ? "ACC" : "NO ACC"}`, 370, 170);
    doc.text(
      "D) In INFO MODE, check that the menu version and firmware are correct ",
      15,
      185
    );
    doc.text("according to oven spec.", 25, 195);
    doc.text(`${valueD_I ? "ACC" : "NO ACC"}`, 370, 185);
    doc.text(
      "E) Enter the 'Test Mode'. make sure 'Faults' are cleared.",
      15,
      210
    );
    doc.text(`${valueE_I ? "ACC" : "NO ACC"}`, 370, 210);
    doc.text("F) Make sure the Door says closed when it is closed.", 15, 225);
    doc.text(`${valueF_I ? "ACC" : "NO ACC"}`, 370, 225);
    doc.text(
      "G) Using an insulated screw driver check the EC Cooling Fan by bridging ",
      15,
      240
    );
    doc.text(
      "between the terminals on 'Close on Rise' Switch, which controls the EC ",
      25,
      250
    );
    doc.text("cooling fan", 25, 260);
    doc.text(`${valueG_I ? "ACC" : "NO ACC"}`, 370, 240);

    doc.text(
      "H) Install jet plates and rack. Ensure the rack oscillates when cold.",
      15,
      275
    );
    doc.text(`${valueH_I ? "ACC" : "NO ACC"}`, 370, 275);
    doc.text(
      "I) Turn oven on. Heat Oven to its preset temperature, record Start time:",
      15,
      290
    );
    doc.text(`${valueI_I}`, 370, 290);
    doc.text(
      "Record time when oven reaches preset temperature and menu appears: ",
      25,
      300
    );
    doc.text(`${valueI_II}`, 370, 300);

    doc.text("Allow oven to heat soak for 1 hour.", 25, 310);
    doc.text(`warm-Up Time: ${valueI_III} minutes`, 290, 310);
    doc.text("J) Ensure the rack oscillates when oven is hot.", 15, 325);
    doc.text(`${valueJ_I ? "ACC" : "NO ACC"}`, 370, 325);
    doc.text("K) Ensure Blower Fan is rotating counter-clockwise", 15, 340);
    doc.text(`${valueK ? "ACC" : "NO ACC"}`, 370, 340);
    doc.text("L) Conduct Amp draw of Heaters A and B.", 15, 355);
    doc.text("i) Heater A: ", 25, 365);
    doc.text(`${valueL_I} AMPS`, 80, 365);
    doc.text("ii) Heater B: ", 25, 375);
    doc.text(`${valueL_II} AMPS`, 80, 375);
    doc.text("M) Ckech the Door Switch.", 15, 390);
    doc.text(`${valueM ? "ACC" : "NO ACC"}`, 370, 390);
    doc.text("N) Install panels", 15, 405);
    doc.text(`${valueN ? "ACC" : "NO ACC"}`, 370, 405);
    doc.text("O) Clear all Coock Cycles and Faults", 15, 420);
    doc.text(`${valueO ? "ACC" : "NO ACC"}`, 370, 420);
    doc.text(
      "P) Check packaged accesories. Do dey match oven model Checklist?",
      15,
      435
    );
    doc.text(`${valueP ? "ACC" : "NO ACC"}`, 370, 435);
    doc.text(`NOTES: ${valueNOTE}`, 15, 450, { maxWidth: 400 });

    doc.text(`APROOVED: ${valuePON ? "YES" : "NO"}`, 170, 600);
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
