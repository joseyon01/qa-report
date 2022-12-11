import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Typography,
  Radio,
  Button,
  Upload,
  message,
  Modal,
  Checkbox,
} from "antd";
import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import {
  HOT_OVEN_B_DOOR,
  HOT_OVEN_B_SIDES,
  HOT_OVEN_TOP_R,
  HOT_OVEN_TOP_L,
  HOT_OVEN_BOT_R,
  HOT_OVEN_BOT_L,
  HOT_OVEN_RECHECK,
  HOT_OVEN_C,
  HOT_OVEN_D,
  HOT_OVEN_E,
  OVEN_APROVE_OR_NOT,
} from "../../constants/ConstantHotOven";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { ProblemSelection } from "../problemSelection/ProblemSelection";
const db = getFirestore();
const storage = getStorage();
const { Text, Title } = Typography;

export const HotOven = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [valueRC, setValueRC] = useState(null);
  const [valueAON, setValueAON] = useState(null);
  const [upLoadDisabled, setUpLoadDisabled] = useState(false);
  const [uploading, setUploading] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [problems, setProblems] = useState({
    COSMETICS: false,
    ELECTRICALCOMPONENTS: false,
    BLOWERSYSTEM: false,
    HEATINGANDTEMPERATURESYSTEM: false,
    WIRING: false,
    LOOSEOREXTRAPARTS: false,
    INCORRECTSOFTWAREUPLOADED: false,
    INCORRECTMENUUPLOADED: false,
    MICROWAVCIRCUIT: false,
    COOCKINGCOMPONENTS: false,
    DOORSYSTEM: false,
  });
  const repariedChecker = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const repariedOptions = [
    {
      label: "Electric",
      value: "Electric",
    },
    {
      label: "Mechanic",
      value: "Mechanic",
    },
    {
      label: "Workmanship",
      value: "Workmanship",
    },
  ];
  const navigate = useNavigate();
  const handleOk = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
    navigate(`/dashboard`);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const showModal = () => setModalVisible(true);
  const onChangeRC = (e) => setValueRC(e.target.value);
  const onChangeAON = (e) => setValueAON(e.target.value);

  const fileProps = {
    maxCount: 5,
    accept: "image/png, image/jpeg, image/jpg",
    onChange({ file, fileList }) {
      file.status = "done";
      file.progres = 100;
    },
    beforeUpload: (file) => {
      return true;
    },
    customRequest: async (e) => {
      const file = e.file;
    },
  };
  function onFinishFailed(errorInfo) {
    message.error("Complete all the fields");
  }
  async function addHotOven(values) {
    setButtonDisabled(true);
    setLoading(true);
    let imageArr = values.image?.fileList;
    const checkImageArr = imageArr;
    const filterSize = checkImageArr.filter((file) => {
      if (file && file?.size > 44000) {
        return file;
      }
    });
    if (filterSize[0]?.size > 44000) {
      setButtonDisabled(false);
      setLoading(false);
      setUpLoadDisabled(false);
      return message.error("Files can't be larger than 350kb");
    }
    imageArr?.map(async (img) => {
      let i = imageArr.indexOf(img);
      const name = `image-${i}`;
      const storageRef = ref(storage, `${props.serial}/image-${i}.jpg`);
      await uploadBytesResumable(storageRef, img.originFileObj);
      const urlRef = await getDownloadURL(storageRef);
      const ovenRef = doc(db, "Images", `${props.serial}`);
      await setDoc(ovenRef, { [i]: `${urlRef}` }, { merge: true });
    });
    values.OVEN_REPAIRED_OPTIONS == undefined
      ? (values.OVEN_REPAIRED_OPTIONS = [])
      : null;
    await setDoc(doc(db, "HotOvenInspection", `${props.serial}`), {
      HOT_OVEN_B_DOOR: values.HOT_OVEN_B_DOOR,
      HOT_OVEN_B_SIDES: values.HOT_OVEN_B_SIDES,
      HOT_OVEN_TOP_R: values.HOT_OVEN_TOP_R,
      HOT_OVEN_TOP_L: values.HOT_OVEN_TOP_L,
      HOT_OVEN_BOT_R: values.HOT_OVEN_BOT_R,
      HOT_OVEN_BOT_L: values.HOT_OVEN_BOT_L,
      HOT_OVEN_RECHECK: values.HOT_OVEN_RECHECK,
      HOT_OVEN_C: values.HOT_OVEN_C,
      HOT_OVEN_D: values.HOT_OVEN_D,
      HOT_OVEN_E: values.HOT_OVEN_E,
      OVEN_APROVE_OR_NOT: values.OVEN_APROVE_OR_NOT,
      OVEN_REPAIRED_OPTIONS: values.OVEN_REPAIRED_OPTIONS,
      COSMETICS: problems.COSMETICS,
      ELECTRICALCOMPONENTS: problems.ELECTRICALCOMPONENTS,
      BLOWERSYSTEM: problems.BLOWERSYSTEM,
      HEATINGANDTEMPERATURESYSTEM: problems.HEATINGANDTEMPERATURESYSTEM,
      WIRING: problems.WIRING,
      LOOSEOREXTRAPARTS: problems.LOOSEOREXTRAPARTS,
      INCORRECTSOFTWAREUPLOADED: problems.INCORRECTSOFTWAREUPLOADED,
      INCORRECTMENUUPLOADED: problems.INCORRECTMENUUPLOADED,
      MICROWAVCIRCUIT: problems.MICROWAVCIRCUIT,
      COOCKINGCOMPONENTS: problems.COOCKINGCOMPONENTS,
      DOORSYSTEM: problems.DOORSYSTEM,
    })
      .then(async () => {
        const ovenRef = doc(db, "oven", `${props.serial}`);
        await setDoc(
          ovenRef,
          { status: values.OVEN_APROVE_OR_NOT },
          { merge: true }
        );
        await setDoc(
          doc(db, "Excel", `${props.serial}`),
          { status: values.OVEN_APROVE_OR_NOT },
          { merge: true }
        );
        setLoading(false);
        setButtonDisabled(false);
        setUpLoadDisabled(false);
        message.success("Data succesfully send");
        showModal();
      })
      .catch((error) => {
        setLoading(false);
        setButtonDisabled(false);
        setUpLoadDisabled(false);
        message.success("Error sending the Data");
      });
  }
  const [form] = Form.useForm();

  return (
    <Form
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
      onFinish={addHotOven}
      onFinishFailed={onFinishFailed}
      form={form}
      initialValues={{
        HOT_OVEN_B_DOOR: 0,
        HOT_OVEN_B_SIDES: 0,
        HOT_OVEN_TOP_R: 0,
        HOT_OVEN_TOP_L: 0,
        HOT_OVEN_BOT_R: 0,
        HOT_OVEN_BOT_L: 0,
        HOT_OVEN_D: 213084,
      }}
    >
      <Row justify="center">
        <Col xs={20} align="center">
          <strong>3) HOT OVEN OPERATIONAL CHECKOUT:</strong>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={{ span: 22 }}>
          <Text>
            The equipment needed to complete the Oven inspection is a moder 1501
            Survey Meter, three 500 ml beakers with 275 ml +/- 15ml of cold
            water, spring loaded tongs
          </Text>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 22 }}>
          <Text>A) Door Closed Microwave Leakege Test:</Text>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 22 }}>
          <Text>
            B) Repeat process checking the IR Element exits, around the
            Magnetrons and waveguide ends, left and right sides. Maximum
            allowale leakage is 0.8mW/cm surrounding the perimeter of the door
            and 0.2mW/cm<sup>2</sup> around the EC and left and right side IR
            Element through hole.
          </Text>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col xs={8} sm={6}>
          <Text>DOOR</Text>
          <Form.Item
            name={HOT_OVEN_B_DOOR}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Input type="number" size="small" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={8} sm={6}>
          <Text>Rt & Lt Sides</Text>
          <Form.Item
            name={HOT_OVEN_B_SIDES}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Input
              type="number"
              placeholder={"mW/cm2"}
              size="small"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="spaceAround">
        <Col xs={{ span: 7, offset: 1 }} sm={{ span: 5, offset: 3 }}>
          <Form.Item
            name={HOT_OVEN_TOP_L}
            style={{ marginBottom: "0" }}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Input type="number" size="small" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={{ span: 7, offset: 8 }} sm={{ span: 5, offset: 8 }}>
          <Form.Item
            name={HOT_OVEN_TOP_R}
            style={{ marginBottom: "0" }}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Input type="number" size="small" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col
          xs={{ span: 8 }}
          style={{
            height: "8em",
            width: "100%",
            border: "dashed 3px #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
          }}
        >
          <Text>Mark and record peak levels.</Text>
        </Col>
      </Row>
      <Row justify="spaceAround">
        <Col xs={{ span: 7, offset: 1 }} sm={{ span: 5, offset: 3 }}>
          <Form.Item
            name={HOT_OVEN_BOT_L}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Input type="number" size="small" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={{ span: 7, offset: 8 }} sm={{ span: 5, offset: 8 }}>
          <Form.Item
            name={HOT_OVEN_BOT_R}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Input type="number" size="small" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={{ span: 22, offset: 1 }} sm={16}>
          <Text type="danger">
            Recheck Waveguide Covers ! Reset Cook Count and Accumulation
            Settings !
          </Text>
        </Col>
        <Col xs={{ span: 22, offset: 1 }} sm={4}>
          <Form.Item
            name={HOT_OVEN_RECHECK}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeRC}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22} sm={24}>
          <Row>
            <Col xs={24}>
              <Form.Item
                label="C) Cook time Count"
                name={HOT_OVEN_C}
                rules={[
                  {
                    required: true,
                    message: "Finish the inspection before submitting it",
                  },
                ]}
              >
                <Input type="number" size="small" style={{ width: 150 }} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Form.Item
                label="D) Survey meter #"
                name={HOT_OVEN_D}
                rules={[
                  {
                    required: true,
                    message: "Finish the inspection before submitting it",
                  },
                ]}
              >
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  disabled
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Form.Item
                label="E) Clear Cook time foults"
                name={HOT_OVEN_E}
                rules={[
                  {
                    required: true,
                    message: "Finish the inspection before submitting it",
                  },
                ]}
              >
                <Input type="number" size="small" style={{ width: 150 }} />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={6}>
          <Form.Item
            name="image"
            rules={[{ required: false, message: "Please upload your file!" }]}
          >
            <Upload {...fileProps}>
              <Button
                loading={imageLoading}
                disabled={upLoadDisabled}
                icon={imageLoading ? "" : <UploadOutlined />}
              >
                Upload
              </Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={4}>
          <Form.Item
            name={OVEN_APROVE_OR_NOT}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeAON}>
              <Radio value={"Aprooved"}>Aprooved</Radio>
              <Radio value={"Rejected"}>Rejected</Radio>
              <Radio value={"Repaired"}>Repaired</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      {valueAON == "Rejected" ? (
        <ProblemSelection problems={problems} setProblems={setProblems} />
      ) : valueAON == "Repaired" ? (
        <Row justify="center">
          <Col xs={10}>
            <Form.Item
              name={"OVEN_REPAIRED_OPTIONS"}
              rules={[
                {
                  required: true,
                  message: "Finish the inspection before submitting it",
                },
              ]}
            >
              <Checkbox.Group
                options={repariedOptions}
                onChange={repariedChecker}
              />
            </Form.Item>
          </Col>
        </Row>
      ) : null}
      <br />
      <Row justify="center">
        <Col xs={20} sm={18}>
          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              block
              disabled={buttonDisabled}
              loading={loading}
            >
              {loading ? "" : "Submit"}
            </Button>

            <Modal
              visible={modalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              style={{ backgroundColor: "#2ECC71", borderRadius: "1em" }}
            >
              <Title level={3}>OK..!</Title>
              <Text>The data has been successfully stored</Text>
              <br />
              <Text>Click Ok to Finish the Inspection</Text>
              <br />
              <Text>Click cancel if you whant to upload some Images</Text>
            </Modal>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
