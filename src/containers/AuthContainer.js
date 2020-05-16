import React, { useEffect } from "react";
import { connect } from "react-redux";
import { login, sessionValidityCheck } from "../store/actions/index";
import Auth from "../components/Auth";
import styled from "styled-components";

const Layout = styled.div`
  background: rgb(238, 174, 202);
  background: linear-gradient(
    90deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 0%,
    rgba(224, 229, 235, 1) 100%
  );
  z-index: 9999;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const AuthContainer = props => {
  const { onSessionValidityCheck } = props;
  useEffect(() => {
    onSessionValidityCheck();
  }, [onSessionValidityCheck]);
  return (
    <Layout>
      <Auth
        onSubmit={values => props.onSubmitHandler(values)}
        loading={props.loading}
      />
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin,
    loading: state.auth.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSubmitHandler: ({ username, password }) => {
      dispatch(login(username, password));
    },
    onSessionValidityCheck: () => {
      dispatch(sessionValidityCheck());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
