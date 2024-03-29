import React, { useState, useEffect } from "react";
import {
  message,
  Row,
  Col,
  Layout,
  Table,
  Button,
  Space,
  Input,
  DatePicker,
} from "antd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import moment from "moment";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import firebaseApp from "../../../Credentials";
import { Header } from "../layout/Header";
import { Container } from "../layout/Container";
import { useNavigate, Link } from "react-router-dom";
import { getStorage, ref, deleteObject } from "firebase/storage";
import {
  getFirestore,
  doc,
  getDoc,
  deleteDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { I3Pdf } from "../pdf/I3Pdf";
import { I1Pdf } from "../pdf/I1Pdf";
import { HHDPdf } from "../pdf/HHDPdf";
import { ENCPdf } from "../pdf/ENCPdf";
import { ECONewPdf } from "../pdf/ECONewPdf";
import { ECOSTPdf } from "../pdf/ECOSTPdf";
const storage = getStorage(firebaseApp);
const { Content, Footer } = Layout;
const db = getFirestore(firebaseApp);

export const Dashboard = () => {
  const [arrayOvens, setArrayOvens] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
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
              await deleteDoc(doc(db, "oven", record.id));
              await deleteDoc(doc(db, "VisualInspection", `${record.serial}`));
              await deleteDoc(
                doc(db, "OperationalInspection", `${record.serial}`)
              );
              await deleteDoc(doc(db, "HotOvenInspection", `${record.serial}`));
              await deleteDoc(doc(db, "FinalInspection", `${record.serial}`));

              const newArrayOvens = [];
              arrayOvens.forEach((e) => {
                if (e.serial !== record.serial) {
                  newArrayOvens.push(e);
                }
              });
              setArrayOvens(newArrayOvens);
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
        </Space>
      ),
    },
  ];

  const getUser = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      try {
        let allOvens = [];
        const day1 = new Date(moment().format("MM/DD/YY")).getTime();
        const q = query(
          collection(db, "oven"),
          where("timeStamp", ">=", day1 - 86400000 * 5),
          where("timeStamp", "<=", day1 + 86400000)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          let _id = [];
          let _data = [];

          querySnapshot?.forEach((doc) => {
            allOvens.push(doc.data());
          });
          querySnapshot.forEach((e) => {
            if (e.data()) {
              _data.push(e.data());
              _id.push(e.id);
            }
          });
          for (let i = 0; i < _id.length; i++) {
            _data[i].id = _id[i];
          }
          setArrayOvens(_data);
        }
      } catch (error) {
        console.error("error", error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, [isModalVisible]);
  return (
    <Layout className="app-layout">
      <Header dashboard={true} />

      <Content>
        <Container>
          <div className="container">
            <Table
              columns={columns}
              dataSource={arrayOvens}
              pagination={{ pageSize: 6 }}
              rowClassName={(record, index) =>
                index % 2 === 0 ? "table-row-light" : "table-row-dark"
              }
            />{" "}
            <Row justify="end">
              <Col xs={3} md={2} xl={1}>
                <Button
                  shape="circle"
                  size="large"
                  style={{
                    marginTop: "1em",
                  }}
                  type="primary"
                >
                  <Link
                    to="/register"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PlusOutlined />
                  </Link>
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </Content>
      <Footer style={{ backgroundColor: "#ccc", position: "relative" }}>
        Qa Turbochef, 2022
      </Footer>
    </Layout>
  );
};
