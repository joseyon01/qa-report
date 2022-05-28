import React, { useState } from "react";
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
} from "antd";
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
import { UploadOutlined, StarOutlined } from "@ant-design/icons";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { ProblemSelection } from "../problemSelection/ProblemSelection";
const storage = getStorage();
const db = getFirestore();
const { Text, Title } = Typography;

export const FinalInspection = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [valueAON, setValueAON] = useState(null);
  const [upLoadDisabled, setUpLoadDisabled] = useState(false);
  const [uploading, setUploading] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
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
  const onChangeAON = (e) => setValueAON(e.target.value);

  const fileProps = {
    maxCount: 5,
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

  const addHotOven = async (values) => {
    setButtonDisabled(true);
    setLoading(true);
    setUpLoadDisabled(true);
    setUploading(true);
    let imageArr = values.image?.fileList;
    imageArr?.map(async (img) => {
      let i = imageArr.indexOf(img);
      const name = `image-${i}`;
      const storageRef = ref(storage, `${props.serial}/image-${i}`);
      await uploadBytesResumable(storageRef, img.originFileObj);
      const urlRef = await getDownloadURL(storageRef);
      const ovenRef = doc(db, "Images", `${props.serial}`);
      await setDoc(ovenRef, { [i]: `${urlRef}` }, { merge: true });
    });

    await setDoc(doc(db, "FinalInspection", `${props.serial}`), {
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
      .then(() => {
        if (OVEN_APROVE_OR_NOT) {
          const ovenRef = doc(db, "oven", `${props.serial}`);
          setDoc(ovenRef, { status: "Aprooved" }, { merge: true });
          setDoc(
            doc(db, "Excel", `${props.serial}`),
            { status: "Aprooved" },
            { merge: true }
          );
        } else {
          const ovenRef = doc(db, "oven", `${props.serial}`);
          setDoc(ovenRef, { status: "Rejected" }, { merge: true });
          setDoc(
            doc(db, "Excel", `${props.serial}`),
            { status: "Rejected" },
            { merge: true }
          );
        }
        setLoading(false);
        setButtonDisabled(false);
        setUpLoadDisabled(false);
        showModal();
      })
      .catch((error) => {
        setLoading(false);
        setButtonDisabled(false);
        setUpLoadDisabled(false);
        message.success("Error sending the Data");
      });
  };
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
      onFinish={addHotOven}
      onFinishFailed={onFinishFailed}
      initialValues={{
        HOT_OVEN_B_DOOR: 0,
        HOT_OVEN_B_SIDES: 0,
        HOT_OVEN_TOP_R: 0,
        HOT_OVEN_TOP_L: 0,
        HOT_OVEN_BOT_R: 0,
        HOT_OVEN_BOT_L: 0,
        HOT_OVEN_C: 213084,
      }}
    >
      <Row justify="center">
        <Col xs={20} align="center">
          <strong>4) FINAL INSPECTION</strong>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22}>
          <Text>
            The equipment needed to complete the Oven inspection is a model 1501
            Survey Meter, three 500ml beakers with 275 ml +/- 15ml of cold
            water, spring loaded tongs
          </Text>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={22}>
          <Text>
            A) Door Closed Microwave Leakege Test: Whith the oven warmed to
            operating temperature, use the "UNIT" (9428) then the "up arrow" to
            access the second screen where the "MW LEAKAGE" resides on the menu
            to give time to run the mMagnetron independently for 45 seconds to
            perform the leakage test. the test can be an indicator of an oven
            which has problems containing the leakage. the 275ml beakers of
            water are for simulating a low level load for the Microwave system.
            The chart below is to indicate the twi ir three regions of greatest
            leakage. <strong>Indicate</strong> the position with an "X" and
            record the peak in Mw/cm<sup>2</sup> as read from the meter while
            performing the test.
          </Text>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={22}>
          <Text>
            Once the oven is set to run the test, set up the survey meter and
            place into the lowest operating range of 2mW/cm<sup>2</sup>, place
            the beaker of water in the oven and close the door. Next, activate
            the mivrowave and slowly move the wand of the survey meter, making
            sure toy are holding it perpendicular to the pag as you traverse the
            perimeter of the door at a slow pace of 1.25 inches/second.
          </Text>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={22}>
          <Text>
            <strong>
              Maximum allowable leakage is 0.8mW/cm<sup>2</sup>
            </strong>{" "}
            surrounding the perimeter of the door and{" "}
            <strong>
              0.2mW/cm<sup>2</sup>
            </strong>{" "}
            around the EC and left and rigth side through hole.
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
          sm
          style={{
            height: "8em",
            width: "100%",
            border: "dashed 3px #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            margin: "0",
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
      <Row justify="center">
        <Col xs={{ span: 23 }} sm={{ span: 18, offset: 0 }}>
          <Text type="danger">
            Recheck Waveguide Covers ! Reset Cook Count and Accumulation
            Settings !
          </Text>
        </Col>
        <Col xs={{ span: 23 }} sm={{ span: 4, offset: 0 }}>
          <Form.Item
            name={HOT_OVEN_RECHECK}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={22}>
          <Row>
            <Col xs={24}>
              <Form.Item
                label="C) Meter:"
                name={HOT_OVEN_C}
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
                label="D) Counter and faults:"
                name={HOT_OVEN_D}
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
                label="E) Coock:"
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
                icon={uploading ? uploading : <UploadOutlined />}
              >
                Upload
              </Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={6}>
          <Text>APROVED</Text>
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
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      {valueAON == false ? (
        <ProblemSelection problems={problems} setProblems={setProblems} />
      ) : (
        ""
      )}
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
