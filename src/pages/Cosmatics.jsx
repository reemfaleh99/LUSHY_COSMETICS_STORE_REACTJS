import React, { useEffect, useRef, useState } from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../components/commonSection/CommonSection";

import { filter } from "../assets/data/filter";

import ProductList from "../components/product/ProductList";
import AccordionFilter from "../components/filter/AccordionFilter";
import useGetData from "../custom-hooks/useGetData";

const Cosmatics = () => {
  const { data: products } = useGetData("products");

  const [makeupProducts, setMakeupProducts] = useState(products);
  const [show, setShow] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([10, 200]);

  const filterRef = useRef(null);

  useEffect(() => {
    const filterMakeupProduct = products.filter(
      (item) => item.category === "cosmatics"
    );
    setMakeupProducts(filterMakeupProduct);

    let handler = (e) => {
      if (!filterRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [products]);

  const showAccordion = () => {
    setShow(!show);
  };

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "all") {
      const filteredProduct = products.filter(
        (item) => item.category === "cosmatics"
      );
      setMakeupProducts(filteredProduct);
    }

    if (filterValue === "featured") {
      const filteredProduct = products.filter(
        (item) => item.type === "featured" && item.category === "cosmatics"
      );
      setMakeupProducts(filteredProduct);
    }

    if (filterValue === "bestselling") {
      const filteredProduct = products.filter(
        (item) => item.type === "bestselling" && item.category === "cosmatics"
      );
      setMakeupProducts(filteredProduct);
    }

    if (filterValue === "newest") {
      const filteredProduct = products.filter(
        (item) => item.type === "newest" && item.category === "cosmatics"
      );
      setMakeupProducts(filteredProduct);
    }

    if (filterValue === "pricelow") {
      const sortedProducts = [...makeupProducts].sort(
        (a, b) => a.price - b.price
      );
      setMakeupProducts(sortedProducts);
    }

    if (filterValue === "pricehight") {
      const sortedProducts = [...makeupProducts].sort(
        (a, b) => b.price - a.price
      );
      setMakeupProducts(sortedProducts);
    }
  };

  const handleBrandChange = (brands) => {
    setSelectedBrands(brands);
    applyFilters(brands, selectedDepartments, selectedPriceRange);
  };

  const handleDepartmentChange = (departments) => {
    setSelectedDepartments(departments);
    applyFilters(selectedBrands, departments, selectedPriceRange);
  };

  const handlePriceChange = (priceRange) => {
    setSelectedPriceRange(priceRange);
    applyFilters(selectedBrands, selectedDepartments, priceRange);
  };

  const applyFilters = (brands, departments, priceRange) => {
    let filteredProducts = products.filter(
      (item) => item.category === "cosmatics"
    );

    if (brands.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        brands.includes(item.brand)
      );
    }

    if (departments.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        departments.includes(item.department)
      );
    }

    filteredProducts = filteredProducts.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    setMakeupProducts(filteredProducts);
  };
  const cosmeticFilters = filter.filter(
    (filterItem) => filterItem.category === "cosmatics"
  );

  return (
    <Helmet title={"Makeup"}>
      <CommonSection
        title="Makeup"
        desc1="for good -"
        desc2=" We believe that good makeup should be easy applying"
        img="https://images.unsplash.com/photo-1661346377812-c7671e09f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1ha2V1cCUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
      />
      <section className="relative">
        <div
          className={`overlay ${show ? "show" : ""}`}
          onClick={() => setShow(false)}
        ></div>
        <div className="flex flex-col md:flex-row justify-between md:items-center ">
          <p className="text-xl font-medium" data-aos="fade-right">
            {makeupProducts.length} products
          </p>
          <div className="flex items-center gap-5 " ref={filterRef}>
            <select
              onChange={handleFilter}
              className="cursor-pointer border-green-300 border-2 p-4 mt-5 w-3/4 md:w-72 rounded-full font-semibold text-lg"
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
              className="bg-green-300 p-4 mt-5 md:w-52 rounded-full font-semibold text-lg hover:bg-green-500 transition"
            >
              Filter
            </button>

            {show && (
              <AccordionFilter
                items={cosmeticFilters}
                onBrandChange={handleBrandChange}
                depts={handleDepartmentChange}
                onPriceChange={handlePriceChange}
              />
            )}
          </div>
        </div>
        <div className="mt-16 ">
          {makeupProducts.length === 0 ? (
            <h1 className="text-center text-lg font-medium">
              No products found
            </h1>
          ) : (
            <ProductList data={makeupProducts} />
          )}
        </div>
      </section>
    </Helmet>
  );
};

export default Cosmatics;
