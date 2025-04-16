import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { CgChevronDoubleDown } from "react-icons/cg";

import Searchbar from "../navbar/Searchbar";

import { motion } from "framer-motion";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import { Menus } from "../../assets/data/menu";

import { useSelector } from "react-redux";

import useAuth from "../../custom-hooks/useAuth";
import { signOut, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase.config";
import { storage } from "../../firebase.config";

import { useEffect, useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";

const Navbar = ({ toggleFav }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navigate = useNavigate();

  const toggleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentUser = useAuth();

  const navigateToCart = () => {
    navigate("/cart");
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const totalCartQuantity = useSelector((state) => state.cart.cartItems.length);
  const totalFavQuantity = useSelector((state) => state.fav.totalQuantity);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "flex",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handlePhotoUpload = async () => {
    if (!selectedFile) return toast.error("No file selected");

    try {
      setIsUploading(true);

      const storageRef = ref(
        storage,
        `profilePics/${Date.now()}_${selectedFile.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          setIsUploading(false);
          toast.error("Upload failed: " + error.message);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          await updateProfile(auth.currentUser, { photoURL: downloadURL });
          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            photoURL: downloadURL,
          });

          await auth.currentUser.reload(); // Refresh user data

          toast.success("Profile photo updated!");
          setSelectedFile(null);
          setIsUploading(false);
        }
      );
    } catch (error) {
      setIsUploading(false);
      toast.error("Error: " + error.message);
    }
  };

  return (
    <nav className="px-[10px] md:px-[90px] py-8 flex items-center justify-between fixed top-0 left-0  bg-white w-full z-10 shadow-lg">
      <ul className="hidden lg:flex gap-6">
        {Menus.map((menu, menuIndex) => {
          const hasSubMenu = menu.categories && menu.categories.length > 0;

          return (
            <motion.li
              key={menuIndex}
              className="nav group/link "
              onMouseEnter={() => setHoveredMenu(menuIndex)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive
                      ? "text-green-500 font-bold"
                      : "text-gray-800 font-semibold"
                  } hover:text-green-400 text-xl transition duration-200`
                }
              >
                {menu.display}
                {hasSubMenu && (
                  <CgChevronDoubleDown className="group-hover/link:rotate-180 duration-200" />
                )}
              </NavLink>

              {hasSubMenu && (
                <motion.div
                  className="absolute left-0  top-full bg-white shadow-lg py-6 px-12 w-full"
                  initial="exit"
                  animate={hoveredMenu === menuIndex ? "enter" : "exit"}
                  variants={subMenuAnimate}
                  style={{ transformOrigin: "top center" }}
                >
                  <div className="flex w-full p-12 justify-between">
                    {menu.categories.map((subMenu, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                          {subMenu.title}
                        </h3>
                        <ul className="flex flex-col gap-2 text-lg">
                          {subMenu.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                to={item.path}
                                className="text-gray-600 hover:text-pink-500 transition duration-200"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.li>
          );
        })}
      </ul>
      <Link to="/">
        <h4 className="font-bold text-2xl lg:text-4xl font-edu">Lushy</h4>
      </Link>
      <div className="flex items-center gap-3">
        <Searchbar />
        <button
          onClick={toggleFav}
          className="relative w-10 h-10 rounded-full flex items-center justify-center bg-green-100 hover:bg-green-200 transition"
        >
          <AiOutlineHeart className="w-6 h-6" />
          <span className="absolute right-0 -top-2 bg-black text-white w-5 h-5 rounded-full text-center text-sm">
            {totalFavQuantity}
          </span>
        </button>
        <button
          onClick={navigateToCart}
          className="relative w-10 h-10 rounded-full flex items-center justify-center bg-green-100 hover:bg-green-200 transition"
        >
          <AiOutlineShopping className="w-6 h-6" />
          <span className="absolute right-0 -top-2 bg-black text-white w-5 h-5 rounded-full text-center text-sm">
            {totalCartQuantity}
          </span>
        </button>
        <div className=" flex items-center gap-3">
          <button
            onClick={toggleShowDropdown}
            className="lg:ml-5 w-10 h-10 rounded-full flex items-center justify-center bg-green-100 hover:bg-green-200 transition"
          >
            {currentUser && currentUser.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <AiOutlineUser className="w-6 h-6" />
            )}
          </button>
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="bg-white text-center absolute top-24 p-4 shadow-lg text-xl font-medium rounded-md w-40"
            >
              {currentUser ? (
                <div>
                  <span onClick={logout} className="cursor-pointer block mb-2">
                    Logout
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="block my-2 text-sm"
                  />

                  {selectedFile && (
                    <button
                      onClick={handlePhotoUpload}
                      className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                      disabled={isUploading}
                    >
                      {isUploading ? "Uploading..." : "Save Photo"}
                    </button>
                  )}
                </div>
              ) : (
                <div>
                  <Link
                    to="/signup"
                    className="hover:text-green-500"
                    onClick={() => setShowDropdown(false)}
                  >
                    Signup
                  </Link>
                  <br />
                  <Link
                    to="/login"
                    className="hover:text-green-500"
                    onClick={() => setShowDropdown(false)}
                  >
                    Login
                  </Link>
                  <br />
                  <Link
                    to="/dashboard"
                    className="hover:text-green-500"
                    onClick={() => setShowDropdown(false)}
                  >
                    Dashboard
                  </Link>
                </div>
              )}
            </div>
          )}
          <div>
            <h5 className="font-semibold">
              {currentUser && currentUser.displayName}
            </h5>
            <p className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
              View profile
            </p>
          </div>
        </div>
        <button
          className=" lg:hidden "
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <AiOutlineMenu />
        </button>
        {mobileMenuOpen && (
          <div
            className="absolute top-28 left-0 w-full bg-white shadow-md lg:hidden"
            ref={mobileMenuRef}
          >
            <ul className="flex flex-col p-6 space-y-4">
              {Menus.map((menu, menuIndex) => (
                <li key={menuIndex}>
                  <NavLink
                    to={menu.path}
                    className="block text-center my-5 text-gray-800 font-semibold hover:text-green-400 text-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {menu.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
