import React from "react";
import ReactGA from "react-ga";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import Header from "./Components/Header";
import contentInEnglish from "./en.json";
import contentInGerman from "./de.json";
import store from "./store";
import { Provider } from "react-redux";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function initializeReactGA() {
  ReactGA.initialize("UA-170042260-1");
  ReactGA.pageview("/homepage");
}

initializeReactGA();

export default function App() {
  return (
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
    </Provider>
  );
}
