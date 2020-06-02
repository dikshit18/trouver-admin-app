import React, { useEffect } from "react";
import { connect } from "react-redux";
import { login, logout } from "../store/actions/index";
import { sessionState } from "../utils/sessionManager";
import Auth from "../components/Auth";
import styled from "styled-components";
import { history } from "../utils/history";

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
  const { onLogout } = props;
  useEffect(() => {
    async function checkSession() {
      if (!(await sessionState())) {
        onLogout();
      } else {
        history.push("/dashboard");
      }
    }
    checkSession();
  }, [onLogout]);
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
    onLogout: () => {
      dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
