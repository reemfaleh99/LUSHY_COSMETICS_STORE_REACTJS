import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { favAction } from "../../redux/slices/favSlice";
import { Link } from "react-router-dom";
import {
  AiFillHeart,
  AiOutlineArrowRight,
  AiOutlineHeart,
} from "react-icons/ai";
import productImg from "../../assets/imgs/download.png";

const SliderProductCard = ({ product }) => {
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
    <div className={`bg-green-100 p-3 m-3 shadow-lg h-68 rounded-lg`}>
      <img src={productImg} alt="" />
      <div>
        <div className="flex justify-between mt-5">
          <p className="text-gray-400 font-medium text-lg">{product.type}</p>
          <div
            onClick={toggleFav}
            className=" border-2 rounded-full border-red-500 cursor-pointer hover:bg-red-100 hover:rounded-full transition-all duration-300"
          >
            {isFav ? (
              <AiFillHeart className="w-10 h-10 p-2" color="#ef4444" />
            ) : (
              <AiOutlineHeart className="w-10 h-10 p-2 " color="#ef4444" />
            )}
          </div>{" "}
        </div>
        <h5 className="w-full truncate text-sm lg:text-md xl:text-lg font-semibold">
          {product.productName}
        </h5>
        <h5>${product.price}</h5>
        <div className="flex items-end gap-1 mx-3">
          <button
            onClick={addToCart}
            className="border-green-300 border-2 py-2 md:py-4 mt-2 flex-grow rounded-full font-semibold md:text-xl hover:bg-green-300 transition duration-300"
          >
            Add to cart
          </button>
          <Link to={`/${product.type}/${product.id}`} className="flex-grow-0">
            <AiOutlineArrowRight className="bg-green-300 hover:bg-green-400 duration-300 transition-color p-2 w-8 h-8 md:w-12 md:h-12 rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderProductCard;
