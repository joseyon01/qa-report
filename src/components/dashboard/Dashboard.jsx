import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Layout, Table, Tag, Space } from 'antd';

const { Header, Footer, Content } = Layout;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


export const Dashboard = () => {
  return (
    <Layout className="app-layout">
      <Header>
        <span style={{ color: '#fff' }}>
         My header mover esto a su respectivo componente Header.jsx
        </span>
      </Header>
      <Content>
        <div className="container">
          <Row justify="end">
            <Col xs={3}>
              <Link to="register">Formulario</Link>
            </Col>
          </Row>
          <Table columns={columns} dataSource={data} />
        </div>
      </Content>
      <Footer>
        My Footer mover esto a su respectivo componente Footer.jsx
      </Footer>
    </Layout>
  );
};
