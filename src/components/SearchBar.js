import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
const handleClick = e => {
  //   console.log("click ", e);
  //   this.setState({
  //     current: e.key
  //   });
};
const searchBar = props => {
  return (
    <>
      <Input style={{ width: "2rem", marginTop: "1rem" }} />
    </>
  );
};
export default searchBar;
