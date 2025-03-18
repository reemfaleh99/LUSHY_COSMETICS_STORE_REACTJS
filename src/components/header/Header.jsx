import React from "react";
import HeaderSlider from "./HeaderSlider";
import MultiFilters from "./MultiFilters";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="bg-gradient-to-r from-gray-100 to-green-100 mt-28 mb-3 mx-[30px] md:mx-[90px] 
    p-10 rounded-xl flex flex-col gap-10 items-center lg:flex-row"
    >
      <div className="md:w-1/2 w-full" data-aos="fade-right">
        <h1 className="font-cairo text-2xl md:text-7xl font-semibold leading-tight mb-5">
          Try <span className="font-edu">luxury</span> cosmatics
          <br />
          that <span className="font-edu">everyone</span> deserves
        </h1>
        <p className="text-xl font-medium text-gray-700 capitalize">
          make your beauty routine with Lushy <br />
          and unveil your radiant glow today!
        </p>
        <button className="bg-green-300 p-4 my-10 w-52 rounded-full font-semibold text-xl hover:bg-green-500 transition">
          <Link to="/cosmatics">Shop Now &gt;&gt;</Link>
        </button>
        <HeaderSlider />
      </div>

      <MultiFilters />
    </div>
  );
};

export default Header;
