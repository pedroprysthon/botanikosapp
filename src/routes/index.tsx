import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from "../pages/Form";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/form">
          <Form />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
