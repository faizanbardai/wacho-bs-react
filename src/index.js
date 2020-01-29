import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Switch
} from "react-router-dom";
import Home from "./Components/Home";
import Admin from "./Components/Admin/Admin";

ReactDOM.render(
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
  </Router>,
  document.getElementById("root")
);
