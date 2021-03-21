import React from "react";
//import { storage } from "../firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from "./menu";
import Home from "../pages/home";
import Catalogs from "../pages/catalog/catalogs";
import About from "../pages/about";
import ProductList from "../pages/product/productList";
import { ProductProvider } from "../contexts/productContext";

const Header = () => (
  <Router>
    <Menu />
    <Switch>
      <Route path="/" exact component={Home} />
      <ProductProvider>
        <Route path="/catalogs/:catalogId/" component={Catalogs} />
      </ProductProvider>
      <Route path="/productList/" component={ProductList} />
      <Route path="/about/" component={About} />
      {/*<Route path="/" exact component={Login} />*/}
    </Switch>
  </Router>
)

export default Header;
