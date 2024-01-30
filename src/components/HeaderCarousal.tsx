import Marquee from "react-fast-marquee";

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
  },
  {
    image: "/Image/c_brand10.svg",
  },
];

const HeaderCarousal = () => {
  return (
    <>
      <Marquee
        gradient={false}
        speed={30}
      >
        {logo.map((item, index) => (
          <div className="p-9" key={index}>
            <img src={item.image} alt="" className="aspect-square w-[4.5rem]" />
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default HeaderCarousal;
