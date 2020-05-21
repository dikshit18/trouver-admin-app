import React, { useState } from "react";
import { SettingFilled, LogoutOutlined, HomeOutlined } from "@ant-design/icons";
import SettingsDrawer from "../components/SettingsDrawer";
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

const SideKick = props => {
  const [drawerMode, updateDrawerMode] = useState(false);
  const [selectedKeys, _] = useState(["1"]);
  const closeDrawer = () => {
    updateDrawerMode(false);
  };
  const onClickSettings = () => {
    updateDrawerMode(!drawerMode);
  };

  return (
    <Sider theme={"light"} collapsed={true} style={{ ...SideKickStyle }}>
      <Menu
        theme="light"
        defaultSelectedKeys={selectedKeys}
        selectable={false}
        mode="inline"
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingFilled />} onClick={onClickSettings}>
          Settings
          <SettingsDrawer
            visible={drawerMode}
            close={closeDrawer}
            submit={props.submit}
          />
        </Menu.Item>
        <Menu.Item key="3" icon={<LogoutOutlined />} onClick={props.logout}>
          Logout
        </Menu.Item>
      </Menu>
      <Menu
        defaultSelectedKeys={["0"]}
        mode="inline"
        style={{ ...LogOutStyle }}
      />
    </Sider>
  );
};

export default SideKick;
