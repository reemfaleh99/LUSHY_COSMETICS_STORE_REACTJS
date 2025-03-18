import React from "react";

const CommonSection = ({ img, title, desc1, desc2 }) => {
  return (
    <div>
      <div className="relative common-img mt-28">
        <img src={img} alt="" className="h-[500px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative" data-aos="fade-down">
            <p className="text-2xl lg:text-3xl text-white capitalize absolute -top-10 left-[25%] font-semibold font-cairo">
              {desc1}
            </p>
            <h1 className="font-edu font-bold text-5xl lg:text-9xl text-white leading-loose relative">
              {title}
            </h1>
            <p className="text-2xl lg:text-3xl text-white capitalize w-72 absolute -right-[20%] font-semibold font-cairo ">
              {desc2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonSection;
