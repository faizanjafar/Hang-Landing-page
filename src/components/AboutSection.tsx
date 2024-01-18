import React from "react";

interface Props {
  heading: string;
  subHeading: string;
  image: string;
  bgColor: string;
}

const AboutSection = ({ heading, subHeading, image, bgColor }: Props) => {
  return (
    <div className="stack_card_sticky_strip shadow_lg">
      <div className={`stack-card_component bg-[${bgColor}]`}>
        <div className="flex flex-col justify-between items-center h-full">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[40px] font-bold mb-10 w-[70%] text-center leading-tight">
              {heading}
            </h2>
            <p className="text-lg font-medium text-black pb-12">{subHeading}</p>
          </div>
          <img className="max-w-[60vw]" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
