import React from "react";

import Helmet from "../components/Helmet";
import { AiFillDelete } from "react-icons/ai";

import { cartAction } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title={"Cart"}>
      <section className="mt-8 flex flex-col lg:flex-row justify-between">
        {cartItems.length === 0 ? (
          <h2>No items added</h2>
        ) : (
          <div className="w-full lg:w-3/4 overflow-x-auto mt-16">
            <table className="w-full lg:w-[80%]">
              <thead>
                <tr class="bg-green-200 ">
                  <th class="text-center border border-white px-2 md:px-4 py-2">
                    Image
                  </th>
                  <th class="text-center border border-white px-2 md:px-4 py-2">
                    Title
                  </th>
                  <th class="text-center border border-white px-2 md:px-4 py-2">
                    Price
                  </th>
                  <th class="text-center border border-white px-2 md:px-4 py-2">
                    Qty
                  </th>
                  <th class="text-center border border-white px-2 md:px-4 py-2">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {cartItems.map((item, index) => (
                  <Tr item={item} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="w-full mt-12 lg:w-1/4 bg-green-200 rounded-xl p-4">
          <div className="flex justify-between mb-3">
            <h6 className="text-xl font-medium">Subtotal</h6>
            <span className="text-xl font-semibold">${totalAmount}</span>
          </div>
          <p className="text-lg">
            taxes and shipping will calculate in checkout
          </p>
          <div>
            <button className="block bg-white p-4 mt-5 w-full rounded-full font-semibold text-xl">
              <Link to="/home">continue shopping</Link>
            </button>
            <button className="bg-white p-4 mt-5 w-full rounded-full font-semibold text-xl">
              <Link to="/checkout">Checkout</Link>
            </button>
          </div>
        </div>
      </section>
      ;
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartAction.deleteItem(item.id));
  };
  return (
    <tr className="border-b-2 border-green-200">
      <td className="py-3 px-3 md:px-4 flex justify-center items-center">
        <img src={item.imgUrl} className="w-16 h-16" alt="" />
      </td>
      <td className="py-3 text-center">{item.productName}</td>
      <td className="py-3 text-center">${item.price}</td>
      <td className="py-3 text-center">{item.quantity}px</td>
      <td className="py-3 text-center">
        <span
          onClick={deleteProduct}
          className="flex justify-center items-center"
        >
          <AiFillDelete />
        </span>
      </td>
    </tr>
  );
};

export default Cart;
