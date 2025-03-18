import makeupPic from "../assets/imgs/makeup.jpg";
import productPic from "../assets/imgs/download.png";

import Helmet from "../components/Helmet";
import { Link } from "react-router-dom";
import products from "../assets/data/items";
import ProductList from "../components/product/ProductList";

const Blog = () => {
  const featureProducts = products.filter(
    ({ category }) => category === "feature"
  );

  return (
    <Helmet title="Blogs">
      <section className="bg-green-100">
        <div className="flex items-end justify-center gap-4 mt-16">
          <h1 className="text-5xl md:text-[8vw] font-edu font-medium">Lushy</h1>
          <p className="font-semibold text-xl md:text-[1vw]">
            Blog about <br /> skincare
            <br />
            makeup <br />
            fragrance
          </p>
        </div>
        <div className="flex flex-col md:flex-row my-24 items-center gap-16 bg-white p-5 rounded-xl">
          <div className="w-full md:w-1/4">
            <p className="text-gray-700 font-medium">November 11, 2025</p>
            <h3 className="font-semibold text-xl my-4">
              10 Steps to Achieve a Minimalist “No-Makeup” Look
            </h3>
            <p className="font-medium leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              hic deleniti reprehenderit, vitae provident velit eius asperiores
              esse modi recusandae ad? Ducimus provident laborum reprehenderit
              voluptatibus distinctio officia nam quos.
            </p>
          </div>
          <div className="w-full md:w-3/4">
            <img src={makeupPic} alt="" className="w-full h-72 rounded-xl" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="border-2 border-white p-4 rounded-xl w-full md:w-2/3">
            <img src="" alt="" />
            <ul className="text-2xl font-medium">
              <li className="mb-4 border-b-2 border-white pb-2">
                The Skin Tint: Chanel Les Beiges Water-Fresh Tint, $70
              </li>
              <li className="mb-4 border-b-2 border-white pb-2">
                The Concealer: Clé de Peau Beauté Concealer SPF 27, $75
              </li>
              <li className="mb-4 border-b-2 border-white pb-2">
                The Lip: Merit Shade Slick Tinted Lip Oil, $24
              </li>
              <li className="mb-4 border-b-2 border-white pb-2">
                The Mascara: Ilia Limitless Lash Lengthening Mascara, $28
              </li>
              <li className="mb-4 border-b-2 border-white pb-2">
                The Highlighter: Westman Atelier Lit Up Highlight Stick, $48
              </li>
              <li>
                The Weightless Powder: Charlotte Tilbury Airbrush Flawless
                Finish, $48
              </li>
            </ul>
          </div>
          <p className="hidden md:block md:text-4xl lg:text-[7vh]  md:w-1/3 font-bold uppercase">
            have you heard about our new collection?
          </p>
        </div>
        <div className="flex flex-col md:flex-row my-24 md:h-[60vh] gap-5 ">
          <p className="text-[5vh] w-1/4 font-semibold uppercase md:border-2 md:border-white p-12">
            spotlight on important articles
          </p>
          <div className="w-full md:w-1/4 bg-white">
            <img src={productPic} alt="" className="h-1/2" />
            <div className="p-5">
              <p className="text-gray-700 font-medium">November 11, 2025</p>
              <h3 className="font-semibold text-xl my-4">
                10 Steps to Achieve a Minimalist “No-Makeup” Look
              </h3>
              <p className="font-medium leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                hic deleniti reprehenderit, vitae provident velit eius
                asperiores esse modi recusandae ad? Ducimus provident laborum
                reprehenderit voluptatibus distinctio officia nam quos.
              </p>
            </div>
          </div>
          <div className="bg-white w-full md:w-1/4">
            <img src={productPic} alt="" className="h-1/2" />
            <div className="p-5">
              <p className="text-gray-700 font-medium">November 11, 2025</p>
              <h3 className="font-semibold text-xl my-4">
                10 Steps to Achieve a Minimalist “No-Makeup” Look
              </h3>
              <p className="font-medium leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                hic deleniti reprehenderit, vitae provident velit eius
                asperiores esse modi recusandae ad? Ducimus provident laborum
                reprehenderit voluptatibus distinctio officia nam quos.
              </p>
            </div>
          </div>
          <div className="bg-white w-full md:w-1/4">
            <img src={productPic} alt="" className="h-1/2" />
            <div className="p-5">
              <p className="text-gray-700 font-medium">November 11, 2025</p>
              <h3 className="font-semibold text-xl my-4">
                10 Steps to Achieve a Minimalist “No-Makeup” Look
              </h3>
              <p className="font-medium leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                hic deleniti reprehenderit, vitae provident velit eius
                asperiores esse modi recusandae ad? Ducimus provident laborum
                reprehenderit voluptatibus distinctio officia nam quos.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-20 mb-24">
          <div className="flex w-full md:w-1/2 md:border-2 md:border-white p-12 gap-10">
            <div>
              <p className="text-gray-700 font-medium">Every Staturday</p>
              <h3 className="font-semibold text-xl my-4">Weekly Sales</h3>
              <p className="font-medium leading-7">
                Stay update with a curated roundup of the week's most
                talked-about products.
              </p>
              <input type="checkbox" name="" id="" />
            </div>
            <div>
              <p className="text-gray-700 font-medium">Every Staturday</p>
              <h3 className="font-semibold text-xl my-4">Weekly Sales</h3>
              <p className="font-medium leading-7">
                Stay update with a curated roundup of the week's most
                talked-about products.
              </p>
              <input type="checkbox" name="" id="" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-[6vh] font-bold capitalize">
              sign up for our newsletter
            </p>
            <button className="bg-green-300 p-4 mt-10 w-full rounded-full font-semibold text-xl">
              <Link to="/signup">Signup Now &gt;&gt;</Link>
            </button>
          </div>
        </div>
        <div>
          <p className="text-[6vh] font-bold capitalize">must-see products</p>
          <ProductList data={featureProducts} />
        </div>
      </section>
    </Helmet>
  );
};

export default Blog;
