import React, { useEffect } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { isEmpty } from "lodash";
import LandingPage from "./pages/Landing";

const list = require("./mock.json").data;

function App(): React.ReactElement {
  useEffect(() => {
    const propertyListData = localStorage.getItem("propertyListData");
    if (isEmpty(propertyListData)) {
      localStorage.setItem("propertyListData", JSON.stringify(list));
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={LandingPage} />
        {/* Redirect when route not found */}
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
