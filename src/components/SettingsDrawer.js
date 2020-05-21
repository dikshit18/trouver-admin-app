import React from "react";
import { Drawer, Form, Typography, Col, Row, Input, Button } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
const { Text } = Typography;
const StyledForm = styled(Form)`
  margin-top: 2rem;
`;
const StyledTextbox = styled(Input.Password)`
  margin-top: -1.5rem;
`;
const inputBoxStyles = {
  borderRadius: ".5rem"
};
const buttonStyles = {
  height: "2.5rem",
  borderRadius: ".5rem",
  marginTop: "2rem"
};
const SettingsDrawer = props => {
  console.log("Hello", props.drawerMode);

  return (
    <>
      <div className="site-drawer-render-in-current-wrapper">
        <Drawer
          title="Change Password"
          placement={"right"}
          closable={true}
          onClose={props.close}
          visible={props.visible}
          key={"right"}
          width={"402"}
        >
          <StyledForm onFinish={values => props.submit(values)}>
            <Row>
              <Col lg={8} md={8} xs={8} sm={8}>
                <Text strong>Old Password</Text>
              </Col>
              <Col lg={16} md={16} xs={24} sm={24}>
                <Form.Item
                  name="oldPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password"
                    }
                  ]}
                >
                  <StyledTextbox
                    style={{ ...inputBoxStyles }}
                    visibilityToggle={false}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={8} md={8} xs={8} sm={8}>
                <Text strong>New Password</Text>
              </Col>
              <Col lg={16} md={16} xs={24} sm={24}>
                <Form.Item
                  name="newPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password"
                    }
                  ]}
                >
                  <StyledTextbox style={{ ...inputBoxStyles }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={8} md={8} xs={16} sm={16}>
                <Text strong>Confirm New Password</Text>
              </Col>
              <Col lg={16} md={16} xs={24} sm={24}>
                <Form.Item
                  name="confirmNewPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password"
                    }
                  ]}
                >
                  <StyledTextbox style={{ ...inputBoxStyles }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={24} md={24} xs={24} sm={24}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ ...buttonStyles }}
                    block
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </StyledForm>
        </Drawer>
      </div>
    </>
  );
};

export default SettingsDrawer;
