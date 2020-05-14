import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isLogin, path, ...rest }) => {
  console.log("Heere", isLogin);
  console.log("path", path);
  return (
    <Route
      exact
      path={path}
      render={props =>
        isLogin ? <Component {...rest} {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
