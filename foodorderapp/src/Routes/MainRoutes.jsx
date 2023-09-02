import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Burger from "../Pages/Burger";
import Other from "../Pages/Other";
import Pizza from "../Pages/Pizza";
import Sagar from "../Pages/Sagar";
import Order from "../Pages/Order";


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/other" element={<Other />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/sagar" element={<Sagar />} />
        <Route path="/order" element={<Order />} />

      </Routes>
    </div>
  );
};

export default MainRoutes;
