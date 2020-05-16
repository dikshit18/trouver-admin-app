import React from "react";
import "antd/dist/antd.css";
import { Table, Row, Col } from "antd";
const TableStyle = {
  width: "100%",
  margin: "2rem auto"
};
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend", "ascend"]
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "Address",
    dataIndex: "address",
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"]
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park"
  }
];

function onChange(pagination, filters, sorter, extra) {}
const usersTable = props => {
  return (
    <Row>
      <Col xs={2} sm={0} lg={1} md={1}></Col>
      <Col xs={24} sm={24} lg={22} md={22}>
        <Table
          style={{ ...TableStyle }}
          columns={columns}
          dataSource={data}
          onChange={onChange}
        />
      </Col>
      <Col xs={0} sm={0} lg={1} md={1}></Col>
    </Row>
  );
};
export default usersTable;
