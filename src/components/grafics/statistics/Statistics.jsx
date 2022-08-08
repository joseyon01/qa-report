import React from "react";
import "./statistics.css";
export const Statistics = (props) => {
  const data = props.data;
  const graficsData = props.graficsData;
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
  return (
    <div>
      <div className="statistics__allOvens">
        <span>All ovens inspected:</span>
        <div className="statistics__all_bar" style={{ width: "50%" }}>
          {countAll}
        </div>
      </div>
      <div>
        <span>{status} ovens</span>
        <div
          className="statistics__aprooved"
          style={{ width: `${(countSelected / countAll) * 50}%` }}
        >
          {countSelected}
        </div>
        <span>% of {status} ovens</span>
        <div
          className="statistics__aprooved_percent"
          style={{ width: `${(countSelected / countAll) * 50}%` }}
        >
          {((countSelected / countAll) * 100).toFixed(2)}%
        </div>
      </div>
    </div>
  );
};
