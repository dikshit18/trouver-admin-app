import React, { useState } from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Card, Col, Row, Input, Button } from "antd";

const cardStyles = {
  width: "95%",
  height: "30rem",
  margin: "auto",
  marginTop: "5rem",
  borderRadius: "0.5rem"
};
const inputBoxStyles = {
  height: "2.5rem",
  borderRadius: ".5rem"
};
const buttonStyles = {
  height: "2.5rem",
  borderRadius: ".5rem",
  marginTop: "3rem"
};
const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const Controls = styled.div`
  margin-top: 2rem;
`;
const Label = styled.p`
  margin-top: 1rem;
  margin-bottom: -0.1rem;
`;

const InputControls = () => {
  return (
    <Controls>
      <Row>
        <Col lg={4} md={4} xs={1} sm={1}></Col>
        <Col lg={16} md={16} xs={22} sm={22}>
          <Label>Username</Label>
          <Input style={{ ...inputBoxStyles }} />
          <Label>Password</Label>
          <Input.Password
            visibilityToggle={false}
            style={{ ...inputBoxStyles }}
          />
          <Button type="primary" style={{ ...buttonStyles }} block>
            Sign in
          </Button>
        </Col>
        <Col lg={4} md={4} xs={1} sm={1}></Col>
      </Row>
    </Controls>
  );
};

const Auth = props => {
  return (
    <>
      <Row>
        <Col lg={6} md={6} xs={0} sm={0}></Col>
        <Col lg={12} md={12} xs={24} sm={24}>
          <Card style={{ ...cardStyles }}>
            <Image src={require(`../static/Trouver-logo.png`)} />
            <InputControls />
          </Card>
        </Col>
        <Col lg={6} md={6} xs={0} sm={0}></Col>
      </Row>
    </>
  );
};
export default Auth;
