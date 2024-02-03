import { useEffect } from "react";
import "./styles.css";
import Carousal from "./components/Carousal";
import AOS from "aos";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Banner from "./components/Banner";
import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import Card from "./components/Card";
import StackCard from "./components/StackCard";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const stackCard = [
    {
      image: "/Image/section1/section1.png",
      slide: false,
      color: "#5bfe7f",
      heading: "Modern game design, no coding required",
      text: "Create the most incentivizing experience in loyalty with our expansive inventory of program building blocks.",
    },
    {
      image: "/Image/section1/section2.png",
      slide: false,
      color: "#5640e8",
      heading: "Turn your customers into a community",
      text: "Make loyalty multiplayer with a wide variety of social features",
    },
    {
      image: "",
      slide: true,
      color: "#150044",
      heading: "The first omni-channel solution in loyalty",
      text: "Give your customers a connected journey across all of your touch-points with our ecosystem of out-of-the-box integrations.",
    },
    {
      image: "/Image/section1/section3.png",
      slide: false,
      color: "#93d4f4",
      heading: "Turn your customers into a community",
      text: "Make loyalty multiplayer with a wide variety of social features",
    },
  ];

  const marqueeImage = [
    {
      image: "/Image/card/shopify.png",
    },
    {
      image: "/Image/card/marq.png",
    },
    {
      image: "/Image/card/marq2.png",
    },
    {
      image: "/Image/card/twitter.png",
    },
    {
      image: "/Image/card/discord.png",
    },
    {
      image: "/Image/card/marq2.png",
    },
    {
      image: "/Image/card/shopify.png",
    },
    {
      image: "/Image/card/marq.png",
    },
    {
      image: "/Image/card/twitter.png",
    },
    {
      image: "/Image/card/discord.png",
    },
    {
      image: "/Image/card/marq.png",
    },
    {
      image: "/Image/card/marq2.png",
    },
    {
      image: "/Image/card/discord.png",
    },
  ];

  return (
    <>
      <Header />
      <BannerSection />
      <StackCard stackCard={stackCard} marqueeImage={marqueeImage} />
      <section className="mt-20">
        <div className="container mx-auto xl:w-2/3 lg:w-4/5">
          <div className="flex justify-center items-center flex-col gap-1 pb-12">
            <h3 className="text-[#170e2b] font-bold sm:text-5xl text-3xl">
              Mix & match
            </h3>
            <p className="text-base font-normal text-black">
              program features with ease
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-6 mb-6 lg:justify-start justify-center">
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
          <div className="flex flex-wrap lg:flex-nowrap gap-6 mb-6 flex-row-reverse lg:justify-start justify-center">
            <Card
              color1="#5640e8"
              heading1="Drops & exclusive offers"
              text1="Roll out product drops and exclusive offers with full control
              over quantity and duration"
              image1="/Image/card/card1.png"
              color2="#b2abff"
              heading2="Order ahead"
              text2="Modern order ahead with loyalty integrated by default"
              image2="/Image/card/card_2.png"
              style1="text-white"
              style2="text-white"
            />
          </div>
          <div className="bg-[#4ef19e] md:w-full w-11/12 md:m-0 mx-auto rounded-lg p-8 flex justify-between items-start flex-wrap">
            <div className="flex items-start justify-start flex-col text-start md:w-[30%] w-11/12 gap-2">
              <h4 className="text-xl font-semibold text-black">
                Drops & exclusive offers
              </h4>
              <p className="text-sm font-normal text-black">
                Roll out product drops and exclusive offers with full control
                over quantity and duration
              </p>
            </div>
            <div
              className="md:w-3/5 w-11/12"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <img src="/Image/card/card5.png" alt="" />
            </div>
          </div>
          <div className="mt-8">
            <Carousal />
          </div>
        </div>
      </section>
      <section className="bg-[#1a0251] mt-20 py-32">
        <h2 className="text-white font-semibold sm:text-5xl text-3xl text-center pb-24">
          Effortless set-up & <br /> management
        </h2>
        <div className="container mx-auto xl:w-2/3 lg:w-4/5">
          <div className="flex flex-wrap lg:flex-nowrap gap-6 mb-6 lg:justify-start justify-center">
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
          <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:justify-start justify-center mb-6 flex-row-reverse">
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
        <div className="container mx-auto flex flex-wrap justify-start items-start xl:w-[70%] lg:w-11/12 lg:gap-0 gap-12">
          <div className="lg:w-2/5 sm:w-11/12 w-11/12 flex-col flex gap-3 lg:m-0 mx-auto">
            <h2 className="text-6xl font-semibold text-[#170e2b]">
              Let’s talk
            </h2>
            <p className="text-lg text-[#170e2b] font-normal">
              If you’re thinking about starting a loyalty program or upgrading
              an existing one, we’d love to connect.
            </p>
          </div>
          <div className="lg:w-1/2 sm:w-11/12 w-11/12 m-auto">
            <Form />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default App;
