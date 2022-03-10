import React from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Typography,
  Radio,
  Button,
  Modal,
  Upload,
} from "antd";
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
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
const db = getFirestore();
const storage = getStorage();
const { Text, Title } = Typography;

export const HotOven = (props) => {
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [valueRC, setValueRC] = useState(null);
  const [valueAON, setValueAON] = useState(null);
  const [upLoadDisabled, setUpLoadDisabled] = useState(false);
  const [uploading, setUploading] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [count, setCount] = useState(0);
  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);
  const showModal2 = () => setModalVisible(true);
  const onChangeRC = (e) => setValueRC(e.target.value);
  const onChangeAON = (e) => setValueAON(e.target.value);
  const handleOk2 = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
    navigate(`/dashboard`);
  };
  const handleCancel2 = () => {
    setModalVisible(false);
    window.scrollTo(0, 0);
  };

  async function onClickF(
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
    OVEN_APROVE_OR_NOT
  ) {
    setButtonDisabled(true);
    setLoading(true);
    const docRef = await setDoc(
      doc(db, "HotOvenInspection", `${props.serial}`),
      {
        HOT_OVEN_B_DOOR: HOT_OVEN_B_DOOR,
        HOT_OVEN_B_SIDES: HOT_OVEN_B_SIDES,
        HOT_OVEN_TOP_R: HOT_OVEN_TOP_R,
        HOT_OVEN_TOP_L: HOT_OVEN_TOP_L,
        HOT_OVEN_BOT_R: HOT_OVEN_BOT_R,
        HOT_OVEN_BOT_L: HOT_OVEN_BOT_L,
        HOT_OVEN_RECHECK: HOT_OVEN_RECHECK,
        HOT_OVEN_C: HOT_OVEN_C,
        HOT_OVEN_D: HOT_OVEN_D,
        HOT_OVEN_E: HOT_OVEN_E,
        OVEN_APROVE_OR_NOT: OVEN_APROVE_OR_NOT,
      }
    );
    setLoading(false);
  }

  const fileProps = {
    action: "none",
    onChange({ file, fileList }) {
      file.status = uploading;
    },
    showUploadList: {
      showDownloadIcon: false,
      showRemoveIcon: false,
    },
    customRequest: async (e) => {
      const file = e.file;
      if (file) {
        setCount(count + 1);
        setUpLoadDisabled(true);
        setImageLoading(true);
        const storageRef = ref(storage, `${props.serial}/image-${count}`);
        const name = `image-${count}`;
        const uploadTask = await uploadBytesResumable(storageRef, file).catch(
          (error) => {}
        );
        const urlRef = await getDownloadURL(storageRef).catch((error) => {});
        const ovenRef = doc(db, "Images", `${props.serial}`);
        await setDoc(ovenRef, { [count]: `${urlRef}` }, { merge: true });
        console.log(urlRef);

        setImageLoading(false);
        setUploading("done");
        setUpLoadDisabled(false);
        if (count >= 4) {
          setUpLoadDisabled(true);
        } else {
          setUpLoadDisabled(false);
        }
      }
    },
  };

  async function addHotOven(values, arrayOvens) {
    const HOT_OVEN_B_DOOR = values.HOT_OVEN_B_DOOR;
    const HOT_OVEN_B_SIDES = values.HOT_OVEN_B_SIDES;
    const HOT_OVEN_TOP_R = values.HOT_OVEN_TOP_R;
    const HOT_OVEN_TOP_L = values.HOT_OVEN_TOP_L;
    const HOT_OVEN_BOT_R = values.HOT_OVEN_BOT_R;
    const HOT_OVEN_BOT_L = values.HOT_OVEN_BOT_L;
    const HOT_OVEN_RECHECK = valueRC;
    const HOT_OVEN_C = values.HOT_OVEN_C;
    const HOT_OVEN_D = values.HOT_OVEN_D;
    const HOT_OVEN_E = values.HOT_OVEN_E;
    const OVEN_APROVE_OR_NOT = valueAON;

    if (HOT_OVEN_RECHECK == null || OVEN_APROVE_OR_NOT == null) {
      showModal();
    } else {
      if (OVEN_APROVE_OR_NOT) {
        const ovenRef = doc(db, "oven", `${props.serial}`);
        setDoc(ovenRef, { status: "Aprooved" }, { merge: true });
      } else {
        const ovenRef = doc(db, "oven", `${props.serial}`);
        setDoc(ovenRef, { status: "Rejected" }, { merge: true });
      }

      onClickF(
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
        OVEN_APROVE_OR_NOT
      );
      showModal2();
    }
  }
  return (
    <Form
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
      onFinish={addHotOven}
    >
      <Row justify="center">
        <Col xs={20} align="center">
          <strong>3) HOT OVEN OPERATIONAL CHECKOUT:</strong>
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 22, offset: 1 }} sm={24}>
          <Text>
            The equipment needed to complete the Oven inspection is a moder 1501
            Survey Meter, three 500 ml beakers with 275 ml +/- 15ml of cold
            water, spring loaded tongs
          </Text>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={{ span: 22, offset: 1 }} sm={24}>
          <Text>
            A) Door Closed Microwave Leakege Test: With the oven warmed to
            operating temperature, use the "UNIT" (8648) then the "up arrow" to
            access the second screen where the "MWLEAKAGE" resides on the menu
            to give time to run the Magnetron independently for 45 seconds to
            perfon the leakage test. The test can be an indicator of an oven
            which has problems with containing the leakage. the 275 ml beakers
            of water are for simulating a low leven load for the Microwave
            system. The chart below is to indicate the two or three regions of
            greatest leakage. Indicate the position with an "X" and record the
            peak leven in mW/cm<sup>2</sup> as read from the meter while
            performing the test.
          </Text>
          <br />
          <br />
          <Text>
            Once the oven is set to run the test, set up the survey meter and
            place into the lowest operating range if 2 mW/cm<sup>2</sup>, place
            the beaker of water in the oven and close the door. Next, activate
            the microwave and slowly move the wand of the survey meter, making
            sure you are holding it perpendicular to the gap as you traverse the
            perimeter of the Door at a slow pace of 1.25 inches/second.
          </Text>
          <br />
          <br />
          <Text>
            Using the tongs, replace de beaker of hot water and re initiate the
            Magnetron for another 45 seconds and search around the entire oven,
            being Very careful not to contact the High Voltage components to
            wiring. Refresh the beaker as needed to complete the survey.
          </Text>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={{ span: 22, offset: 1 }} sm={24}>
          <Text>
            B) Repeat process checking the IR Element exits, around the
            Magnetrons and waveguide ends, left and right sides.{" "}
            <strong>
              Maximum allowale leakage is 0.8mW/cm<sup>2</sup>
            </strong>
            surrounding the perimeter of the door and 0.2mW/cm<sup>2</sup>{" "}
            around the EC and left and right side IR Element through hole.
          </Text>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col xs={8} sm={6}>
          <Form.Item name={HOT_OVEN_B_DOOR} label="DOOR">
            <Input
              type="number"
              size="small"
              style={{ width: "100%" }}
              required
            />
          </Form.Item>
        </Col>
        <Col xs={8} sm={6}>
          <Form.Item name={HOT_OVEN_B_SIDES} label="Rt & Lt Sides">
            <Input
              type="number"
              placeholder={"mW/cm2"}
              size="small"
              style={{ width: "100%" }}
              required
            />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="spaceAround">
        <Col xs={{ span: 7, offset: 1 }} sm={{ span: 5, offset: 3 }}>
          <Form.Item name={HOT_OVEN_TOP_L} style={{ marginBottom: "0" }}>
            <Input
              type="number"
              size="small"
              style={{ width: "100%" }}
              required
            />
          </Form.Item>
        </Col>
        <Col xs={{ span: 7, offset: 8 }} sm={{ span: 5, offset: 8 }}>
          <Form.Item name={HOT_OVEN_TOP_R} style={{ marginBottom: "0" }}>
            <Input
              type="number"
              size="small"
              style={{ width: "100%" }}
              required
            />
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
          <Form.Item name={HOT_OVEN_BOT_L}>
            <Input
              type="number"
              size="small"
              style={{ width: "100%" }}
              required
            />
          </Form.Item>
        </Col>
        <Col xs={{ span: 7, offset: 8 }} sm={{ span: 5, offset: 8 }}>
          <Form.Item name={HOT_OVEN_BOT_R}>
            <Input
              type="number"
              size="small"
              style={{ width: "100%" }}
              required
            />
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
          <Radio.Group name={HOT_OVEN_RECHECK} onChange={onChangeRC}>
            <Radio value={true}>ACC</Radio>
            <Radio value={false}>NO ACC</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22} sm={24}>
          <Row>
            <Col xs={24}>
              <Form.Item label="COOCK =" name={HOT_OVEN_C}>
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Form.Item label="METER= " name={HOT_OVEN_D}>
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Form.Item label="FAULTS AND COUNTERS" name={HOT_OVEN_E}>
                <Input
                  type="number"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={13}>
          <Upload {...fileProps}>
            <Button
              loading={imageLoading}
              disabled={upLoadDisabled}
              icon={imageLoading ? "" : <UploadOutlined />}
            >
              Upload
            </Button>
          </Upload>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={20}>
          <Form.Item label="APROVED">
            <Radio.Group name={OVEN_APROVE_OR_NOT} onChange={onChangeAON}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} sm={24}>
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
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              style={{ backgroundColor: "#E74C3C", borderRadius: "1em" }}
            >
              <Title level={3}>Error..!</Title>
              <Text>All fields are required</Text>
            </Modal>
            <Modal
              visible={modalVisible}
              onOk={handleOk2}
              onCancel={handleCancel2}
              style={{ backgroundColor: "#2ECC71", borderRadius: "1em" }}
            >
              <Title level={3}>OK..!</Title>
              <Text>The data has been successfully stored</Text>
              <br />
              <Text>Go to dashboard</Text>
            </Modal>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
