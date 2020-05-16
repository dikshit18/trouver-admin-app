import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import SideKick from "./SideKick";
import Loading from "./Loader";
const { Header, Content, Footer } = Layout;

const HeaderStyle = {
  backgroundColor: "#fff",
  width: "100%",
  top: 0
};

const navigationBar = props => {
  const { details, loading } = props;
  console.log("Loading or not", 1, props);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout style={{ minHeight: "100vh" }}>
          <SideKick />
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
              {props.children}
            </Content>
            <Footer />
          </Layout>
        </Layout>
      )}
    </>
  );
};
export default navigationBar;
