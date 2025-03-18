import React from "react";
import { Link } from "react-router-dom";

const EncorageSignup = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-green-100  mb-10 mx-[30px] md:mx-[90px] p-10 rounded-xl  ">
      <p
        className="font-edu text-3xl md:text-5xl font-semibold text-center"
        data-aos="fade-down"
      >
        let's start your makeover with our products
      </p>
      <div className="flex justify-center" data-aos="fade-up">
        <Link to="/blog">
          <button className="bg-green-300 p-4 mt-8 md:mt-16 w-52 rounded-full font-semibold text-xl hover:bg-green-500 transition">
            Start Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EncorageSignup;
