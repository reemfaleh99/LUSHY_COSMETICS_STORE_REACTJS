import React from "react";

import Helmet from "../components/Helmet";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <section className="flex justify-between items-center">
        <div className="w-2/3 ">
          <h6 className="text-xl font-medium">Billing information</h6>
          <form className="flex flex-col py-5">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-[100%] mb-5 p-5 border-2 border-green-200 rounded-xl focus:outline-green-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[100%] mb-5 p-5 border-2 border-green-200 rounded-xl focus:outline-green-500"
            />
            <input
              type="number"
              placeholder="Enter your number"
              className="w-[100%] mb-5 p-5 border-2 border-green-200 rounded-xl focus:outline-green-500"
            />
            <input
              type="text"
              placeholder="Street address"
              className="w-[100%] mb-5 p-5 border-2 border-green-200 rounded-xl focus:outline-green-500"
            />
            <input
              type="text"
              placeholder="City"
              className="w-[100%] mb-5 p-5 border-2 border-green-200 rounded-xl focus:outline-green-500"
            />
            <input
              type="text"
              placeholder="Postal code"
              className="w-[100%] mb-5 p-5 border-2 border-green-200 rounded-xl focus:outline-green-500"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-[100%] mb-5 p-5 border-2 border-green-200 rounded-xl focus:outline-green-500"
            />
          </form>
        </div>
        <div className="bg-green-200 p-8 h-fit w-1/4 rounded-xl">
          <h6 className="mb-6 text-xl">
            Total Qty: <span className="float-right">{totalQty} items</span>
          </h6>
          <h6 className="mb-6 text-xl">
            Subtotal: <span className="float-right">${totalAmount}</span>
          </h6>
          <h6 className="mb-6 text-xl">
            Shipping: <br /> free shipping
            <span className="float-right">0</span>
          </h6>

          <h4 className="text-2xl border-2 border-white py-4 px-2">
            Total cost: <span className="float-right">${totalAmount}</span>
          </h4>
          <button className="bg-white p-4 mt-5 w-full rounded-full font-semibold text-xl">
            place an order
          </button>
        </div>
      </section>
    </Helmet>
  );
};

export default Checkout;
