import React from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Typography,
  Radio,
  Divider,
  Button,
} from "antd";
const { Text } = Typography;
const { TextArea } = Input;
import {
  OPERATIONAL_A_I,
  OPERATIONAL_B_I_I,
  OPERATIONAL_B_I_II,
  OPERATIONAL_B_II_I,
  OPERATIONAL_B_II_II,
  OPERATIONAL_B_III,
  OPERATIONAL_B_IV,
  OPERATIONAL_B_V_I,
  OPERATIONAL_B_V_II,
  OPERATIONAL_B_VI_I,
  OPERATIONAL_B_VI_II,
  OPERATIONAL_B_VII,
  OPERATIONAL_B_VIII,
  OPERATIONAL_C,
  OPERATIONAL_D_I,
  OPERATIONAL_D_II,
  OPERATIONAL_D_III,
  OPERATIONAL_D_IV,
  OPERATIONAL_E,
  OPERATIONAL_F,
  OPERATIONAL_H_I,
  OPERATIONAL_H_IV,
  OPERATIONAL_H_V,
  OPERATIONAL_H_VI,
  OPERATIONAL_I_I,
  OPERATIONAL_I_II,
  OPERATIONAL_I_III,
  OPERATIONAL_NOTE,
  OPERATIONAL_J,
  OPERATIONAL_OPENING,
  OPERATIONAL_CLOSING,
} from "../constants/ConstOperational";

