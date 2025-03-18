import React from "react";
import Helmet from "../components/Helmet";

const About = () => {
  return (
    <Helmet title="About">
      <section className="md:h-[100vh]">
        <div className="flex flex-col md:flex-row h-1/3">
          <p className="bg-green-700 w-full md:w-1/2 h-full p-12 text-white text-xl font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab maxime
            facere perspiciatis voluptatem facilis, vel labore quas rerum minus
            eius odio, assumenda nisi ullam earum. Consequuntur mollitia aperiam
            delectus culpa?
          </p>
          <img
            src="https://welpix.com/wp-content/uploads/2024/06/A-guide-to-skincare-product-photography.webp"
            className="w-full md:w-1/2 h-full"
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row h-1/3 justify-between">
          <div className="bg-green-600 relative p-32">
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rotate-90 text-white text-2xl font-semibold">
              About us
            </span>
          </div>
          <p className="bg-white text-black w-full md:w-1/2 h-full p-12 text-black text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit
            sequi fugiat? Deserunt repellat odio eligendi, nulla nostrum
            laboriosam vitae quis quos expedita velit? Magni numquam ipsum minus
            ut quibusdam.
          </p>
          <div className="bg-green-800 h-full md:w-1/4 "></div>
        </div>
        <div className="flex flex-col md:flex-row items-center h-1/3">
          <img
            src="https://n.nordstrommedia.com/it/1ceb7e8e-ea23-48b0-bf0d-719ed70a6f52.jpeg?h=600&w=750"
            alt=""
            className="w-full md:w-1/2 h-full"
          />
          <p className="bg-green-700 w-full md:w-1/2 h-full p-12 text-white text-xl font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            aspernatur ex sint numquam repellat sapiente omnis? Nobis unde,
            maiores repudiandae perspiciatis at voluptates quia delectus debitis
            distinctio, fugit odio quo.
          </p>
        </div>
      </section>
    </Helmet>
  );
};

export default About;
