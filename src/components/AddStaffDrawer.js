import React, { useState } from "react";
import {
  Drawer,
  Form,
  Typography,
  Col,
  Row,
  Input,
  Button,
  TreeSelect
} from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
const { Text } = Typography;
const StyledForm = styled(Form)`
  margin-top: 2rem;
`;
const inputBoxStyles = {
  borderRadius: ".5rem"
};
const buttonStyles = {
  height: "2.5rem",
  borderRadius: ".5rem",
  marginTop: "2rem"
};
const AddStaffDrawer = props => {
  const [permissionValue, setPermissionValue] = useState(undefined);

  const formSubmitHandler = values => {
    values["permissionSet"] = permissionValue;
    props.submit(values);
  };
  const onChangeHandler = value => {
    console.log("onChange ", value);
    setPermissionValue(value);
  };
  const treeProps = {
    treeData: props.permissionSets,
    value: permissionValue,
    onChange: onChangeHandler,
    treeCheckable: true,
    //showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please select",
    style: {
      width: "100%"
    }
  };
  return (
    <>
      <div className="site-drawer-render-in-current-wrapper">
        <Drawer
          title="Add new staff member"
          placement={"right"}
          closable={true}
          onClose={props.close}
          visible={props.visible}
          key={"right"}
          width={"402"}
        >
          <StyledForm onFinish={formSubmitHandler}>
            <Row>
              <Col lg={8} md={8} xs={8} sm={8}>
                <Text strong>Email</Text>
              </Col>
              <Col lg={16} md={16} xs={24} sm={24}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please input an email."
                    }
                  ]}
                >
                  <Input style={{ ...inputBoxStyles }} placeholder="Email" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={8} md={8} xs={8} sm={8}>
                <Text strong>First Name</Text>
              </Col>
              <Col lg={16} md={16} xs={24} sm={24}>
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input first name"
                    }
                  ]}
                >
                  <Input
                    style={{ ...inputBoxStyles }}
                    placeholder="First Name"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={8} md={8} xs={16} sm={16}>
                <Text strong>Second Name</Text>
              </Col>
              <Col lg={16} md={16} xs={24} sm={24}>
                <Form.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input second name"
                    }
                  ]}
                >
                  <Input
                    style={{ ...inputBoxStyles }}
                    placeholder="Second Name"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={8} md={8} xs={16} sm={16}>
                <Text strong>Permissions</Text>
              </Col>
              <Col lg={16} md={16} xs={24} sm={24}>
                <Form.Item
                  name="pemissions"
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: "Please select permissions"
                  //   }
                  // ]}
                >
                  <TreeSelect {...treeProps} />;
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
                    Enroll
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

export default AddStaffDrawer;
