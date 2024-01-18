import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex gap-4">
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
