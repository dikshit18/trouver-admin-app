import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Route, Router } from "react-router-dom";
import AuthContainer from "./containers/AuthContainer";
import ProtectedRoute from "./hoc/ProtectedRoute";
import MenuComponent from "./components/Menu";
import { history } from "./utils/history";

function App(props) {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/" component={AuthContainer} />
        <Route exact path="/loading" component={MenuComponent} />
        <ProtectedRoute
          path="/landing"
          component={MenuComponent}
          isLogin={props.isLogin}
        />
      </Router>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin
  };
};
export default connect(mapStateToProps)(App);
