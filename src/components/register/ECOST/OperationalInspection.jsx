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
  message,
} from "antd";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
const db = getFirestore();
const { Text, Title } = Typography;
const { TextArea } = Input;
import {
  OPERATIONAL_B_I_I,
  OPERATIONAL_C,
  OPERATIONAL_D_I,
  OPERATIONAL_D_II,
  OPERATIONAL_D_III,
  OPERATIONAL_D_IV,
  OPERATIONAL_E,
  OPERATIONAL_F,
  OPERATIONAL_G,
  OPERATIONAL_H_I,
  OPERATIONAL_H_IV,
  OPERATIONAL_H_V,
  OPERATIONAL_H_VI,
  OPERATIONAL_I_I,
  OPERATIONAL_I_II,
  OPERATIONAL_I_III,
  OPERATIONAL_NOTE,
  OPERATIONAL_OPENING,
  OPERATIONAL_CLOSING,
  OPERATIONAL_J,
} from "../../constants/ConstOperational";

export const OperationalInspection = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(null);
  const [loading, setLoading] = useState(false);
  const [valueTf, setValueTf] = useState(null);
  const [valueTi, setValueTi] = useState(null);
  const [valueTo, setValueTo] = useState(null);
  const [textC, setTextC] = useState("default");
  const [textD, setTextD] = useState("default");
  const [textF, setTextF] = useState("default");
  const [textG, setTextG] = useState("default");
  const [textJ, setTextJ] = useState("default");

  const onChangeC = () => setTextC("default");
  const onChangeD = () => setTextD("default");
  const onChangeF = () => setTextF("default");
  const onChangeG = () => setTextG("default");
  const onChangeJ = () => setTextJ("default");

  const onChangeTf = (e) => setValueTf(e.target.value);
  const onChangeTi = (e) => setValueTi(e.target.value);

  function onFinishFailed(errorInfo) {
    if (errorInfo.values.OPERATIONAL_C == null) setTextC("danger");
    if (errorInfo.values.OPERATIONAL_D_IV == null) setTextD("danger");
    if (errorInfo.values.OPERATIONAL_F == null) setTextF("danger");
    if (errorInfo.values.OPERATIONAL_G == null) setTextG("danger");
    if (errorInfo.values.OPERATIONAL_J == null) setTextJ("danger");
    message.error("Complete all the fields");
  }

  const addOperational = async (values) => {
    setButtonDisabled(true);
    setLoading(true);
    let result = (valueTf - valueTi) * (4187 / 30);
    result = Math.round(result);
    values.OPERATIONAL_H_VI = result;
    values.OPERATIONAL_NOTE === undefined ? (values.OPERATIONAL_NOTE = "") : "";
    await setDoc(doc(db, "OperationalInspection", `${props.serial}`), {
      OPERATIONAL_B_I_I: values.OPERATIONAL_B_I_I,
      OPERATIONAL_C: values.OPERATIONAL_C,
      OPERATIONAL_D_I: values.OPERATIONAL_D_I,
      OPERATIONAL_D_II: values.OPERATIONAL_D_II,
      OPERATIONAL_D_III: values.OPERATIONAL_D_III,
      OPERATIONAL_D_IV: values.OPERATIONAL_D_IV,
      OPERATIONAL_E: values.OPERATIONAL_E,
      OPERATIONAL_F: values.OPERATIONAL_F,
      OPERATIONAL_G: values.OPERATIONAL_G,
      OPERATIONAL_H_I: values.OPERATIONAL_H_I,
      OPERATIONAL_H_IV: values.OPERATIONAL_H_IV,
      OPERATIONAL_H_V: values.OPERATIONAL_H_V,
      OPERATIONAL_H_VI: values.OPERATIONAL_H_VI,
      OPERATIONAL_I_I: values.OPERATIONAL_I_I,
      OPERATIONAL_I_II: values.OPERATIONAL_I_II,
      OPERATIONAL_I_III: values.OPERATIONAL_I_III,
      OPERATIONAL_NOTE: values.OPERATIONAL_NOTE,
      OPERATIONAL_OPENING: values.OPERATIONAL_OPENING,
      OPERATIONAL_CLOSING: values.OPERATIONAL_CLOSING,
      OPERATIONAL_J: values.OPERATIONAL_J,
    })
      .then(async () => {
        await setDoc(
          doc(db, "Excel", `${props.serial}`),
          {
            softwareVersion: values.OPERATIONAL_D_I,
            voltage: values.OPERATIONAL_D_II,
            amps: values.OPERATIONAL_H_IV,
            powerOutput: values.OPERATIONAL_H_VI,
            notes: values.OPERATIONAL_NOTE,
            actionTaken: "--",
          },
          { merge: true }
        )
          .then(() => {
            setButtonDisabled(false);
            setLoading(false);
            message.success("Operational Inspection Completed");
            window.scrollTo(0, 0);
            props.setState("3");
          })
          .catch((error) => {
            setButtonDisabled(false);
            setLoading(false);
            message.error("error sending the data");
          });
      })
      .catch((error) => {
        setButtonDisabled(false);
        setLoading(false);
        message.error("error sending the data");
      });
  };
  const [form] = Form.useForm();
  form.setFieldsValue({});
  return (
    <Form
      labelCol={{ span: 7 }}
      style={{ paddingBottom: "5em" }}
      onFinish={addOperational}
      onFinishFailed={onFinishFailed}
      form={form}
      initialValues={{ OPERATIONAL_D_III: props.serial }}
      name="OperationalInspection"
      autoComplete="off"
    >
      <Row justify="center">
        <Col xs={20} align="center">
          <strong>
            2) OPERATIONAL INSPECTION: DO NOT APPLY POWER TO OVEN.
          </strong>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22} sm={22}>
          <Text>
            A) Using the OHMS function on your meter Measure and Record the
            resistance between the:
          </Text>
        </Col>
        <Col span={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="center">
                <Col xs={23}>
                  <Text>i) Frame and the Ground Pin on the plug:</Text>
                </Col>
                <Col xs={23}>
                  <Form.Item
                    name={OPERATIONAL_B_I_I}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input style={{ width: 150 }} size="small" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 22 }} sm={{ span: 18 }}>
          <Text type={textC}>
            C) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR
            12 and ATMR 15 respectively
          </Text>
        </Col>
        <Col xs={{ span: 22 }} sm={{ span: 4 }}>
          <Form.Item
            name={OPERATIONAL_C}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeC}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={22} sm={22}>
          <Text>D) Plug in the oven, as the Display Boots, check for:</Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="center">
                <Col xs={22}>
                  <Text>i) Displayed software version</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_D_I}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Version"
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>ii) Display voltage</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_D_II}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input
                      placeholder="VAC"
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>iii) Serial Number</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_D_III}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input
                      placeholder="S/N"
                      style={{ width: 150 }}
                      size="small"
                      type="text"
                    />
                  </Form.Item>
                  <Col xs={22}>
                    <Text type={textD}>
                      iv) DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?
                    </Text>
                  </Col>
                  <Col xs={{ span: 22 }}>
                    <Form.Item
                      name={OPERATIONAL_D_IV}
                      rules={[
                        {
                          required: true,
                          message: "Finish the inspection before submitting it",
                        },
                      ]}
                    >
                      <Radio.Group onChange={onChangeD}>
                        <Radio value={true}>ACC</Radio>
                        <Radio value={false}>NO ACC</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 22 }} sm={18}>
          <Text>
            E) Set your meter to Volts AC: Measure the AC voltage at power
            supply.
          </Text>
        </Col>
        <Col xs={{ span: 22 }} sm={4}>
          <Form.Item
            name={OPERATIONAL_E}
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
              placeholder="VAC"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 22 }} sm={18}>
          <Text type={textF}>
            F) Enter the "Test Mode", make sure "Faults" are cleared and then
            run "Self Test" (individual). Pass all test?
          </Text>
        </Col>
        <Col xs={{ span: 22 }} sm={4}>
          <Form.Item
            name={OPERATIONAL_F}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeF}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 22 }} sm={18}>
          <Text type={textG}>
            G) Check the EC Cooling Fan in the TEST mode with Diagnostics on and
            confirm:
            <br />
            During idle: 60% or 1800 RPM
            <br />
            During Water rise: 90% or 2700 RPM
          </Text>
        </Col>
        <Col xs={{ span: 22 }} sm={4}>
          <Form.Item
            name={OPERATIONAL_G}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group name={OPERATIONAL_G} onChange={onChangeG}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 22 }}>
          <Text>
            H) Water Rise Test: Place Oven into the "TEST" mode and scroll
          </Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="center">
                <Col xs={22}>
                  <Text>
                    i) Using Gradiated Cylinder measure 1 liter +/- 5ml of
                    water. While in graduated cylinder, measure and record the
                    Temp, T<sub>initial</sub>
                  </Text>
                </Col>
                <Col xs={22}>
                  <Text>enter T inicial via Keypad</Text>
                  <Form.Item
                    name={OPERATIONAL_H_I}
                    onChange={onChangeTi}
                    value={valueTi}
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
                      placeholder="°C"
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>
                    ii) inmidiately pur water into 1000 ml vessel, place into
                    Cook Chamber and close the door.
                  </Text>
                </Col>
                <Col xs={22}>
                  <Text>
                    iii) Press "ENTER". The microwave will run for 30 seconds.
                  </Text>
                </Col>
                <Col xs={22}>
                  <Text>
                    iv) While test is running, Verify the current is 19amps +/-
                    2 amps (208V)
                    <br />
                    (18amps +/- 2 amps for the unit tested with 230V)
                  </Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_H_IV}
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
                      placeholder="AMPS"
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>
                    v) When the timer reaches Zero, immediately measure T
                    <sub>final</sub> while stirring to blend water as to have
                    one temperature throughout vessel. T<sub>FINAL</sub>=
                  </Text>
                </Col>
                <Col xs={22}>
                  <Text>enter T final via Keypad</Text>
                  <Form.Item
                    name={OPERATIONAL_H_V}
                    value={valueTf}
                    onChange={onChangeTf}
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
                      placeholder="°C"
                    />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>
                    vi) The power output will show for 5 seconds. Record
                    microwave oven output power
                  </Text>
                </Col>
                <Col xs={10}>
                  <Form.Item name={OPERATIONAL_H_VI}>
                    <Input
                      type="number"
                      size="small"
                      placeholder={valueTo ? valueTo : "W"}
                      style={{ width: 100 }}
                      disabled
                    />
                  </Form.Item>
                </Col>
                <Col xs={5}>
                  <Button
                    size="small"
                    onClick={() => {
                      let result = (valueTf - valueTi) * (4187 / 30);
                      result = Math.round(result);
                      setValueTo(result);
                    }}
                  >
                    calc
                  </Button>
                </Col>
                <Col xs={22}>
                  <Text type="danger">
                    Output Power must be {">="} 1700-1900 W.
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={{ span: 22 }}>
          <Text>
            I) Push "BACK" until display reads: "OVEN OFF" and then push the
            "OVEN ON" smart key and let the oven warm to its preset temperature.
          </Text>
        </Col>
        <Col xs={23}>
          <Row className="sub-question">
            <Col xs={23}>
              <Row justify="center">
                <Col xs={22}>
                  <Text>i) Record time oven starts warm up:</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_I_I}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input type="time" size="small" style={{ width: 150 }} />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>
                    ii) Once the oven reaches the OPERATIONAL Temperature, the
                    menu is displayed, record the displayed menu
                  </Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_I_II}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input type="text" size="small" style={{ width: 150 }} />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>iii) And then record the time</Text>
                </Col>
                <Col xs={22}>
                  <Form.Item
                    name={OPERATIONAL_I_III}
                    rules={[
                      {
                        required: true,
                        message: "Finish the inspection before submitting it",
                      },
                    ]}
                  >
                    <Input type="time" size="small" style={{ width: 150 }} />
                  </Form.Item>
                </Col>
                <Col xs={22}>
                  <Text>
                    This time should be 15 minutes or less! Let Oven "heat soak"
                    for 1 hour
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={{ span: 22 }}>
          <Text>NOTES</Text>
          <Form.Item name={OPERATIONAL_NOTE}>
            <TextArea autoSize={{ minRows: 3, maxRows: 4 }} maxLength={320} />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col xs={23}>
          <Row justify="center">
            <Col xs={22}>
              <Text>
                Slowly opening the Door, the order of the indicators are
              </Text>
            </Col>
            <Col xs={22}>
              <Form.Item
                name={OPERATIONAL_OPENING}
                rules={[
                  {
                    required: true,
                    message: "Finish the inspection before submitting it",
                  },
                ]}
              >
                <Input type="text" size="small" style={{ width: 150 }} />
              </Form.Item>
            </Col>
            <Col xs={22}>
              <Text>
                Slowly closing the Door, the order of the indicators are
              </Text>
            </Col>
            <Col xs={22}>
              <Form.Item
                name={OPERATIONAL_CLOSING}
                rules={[
                  {
                    required: true,
                    message: "Finish the inspection before submitting it",
                  },
                ]}
              >
                <Input type="text" size="small" style={{ width: 150 }} />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={{ span: 22 }} sm={18}>
          <Text type={textJ}>J) Are Switch arms still engaging?</Text>
        </Col>
        <Col xs={{ span: 22 }} sm={4}>
          <Form.Item
            name={OPERATIONAL_J}
            rules={[
              {
                required: true,
                message: "Finish the inspection before submitting it",
              },
            ]}
          >
            <Radio.Group onChange={onChangeJ}>
              <Radio value={true}>ACC</Radio>
              <Radio value={false}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
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
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
