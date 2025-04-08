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

import AddProduct from "../admin/AddProduct";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users.jsx";

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
      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="checkout" element={<Checkout />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-products" element={<AllProducts />} />
        <Route path="dashboard/add-products" element={<AddProduct />} />
        <Route path="dashboard/users" element={<Users />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/:type/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default Routers;
