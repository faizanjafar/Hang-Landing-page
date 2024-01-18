import React from "react";

const logo = [
  {
    image: "/Image/logo.svg",
  },
  {
    image: "/Image/c_logo1.svg",
  },
  {
    image: "/Image/c_brand2.svg",
  },
  {
    image: "/Image/c_brand3.svg",
  },
  {
    image: "/Image/c_brand4.svg",
  },
  {
    image: "/Image/c_brand5.svg",
  },
  {
    image: "/Image/c_brand6.svg",
  },
  {
    image: "/Image/c_brand7.svg",
  },
  {
    image: "/Image/logo.svg",
  },
  {
    image: "/Image/c_brand8.svg",
  },
  {
    image: "/Image/c_brand9.svg",
  },
  {
    image: "/Image/c_logo1.svg",
  },{
    image: "/Image/c_brand10.svg",
  },
];

const HeaderCarousal = () => {
  return (
    <div className="slider2">
      <div className="slide-track">
        {logo.map((item, index) => (
          <div className="slide" key={index}>
            <img src={item.image} alt="" className="aspect-square w-[4.5rem]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderCarousal;
