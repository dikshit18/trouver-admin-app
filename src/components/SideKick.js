import React from "react";
import { SettingFilled, LogoutOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import "antd/dist/antd.css";
const { Sider } = Layout;
const SideKickStyle = {
  marginTop: "-0.3rem",
  backgroundColor: "#007C89"
};
const LogOutStyle = {
  marginTop: "30rem",
  backgroundColor: "#007C89",
  marginRight: "1rem"
};
const sideKick = props => {
  return (
    <Sider theme={"light"} collapsed={true} style={{ ...SideKickStyle }}>
      <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingFilled />}>
          Settings
        </Menu.Item>
        <Menu.Item key="3" icon={<LogoutOutlined />} onClick={props.logout}>
          Logout
        </Menu.Item>
      </Menu>
      <Menu
        defaultSelectedKeys={["0"]}
        mode="inline"
        style={{ ...LogOutStyle }}
      ></Menu>
    </Sider>
  );
};

export default sideKick;
