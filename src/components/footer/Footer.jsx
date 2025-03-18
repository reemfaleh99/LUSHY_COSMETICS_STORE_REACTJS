import React from "react";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className=" bg-gradient-to-r from-gray-100 to-green-300 py-10">
      <div className="flex flex-wrap gap-5 justify-between items-start ">
        <Link to="/">
          <h2 className="text-4xl font-bold font-edu ">Lushy</h2>
        </Link>
        <div>
          <h5 className="text-2xl md:mb-5 font-semibold">About</h5>
          <ul className="text-lg cursor-pointer">
            <li className="hover:pl-2 duration-300 hover:text-xl">About us</li>
            <li className="hover:pl-2 duration-300 hover:text-xl">Features</li>
            <li className="hover:pl-2 duration-300 hover:text-xl">News</li>
            <li className="hover:pl-2 duration-300 hover:text-xl">Career</li>
          </ul>
        </div>
        <div>
          <h5 className="text-2xl md:mb-5 font-semibold">Product</h5>
          <ul className="text-lg cursor-pointer">
            <li className="hover:pl-2 duration-300 hover:text-xl">
              Latest product
            </li>
            <li className="hover:pl-2 duration-300 hover:text-xl">
              popular product
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-2xl  md:mb-5 font-semibold">Company</h5>
          <ul className="text-lg cursor-pointer">
            <li className="hover:pl-2 duration-300 hover:text-xl">Out team</li>
            <li className="hover:pl-2 duration-300 hover:text-xl">Blog</li>
            <li className="hover:pl-2 duration-300 hover:text-xl">Artical</li>
          </ul>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <RiFacebookCircleFill className="w-8 h-8" />
          <RiInstagramFill className="w-8 h-8" />
          <RiPinterestFill className="w-8 h-8" />
          <RiTwitterFill className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
