import React from "react";
import {
  Form,
  Space,
  Input,
  Row,
  Col,
  Typography,
  Radio,
  Divider,
  Button,
  Switch,
} from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
const { Title } = Typography;
const { Text } = Typography;
const { TextArea } = Input;

export const Oven1 = (props) => {
  const [form] = Form.useForm();
  return (
    <Form labelCol={{ span: 7 }} style={{ padding: "7em 0" }}>
      <Row justify="center">
        <Col xs={18}>
          <Row justify="center">
            <Title level={3}>
              ENC NEW AND REFURBISHED OVENS QUALITY ASSURANCEB CHECKLIST
            </Title>
          </Row>
        </Col>
      </Row>

      <Divider orientation="rigth">
        1) VISUAL INSPECTION: DO NOT APPLY POWER TO OVEN!!!
      </Divider>
      <Row justify="space-between" gutter={3}>
        <Col xs={18}>
          <Text>
            A) Check Consumables and Accessories to comply with proper Packaging
            Kit. Remove Rack, Left, Right and Top panels. Confirm proper
            Schematic is on RS Panel.
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneA" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={18}>
          <Text>
            B) Remove the Bubble wrap and insert the Oven Rack insuring flush
            contact with all surfaces. Check IR Element lies flat and
            Clips/Standoffs are tight and in correct position. Check Waveguide
            Covers (ar the ends only) by squeezing with hands for looseness.
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneB" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={18}>
          <Text>
            C) Check wiring CC & IR Heaters, Mag1 & 2, Dual SSR, Mag, EC Fans,
            Convection Blower, Hi-Limit and Control circuits.
          </Text>
        </Col>
        <Col xs={4} justify="end">
          <Form.Item>
            <Radio.Group name="oneC" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            D) Check for loose hardware and debris on floor of the oven cabinet.
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneD" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            E) Check for Door flush to the Oven Flange (no pinching on bottom),
            door clears Louvered Panel?
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneE" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            F) Are the CC Heater Terminal Posts insulated with Silicone Caps and
            Mica Disks?
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneF" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            G) Split open insulation over Hi-Limit Capillary, is it mounted in
            the correct position?
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneG" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text>
            H) Are interlock Switches adjusted with actuator rotation if door is
            closed slowly, are the switch arms .020" to .030" fron switch body?
            is the actuator at 87° +- 2°?
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneA" required>
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Divider orientation="rigth">
        2) OPERATIONAL INSPECTION: DO NOT APPLY POWER TO OVEN.
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
              <Form.Item>
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
                  <Form.Item label="terminals 1 & 2">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                  <Form.Item label="terminals 1 & 3">
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
                  <Form.Item label="terminals 1 & 2">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                  <Form.Item label="terminals 1 & 3">
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
                  <Form.Item label="terminal #4 and the frame">
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
                  <Form.Item>
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
                  <Form.Item label="terminal 1 & 2">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                  <Form.Item label="terminal 1 & 3">
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
                  <Form.Item label="terminal 1 & 2">
                    <Input
                      style={{ width: 150 }}
                      size="small"
                      type="number"
                      required
                    />
                  </Form.Item>
                  <Form.Item label="terminal 1 & 3">
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
                  <Form.Item label="terminal 4 & 5">
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
                  <Form.Item label="terminal 4 & 5">
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
          <Form.Item>
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
                  <Form.Item>
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
                  <Form.Item>
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
                  <Form.Item label="">
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
                      <Form.Item>
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
          <Form.Item>
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
          <Form.Item>
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
                  <Form.Item label="enter T inicial via Keypad">
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
                  <Form.Item>
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
                  <Form.Item label="enter T final via Keypad">
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
                  <Form.Item>
                    <Input
                      type="number"
                      size="small"
                      style={{ width: 150 }}
                      placeholder="W"
                      required
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={22}>
                  <Text type="danger" te>
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
                  <Form.Item>
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
                    ii) Once the oven reaches the Operational Temperature, the
                    menu is displayed, record the displayed menu
                  </Text>
                </Col>
                <Col xs={24}>
                  <Form.Item>
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
                  <Form.Item>
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
          <Form.Item>
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
            <Radio.Group name="">
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
              <Form.Item>
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
              <Form.Item>
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
      <Divider orientation="rigth">3) Hot Oven Operational Checkout:</Divider>
      <br />
      <Row>
        <Col xs={24}>
          <Text>
            The equipment needed to complete the Oven inspection is a moder 1501
            Survey Meter, three 500 ml beakers with 275 ml +/- 15ml of cold
            water, spring loaded tongs
          </Text>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={20} style={{ fontSize: "1.25em" }}>
          <Text>A) Door Closed Microwave Leakege Test:</Text>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={24}>
          <Text>
            B) Repeat process checking the IR Element exits, around the
            Magnetrons and waveguide ends, left and right sides. Maximum
            allowale leakage is 0.8mW/cm surrounding the perimeter of the door
            and 0.2mW/cm<sup>2</sup> around the EC and left and right side IR
            Element through hole.
          </Text>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Item label="DOOR">
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form.Item>
        </Col>
        <Col xs={12}>
          <Form.Item label="Rt & Lt Sides">
            <Input
              type="number"
              placeholder={"mW/cm2"}
              size="small"
              style={{ width: 150 }}
              required
            />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="spaceAround">
        <Col xs={3} offset={3}>
          <Form>
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form>
        </Col>
        <Col xs={3} offset={10}>
          <Form>
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form>
        </Col>
      </Row>
      <Row justify="center">
        <Col
          xs={8}
          style={{
            height: "8em",
            border: "dashed 3px #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Mark and record peak levels.</Text>
        </Col>
      </Row>
      <Row justify="spaceAround">
        <Col xs={3} offset={3}>
          <Form>
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form>
        </Col>
        <Col xs={3} offset={10}>
          <Form>
            <Input type="number" size="small" style={{ width: 150 }} required />
          </Form>
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={16}>
          <Text type="danger">
            Recheck Waveguide Covers ! Reset Cook Count and Accumulation
            Settings !
          </Text>
        </Col>
        <Col xs={4}>
          <Form.Item>
            <Radio.Group name="oneB">
              <Radio value={"true"}>ACC</Radio>
              <Radio value={"false"}>NO ACC</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Row>
            <Col xs={24}>
              <Form.Item label="C) Cook time Count">
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
              <Form.Item label="D) Survey meter #">
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
              <Form.Item label="E) Clear Cook time foults">
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
      <Row>
        <Col xs={12}>
          <Form.Item label="Denied/Aprove">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Form.Item>
        </Col>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};
