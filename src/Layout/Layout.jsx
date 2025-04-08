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

      {show && (
        <div className={`overlay ${show ? "show" : ""}`} onClick={closeFav}>
          {show && <AccordionFavorite />}
        </div>
      )}
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