export const OperationalInspection = (props) => {
  const [form] = Form.useForm();
  return (
    <Form labelCol={{ span: 7 }} style={{ paddingBottom: "5em" }}>
      <Divider orientation="rigth">
        2) OPERATIONAL_ INSPECTION: DO NOT APPLY POWER TO OVEN.
      </Divider>
      <Row>
        <Col span={24}>
          <Text>
            A) Using the OHMS function on your meter Measure and Record the
            resistance between the:
          </Text>
        </Col>
        <Col span={24}>
          <Row className="sub-question">
            <Col xs={10}>
              <Text>i) Frame and the Ground Pin on the plug:</Text>
            </Col>
            <Col xs={4}>
              <Form.Item name={OPERATIONAL_A_I}>
                <Input style={{ width: 150 }} size="small" required />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Text>
            B) Remove the fastons from the Primary and the secondary of the of
            Voltage and the Filament XFMRs. Measure and Record the isolated
            resistance of the:
          </Text>
        </Col>
        <Col xs={24}>
          <Row className="sub-question">
            <Col xs={24}>
              <Row>
                <Col xs={24}>
                  <Text>i) HV XFMR #1 Primary</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item name={OPERATIONAL_B_I_I} label="terminals 1 & 2">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                  <Form.Item name={OPERATIONAL_B_I_II} label="terminals 1 & 3">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>ii) HV XFMR #1 Primary</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item name={OPERATIONAL_B_II_I} label="terminals 1 & 2">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                  <Form.Item name={OPERATIONAL_B_II_II} label="terminals 1 & 3">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col xs={24}>
                  <Text>iii) HV XFMR #1 Secondary</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_B_III}
                    label="terminal #4 and the frame"
                  >
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>iv) HV XFMR #2</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item name={OPERATIONAL_B_IV}>
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>v) Filament XFMR #1 Primary </Text>
                </Col>
                <Col xs={24}>
                  <Form.Item name={OPERATIONAL_B_V_I} label="terminal 1 & 2">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                  <Form.Item name={OPERATIONAL_B_V_II} label="terminal 1 & 3">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>vi) Filament XFMR #2 Primary </Text>
                </Col>
                <Col xs={24}>
                  <Form.Item name={OPERATIONAL_B_VI_I} label="terminal 1 & 2">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                  <Form.Item name={OPERATIONAL_B_VI_II} label="terminal 1 & 3">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>vii) Filament XFMR #1 Secondary</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item name={OPERATIONAL_B_VII} label="terminal 4 & 5">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>
                    viii) Filament XFMR #2 Secondary (terminals #4 and #5)
                  </Text>
                </Col>
                <Col xs={24}>
                  <Form.Item name={OPERATIONAL_B_VIII} label="terminal 4 & 5">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            C) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR
            12 and ATMR 15 respectively
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item name={OPERATIONAL_C}>
            <Radio.Group name="Q-C" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Text>D) Plug in the oven, as the Display Boots, check for:</Text>
        </Col>
        <Col xs={24}>
          <Row className="sub-question">
            <Col xs={24}>
              <Row>
                <Col xs={24}>
                  <Text>i) Displayed software version</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item name={OPERATIONAL_D_I}>
                    <Input
                      placeholder="Version"
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Text>ii) Display voltage</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item name={OPERATIONAL_D_II}>
                    <Input
                      placeholder="VAC"
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Text>iii) Serial Number</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item name={OPERATIONAL_D_III}>
                    <Input
                      placeholder="S/N"
                      style={{ width: 150 }}
                      size="small"
                      type="text"
                      required
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Row justify="space-between">
                    <Col xs={18}>
                      <Text>
                        iv) DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?
                      </Text>
                    </Col>
                    <Col xs={4}>
                      <Form.Item name={OPERATIONAL_D_IV}>
                        <Radio.Group name="oneB" required>
                          <Radio value={"true"}>ACC</Radio>
                          <Radio value={"false"}>NO ACC</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            E) Set your meter to Volts AC: Measure the AC voltage at EMI Filter
            Terminals.
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item name={OPERATIONAL_E}>
            <Input type="number" size="small" placeholder="VAC" required />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            F) Using an insulated screwdriver check the EC Cooling Fan by
            bridging between the terminals on the "Close on Rise" switch, witch
            controls the EC cooling fan.
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item name={OPERATIONAL_F}>
            <Radio.Group name="">
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={24}>
          <Text>
            H) Water Rise Test: Place Oven into the "UNIT" mode, and then scroll
            down to "Microwave" on the first screen.
          </Text>
        </Col>
        <Col xs={24}>
          <Row className="sub-question">
            <Col xs={24}>
              <Row>
                <Col xs={24}>
                  <Text>
                    i) Using Gradiated Cylinder measure 1 liter +/- 5ml of
                    water. While in graduated cylinder, measure and record the
                    Temp, T<sub>initial</sub>
                  </Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_H_I}
                    label="enter T inicial via Keypad"
                  >
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      placeholder="°C"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>
                    ii) inmidiately pur water into 1000 ml vessel, place into
                    Cook Chamber and close the door.
                  </Text>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={24}>
                  <Text>
                    iii) Press "ENTER". The microwave will run for 30 seconds.
                  </Text>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={16}>
                  <Text>
                    iv) While test is running, Verify the current is 9.2amps +/-
                    2 amps (208V)
                    <br />
                    (10.64amps +/- 1.6 amps for the unit tested with 240V)
                  </Text>
                </Col>
                <Col xs={3}>
                  <Form.Item name={OPERATIONAL_H_IV}>
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      placeholder="AMPS"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>
                    v) While the timer reaches Zero, immediately measure T
                    <sub>final</sub> while stirring to blend water as to have
                    one temperature throughout vessel. T<sub>FINAL</sub>=
                  </Text>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name={OPERATIONAL_H_V}
                    label="enter T final via Keypad"
                  >
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      placeholder="°C"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={16}>
                  <Text>
                    vi) The power output will show for 5 seconds. Record
                    microwave oven output power
                  </Text>
                </Col>
                <Col xs={4}>
                  <Form.Item name={OPERATIONAL_H_VI}>
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      placeholder="W"
                      disabled
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={22}>
                  <Text type="danger">
                    Output Power must be {">="} 1600 W. But it's more than 2000
                    W, repeat this test.
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Text>
            I) Push "BACK" until display reads: "OVEN OFF" and then push the
            "OVEN ON" smart key and let the oven warm to its preset temperature.
          </Text>
        </Col>
        <Col xs={24}>
          <Row className="sub-question">
            <Col xs={24}>
              <Row>
                <Col xs={24}>
                  <Text>i) Record time oven starts warm up:</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item name={OPERATIONAL_I_I}>
                    <Input
                      type="time"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>
                    ii) Once the oven reaches the OPERATIONAL Temperature, the
                    menu is displayed, record the displayed menu
                  </Text>
                </Col>
                <Col xs={24}>
                  <Form.Item name={OPERATIONAL_I_II}>
                    <Input
                      type="text"
                      size="small"
                      style={{ width: 150 }}
                      placeholder=""
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
                  <Text>iii) And then record the time</Text>
                </Col>
                <Col xs={24}>
                  <Form.Item name={OPERATIONAL_I_III}>
                    <Input
                      type="time"
                      size="small"
                      style={{ width: 150 }}
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24}>
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

      <Row>
        <Col xs={3}>
          <Text>NOTES</Text>
        </Col>
        <Col xs={20}>
          <Form.Item name={OPERATIONAL_NOTE}>
            <TextArea autoSize={{ minRows: 3, maxRows: 4 }} />
          </Form.Item>
        </Col>
      </Row>

      <Row justify="space-between">
        <Col xs={16}>
          <Text>J) Is there actuator rotation if door is closed slowly?</Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name={OPERATIONAL_J}>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Row className="sub-question">
            <Col xs={24}>
              <Text>
                Slowly opening the Door, the order of the indicators are
              </Text>
            </Col>
            <Col xs={24}>
              <Form.Item name={OPERATIONAL_OPENING}>
                <Input
                  type="text"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Text>
                Slowly closing the Door, the order of the indicators are
              </Text>
            </Col>
            <Col xs={24}>
              <Form.Item name={OPERATIONAL_CLOSING}>
                <Input
                  type="text"
                  size="small"
                  style={{ width: 150 }}
                  required
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="end">
        <Col xs={24}>
          <Form.Item>
            <Button size="large" type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
