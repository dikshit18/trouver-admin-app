import React from "react";
import { Route, Redirect } from "react-router-dom";
import checkSessionValidity from "../utils/sessionManager";

const ProtectedRoute = ({ component: Component, isLogin, path, ...rest }) => {
  return (
    <Route
      exact
      path={path}
      render={props =>
        isLogin || checkSessionValidity() ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
