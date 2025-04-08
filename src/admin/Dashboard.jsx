import React from "react";
import AddProduct from "./AddProduct";
import useGetData from "../custom-hooks/useGetData";

const Dashboard = () => {
  const { data: products } = useGetData("products");
  const { data: users } = useGetData("users");
  return (
    <section>
      <div className="flex mt-24 align-items justify-between">
        <div className="bg-yellow-200 p-12">
          <h5>Total Sales</h5>
          <span>$7888</span>
        </div>

        <div className="bg-green-200 p-12">
          <h5>Orders</h5>
          <span>555</span>
        </div>

        <div className="bg-red-200 p-12">
          <h5>Total Products</h5>
          <span>{products.length}</span>
        </div>

        <div className="bg-blue-200 p-12">
          <h5>Total Users</h5>
          <span>{users.length}</span>
        </div>
      </div>

      <AddProduct />
    </section>
  );
};

export default Dashboard;
