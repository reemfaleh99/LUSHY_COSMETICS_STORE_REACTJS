import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../assets/data/items";
import AccordionFilter from "../components/filter/AccordionFilter";
import Helmet from "../components/Helmet";

import ProductList from "../components/product/ProductList";

import { useDispatch } from "react-redux";
import { cartAction } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { productName, price, imgUrl, subImgs, category, type } = product;
  const relatedProducts = products.filter((item) => item.type === type);
  const [currentImg, setCurrentImg] = useState(imgUrl);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => setCurrentImg(imgUrl), [imgUrl]);

  const changePic = (newImg) => {
    setCurrentImg(newImg);
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const items = [
    {
      id: 1,
      category: "   Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      title: "Lorem",
    },
    {
      id: 2,
      category: "experience",
      title: "Lorem",
    },
  ];

  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        id,
        imgUrl: imgUrl,
        productName: productName,
        price,
        quantity: quantity,
      })
    );
    toast.success("added to cart");
  };
  return (
    <Helmet title={productName}>
      <section className="mt-24">
        <div className="flex flex-col items-center md:flex-row md:items-start justify-between gap-36">
          <div className="w-full md:w-1/2">
            <p className="text-center mb-12 text-2xl font-semibold">
              {productName}
            </p>
            <img
              src={currentImg}
              alt="Product"
              className="w-full h-96 rounded-lg shadow-md"
            />

            <div className="flex justify-center mt-6 gap-4 ">
              {subImgs &&
                subImgs.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Sub ${index}`}
                    className={`w-28 h-28 rounded-lg cursor-pointer ${
                      currentImg === img ? "border-2 border-green-500" : ""
                    }`}
                    onClick={() => changePic(img)}
                  />
                ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <h5 className="text-lg font-semibold mb-4">Summary</h5>
            <p className="my-4 font-medium text-gray-600">
              {productName} / {category}
            </p>
            <h4 className="text-2xl font-semibold mb-4">${price}</h4>
            <p className="mb-8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              officiis alias nihil non ut! Eveniet adipisci odio reiciendis
              aliquam voluptates distinctio aliquid beatae nam deserunt! Ipsam
              expedita molestias ad natus.
            </p>
            <div className="flex items-center justify-center gap-4 md:gap-10 my-10">
              <div className="flex gap-8 text-2xl border-2 rounded-full py-4 px-8 border-green-400 font-medium">
                <button
                  onClick={decreaseQuantity}
                  className="hover:text-green-500"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="hover:text-green-500"
                >
                  +
                </button>
              </div>
              <button
                onClick={addToCart}
                className="uppercase bg-green-300 p-2 sm:p-4 w-40 md:w-52 rounded-full font-semibold
                text-xl hover:bg-green-500 transition-colors duration-300"
              >
                add to cart
              </button>
            </div>
            <div className="absolute md:right-1/4 w-full -right-3/4">
              <AccordionFilter items={items} />
            </div>
          </div>
        </div>
        <div className="mt-36">
          <h3 className="font-semibold font-edu text-4xl my-24">
            You may also like
          </h3>
          <ProductList data={relatedProducts} />
        </div>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
