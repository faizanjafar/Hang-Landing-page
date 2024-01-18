import React, { useEffect } from "react";
import "./styles.css";
import Carousal from "./components/Carousal";
import AOS from "aos";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Banner from "./components/Banner";
import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import Card from "./components/Card";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const stackCard = [
    {
      image: "/Image/section1/section1.png",
      color: "#5bfe7f",
      heading: "Modern game design, no coding required",
      text: "Create the most incentivizing experience in loyalty with our expansive inventory of program building blocks.",
    },
    {
      image: "/Image/section1/section2.png",
      color: "#5640e8",
      heading: "Turn your customers into a community",
      text: "Make loyalty multiplayer with a wide variety of social features",
    },
    {
      image: "/Image/section1/section3.png",
      color: "#93d4f4",
      heading: "Turn your customers into a community",
      text: "Make loyalty multiplayer with a wide variety of social features",
    },
  ];

  return (
    <>
      <Header />
      <BannerSection />
      <section>
        {stackCard.map((item, index) => (
          <div
            key={index}
            className="stack_card_sticky_strip shadow_lg"
            style={{ backgroundColor: item.color }}
          >
            <div className={`stack-card_component bg-[${item.color}]`}>
              <div className="flex flex-col justify-between items-center h-full">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-[40px] mb-10 w-[70%] bold text-center leading-tight">
                    {item.heading}
                  </h2>
                  <p className="text-base font-normal text-black pb-12">
                    {item.text}
                  </p>
                </div>
                <img className="max-w-[60vw]" src={item.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="mt-20">
        <div className="container mx-auto w-2/3">
          <div className="flex justify-center items-center flex-col gap-1 pb-12">
            <h3 className="text-[#170e2b] font-bold text-3xl">Mix & match</h3>
            <p className="text-base font-normal text-black">
              program features with ease
            </p>
          </div>
          <div className="flex gap-6 mb-6">
            <Card
              color1="#4ef19e"
              heading1="Minigames"
              text1="Give your customers a reason to stay engaged with rewarding and brandable minigames"
              image1="/Image/card/card1.png"
              color2="#170f2d"
              heading2="Paid memberships & subscriptions"
              text2="Integrate paid memberships or subscriptions instantly"
              image2="/Image/card/card2.png"
              style1="text-white"
              style2="text-black"
            />
          </div>
          <div className="flex gap-6 mb-6 flex-row-reverse">
            <Card
              color1="#5640e8"
              heading1="Drops & exclusive offers"
              text1="Roll out product drops and exclusive offers with full control
              over quantity and duration"
              image1="/Image/card/card1.png"
              color2="#b2abff"
              heading2="Order ahead"
              text2="Modern order ahead with loyalty integrated by default"
              image2="/Image/card/card2.png"
              style1="text-white"
              style2="text-white"
            />
          </div>
          <div className="bg-[#4ef19e] rounded-lg p-8 flex justify-between items-start">
            <div className="flex items-start justify-start flex-col text-start w-[30%] gap-2">
              <h4 className="text-xl font-semibold text-black">
                Drops & exclusive offers
              </h4>
              <p className="text-sm font-normal text-black">
                Roll out product drops and exclusive offers with full control
                over quantity and duration
              </p>
            </div>
            <div className="w-3/5" data-aos="fade-up" data-aos-duration="800">
              <img src="/Image/card/card5.png" alt="" />
            </div>
          </div>
          <div className="mt-8">
            <Carousal />
          </div>
        </div>
      </section>
      <section className="bg-[#1a0251] mt-20 py-32">
        <h2 className="text-white font-semibold text-5xl text-center pb-24">
          Effortless set-up & <br /> management
        </h2>
        <div className="container mx-auto w-2/3">
          <div className="flex gap-6 mb-6">
            <Card
              color1=""
              heading1="Program design support"
              text1="Our team of loyalty experts will hold your hand through it all"
              image1="/Image/card/card1.png"
              color2=""
              heading2="API or white-labeled"
              text2="Choose an implementation that works best for your program"
              image2="/Image/card/card2.png"
              style1="text-white"
              style2="text-white"
              secondCard={true}
            />
          </div>
          <div className="flex gap-6 mb-6 flex-row-reverse">
            <Card
              color1=""
              heading1="Drops & exclusive offers"
              text1="Roll out product drops and exclusive offers with full control
              over quantity and duration"
              image1="/Image/card/card1.png"
              color2=""
              heading2="Order ahead"
              text2="Modern order ahead with loyalty integrated by default"
              image2="/Image/card/card2.png"
              style1="text-white"
              style2="text-white"
              secondCard={true}
            />
          </div>
        </div>
      </section>
      <Banner />
      <section className="bg-[#e9e6f6] py-32" id="contact">
        <div className="container mx-auto flex justify-between items-start w-[70%]">
          <div className="w-2/5 flex-col flex gap-3">
            <h2 className="text-6xl font-semibold text-[#170e2b]">
              Let’s talk
            </h2>
            <p className="text-lg text-[#170e2b] font-normal">
              If you’re thinking about starting a loyalty program or upgrading
              an existing one, we’d love to connect.
            </p>
          </div>
          <div className="w-1/2" >
            <Form />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default App;
