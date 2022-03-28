import react, { useState, useEffect } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { FileExcelOutlined } from "@ant-design/icons";
import { CSVLink } from "react-csv";
import { getStorage, ref, deleteObject } from "firebase/storage";
import moment from "moment";
const storage = getStorage();
const db = getFirestore();

export const Excel = (props) => {
  const [data, setData] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [dataTest, setDataTest] = useState([{}]);
  const headers = [
    { label: "Oven", key: "oven" },
    { label: "Serial", key: "serial" },
    { label: "Date", key: "date" },
    { label: "Name", key: "name" },
    { label: "Voltage Selection", key: "voltage" },
    { label: "current verification value (AMPS)", key: "amps" },
    { label: "MW Power Output Result", key: "powerOutput" },
    { label: "Sage Frimware", key: "sageFrimware" },
    { label: "Phoniex/HLUI Frimwae", key: "phoniexFrimware" },
    { label: "Notes", key: "notes" },
    { label: "Action Taken", key: "actionTaken" },
  ];
  const getData = async () => {
    try {
      props.setDisabled(true);
      const oven = await getDocs(collection(db, "Excel"));
      if (!oven.empty) {
        let _data = [];
        oven.forEach((e) => {
          _data.push(e?.data());
        });
        setData(_data);
        props.setDisabled(false);
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <CSVLink
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      headers={headers}
      asyncOnClick={true}
      data={data}
      onClick={getData}
      filename={"QA-Report.csv"}
    >
      <FileExcelOutlined />
    </CSVLink>
  );
};
