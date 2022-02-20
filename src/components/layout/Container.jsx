import { Col, Row } from "antd";

export const Container = ({ children }) => (
  <Row justify="center">
    <Col xs={20}>{children}</Col>
  </Row>
);
