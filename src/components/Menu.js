import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import SideKick from "./SideKick";
import UserList from "./UserList";
import SearchBar from "./SearchBar";
import UsersTable from "./UsersTable";
import Loading from "./Loader";
const { Header, Content, Footer } = Layout;

const HeaderStyle = {
  backgroundColor: "#fff",
  width: "100%",
  top: 0
};

const MenuComponent = props => {
  console.log("staffMembers...", props.staffMembers);
  const { details, loading } = props;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout style={{ minHeight: "100vh" }}>
          <SideKick logout={props.logout} submit={props.submit} />
          <Layout className="site-layout">
            <Header
              style={{
                ...HeaderStyle
              }}
            >
              Welcome
              {details ? ` ${details.firstName} !` : " Admin"}
            </Header>
            <Content
              style={{
                margin: "2rem 1rem",
                height: "100vh",
                backgroundColor: "#fff"
              }}
            >
              <UserList />
              <SearchBar
                addStaffSubmit={props.addStaffSubmit}
                permissionSets={props.permissionSets}
                fetchPermissionSets={props.fetchPermissionSets}
              />
              <UsersTable
                isLoadingStaffMembers={props.isLoadingStaffMembers}
                staffMembers={props.staffMembers}
                changeStatusHandler={props.changeStatusHandler}
              />
            </Content>
            <Footer />
          </Layout>
        </Layout>
      )}
    </>
  );
};
export default MenuComponent;
