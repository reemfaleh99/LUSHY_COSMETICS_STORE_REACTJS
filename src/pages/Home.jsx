import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import FeatureProduct from "../components/featureProduct/FeatureProduct";
import TimerCount from "../components/clock/TimerCount";

import products from "../assets/data/items";
import ProductList from "../components/product/ProductList";
import Info from "../components/info/Info";
import GiftCard from "../components/gift/GiftCard";
import Helmet from "../components/Helmet";
import EncorageSignup from "../components/encorage/EncorageSignup";

const Home = () => {
  const [bestsellerProducts, setBestsellerProducts] = useState([]);
  const [featureProducts, setFeatureProducts] = useState([]);

  useEffect(() => {
    const filteredBestsellerProducts = products.filter(
      (item) => item.category === "bestseller"
    );
    const filteredFeatureProducts = products.filter(
      (item) => item.category === "feature"
    );

    setBestsellerProducts(filteredBestsellerProducts);
    setFeatureProducts(filteredFeatureProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <Header />
      <FeatureProduct datas={featureProducts} />
      <Info />
      <section>
        <h2 className="font-edu text-4xl font-semibold mb-5">Bestseller</h2>
        <ProductList data={bestsellerProducts} />
      </section>
      <TimerCount />
      <GiftCard />
      <EncorageSignup />
    </Helmet>
  );
};

export default Home;
