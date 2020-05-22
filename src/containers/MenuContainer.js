import React, { useEffect } from "react";
import { connect } from "react-redux";
import { details, changePassword } from "../store/actions/index";
import Menu from "../components/Menu";
import { triggerLogout } from "../store/actions";

const MenuContainer = props => {
  const unload = e => {
    console.log("Hello Hi", e);
    e.preventDefault();
    setTimeout(() => {
      window.removeEventListener("beforeunload", () => {
        console.log("removing lostener");
      });
      console.log("removing lostener");
    }, 2000);
  };
  //useEffect to refresh session
  useEffect(() => {
    console.log("In app.js useEffect");
    const interval = setInterval(() => {
      console.log("Session Refreshed");
    }, 5000);
    window.addEventListener("beforeunload", event => {
      // Cancel the event as stated by the standard.
      event.preventDefault();
      // Chrome requires returnValue to be set.
      setTimeout(() => {
        window.removeEventListener("beforeunload", () => {
          console.log("removing lostener");
        });
      }, 2000);
    });
    return () => {
      // window.removeEventListener("beforeunload", () => {
      //   console.log("removing lostener");
      // });
      window.onbeforeunload = null;
      console.log("Clearng interval");
      clearInterval(interval);
    };
  }, []);
  const { onFetchDetails } = props;
  useEffect(() => {
    onFetchDetails();
  }, [onFetchDetails]);

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
