import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

interface StackCardProps {
  stackCard: {
    heading: string;
    text: string;
    color: string;
    image: string;
    slide: boolean;
  }[];
  marqueeImage: {
    image: string;
  }[];
}

const StackCard = ({ stackCard, marqueeImage }: StackCardProps) => {

  return (
    <>
      <section className="overflow-hidden">
        {stackCard.map((item, index) => (
          <div
            key={index}
            className="stack_card_sticky_strip shadow_lg"
            style={{ backgroundColor: item.color }}
          >
            <div className={`stack-card_component bg-[${item.color}]`}>
              <div className="flex flex-col justify-between items-center md:h-full h-[80vh]">
                <div className="flex flex-col justify-center text-center items-center w-11/12">
                  <h2
                    className={`md:text-[40px] sm:text-[30px] text-[30px] mb-10 md:w-[70%] sm:[80%] bold text-center leading-tight ${
                      item.slide && "text-white"
                    }`}
                  >
                    {item.heading}
                  </h2>
                  <p
                    className={`text-base font-normal ${
                      item.slide && "text-white pb-36"
                    } text-black pb-12`}
                  >
                    {item.text}
                  </p>
                </div>
                {item.slide && (
                  <>
                    <div className="stack-card_centre-logo bg-[#5A79ED]">
                      {/* <img src="/Image/card/white_logo.svg" alt="" /> */}
                      <span className="logo_loiale logo_color">loiale</span>
                      
                    </div>
                    <div className="scroll_images_1">
                      <Marquee gradient={false} speed={20} direction="right">
                        {marqueeImage.map((marqueeItem, marqueeIndex) => (
                          <div
                            key={marqueeIndex}
                            className="border border-[#21333c] md:w-[15em] w-[8em] flex justify-center items-center aspect-square"
                          >
                            <img
                              src={marqueeItem.image}
                              alt=""
                              className="aspect-square md:w-[5rem] w-[3rem] max-w-full"
                            />
                          </div>
                        ))}
                      </Marquee>
                    </div>
                    <div className="scroll_images_2">
                      <Marquee gradient={false} speed={20} direction="left">
                        {marqueeImage.map((marqueeItem, marqueeIndex) => (
                          <div
                            key={marqueeIndex}
                            className="border border-[#21333c] md:w-[15em] w-[8em] flex justify-center items-center aspect-square"
                          >
                            <img
                              src={marqueeItem.image}
                              alt=""
                              className="aspect-square md:w-[5rem] w-[3rem] max-w-full"
                            />
                          </div>
                        ))}
                      </Marquee>
                    </div>
                  </>
                )}
                <img
                  className="lg:max-w-[60vw] sm:w-full"
                  src={item.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default StackCard;
