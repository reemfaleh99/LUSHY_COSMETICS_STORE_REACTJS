import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Routers from "../routes/Routers";
import Footer from "../components/footer/Footer";
import AccordionFavorite from "../components/fav/AccordionFavorite";
import { useLocation } from "react-router-dom";
import AdminNav from "../admin/AdminNav";

const Layout = () => {
  const [show, setShow] = useState(false);

  const location = useLocation();

  const closeFav = () => {
    setShow(false);
    document.body.classList.remove("pause-scroll");
  };

  function toggle() {
    if (!show) {
      document.body.classList.add("pause-scroll");
    } else {
      document.body.classList.remove("pause-scroll");
    }
    setShow(!show);
  }
  return (
    <>
      {location.pathname.startsWith("/dashboard") ? (
        <AdminNav />
      ) : (
        <Navbar toggleFav={toggle} />
      )}

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          show
            ? "bg-black bg-opacity-40 pointer-events-auto"
            : "bg-transparent pointer-events-none"
        }`}
        onClick={closeFav}
      >
        <AccordionFavorite isOpen={show} closeFav={closeFav} />
      </div>
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
