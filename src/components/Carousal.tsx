import React from "react";

const slideItem = [
  {
    heading: "Social media integratons",
    subHeading:
      "Create a sense of exclusivity and accomplishment with status and tiers",
    bgColor: "#414141",
  },
  {
    heading: "Social media integratons1",
    subHeading:
      "Create a sense of exclusivity and accomplishment with status and tiers",
    bgColor: "#414141",
  },
  {
    heading: "Social media integratons",
    subHeading:
      "Create a sense of exclusivity and accomplishment with status and tiers",
    bgColor: "#414141",
  },
  {
    heading: "Social media integratons",
    subHeading:
      "Create a sense of exclusivity and accomplishment with status and tiers",
    bgColor: "#5A79ED",
  },
  {
    heading: "Social media integratons",
    subHeading:
      "Create a sense of exclusivity and accomplishment with status and tiers",
    bgColor: "#414141",
  },
  {
    heading: "Social media integratons",
    subHeading:
      "Create a sense of exclusivity and accomplishment with status and tiers",
    bgColor: "#414141",
  },
];

const Carousal = () => {
  return (
    <div className="slider xl:w-[1250px] lg:w-[1000px] md:w-[700px] sm:w-[500px]">
      <div className="slide-track">
        {slideItem.map((item, index) => (
          <div className="slide" key={index}>
            <div
              className={`bg-[${item.bgColor}] p-8 flex justify-start items-start flex-col text-start rounded-2xl`}
            >
              <h2 className="text-white text-xl font-semibold pb-8">
                {item.heading}
              </h2>
              <p className="text-white text-sm">{item.subHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousal;
