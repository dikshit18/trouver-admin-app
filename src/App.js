import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AuthContainer from "./containers/AuthContainer";
import ProtectedRoute from "./hoc/ProtectedRoute";
import MenuComponent from "./components/Menu";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AuthContainer} />
        <Route exact path="/loading" component={MenuComponent} />
        <ProtectedRoute
          path="/landing"
          component={MenuComponent}
          isLogin={props.isLogin}
        />
      </Switch>
    </div>
  );
}
const mapStateToProps = state => {
  console.log(state.auth.isLogin);
  return {
    isLogin: state.auth.isLogin
  };
};
export default connect(mapStateToProps)(App);
