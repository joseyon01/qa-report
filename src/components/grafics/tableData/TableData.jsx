import React, { useEffect } from "react";
import { Button, DatePicker, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ECONewPdf } from "../../pdf/ECONewPdf";
import { ECOSTPdf } from "../../pdf/ECOSTPdf";
import { ENCPdf } from "../../pdf/ENCPdf";
import { HHDPdf } from "../../pdf/HHDPdf";
import { I1Pdf } from "../../pdf/I1Pdf";
import { I3Pdf } from "../../pdf/I3Pdf";

export const TableData = (props) => {
  const data = props.data;
  const graficsData = props.graficsData;
  const filterdata = (data, param) => {
    return data.filter((elem) => {
      if (elem.status == param[3]) {
        if (elem.oven == param[2]) {
          if (elem.name == param[4]) {
            return elem;
          }
          if (param[4] == "All") {
            return elem;
          }
        }
      }
    });
  };

  const columns = [
    {
      title: "Serial Number",
      dataIndex: "serial",
      key: "serial",

      render: (text) => <a>{text}</a>,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <Input
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
            }}
            autoFocus
            placeholder="Type S/N"
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          />
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.serial.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      responsive: ["md"],
      sorter: (a, b) => a.timeStamp - b.timeStamp,
      sortOrder: "descend",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <DatePicker
            selected={selectedKeys[0]}
            onChange={(e, a) => {
              setSelectedKeys(e ? [e.format("MM/DD/YY")] : []);
            }}
            autoFocus
            onBlur={() => {
              confirm();
            }}
          />
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (selected, record) => {
        return record.date.includes(selected);
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      defaultSortOrder: "descend",
      filters: [
        {
          text: "Aprooved",
          value: "Aprooved",
        },
        {
          text: "Rejected",
          value: "Rejected",
        },
        {
          text: "In Progress",
          value: "In Progress",
        },
        {
          text: "Repaired",
          value: "Repaired",
        },
      ],
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (text, record) => (
        <Space
          size="middle"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {record.status == "In Progress" ? (
            ""
          ) : (
            <Button style={{ borderRadius: "6px" }}>
              {record.oven == "ENC" ? (
                <ENCPdf serial={record.serial} oven={record.oven} />
              ) : record.oven == "I1" ? (
                <I1Pdf serial={record.serial} oven={record.oven} />
              ) : record.oven == "I3" ? (
                <I3Pdf serial={record.serial} oven={record.oven} />
              ) : record.oven == "HHD" ? (
                <HHDPdf serial={record.serial} oven={record.oven} />
              ) : record.oven == "ECOST" ? (
                <ECOSTPdf serial={record.serial} oven={record.oven} />
              ) : record.oven == "ECONew" ? (
                <ECONewPdf serial={record.serial} oven={record.oven} />
              ) : null}
            </Button>
          )}
        </Space>
      ),
    },
  ];
  useEffect(() => {}, []);
  return (
    <>
      <Table
        columns={columns}
        dataSource={filterdata(data, graficsData)}
        pagination={{ pageSize: 6 }}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
      />
    </>
  );
};
