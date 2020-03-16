import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import Test from "./Test";
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/store" exact component={Store} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={CheckOut} />
          <Route path="/productdetails" exact component={ProductDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
