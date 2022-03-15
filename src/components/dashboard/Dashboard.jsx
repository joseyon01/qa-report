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
  Modal,
} from "antd";
import { AiFillDelete, AiFillEdit, AiOutlineFileAdd } from "react-icons/ai";
import { SearchOutlined, FilePdfOutlined } from "@ant-design/icons";
import { Header } from "../layout/Header";
import { Container } from "../layout/Container";
import { useNavigate, Link } from "react-router-dom";
import { getStorage, ref, deleteObject } from "firebase/storage";
import {
  getFirestore,
  doc,
  getDocs,
  getDoc,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { I3Pdf } from "../pdf/I3Pdf";
import { I1Pdf } from "../pdf/I1Pdf";
import { HHDPdf } from "../pdf/HHDPdf";
import { ENCPdf } from "../pdf/ENCPdf";
import { ECONewPdf } from "../pdf/ECONewPdf";
import { ECOSTPdf } from "../pdf/ECOSTPdf";
const storage = getStorage();
const { Content, Footer } = Layout;
const db = getFirestore();

export const Dashboard = () => {
  const [arrayOvens, setArrayOvens] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [ovenType, setOvenType] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const ovenRef = collection(db, "oven");
  function navigateEdit(serial, oven) {
    navigate(`/edit/${serial}/${oven}`);
  }
  const showModal = (o, s) => {
    setIsModalVisible(true);

    switch (o) {
      case "ENC":
        setPdf(<ENCPdf serial={s} />);
        break;
      case "I1":
        setPdf(<I1Pdf serial={s} />);
        break;
      case "I3":
        setPdf(<I3Pdf serial={s} />);
        break;
      case "HHD":
        setPdf(<HHDPdf serial={s} />);
        break;
      case "ECOST":
        setPdf(<ECOSTPdf serial={s} />);
        break;
      case "ECONew":
        setPdf(<ECONewPdf serial={s} />);
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
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <DatePicker
            selected={selectedKeys[0]}
            onChange={(e, a) => {
              setSelectedKeys(a ? [a] : []);
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
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: "Actions",
      key: "actions",
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
            <a>{loading ? "" : <AiFillDelete />}</a>
          </Button>
          <Button
            style={{ borderRadius: "6px" }}
            onClick={async () => {
              navigateEdit(record.serial, record.oven);
            }}
          >
            <a>
              <AiFillEdit />
            </a>
          </Button>
          <Button
            style={{ borderRadius: "6px" }}
            onClick={async () => {
              setIsModalVisible(true);
              showModal(record.oven, record.serial);
              setOvenType(record.serial);
            }}
          >
            <a>
              <FilePdfOutlined />
            </a>
          </Button>
          <Modal
            title={ovenType + ".pdf"}
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

  const getUser = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      try {
        const querySnapshot = await getDocs(collection(db, "oven"));
        if (!querySnapshot.empty) {
          let _id = [];
          let _data = [];
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
          setCurrentUser(user);
        }
      } catch (error) {
        console.error("error", error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout className="app-layout">
      <Header dashboard={true} />

      <Content>
        <Container>
          <div className="container">
            <Row justify="end">
              <Col xs={4}>
                <Button
                  style={{
                    marginBottom: "1em",
                    background: "#2ECC71",
                    color: "#fff",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "6px",
                  }}
                >
                  <Link to="/register">
                    <AiOutlineFileAdd />
                  </Link>
                </Button>
              </Col>
            </Row>
            <Table
              columns={columns}
              dataSource={arrayOvens}
              pagination={{ pageSize: 5 }}
            />{" "}
          </div>
        </Container>
      </Content>
      <Footer style={{ backgroundColor: "#ccc", position: "relative" }}>
        Qa Turbochef, 2022
      </Footer>
    </Layout>
  );
};
