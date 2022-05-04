import { Table } from "antd";
import React from "react";

export const SearchTable = (props) => {
  let dataSource = props.data;
  const columns = [
    {
      title: "Inspector",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Oven",
      dataIndex: "oven",
      key: "oven",
    },
    {
      title: "Searial",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 6 }}
      rowClassName={(record, index) =>
        index % 2 === 0 ? "table-row-light" : "table-row-dark"
      }
    />
  );
};
