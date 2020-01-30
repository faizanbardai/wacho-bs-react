import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin/Admin";

export default class MainComponent extends Component {
  render() {
    return (
      <div>
        <Router>
          <HashRouter basename="/">
            <Switch>
              <Route path="/admin" component={Admin} />
              <Route path="/en" exact>
                <Home lang="en" />
              </Route>
              <Route path="/" exact>
                <Home lang="de" />
              </Route>
            </Switch>
          </HashRouter>
        </Router>
      </div>
    );
  }
}
