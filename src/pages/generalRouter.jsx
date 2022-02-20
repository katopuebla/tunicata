import React, { useContext, useEffect } from "react";
import { auth } from '../firebase';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "../components/footer";
import Menu from "../components/menu";
import Home from "./home";
import Catalogs from "./catalog/catalogs";
import Product from "./product/product"
import About from "./about";
import ProductList from "./product/productList";
import { ProductProvider } from "../contexts/productContext";
import Login from "../components/Login";
import { GeneralContext } from "../contexts/generalContext";
import AddProduct from "./product/addProduct";

const GeneralRouter = () => {

  const { setAutenticado, setUser } = useContext(GeneralContext);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setAutenticado(true);
        setUser(authUser.email);
      } else {
      }
    })
  }, [setAutenticado, setUser]);

  return (
    <>
      <Router>
        <div className='wrapper'>
          <Menu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <ProductProvider>
              <Route path="/catalogs/:catalogId/" component={Catalogs} />
              <Route path="/product/:catalogId/:productId" component={Product} />
              <Route path="/list" component={ProductList} />
              <Route path="/add" component={AddProduct} />
            </ProductProvider>
            {/*<Route exact path="/" render={() => ( loggedIn ? ( <Home/> ) : ( <Redirect to="/login"/> ) )} />*/}
            {/*<       Route component={Error} />*/}

          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default GeneralRouter;
