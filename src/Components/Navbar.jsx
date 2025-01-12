import React, { useState } from "react";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { TbXxx } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showAuthLinksSidebar, setShowAuthLinksSidebar] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const navigate = useNavigate();

  const handleSidebar = () => {
    setShowAuthLinksSidebar(!showAuthLinksSidebar);
  };

  const handleLogoClick = () => {
    navigate("/home/product");
  };

  const handleCartItems = () => {
    navigate("/home/cart");
  };

  const handleWishlistItems = () => {
    navigate("/home/wishlist");
  };

  const toggleUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  const handleLoginClick = () => {
    navigate("/loginpage");
    setShowUserOptions(false);
  };

  const handleSignupClick = () => {
    navigate("/signuppage");
    setShowUserOptions(false);
  };

  return (
    <div className="bg-white shadow-2xl w-full py-4 px-6">
      <div className="flex justify-between items-center">
        <button onClick={handleSidebar} className="flex space-x-6">
          <RiMenu2Line />
        </button>
        {showAuthLinksSidebar && <Sidebar />}

        <div className="logo flex" onClick={handleLogoClick}>
          <TbXxx className="text-5xl sm:text-6xl cursor-pointer" />
        </div>

        <div className="flex space-x-6 items-center relative">
          <div className="search relative flex items-center">
            <input
              type="search"
              placeholder="Search"
              className="border p-2 pl-10 w-full bg-gray-100 rounded-xl"
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl">
              <IoSearch />
            </span>
          </div>

          <div className="profile flex space-x-4 relative">
            <FaUser
              onClick={toggleUserOptions}
              className="cursor-pointer"
            />
            {showUserOptions && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-50">
                <ul className="text-sm">
                  <li
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLoginClick}
                  >
                    Login
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    onClick={handleSignupClick}
                  >
                    Signup
                  </li>
                </ul>
              </div>
            )}
            <FaHeart
              onClick={handleWishlistItems}
              className="cursor-pointer"
            />
            <FaShoppingCart
              onClick={handleCartItems}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
