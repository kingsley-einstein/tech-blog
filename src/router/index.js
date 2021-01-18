import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage, ArticlesPage } from "../pages";

export const Routes = () => (
 <Switch>
  <Route path="/" exact component={Homepage} />
  <Route path="/articles" exact component={ArticlesPage} />
 </Switch>
);
