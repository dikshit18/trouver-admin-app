/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "antd/dist/antd.css";
import { Table, Row, Col, Tag, Space } from "antd";
const TableStyle = {
  width: "100%",
  margin: "2rem auto"
};

function onChange(pagination, filters, sorter, extra) {}
const usersTable = props => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"]
    },
    {
      title: "Email",
      dataIndex: "email",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.email.length - b.email.length,
      sortDirections: ["descend", "ascend"]
    },
    {
      title: "Cognito ID",
      dataIndex: "cognitoSub"
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      sorter: (a, b) => a.tags[0].length - b.tags[0].length,
      sortDirections: ["descend", "ascend"],
      render: tags => (
        <>
          {tags.map(tag => {
            let color;
            if (tag === "unconfirmed") {
              color = "volcano";
            } else color = "green";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      )
    },
    {
      title: "Created Time",
      dataIndex: "created",
      defaultSortOrder: "descend"
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortDirections: ["descend", "ascend"]
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "tags",
      render: (tags, record) => (
        <>
          {tags.map(tag => {
            let actionItem;
            if (tag === "unconfirmed") {
              actionItem = "";
            } else if (tag === "confirmed") actionItem = "Disable";
            else actionItem = "Enable";
            return (
              <Space size="middle">
                <a
                  onClick={() =>
                    props.changeStatusHandler(record.cognitoSub, tag)
                  }
                >
                  {actionItem}
                </a>
              </Space>
            );
          })}
        </>
      )
    }
  ];
  return (
    <Row>
      <Col xs={2} sm={0} lg={1} md={1}></Col>
      <Col xs={24} sm={24} lg={22} md={22}>
        <Table
          style={{ ...TableStyle }}
          columns={columns}
          dataSource={props.staffMembers}
          onChange={onChange}
          loading={props.isLoadingStaffMembers}
          rowKey="cognitoSub"
        />
      </Col>
      <Col xs={0} sm={0} lg={1} md={1}></Col>
    </Row>
  );
};
export default usersTable;
