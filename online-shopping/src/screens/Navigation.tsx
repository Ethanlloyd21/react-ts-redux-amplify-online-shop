import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";
import Home from "./home/Home";
import Cart from "./cart/Cart";

const Navigation: React.FC<{}> = ({}) => {
  return (
    <>
      <Router>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default Navigation;
