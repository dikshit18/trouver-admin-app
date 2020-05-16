import React, { useEffect } from "react";
import { connect } from "react-redux";
import { details } from "../store/actions/index";
import Menu from "../components/Menu";

const MenuContainer = props => {
  const { onFetchDetails } = props;
  useEffect(() => {
    onFetchDetails();
  }, [onFetchDetails]);
  return <Menu details={props.details} loading={props.loading} />;
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
