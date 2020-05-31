import React, { useEffect } from "react";
import { connect } from "react-redux";
import { details, changePassword } from "../store/actions/index";
import Menu from "../components/Menu";
import { triggerLogout } from "../store/actions";
import {
  initiateClient,
  handleWebsocketResponse
} from "../utils/websocketHelper";
import { getCookie } from "../utils/cookies";

const MenuContainer = props => {
  const { onFetchDetails } = props;
  useEffect(() => {
    onFetchDetails();
  }, [onFetchDetails]);
  useEffect(() => {
    let client;
    client = initiateClient();
    client.onmessage = message => {
      console.log("Message in websocket...", message.data);
    };
    const webSocketInterval = setInterval(() => {
      client.close();
      client.onclose = () => {
        console.log("Closing websocket connection now... ", Date());
      };
      client = null;
      const sessionId = getCookie("sessionId");
      if (sessionId) {
        client = initiateClient();
        client.onmessage = message => {
          try {
            console.log("Message in websocket....", message);
            const parsedMessage = JSON.parse(message);
            handleWebsocketResponse(parsedMessage);
          } catch (error) {
            //Non handled message which isn't JSON.
          }
        };
      }
    }, 10000000); //Every 9.5 minutes
    return () => {
      client.close();
      clearInterval(webSocketInterval);
    };
  }, []);
  const logout = () => {
    props.onLogout();
  };
  const changePasswordFormSubmit = values => {
    props.onChangePassword(values);
  };

  return (
    <Menu
      details={props.details}
      loading={props.loading}
      logout={logout}
      submit={changePasswordFormSubmit}
    />
  );
};
const mapStateToProps = state => {
  return {
    details: state.menu.details,
    loading: state.menu.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchDetails: () => {
      dispatch(details());
    },
    onLogout: () => {
      dispatch(triggerLogout());
    },
    onChangePassword: values => {
      dispatch(changePassword(values));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
