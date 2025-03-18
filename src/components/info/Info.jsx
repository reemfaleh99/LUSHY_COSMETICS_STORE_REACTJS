import React from "react";
import { RiBlurOffLine, RiFlowerLine, RiWomenLine } from "react-icons/ri";

const Info = () => {
  return (
    <div className="text-center bg-green-200 p-6 md:py-10">
      <h3
        className="text-2xl md:text-4xl font-semibold mb-5 font-cairo"
        data-aos="fade-up"
      >
        The texture is light with a fresh an pleasant touch
      </h3>
      <div
        className="flex gap-1 md:gap-8 items-center justify-center"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center justify-center">
          <RiFlowerLine className="bg-amber-100 w-16 h-16 mt-5 mb-3 rounded-full p-3" />
          <h5 className="text-lg font-medium">Intentionally made</h5>
        </div>
        <div className="flex flex-col items-center justify-center">
          <RiBlurOffLine className="bg-amber-100 w-16 h-16 mt-5 mb-3 rounded-full p-3" />
          <h5 className="text-lg font-medium">Gentle formulas</h5>
        </div>
        <div className="flex flex-col items-center justify-center">
          <RiWomenLine className="bg-amber-100 w-16 h-16 mt-5 mb-3 rounded-full p-3" />
          <h5 className="text-lg font-medium">For all skin type</h5>
        </div>
      </div>
    </div>
  );
};

export default Info;
