import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage, ArticlesPage, PortfolioPage } from "../pages";

export const Routes = () => (
 <Switch>
  <Route path="/" exact component={Homepage} />
  <Route path="/articles" exact component={ArticlesPage} />
  <Route path="/portfolio" exact component={PortfolioPage} />
 </Switch>
);
