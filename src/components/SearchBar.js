import React from "react";
import "antd/dist/antd.css";
import { Input, Row, Col, Button } from "antd";

const TextBoxStyle = {
  width: "70%",
  marginTop: "1rem",
  marginRight: "1rem",
  borderRadius: ".2rem"
};
const ButtonStyle = {
  borderRadius: ".2rem"
};
const searchBar = props => {
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
        <Col md={6} lg={6} sm={1} xs={1}></Col>
      </Row>
    </>
  );
};
export default searchBar;
