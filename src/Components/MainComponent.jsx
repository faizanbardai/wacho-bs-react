import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin/Admin";

export default class MainComponent extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/" exact>
              <Home lang="de" />
            </Route>
            <Route path="/en" exact>
              <Home lang="en" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
