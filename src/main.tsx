import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import Landing from "./Landing";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/app">
          <App />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
