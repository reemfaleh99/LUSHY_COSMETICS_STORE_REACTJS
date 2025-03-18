import React from "react";
import Clock from "./Clock";
import { Link } from "react-router-dom";

const TimerCount = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-green-200 flex items-center justify-between lg:px-16">
      <div data-aos="fade-left">
        <h4 className="text-2xl md:text-3xl font-bold mb-5 ">
          Quality Time For Our Offers
        </h4>

        <Clock />

        <Link to="/skin">
          <button className="bg-black text-white p-4 mt-5 w-44 md:w-52 rounded-full font-semibold text-xl hover:bg-gray-900 transition">
            View Store &gt;&gt;
          </button>
        </Link>
      </div>
      <div data-aos="fade-right">
        <img
          src="https://images.unsplash.com/photo-1556228578-567ba127e37f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1ha2V1cCUyMHByb2R1Y3QlMjB3aXRob3V0JTIwYmFja2dyb3VuZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="w-48 h-48 rounded-full hidden md:block"
        />
      </div>
    </section>
  );
};

export default TimerCount;
