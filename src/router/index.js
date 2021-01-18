import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage } from "../pages";

export const Routes = () => (
 <Switch>
  <Route path="/" component={Homepage} />
 </Switch>
);
