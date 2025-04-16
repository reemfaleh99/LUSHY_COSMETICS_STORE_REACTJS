import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import FeatureProduct from "../components/featureProduct/FeatureProduct";
import TimerCount from "../components/clock/TimerCount";

import ProductList from "../components/product/ProductList";
import Info from "../components/info/Info";
import GiftCard from "../components/gift/GiftCard";
import Helmet from "../components/Helmet";
import EncorageSignup from "../components/encorage/EncorageSignup";
import useGetData from "../custom-hooks/useGetData";

const Home = () => {
  const [bestsellerProducts, setBestsellerProducts] = useState([]);
  const [featureProducts, setFeatureProducts] = useState([]);

  const { data: products } = useGetData("products");

  useEffect(() => {
    const filteredBestsellerProducts = products.filter(
      (item) => item.type === "bestselling"
    );
    const filteredFeatureProducts = products.filter(
      (item) => item.type === "featured"
    );

    setBestsellerProducts(filteredBestsellerProducts);
    setFeatureProducts(filteredFeatureProducts);
  }, [products]);

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
