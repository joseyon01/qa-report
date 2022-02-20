import React from "react";
import {
  Form,
  Image,
  Space,
  Input,
  DatePicker,
  Row,
  Col,
  Typography,
  Radio,
  Divider,
} from "antd";
const { Title } = Typography;
const { Text } = Typography;
const { TextArea } = Input;

export const Oven1 = (props) => {
  const [form] = Form.useForm();
  return (
    <Form labelCol={{ span: 4 }} style={{ padding: "7em" }}>
      <Row justify="center">
        <Col xs={18}>
          <Row justify="center">
            <Title level={3}>
              ENC NEW AND REFURBISHED OVENS QUALITY ASSURANCEB CHECKLIST
            </Title>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20}>
          <Row justify="center">
            <Col xs={6}>
              <Row>
                <Space size={"middle"} style={{ fontSize: "1em" }}>
                  <span>DATE:</span>{" "}
                  <span style={{ backgroundColor: "#ccc", padding: ".5em" }}>
                    {props.date}
                  </span>
                </Space>
              </Row>
            </Col>
            <Col xs={6}>
              <Row>
                <Space size={"middle"} style={{ fontSize: "1em" }}>
                  <span>name:</span>{" "}
                  <span style={{ backgroundColor: "#ccc", padding: ".5em" }}>
                    {props.name}
                  </span>
                </Space>
              </Row>
            </Col>
            <Col xs={6}>
              <Row>
                <Space size={"middle"} style={{ fontSize: "1em" }}>
                  <span>OVEN S/N:</span>{" "}
                  <span style={{ backgroundColor: "#ccc", padding: ".5em" }}>
                    {props.serial}
                  </span>
                </Space>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider orientation="rigth">
        1) VISUAL INSPECTION: DO NOT APPLY POWER TO OVEN!!!
      </Divider>
      <br />
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            A) Check Consumables and Accessories to comply with proper Packaging
            Kit.
            <br />
            Remove Rack, Left, Right and Top panels. Confirm proper Schematic is
            on RS Panel.
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneA" defaultValue={"false"}>
            <Radio value={"true"}>true</Radio>
            <Radio value={"false"}>false</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            B) Remove the Bubble wrap and insert the Oven Rack insuring flush
            contact with all surfaces.
            <br />
            Check IR Element lies flat and Clips/Standoffs are tight and in
            correct position.
            <br />
            Check Waveguide Covers (ar the ends only) by squeezing with hands
            for looseness.
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneB" defaultValue={"false"}>
            <Radio value={"true"}>true</Radio>
            <Radio value={"false"}>false</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            C) Check wiring CC & IR Heaters, Mag1 & 2, Dual SSR, Mag, EC Fans,
            Convection Blower, Hi-Limit and Control circuits.
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneC" defaultValue={"false"}>
            <Radio value={"true"}>true</Radio>
            <Radio value={"false"}>false</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            D) Check for loose hardware and debris on floor of the oven cabinet.
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneD" defaultValue={"false"}>
            <Radio value={"true"}>true</Radio>
            <Radio value={"false"}>false</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            E) Check for Door flush to the Oven Flange (no pinching on bottom),
            door clears Louvered Panel?
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneE" defaultValue={"false"}>
            <Radio value={"true"}>true</Radio>
            <Radio value={"false"}>false</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            F) Are the CC Heater Terminal Posts insulated with Silicone Caps and
            Mica Disks?
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneF" defaultValue={"false"}>
            <Radio value={"true"}>true</Radio>
            <Radio value={"false"}>false</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            G) Split open insulation over Hi-Limit Capillary, is it mounted in
            the correct position?
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneG" defaultValue={"false"}>
            <Radio value={"true"}>true</Radio>
            <Radio value={"false"}>false</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            H) Are interlock Switches adjusted with actuator rotation if door is
            closed slowly, are the switch arms .020" to .030" fron switch body?
            is the actuator at 87° +- 2°?
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneA" defaultValue={"false"}>
            <Radio value={"true"}>true</Radio>
            <Radio value={"false"}>false</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Divider orientation="rigth">
        2) OPERATIONAL INSPECTION: DO NOT APPLY POWER TO OVEN.
      </Divider>
      <br />
      <Row justify="center">
        <Col xs={20} style={{ fontSize: "1.25em" }}>
          <Text>
            A) Using the OHMS function on your meter Measure and Record the
            resistance between the:
          </Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>i) Frame and the Ground Pin on the plug:</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={20} style={{ fontSize: "1.25em" }}>
          <Text>
            B) Remove the fastons from the Primary and the secondary of the of
            Voltage and the Filament XFMRs.
            <br />
            Measure and Record the isolated resistance of the:
          </Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={8} style={{ fontSize: "1.25em" }}>
          <Text>i) HV XFMR #1 Primary (terminals 1 & 2)</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
        <Col xs={4} style={{ fontSize: "1.25em" }}>
          <Text>(terminals 1 & 3)</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={8} style={{ fontSize: "1.25em" }}>
          <Text>ii) HV XFMR #1 Primary (terminals 1 & 2)</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
        <Col xs={4} style={{ fontSize: "1.25em" }}>
          <Text>(terminals 1 & 3)</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>iii) HV XFMR #1 Secondary (terminal #4 and the frame)</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>iv) HV XFMR #2</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={8} style={{ fontSize: "1.25em" }}>
          <Text>v) Filament XFMR #1 Primary (terminal 1 & 2)</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
        <Col xs={4} style={{ fontSize: "1.25em" }}>
          <Text>(terminal 1 & 3)</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={8} style={{ fontSize: "1.25em" }}>
          <Text>vi) Filament XFMR #2 Primary (terminal 1 & 2)</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
        <Col xs={4} style={{ fontSize: "1.25em" }}>
          <Text>(terminal 1 & 3)</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>vii) Filament XFMR #1 Secondary (terminals #4 and #5)</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>viii) Filament XFMR #2 Secondary (terminals #4 and #5)</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            C) Open Fuse #1, #2 and #3 and check rating, Class CC ATMR 12, ATMR
            12 and ATMR 15 respectively
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneB" defaultValue={"false"}>
            <Radio value={"true"}>true</Radio>
            <Radio value={"false"}>false</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            D) Plug in the oven, as the Display Boots, check for displayed
            version:
          </Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={8} style={{ fontSize: "1.25em" }}>
          <Text>Display Voltage:</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            required
            placeholder="VAC"
          />{" "}
        </Col>
        <Col
          xs={4}
          style={{
            fontSize: "1.25em",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Text>S/N</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="text"
            style={{ width: "100%", height: "1.5em" }}
            value={props.serial}
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?</Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneB" defaultValue={"false"}>
            <Radio value={"true"}>YES</Radio>
            <Radio value={"false"}>NO</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            E) Set your meter to Volts AC: Measure the AC voltage at EMI Filter
            Terminals.
          </Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            placeholder="VAC"
            required
          />
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            F) Using an insulated screwdriver check the EC Cooling Fan by
            bridging between the terminals on the "Close on Rise" switch, witch
            controls the EC cooling fan.
          </Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneB" defaultValue={"false"}>
            <Radio value={"true"}>Pass</Radio>
            <Radio value={"false"}>Fail</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={20} style={{ fontSize: "1.25em" }}>
          <Text>
            H) Water Rise Test: Place Oven into the "UNIT" mode, and then scroll
            down to "Microwave" on the first screen.
          </Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            i) Using Gradiated Cylinder measure 1 liter +- 5ml of water. While
            in graduated cylinder, measure and record the Temp, T<i>initial</i>
          </Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            placeholder="°C"
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>enter T final via Keypad</Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} style={{ fontSize: "1.25em" }}>
          <Text>
            ii) inmidiately pur water into 1000 ml vessel, place into Cook
            Chamber and close the door.
          </Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} style={{ fontSize: "1.25em" }}>
          <Text>
            iii) Press "ENTER". The microwave will run for 30 seconds.
          </Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            iv) While test is running, Verify the current is 9.2amps +/- 2 amps
            (208V)
          </Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            placeholder="AMPS"
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>(10.64amps +/- 1.6 amps for the unit tested with 240V)</Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            v) While the timer reaches Zero, immediately measure T<i>final</i>{" "}
            while stirring to blend water as to have one temperature throughout
            vessel. T<i>FINAL</i>=
          </Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            placeholder="°C"
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>enter T final via Keypad</Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            vi) The power output will show for 5 seconds. Record microwave oven
            output powe
          </Text>
        </Col>
        <Col xs={4}>
          <Input
            type="number"
            style={{ width: "100%", height: "1.5em" }}
            placeholder="W"
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text type="danger">
            Output Power must be {">="} 1600 W. But it's more than 2000 W,
            repeat this test.
          </Text>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={20} style={{ fontSize: "1.25em" }}>
          <Text>
            I) Push "BACK" until display reads: "OVEN OFF" and then push the
            "OVEN ON" smart key and let the oven warm to its preset temperature.
          </Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>Record time oven starts warm up:</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="time"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>
            Once the oven reaches the Operational Temperature, the menu is
            displayed, record the displayed menu
          </Text>
        </Col>
        <Col xs={4}>
          <Input
            type="text"
            style={{ width: "100%", height: "1.5em" }}
            placeholder=""
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>And then record the time</Text>
        </Col>
        <Col xs={4}>
          <Input
            type="time"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} style={{ fontSize: "1.25em" }}>
          <Text>This time should be 15 minutes or less!</Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} style={{ fontSize: "1.25em" }}>
          <Text>Let Oven "heat soak" for 1 hour</Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} style={{ fontSize: "1.25em" }}>
          <Text>This time should be 15 minutes or less!</Text>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={20} style={{ fontSize: "1.25em" }}>
          <Text>NOTES</Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20}>
          <TextArea autoSize={{ minRows: 3, maxRows: 4 }} />
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={16} style={{ fontSize: "1.25em" }}>
          <Text>J) Is there actuator rotation if door is closed slowly?</Text>
        </Col>
        <Col xs={4}>
          <Radio.Group name="oneB" defaultValue={"false"}>
            <Radio value={"true"}>YES</Radio>
            <Radio value={"false"}>NO</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={10} style={{ fontSize: "1.25em" }}>
          <Text>Slowly opening the Door, the order of the indicators are</Text>
        </Col>
        <Col xs={3}>
          <Input
            type="text"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
        <Col xs={3} style={{ fontSize: "1.25em" }}>
          <Text>? Closing</Text>
        </Col>
        <Col xs={3}>
          <Input
            type="text"
            style={{ width: "100%", height: "1.5em" }}
            required
          />
        </Col>
        <Col xs={1} style={{ fontSize: "1.25em" }}>
          <Text>?</Text>
        </Col>
      </Row>
    </Form>
  );
};
