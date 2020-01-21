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
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
