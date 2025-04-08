import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

import useGetData from "../../custom-hooks/useGetData";

const Searchbar = () => {
  const { data: products } = useGetData("products");

  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setActive(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [products]);

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={searchRef} className="relative">
      <input
        type="text"
        className={
          active
            ? "w-64 p-2 rounded-full bg-gray-100 outline-none duration-300"
            : "p-2 duration-300 border-none w-12 placeholder-transparent outline-none bg-green-100 rounded-full"
        }
        placeholder="Search Products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="cursor-pointer absolute top-[50%] right-[12px] -translate-y-[50%]"
        onClick={() => {
          setActive(!active);
        }}
      >
        <FaSearch className="w-6 h-6" onClick={() => setSearchTerm("")} />
      </button>

      {active && searchTerm && (
        <div className="absolute top-12 w-64 bg-white border rounded-lg shadow-lg">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="p-2 border-b last:border-none hover:bg-gray-100 cursor-pointer"
              >
                {product.productName}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No products found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
