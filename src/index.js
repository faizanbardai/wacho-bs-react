import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MainComponent from "./Components/MainComponent";
import Home from "./Components/Home";
import Admin from "./Components/Admin/Admin";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/en" exact>
        <Home lang="en" />
      </Route>
      <Route path="/" exact>
        <Home lang="de" />
      </Route>
      {/* <MainComponent /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
