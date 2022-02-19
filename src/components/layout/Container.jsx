import {  Col, Row } from 'antd';


export const Container = ({ children }) =>(
  <Row justify="center">
    <Col xs={16}>{children}</Col>
  </Row>
);

