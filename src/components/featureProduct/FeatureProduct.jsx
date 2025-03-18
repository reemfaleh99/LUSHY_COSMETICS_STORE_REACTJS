import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderProductCard from "./SliderProductCard";

const FeatureProduct = ({ datas }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="flex items-center justify-between" data-aos="fade-up">
        <h2 className="font-cairo text-5xl font-semibold leading-tight mb-5 w-2/3">
          <span className="font-edu">Featured</span> products shop <br />
          our <span className="font-edu">Top</span> picks
        </h2>
        <p className="hidden md:block w-1/3 text-lg">
          <b>Explore our extensive range of products! </b>
          We offer a diverse selection to suit everything. <b>Shop now and </b>
          discover something <b>special just like you</b>
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {datas.map((product, index) => (
            <div key={index}>
              <SliderProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeatureProduct;
