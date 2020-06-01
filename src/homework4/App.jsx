import React from "react";
import { Login } from "./Login";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Register } from "./Register";
import { Redirect } from "./Redirect";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
        <Redirect />
        </Route>
      </Switch>
    </BrowserRouter>
  ); 
};
