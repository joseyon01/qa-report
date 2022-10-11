import React, { useState } from "react";
import { Button, Spin } from "antd";
import jsPDF from "jspdf";
import Logo from "../../assets/img/turboChefLogo.png";
import { FilePdfOutlined, LoadingOutlined } from "@ant-design/icons";
import * as htmlToImage from "html-to-image";

export const StatisticsPdf = (props) => {
  const data = props.data;
  const graficsData = props.graficsData;
  const day1 = new Date(graficsData[0]);
  const day2 = new Date(graficsData[1]);
  const [loading, setLoading] = useState(false);
  let countAll = 0;
  let countSelected = 0;
  let countNotSelected = 0;
  let status = graficsData[3];
  data.map((e) => {
    if (graficsData[4] == "All") {
      if (e.oven == graficsData[2]) {
        countAll++;
      }
      if (e.oven == graficsData[2] && e.status == graficsData[3]) {
        countSelected++;
      }
    } else {
      if (e.oven == graficsData[2] && e.name == graficsData[4]) {
        countAll++;
      }
      if (
        e.oven == graficsData[2] &&
        e.status == graficsData[3] &&
        e.name == graficsData[4]
      ) {
        countSelected++;
      }
    }
  });
  const jspdfGenerator = async (pdf) => {
    let doc = new jsPDF("p", "px", "a4", true);
    const elements = document.getElementsByClassName("custom-chart");
    const el = elements[0];
    const imgData = await htmlToImage.toPng(el);
    doc.addImage(Logo, "PNG", 120, 10, 220, 40);
    doc.setFontSize(16);
    doc.text(
      `Statistics For - ${graficsData[2]} ${graficsData[3]} Ovens`,
      40,
      100
    );
    doc.text(
      `From- ${day1.toLocaleDateString()} To- ${day2.toLocaleDateString()} `,
      40,
      120
    );
    doc.text(`Inspected by - ${graficsData[4]} `, 40, 140);
    doc.text(`All ovens inspected `, 40, 160);
    doc.setFillColor("#FF5733");
    doc.context2d.fillRect(40, 165, 200, 20);
    doc.text(`${countAll} `, 45, 180);
    doc.text(`${graficsData[3]} ovens`, 40, 200);
    doc.setFillColor("#13B4B4");
    doc.context2d.fillRect(40, 205, (countSelected / countAll) * 200, 20);
    doc.text(`${countSelected}`, 45, 220);
    doc.text(`% of ${graficsData[3]}`, 40, 240);
    doc.setFillColor("#13B4B4");
    doc.context2d.fillRect(40, 245, (countSelected / countAll) * 200, 20);
    doc.text(`${((countSelected / countAll) * 100).toFixed(2)}% `, 45, 260);
    doc.addPage("a4", "l");
    doc.addImage(Logo, "PNG", 200, 10, 220, 40);
    doc.text(
      `Grafics For - ${graficsData[2]} ${graficsData[3]} Ovens`,
      40,
      100
    );
    doc.addImage(imgData, "PNG", -5, 100, 620, 180);
    doc.save(
      `statisticsFrom${day1.toLocaleDateString()}To${day2.toLocaleDateString()}.pdf`
    );
    setLoading(false);
  };

  return (
    <Button
      style={{
        height: "3rem",
        width: "3rem",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      disabled={loading}
      onClick={() => {
        setLoading(true);
        jspdfGenerator();
      }}
    >
      {loading ? (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      ) : (
        <FilePdfOutlined />
      )}
    </Button>
  );
};
