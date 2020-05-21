import React, { useEffect } from "react";
import { connect } from "react-redux";
import { details, changePassword } from "../store/actions/index";
import Menu from "../components/Menu";
import { triggerLogout } from "../store/actions";

const MenuContainer = props => {
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
