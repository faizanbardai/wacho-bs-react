import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  // HashRouter,
  Switch
} from "react-router-dom";
import Home from "./Components/Home";
import Admin from "./Components/Admin/Admin";
import Header from "./Components/Header";
import contentInEnglish from "../src/en.json";
import contentInGerman from "../src/de.json";

ReactDOM.render(
  <Router>
    <HashRouter basename="/">
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/en" exact>
          <Home lang="en" content={contentInEnglish} />
        </Route>
        <Route path="/de" exact>
          <Home lang="de" content={contentInGerman} />
        </Route>
        <Route path="/" exact>
          <Header />
        </Route>
      </Switch>
    </HashRouter>
  </Router>,
  document.getElementById("root")
);
