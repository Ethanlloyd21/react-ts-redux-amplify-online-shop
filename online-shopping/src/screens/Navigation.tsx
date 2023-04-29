import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";
import Home from "./home/Home";
import Cart from "./cart/Cart";
import Store from "./store/Store";
import Phones from "./phones/Phones";
import Laptops from "./laptops/Laptops";
import Tv from "./tv/Tv";

const Navigation: React.FC<{}> = ({}) => {
  return (
    <>
      <Router>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/store" element={ <Store /> } />
          <Route path="/phones" element={ <Phones /> } />
          <Route path="/laptops" element={ <Laptops /> } />
          <Route path="/tv" element={ <Tv />} />
        </Routes>
      </Router>
    </>
  );
};

export default Navigation;
