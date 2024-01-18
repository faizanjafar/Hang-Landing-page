import React from "react";

const slideItem = [
  {
    heading: "Social media integratons",
    subHeading:
      "Create a sense of exclusivity and accomplishment with status and tiers",
    bgColor: "#5640e8",
  },
  {
    heading: "Social media integratons",
    subHeading:
      "Create a sense of exclusivity and accomplishment with status and tiers",
    bgColor: "#1a0251",
  },
  {
    heading: "Social media integratons",
    subHeading:
      "Create a sense of exclusivity and accomplishment with status and tiers",
    bgColor: "#5640e8",
  },
  {
    heading: "Social media integratons",
    subHeading:
      "Create a sense of exclusivity and accomplishment with status and tiers",
    bgColor: "#1a0251",
  },
  {
    heading: "Social media integratons",
    subHeading:
      "Create a sense of exclusivity and accomplishment with status and tiers",
    bgColor: "#1a0251",
  },
  {
    heading: "Social media integratons",
    subHeading:
      "Create a sense of exclusivity and accomplishment with status and tiers",
    bgColor: "#5640e8",
  },
];

const Carousal = () => {
  return (
    <div className="slider">
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
