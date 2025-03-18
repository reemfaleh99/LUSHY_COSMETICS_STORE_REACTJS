import React from "react";
import { AiOutlineArrowRight, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { favAction } from "../../redux/slices/favSlice";
import { cartAction } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

const AccordionFavorite = () => {
  const favItems = useSelector((state) => state.fav.favItems);

  return (
    <div
      className="fixed bg-green-100 top-0 left-0 p-4 md:p-8 w-full lg:w-1/4 z-50 h-[100vh]
     no-scrollbar overflow-y-auto"
    >
      <h3 className="text-left font-edu font-semibold text-2xl my-8">
        Favourite
      </h3>

      {favItems.length > 0 ? (
        favItems.map((item, index) => <FavItem product={item} key={index} />)
      ) : (
        <p className="text-center text-gray-500">No favourite items found.</p>
      )}
    </div>
  );
};

const FavItem = ({ product }) => {
  console.log("Product:", product);

  const dispatch = useDispatch();

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

  const deleteProduct = () => {
    dispatch(favAction.deleteItem({ id: product.id }));
  };
  return (
    <div
      className="bg-white my-4 p-4 rounded-xl flex flex-col lg:flex-row  items-center gap-4"
      key={product.id}
    >
      <div className="w-1/4">
        <img src={product.imgUrl} alt="" className="w-28 h-28 rounded-xl" />
      </div>
      <div className="lg:w-3/4">
        <h5 className="text-xl font-semibold">{product.productName}</h5>
        <h5>${product.price}</h5>
        <div className="flex justify-between items-end gap-2 mt-2">
          <button
            onClick={addToCart}
            className="border-green-200 border-2 p-2 lg:p-4 mt-2 w-full lg:w-3/4 rounded-full font-semibold
             text-lg lg:text-xl hover:bg-green-200 transition-colors"
          >
            Add to cart
          </button>
          <button onClick={deleteProduct}>
            <AiOutlineDelete className="bg-green-100 p-2 w-10 h-10 rounded-full hover:bg-green-200 transition-colors" />
          </button>
          <Link to={`/${product.type}/${product.id}`}>
            <AiOutlineArrowRight className="bg-green-100 p-2 w-10 h-10 rounded-full hover:bg-green-200 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccordionFavorite;
