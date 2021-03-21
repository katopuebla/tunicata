import React, { useContext, useEffect } from "react";
import { auth } from '../firebase';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from "./menu";
import Home from "../pages/home";
import Catalogs from "../pages/catalog/catalogs";
import About from "../pages/about";
import ProductList from "../pages/product/productList";
import { ProductProvider } from "../contexts/productContext";
import Login from "../pages/Login";
import { GeneralContext } from "../contexts/generalContext";

const Header = () => {

  const { autenticado, setAutenticado, setUser } = useContext(GeneralContext);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setAutenticado(true);
        setUser(authUser.email);
      } else {
      }
    })
  }, []);

  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/productList/" component={ProductList} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <ProductProvider>
          <Route path="/catalogs/:catalogId/" component={Catalogs} />
        </ProductProvider>
      </Switch>
    </Router>
  );
}

export default Header;
