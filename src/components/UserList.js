import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
const handleClick = e => {
  //   console.log("click ", e);
  //   this.setState({
  //     current: e.key
  //   });
};
const userList = props => {
  return (
    <Menu
      onClick={handleClick}
      // selectedKeys={[this.state.current]}
      mode="horizontal"
      style={{ marginTop: "1rem" }}
      selectedKeys={["staff"]}
    >
      <Menu.Item key="staff" icon={<UserOutlined />}>
        Staff Members
      </Menu.Item>
      <Menu.Item key="customer" icon={<UserOutlined />}>
        Customers
      </Menu.Item>
    </Menu>
  );
};
export default userList;
