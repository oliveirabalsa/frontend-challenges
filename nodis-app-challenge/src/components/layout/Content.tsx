import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from '../../views/NotFound'
import Home from "../Home/Home";
import ProductDetails from "../../views/pages/ProductDetails/ProductDetails";

const Content: React.FC = (props) => (
  <main className="Content">
    <Switch>
    <Route  path="/">
        <Home />
      </Route>
    <Route  path="/product/:id">
        <ProductDetails />
      </Route>
      <Route  path="*">
        <NotFound />
      </Route>
    </Switch>
  </main>
);

export default Content;
