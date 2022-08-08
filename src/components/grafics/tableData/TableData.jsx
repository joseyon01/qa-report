import React, { useEffect, useState } from "react";
import { Button, DatePicker, Input, Modal, Space, Table } from "antd";
import {
  SearchOutlined,
  FilePdfOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { ECONewPdf } from "../../pdf/ECONewPdf";
import { ECOSTPdf } from "../../pdf/ECOSTPdf";
import { ENCPdf } from "../../pdf/ENCPdf";
import { HHDPdf } from "../../pdf/HHDPdf";
import { I1Pdf } from "../../pdf/I1Pdf";
import { I3Pdf } from "../../pdf/I3Pdf";

export const TableData = (props) => {
  const data = props.data;
  let filterData = [];
  const [ovenType, setOvenType] = useState({
    type: null,
    serial: null,
  });
  const graficsData = props.graficsData;
  const [pdf, setPdf] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (o, s) => {
    setIsModalVisible(true);

    switch (o) {
      case "ENC":
        setPdf(<ENCPdf serial={s} oven={o} />);
        break;
      case "I1":
        setPdf(<I1Pdf serial={s} oven={o} />);
        break;
      case "I3":
        setPdf(<I3Pdf serial={s} oven={o} />);
        break;
      case "HHD":
        setPdf(<HHDPdf serial={s} oven={o} />);
        break;
      case "ECOST":
        setPdf(<ECOSTPdf serial={s} oven={o} />);
        break;
      case "ECONew":
        setPdf(<ECONewPdf serial={s} oven={o} />);
        break;
      default:
        console.log("Error");
        break;
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
            <Button
              style={{ borderRadius: "6px" }}
              onClick={async () => {
                setIsModalVisible(true);
                showModal(record.oven, record.serial);
                setOvenType({
                  ...ovenType,
                  serial: record.serial,
                  type: record.oven,
                });
              }}
            >
              <a>
                <FilePdfOutlined />
              </a>
            </Button>
          )}
          <Modal
            title={ovenType.type + ovenType.serial + ".pdf"}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            {pdf}
          </Modal>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    filterData = data.map((oven) => {
      if (oven.status == graficsData[3]) {
        if (oven.oven == graficsData[2]) {
          filterData.push(oven);
        }
      }
    });
  }, [data]);
  console.log(filterData);
  return (
    <Table
      columns={columns}
      dataSource={filterData}
      pagination={{ pageSize: 6 }}
      rowClassName={(record, index) =>
        index % 2 === 0 ? "table-row-light" : "table-row-dark"
      }
    />
  );
};
