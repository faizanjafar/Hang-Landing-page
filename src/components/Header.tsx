import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <div
        className="menu_icon md:hidden block cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <i className={`fa-solid ${showMenu ? "fa-times" : "fa-bars"} text-2xl`}></i>
      </div>
      <div
        className={`md:flex gap-4 hidden nav_menu ${
          showMenu ? "active" : "null"
        }`}
      >
        <p className="text-base text-black font-bold cursor-pointer hover:underline">
          Blog
        </p>
        <p className="text-base text-black font-bold cursor-pointer hover:underline">
          Careers
        </p>
      </div>
      <div>
        <img src="/Image/band_logo.svg" alt="" />
      </div>
      <div>
        <button className="py-2 px-4 rounded-full text-sm text-black bg-white font-bold shadow-md hover:shadow-lg border-none">
          <a href="#contact">Demo</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
