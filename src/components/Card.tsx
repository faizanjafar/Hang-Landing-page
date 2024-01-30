import React from "react";

interface Props {
  color1: string;
  heading1: string;
  text1: string;
  image1: string;
  color2: string;
  heading2: string;
  text2: string;
  image2: string;
  style1: string;
  style2: string;
  secondCard?: boolean;
}

const Card = ({
  color1,
  heading1,
  text1,
  image1,
  color2,
  heading2,
  text2,
  image2,
  style1,
  style2,
  secondCard = false,
}: Props) => {
  return (
    <>
      <div
        className={`lg:w-2/5 w-11/12 bg-[${color1}] flex flex-col rounded-lg ${
          secondCard ? "feature_card" : ""
        }`}
      >
        <div className="flex items-start justify-start flex-col text-start gap-2 pl-8 pt-8">
          <h4 className={`text-xl font-semibold ${style2}`}>{heading1}</h4>
          <p className={`text-base font-normal text-black ${style2}`}>
            {text1}
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <img src={image1} alt="" />
        </div>
      </div>
      <div
        className={`lg:w-3/5 w-11/12 bg-[#170f2d] flex flex-col justify-between rounded-lg ${
            secondCard ? 'feature_card' : ''
          }`}
      >
        <div className="flex items-start justify-start flex-col text-start gap-2 pb-12 pl-8 pt-8">
          <h4 className={`text-xl font-semibold ${style1}`}>{heading2}</h4>
          <p className={`text-base font-normal ${style1}`}>{text2}</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <img src={image2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Card;
