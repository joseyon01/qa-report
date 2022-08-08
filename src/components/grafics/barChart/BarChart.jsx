import React, { useEffect } from "react";
import "./barChart.css";
export const BarChart = (props) => {
  const graficsData = props.graficsData;
  const data = props.data;
  let allDataObj = {};
  let dataObj = {};
  let days = [];
  let maxOvens = [];
  let count = 0;
  let allCount = 0;
  for (let i = graficsData[0]; i < graficsData[1]; i += 86400000) {
    const start = new Date(i);
    const end = new Date(i + 86400000);
    data.map((e) => {
      if (
        e.timeStamp >= start &&
        e.timeStamp <= end &&
        e.oven == graficsData[2] &&
        e.status == graficsData[3]
      ) {
        count++;
      }
    });
    data.map((e) => {
      if (e.timeStamp >= start && e.timeStamp <= end) {
        allCount++;
      }
    });
    dataObj[start.getDate()] = count;
    allDataObj[start.getDate()] = allCount;
    count = 0;
    allCount = 0;
  }
  for (let i in allDataObj) {
    days.push(i);
    maxOvens.push(allDataObj[i]);
  }
  useEffect(() => {}, []);
  return (
    <div
      style={{ height: `${Math.max(...maxOvens) * 10 + 85}px` }}
      className="barChart__container"
    >
      <div className="barChart__background_container">
        {days.map((e) => {
          return (
            <div key={days.indexOf(e)}>
              <div key={`text-${days.indexOf(e)}`} className="barChart__text">
                {dataObj[e]}
              </div>
              <div
                key={`bar-${days.indexOf(e)}`}
                className="barChart__all_bar"
                style={{ height: `${dataObj[e] * 10 + 5}px` }}
              />
            </div>
          );
        })}
      </div>
      <div className="barChart__days_container">
        {days.map((e) => {
          return <div className="barChart__text">{e}</div>;
        })}
      </div>
    </div>
  );
};
