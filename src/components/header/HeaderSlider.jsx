import React, { useEffect, useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const headerSlider = [
  {
    image:
      "https://nileswestnews.org/wp-content/uploads/2024/04/360_F_273553300_sBBxIPpLSn5iC5vC8FwzFh6BJDKvUeaC.jpg",
  },
  {
    image:
      "https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFrZXVwfGVufDB8fDB8fHww",
  },
];

const HeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = headerSlider.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      slideInterval = setInterval(nextSlide, intervalTime);
    }

    return () => clearInterval(slideInterval);
  }, [currentSlide, slideInterval, autoScroll]);

  return (
    <div className="hidden md:flex flex-col items-center">
      {headerSlider.map((slide, index) => {
        return (
          <div key={index}>
            {index === currentSlide && (
              <>
                <img
                  src={slide.image}
                  alt=""
                  className="w-96 h-96 rounded-full"
                />
              </>
            )}
          </div>
        );
      })}
      <div className="flex mt-5">
        <FaArrowLeft className="arrow me-5 w-5 h-5" onClick={prevSlide} />
        <FaArrowRight className="arrow w-5 h-5" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default HeaderSlider;
