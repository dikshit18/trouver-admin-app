import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
const { SubMenu } = Menu;
const handleClick = () => {};
const MenuComponent = props => {
  return (
    <Menu
      onClick={handleClick}
      // selectedKeys={[this.state.current]}
      mode="horizontal"
    >
      <Menu.Item key="mail" icon={<UserOutlined />}>
        Staff
      </Menu.Item>
      <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Customer
        </a>
      </Menu.Item>
    </Menu>
  );
};
export default MenuComponent;
