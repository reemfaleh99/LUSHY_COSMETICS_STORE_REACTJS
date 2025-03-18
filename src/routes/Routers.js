import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  About,
  Cosmatics,
  Fragrance,
  Home,
  Skin,
  ProductDetails,
  Cart,
  Checkout,
  Login,
  Signup,
  Gifts,
  Blog,
} from "../pages/index";

import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="/skin" element={<Skin />} />
      <Route path="/skin/:id" element={<ProductDetails />} />
      <Route path="/cosmatics" element={<Cosmatics />} />
      <Route path="/cosmatics/:id" element={<ProductDetails />} />
      <Route path="/fragrance" element={<Fragrance />} />
      <Route path="/fragrance/:id" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/gift" element={<Gifts />} />
      <Route path="/blog" element={<Blog />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/:type/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default Routers;
