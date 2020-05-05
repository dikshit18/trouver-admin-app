import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthContainer from "./containers/AuthContainer";
import MenuContainer from "./containers/MenuContainer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AuthContainer} />
        <Route exact path="/landing" component={MenuContainer} />

        {/* <Route path="/movies" exact /> */}
      </Switch>
    </div>
  );
}

export default App;
