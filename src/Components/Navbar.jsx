import React, { useState } from "react";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { TbXxx } from "react-icons/tb";

const Navbar = () => {
  const [showAuthLinkssidebar, setShowAuthLinkssidebar] = useState(false);
  const navigate = useNavigate(); 

  const handleSidebar = () => {
    setShowAuthLinkssidebar(!showAuthLinkssidebar);
  };

  const handleWaveTextClick = () => {
    navigate("/"); 
  };

  const handleCartItems = () => {
    setShowProductList(false); 
    navigate("/cart"); 
  };

  const handleWishlistItems = () => {
    setShowProductList(false); 
    navigate("/wishlist");
  };
  const handleProfileClick = () => {
    navigate("/loginpage"); 
  };

  return (
    <div className="bg-white shadow-2xl w-full py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-6">
          <button onClick={handleSidebar}>
            <RiMenu2Line />
            {showAuthLinkssidebar && <Sidebar />}
          </button>
        </div>
        <div className="logo flex">
          <div onClick={handleWaveTextClick}>
            <TbXxx className="text-5xl sm:text-6xl" />
          </div>
        </div>

        <div className="flex space-x-6 items-center relative">
          <div className="search relative flex items-center">
            <input
              type="search"
              name=""
              id="searchbar"
              placeholder="Search"
              className="border p-2 pl-10 w-full bg-gray-100 rounded-xl"
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl">
              <IoSearch />
            </span>
          </div>

          <div className="profile flex space-x-4">
            <FaUser onClick={handleProfileClick} className="cursor-pointer"/> 
           <a href="wishlist"> <FaHeart onClick={handleWishlistItems} /></a>
            <a href="cart"><FaShoppingCart onClick={handleCartItems} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
