import React, { useEffect, useRef, useState } from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../components/commonSection/CommonSection";

import products from "../assets/data/items";
import { filter } from "../assets/data/filter";

import ProductList from "../components/product/ProductList";
import AccordionFilter from "../components/filter/AccordionFilter";

const Fragrance = () => {
  const [fragranceProducts, setFragranceProducts] = useState(products);
  const [show, setShow] = useState(false);

  const filterRef = useRef(null);

  useEffect(() => {
    const filterFragranceProduct = products.filter(
      (item) => item.type === "fragrance"
    );

    setFragranceProducts(filterFragranceProduct);

    let handler = (e) => {
      if (!filterRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const showAccordion = () => {
    setShow(!show);
  };

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "all") {
      const filteredProduct = products.filter(
        (item) => item.type === "fragrance"
      );
      setFragranceProducts(filteredProduct);
    }

    if (filterValue === "featured") {
      const filteredProduct = products.filter(
        (item) => item.category === "feature" && item.type === "fragrance"
      );
      setFragranceProducts(filteredProduct);
    }

    if (filterValue === "bestselling") {
      const filteredProduct = products.filter(
        (item) => item.category === "bestseller" && item.type === "fragrance"
      );
      setFragranceProducts(filteredProduct);
    }

    if (filterValue === "newest") {
      const filteredProduct = products.filter(
        (item) => item.category === "new" && item.type === "fragrance"
      );
      setFragranceProducts(filteredProduct);
    }

    if (filterValue === "pricelow") {
      const sortedProducts = [...fragranceProducts].sort(
        (a, b) => a.price - b.price
      );
      setFragranceProducts(sortedProducts);
    }

    if (filterValue === "pricehight") {
      const sortedProducts = [...fragranceProducts].sort(
        (a, b) => b.price - a.price
      );
      setFragranceProducts(sortedProducts);
    }
  };

  const fragFilters = filter.filter(
    (filterItem) => filterItem.category === "fragrance"
  );

  return (
    <Helmet title={"Fragrance"}>
      <CommonSection
        title="Fragrance"
        desc1="for good -"
        desc2=" We believe that good makeup should be easy applying"
        img="https://images.unsplash.com/photo-1661346377812-c7671e09f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1ha2V1cCUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
      />
      <section className="relative">
        <div
          className={`overlay ${show ? "show" : ""}`}
          onClick={() => setShow(false)}
        ></div>
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <p className="text-xl font-medium">
            {fragranceProducts.length} products
          </p>
          <div className="flex items-center gap-5 " ref={filterRef}>
            <select
              onChange={handleFilter}
              className="cursor-pointer border-green-300 border-2 p-4 mt-5 w-3/4 md:w-72 rounded-full font-semibold text-xl"
            >
              <option value="all">sort by: all</option>
              <option value="featured">sort by: featured</option>
              <option value="bestselling">sort by: bestselling</option>
              <option value="newest">sort by: newest</option>
              <option value="pricelow">sort by: price (low to hight)</option>
              <option value="pricehight">sort by: price (hight to low)</option>
            </select>
            <button
              onClick={showAccordion}
              className="bg-green-300 p-4 mt-5 md:w-52 rounded-full font-semibold text-xl hover:bg-green-500 transition"
            >
              Filter
            </button>
            {show && <AccordionFilter items={fragFilters} />}
          </div>
        </div>
        <div className="mt-16">
          {fragranceProducts.length === 0 ? (
            <h1>No products found</h1>
          ) : (
            <ProductList data={fragranceProducts} />
          )}
        </div>
      </section>
    </Helmet>
  );
};

export default Fragrance;
