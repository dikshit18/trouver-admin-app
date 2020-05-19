import React, { useState } from "react";
import { Drawer } from "antd";
import "antd/dist/antd.css";
const SettingsDrawer = props => {
  console.log("Hello");
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="site-drawer-render-in-current-wrapper">
        <Drawer
          title="Change Password"
          placement={"right"}
          closable={false}
          onClose={onClose}
          visible={true}
          key={"right"}
          style={{ width: "" }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </>
  );
};

export default SettingsDrawer;
