import React, { useState } from "react";
import "antd/dist/antd.css";
import { Input, Row, Col, Button } from "antd";
import AddStaffDrawer from "../components/AddStaffDrawer";

const TextBoxStyle = {
  width: "70%",
  marginTop: "1rem",
  marginRight: "1rem",
  borderRadius: ".2rem"
};
const ButtonStyle = {
  borderRadius: ".2rem"
};
const SearchBar = props => {
  const [drawerMode, updateDrawerMode] = useState(false);
  const closeDrawer = () => {
    updateDrawerMode(false);
  };
  const onClickHandler = () => {
    updateDrawerMode(!drawerMode);
  };

  return (
    <>
      <Row>
        <Col md={6} lg={6} sm={1} xs={1}></Col>
        <Col md={12} lg={12} sm={22} xs={22}>
          <Input style={{ ...TextBoxStyle }} />
          <Button type="primary" style={{ ...ButtonStyle }}>
            Search Users
          </Button>
        </Col>
        <Col md={6} lg={6} sm={1} xs={1}>
          <Button
            type="primary"
            style={{ ...ButtonStyle, marginTop: "1rem" }}
            onClick={onClickHandler}
          >
            Add Users
          </Button>
          <AddStaffDrawer
            visible={drawerMode}
            close={closeDrawer}
            submit={props.addStaffSubmit}
          />
        </Col>
      </Row>
    </>
  );
};
export default SearchBar;
