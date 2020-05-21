import React from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Form, Card, Col, Row, Input, Button } from "antd";
import Loader from "./Loader";

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
const fadeStyle = {
  opacity: 0,
  transition: "width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s"
};

const InputControls = props => {
  return (
    <Controls>
      <Row>
        <Col lg={4} md={4} xs={1} sm={1}></Col>
        <Col lg={16} md={16} xs={22} sm={22}>
          <Form
            onFinish={values => {
              props.onSubmit(values);
            }}
          >
            <Label>Username</Label>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input a valid email"
                }
              ]}
            >
              <Input style={{ ...inputBoxStyles }} />
            </Form.Item>
            <Label>Password</Label>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password"
                }
              ]}
            >
              <Input.Password
                visibilityToggle={false}
                style={{ ...inputBoxStyles }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ ...buttonStyles }}
                block
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col lg={4} md={4} xs={1} sm={1}></Col>
      </Row>
    </Controls>
  );
};

const Auth = props => {
  return (
    <>
      {props.loading ? (
        <Loader />
      ) : (
        <Row style={props.loading ? { ...fadeStyle } : null}>
          <Col lg={6} md={6} xs={0} sm={0}></Col>
          <Col lg={12} md={12} xs={24} sm={24}>
            <Card style={{ ...cardStyles }}>
              <Image src={require(`../static/Trouver-logo.png`)} />
              <InputControls
                onSubmit={values => {
                  props.onSubmit(values);
                }}
              />
            </Card>
          </Col>
          <Col lg={6} md={6} xs={0} sm={0}></Col>
        </Row>
      )}
    </>
  );
};
export default Auth;
