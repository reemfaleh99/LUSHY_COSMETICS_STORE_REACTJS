import React from "react";

import useAuth from "../custom-hooks/useAuth";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All-Products",
    path: "/dashboard/all-products",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
];

const AdminNav = () => {
  const currentUser = useAuth();

  return (
    <nav className="px-[10px] md:px-[90px] py-8 flex items-center justify-between fixed top-0 left-0  bg-white w-full z-10 shadow-lg">
      <Link to="/">
        <h4 className="font-bold text-2xl lg:text-4xl font-edu">Lushy</h4>
      </Link>{" "}
      <div className="hidden lg:flex gap-6">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive
                  ? "text-green-500 font-bold"
                  : "text-gray-800 font-semibold"
              } hover:text-green-400 text-xl transition duration-200`
            }
          >
            {item.display}
          </NavLink>
        ))}
      </div>
      <div className="w-16 h-16 rounded-full">
        <img
          src={currentUser.photoURL}
          alt=""
          className="w-16 h-16 rounded-full"
        />
      </div>
    </nav>
  );
};

export default AdminNav;
