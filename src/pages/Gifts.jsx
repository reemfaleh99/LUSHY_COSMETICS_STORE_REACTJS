import React, { useState } from "react";
import Helmet from "../components/Helmet";
import CommonSection from "../components/commonSection/CommonSection";
import { Link } from "react-router-dom";

import products from "../assets/data/items";
import ProductList from "../components/product/ProductList";

const Gifts = () => {
  const giftsFilter = [
    {
      id: 1,
      name: "Gifts under $25",
      path: "undertwintyfive",
      img: "https://plus.unsplash.com/premium_photo-1678377960024-de52c1a872bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1ha2V1cCUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Gifts under $40",
      path: "underforty",
      img: "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1ha2V1cCUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    },

    {
      id: 3,
      name: "All makeup",
      path: "makeupfilter",
      img: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1ha2V1cCUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "All skincare",
      path: "skincarefilter",
      img: "https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1ha2V1cCUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "All fragrance",
      path: "fragrancefilter",
      img: "https://images.unsplash.com/photo-1591375372226-3531cf2eb6d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhZ3JhbmNlJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("");

  const filterProduct = (product) => {
    if (!selectedFilter) return true;

    if (selectedFilter === "undertwintyfive") return product.price < 25;
    if (selectedFilter === "underforty")
      return product.price >= 25 && product.price < 40;
    if (selectedFilter === "makeupfilter") return product.type === "cosmatics";
    if (selectedFilter === "skincarefilter") return product.type === "skin";
    if (selectedFilter === "fragrancefilter")
      return product.type === "fragrance";

    return true;
  };

  const filteredProducts = products.filter(filterProduct);

  return (
    <Helmet title="Gift">
      <CommonSection
        title="Makeup"
        desc1="for good -"
        desc2=" We believe that good makeup should be easy applying"
        img="https://images.unsplash.com/photo-1661346377812-c7671e09f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1ha2V1cCUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
      />
      <section>
        <h2 className="font-edu text-5xl font-semibold leading-tight mb-5 w-2/3">
          Shop All Gifts
        </h2>
        <div className="flex items-center flex-wrap justify-center gap-12 md:gap-24 mt-24 bg-gradient-to-r from-green-100 to-green-200 p-16 rounded-xl">
          <button onClick={() => setSelectedFilter("")}>All Gifts</button>
          {giftsFilter.map((item) => (
            <div key={item.id} onClick={() => setSelectedFilter(item.path)}>
              <img
                src={item.img}
                alt=""
                className="w-24 h-24 md:w-36 md:h-36 rounded-xl mb-5 cursor-pointer"
              />
              <h5 className="font-medium text-center">
                <Link to={item.path}>{item.name}</Link>
              </h5>
            </div>
          ))}
        </div>
        <div className="mt-24 ">
          {filteredProducts.length === 0 ? (
            <h1>No products found</h1>
          ) : (
            <ProductList data={filteredProducts} />
          )}
        </div>
        <div className="text-center mt-16">
          <h4 className="text-2xl font-cairo font-semibold">
            Shop All Gifts + Gift Sets
          </h4>
          <p className="text-gray-500 mt-8">
            When it's time to find that perfect gift, Fenty Beauty has your back
            with a lineup of gift sets designed to shine for any and every
            occasion. Our collection is full of beauty gifts that go beyond just
            beauty, it creates an experience.Looking for the ultimate makeup
            sets? We've curated options that pack a punch, from those viral
            favorites to award-winning stunners—each Fenty gift set is built to
            impress. Celebrating a birthday or marking an anniversary? Make it
            memorable with our skincare gift sets, featuring everything needed
            for that signature Fenty glow.And because we know one size doesn't
            fit all, our gifts cater to every beauty lover on your list.
            Fragrance gift sets? Check. Haircare gifts? Got 'em. And let's not
            forget those haircare gift sets—because who wouldn't want locks
            that’s soft, smooth and repaired?With Fenty Beauty, you’re giving
            more than just a present; you're gifting confidence. So whether it’s
            a "just because" surprise or something for a special day on the
            calendar, reach for our beauty gifts and watch the smiles unfold.
            Celebrate every moment with a touch of glam.
          </p>
        </div>
      </section>
    </Helmet>
  );
};

export default Gifts;
