import React, { useMemo } from "react";
import styled from "styled-components";
import { Menu, Layout, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import SideKick from "./SideKick";
import UserList from "./UserList";
import SearchBar from "./SearchBar";
import UsersTable from "./UsersTable";
const { Header, Content, Footer } = Layout;
const handleClick = () => {};

const HeaderStyle = {
  backgroundColor: "#fff",
  width: "100%",
  top: 0
};

const MenuComponent = props => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideKick />
      <Layout className="site-layout">
        <Header
          style={{
            ...HeaderStyle
          }}
        >
          Welcome Admin
        </Header>
        <Content
          style={{
            margin: "2rem 1rem",
            height: "100vh",
            backgroundColor: "#fff"
          }}
        >
          <UserList />
          <SearchBar />
          <UsersTable />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
export default MenuComponent;
