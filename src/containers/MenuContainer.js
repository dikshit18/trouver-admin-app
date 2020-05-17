import React, { useEffect } from "react";
import { connect } from "react-redux";
import { details } from "../store/actions/index";
import Menu from "../components/Menu";
import { triggerLogout } from "../store/actions/Menu";

const MenuContainer = props => {
  const { onFetchDetails } = props;
  useEffect(() => {
    onFetchDetails();
  }, [onFetchDetails]);

  const logout = () => {
    props.onLogout();
  };
  return (
    <Menu details={props.details} loading={props.loading} logout={logout} />
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
