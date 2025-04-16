import React from "react";
import AddProduct from "./AddProduct";
import useGetData from "../custom-hooks/useGetData";

const Dashboard = () => {
  const { data: products } = useGetData("products");
  const { data: users } = useGetData("users");
  return (
    <section>
      <div className="flex mt-24 align-items justify-between gap-2 text-center">
        <div className="bg-yellow-200 p-12 w-1/4">
          <h5 className="text-xl font-medium">Total Sales</h5>
          <span className="text-lg font-semibold">$7888</span>
        </div>

        <div className="bg-green-200 p-12  w-1/4">
          <h5 className="text-xl font-medium">Orders</h5>
          <span className="text-lg font-semibold">555</span>
        </div>

        <div className="bg-red-200 p-12  w-1/4">
          <h5 className="text-xl font-medium">Total Products</h5>
          <span className="text-lg font-semibold">{products.length}</span>
        </div>

        <div className="bg-blue-200 p-12  w-1/4">
          <h5 className="text-xl font-medium">Total Users</h5>
          <span className="text-lg font-semibold">{users.length}</span>
        </div>
      </div>

      <AddProduct />
    </section>
  );
};

export default Dashboard;
