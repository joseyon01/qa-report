import { Col, Row } from "antd";

export const Container = ({ children }) => (
  <Row justify="center">
    <Col lg={18} md={23} xs={24} sm={22}>
      {children}
    </Col>
  </Row>
);
