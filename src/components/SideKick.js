import React from "react";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import "antd/dist/antd.css";
const { Sider } = Layout;
const sideKick = props => {
  return (
    <Sider
      theme={"light"}
      collapsed={true}
      style={{ backgroundColor: "#007C89" }}
    >
      <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
      </Menu>
      <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default sideKick;
