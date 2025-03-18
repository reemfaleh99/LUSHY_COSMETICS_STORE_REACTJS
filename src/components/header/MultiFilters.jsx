import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const products = [
  { id: 1, productName: "Hydrating Serum", category: "New" },
  { id: 2, productName: "Lipstick", category: "Sale" },
  { id: 3, productName: "Face Cream", category: "Bestseller" },
];

const FilterComponent = () => {
  const [filter, setFilter] = useState(products[0]?.category);

  const filteredProducts = products.filter(
    (product) => product.category === filter
  );

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div
      className="hidden md:flex flex-col items-center justify-center gap-5 w-[50%]"
      data-aos="fade-left"
    >
      <div className="flex gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`w-fit text-center  py-3 px-5 rounded-full border-2 border-green-400 ${
              filter === category
                ? "text-white bg-green-600"
                : "bg-white hover:bg-green-300 "
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <div className={` rounded-2xl p-3 w-96 bg-white`}>
                <img
                  src="https://images.ctfassets.net/wlke2cbybljx/2YYQBbXfTrFfGqTBWminVs/112603d8b84ddd5482312d4624e7de0d/1x1_Skincare_Still_Life_2021_MCL.jpg?q=80&w=660&h=660&fit=fill&bg=&fm=jpg"
                  className="w-[95%] rounded-2xl mx-3 my-5 h-72"
                  alt="pic"
                />{" "}
                <p className="text-gray-400 font-medium text-lg">
                  {product.category}
                </p>
                <div className="flex items-center justify-between font-semibold text-xl mt-2">
                  <h2>
                    <Link to={`/${product.type}/${product.id}`}>
                      {product.productName}
                    </Link>
                  </h2>
                  <h5>{product.price}</h5>
                  <AiOutlineArrowRight className="bg-green-200 p-2 w-10 h-10 rounded-full" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;
