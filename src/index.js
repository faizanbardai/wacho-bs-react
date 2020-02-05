import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Admin from "./Components/Admin/Admin";
import Header from "./Components/Header";
import contentInEnglish from "../src/en.json";
import contentInGerman from "../src/de.json";
import store from "./store";
import { Provider } from "react-redux";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Router>
  </Provider>,
  document.getElementById("root")
);
