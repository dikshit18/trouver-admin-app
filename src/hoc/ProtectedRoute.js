import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isLogin, path, ...rest }) => {
  console.log("islogin", isLogin);
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
