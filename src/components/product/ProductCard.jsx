import React from "react";
import {
  AiFillHeart,
  AiOutlineArrowRight,
  AiOutlineHeart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { cartAction } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import productImg from "../../assets/imgs/product.png";
import { favAction } from "../../redux/slices/favSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favItems = useSelector((state) => state.fav.favItems);
  const isFav = favItems.some((item) => item.id === product.id);

  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        id: product.id,
        productName: product.productName,
        price: product.price,
        imgUrl: product.imgUrl,
      })
    );
    toast.success("Product Added Successfully");
  };

  const toggleFav = () => {
    dispatch(favAction.toggleItem(product));
  };

  return (
    <div
      className={`bg-white p-1 md:p-3 w-96 h-96 rounded-tl-full rounded-tr-full 
        border-2 relative shadow-xl `}
    >
      <div
        className="bg-green-100 h-1/2 rounded-tl-full rounded-tr-full flex
       items-end p-5 "
      >
        <p className="text-gray-400 font-medium text-lg">{product.category}</p>
        <img
          src={productImg}
          alt=""
          className="absolute left-1/2 top-[1%] w-[75%] transform -translate-x-1/2 rotate-12"
        />
        <div
          onClick={toggleFav}
          className="absolute right-8 top-[35%] border-2 rounded-full border-red-500 cursor-pointer hover:bg-red-100 hover:rounded-full transition-all duration-300"
        >
          {isFav ? (
            <AiFillHeart className="w-10 h-10 p-2" color="#ef4444" />
          ) : (
            <AiOutlineHeart className="w-10 h-10 p-2 " color="#ef4444" />
          )}
        </div>
      </div>
      <div className="absolute left-0 bottom-2 w-full">
        <h5 className="pl-3 text-xl font-semibold">{product.productName}</h5>
        <div className="flex items-center justify-between">
          <h5 className="pl-3 text-md">{product.brand}</h5>
          <h5 className="pl-3 me-5">${product.price}</h5>
        </div>
        <div className="flex items-end gap-1 mx-3">
          <button
            onClick={addToCart}
            className="border-green-300 border-2 py-2 md:py-4 mt-2 flex-grow rounded-full font-semibold md:text-xl hover:bg-green-300 transition duration-300"
          >
            Add to cart
          </button>
          <Link to={`/${product.type}/${product.id}`} className="flex-grow-0">
            <AiOutlineArrowRight className="bg-green-200 hover:bg-green-400 duration-300 transition-color p-2 w-8 h-8 md:w-12 md:h-12 rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
