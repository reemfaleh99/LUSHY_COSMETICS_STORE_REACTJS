import React from "react";
import { Link } from "react-router-dom";

const GiftCard = () => {
  const gift = [
    {
      name: "makeup ",
      img: "https://plus.unsplash.com/premium_photo-1670444683903-9f4096dd6e02?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "perfume ",
      img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1ha2V1cCUyMHByb2R1Y3QlMjB3aXRob3V0JTIwYmFja2dyb3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "skincare ",
      img: "https://images.unsplash.com/photo-1556756483-7bf188a604e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    },
  ];
  return (
    <section>
      <h2
        className="text-center text-4xl font-semibold font-cairo uppercase"
        data-aos="fade-up"
      >
        shop <br /> holiday gift guide
      </h2>
      <div className="flex flex-col md:flex-row justify-between mt-10 items-start gap-5 cursor-pointer">
        {gift.map((item, index) => (
          <Link to="/gift" className="md:w-1/3 w-full relative gift-img ">
            <div key={index}>
              <img src={item.img} alt="" className="h-[700px]" />
              <span
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white
          text-5xl text-center font-bold font-edu "
              >
                {item.name} <br /> gift
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GiftCard;
