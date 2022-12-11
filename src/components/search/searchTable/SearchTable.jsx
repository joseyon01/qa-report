import { Button, DatePicker, Input, message, Modal, Space, Table } from "antd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../../../../Credentials";
import { getStorage, ref, deleteObject } from "firebase/storage";
import {
  getFirestore,
  doc,
  getDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";
import { I3Pdf } from "../../pdf/I3Pdf";
import { I1Pdf } from "../../pdf/I1Pdf";
import { HHDPdf } from "../../pdf/HHDPdf";
import { ENCPdf } from "../../pdf/ENCPdf";
import { ECONewPdf } from "../../pdf/ECONewPdf";
import { ECOSTPdf } from "../../pdf/ECOSTPdf";
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

export const SearchTable = (props) => {
  const dataSource = props.data;
  const setDataSource = props.setData;
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const ovenRef = collection(db, "oven");
  function navigateEdit(serial, oven) {
    navigate(`/edit/${serial}/${oven}`);
  }

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
          <Button
            style={{ borderRadius: "6px" }}
            loading={loading}
            onClick={async () => {
              setLoading(true);
              let getData = [];
              const docRef = doc(db, "Images", `${record.serial}`);
              const docSnap = await getDoc(docRef).catch((error) => {});
              const data = docSnap.data();

              if (data) {
                getData = Object.keys(data);
                getData.forEach(async (e) => {
                  const storageRef = ref(
                    storage,
                    `${record.serial}/image-${e}`
                  );
                  await deleteObject(storageRef).catch((error) => {});
                });
              }
              await deleteDoc(doc(db, "Images", record.serial));
              await deleteDoc(doc(db, "Excel", record.serial));
              await deleteDoc(doc(db, "VisualInspection", `${record.serial}`));
              await deleteDoc(
                doc(db, "OperationalInspection", `${record.serial}`)
              );
              await deleteDoc(doc(db, "HotOvenInspection", `${record.serial}`));
              await deleteDoc(doc(db, "FinalInspection", `${record.serial}`));
              await deleteDoc(doc(db, "oven", record.serial));

              const newArrayOvens = [];
              dataSource.forEach((e) => {
                if (e.serial !== record.serial) {
                  newArrayOvens.push(e);
                }
              });
              setDataSource(newArrayOvens);
              message.success("Report deleted successfully");
              setLoading(false);
            }}
          >
            <a>{loading ? "" : <AiFillDelete style={{ color: "red" }} />}</a>
          </Button>
          <Button
            style={{ borderRadius: "6px" }}
            onClick={async () => {
              navigateEdit(record.serial, record.oven);
            }}
          >
            <a>
              <AiFillEdit style={{ color: "green" }} />
            </a>
          </Button>
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
  useEffect(() => {}, [dataSource]);
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
