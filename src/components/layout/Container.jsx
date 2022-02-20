import { Col, Row } from "antd";

export const Container = ({ children }) => (
  <Row justify="center">
    <Col lg={20} md={23}>{children}</Col>
  </Row>
);
