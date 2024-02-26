import { useEffect, useRef } from 'react'
import lottie from "lottie-web";
import animationData from "../utils/lottie.json";
import HeaderCarousal from './HeaderCarousal';

const BannerSection1 = () => {
    const lottieRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const headerText = useRef<HTMLDivElement>(null);
    const headerMainHeading = useRef<HTMLHeadingElement>(null);
    const HeaderSlide = useRef<HTMLDivElement>(null);

    const images = [
        {
          url: "/Image/1.png",
          referance: useRef<HTMLImageElement>(null),
          getTransform: (frame: any) => `translate3d(${frame / 60}em, -${frame / 15}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-${frame / 10}deg) skew(0deg, 0deg)`,
          defaultTransform: `translate3d(0em, -1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
        },
        {
          url: "/Image/2.png",
          referance: useRef<HTMLImageElement>(null),
          getTransform: (frame: any) => `translate3d(${frame / 60}em, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-${frame / 20}deg) skew(0deg, 0deg)`,
          defaultTransform: `translate3d(-1em, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
        },
        {
          url: "/Image/3.png",
          referance: useRef<HTMLImageElement>(null),
          getTransform: (frame: any) => `translate3d(-${frame / 20}em, ${frame / 30}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-${frame / 40}deg) skew(0deg, 0deg)`,
          defaultTransform: `translate3d(0em, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
        },
        
        {
          url: "/Image/4.png",
          referance: useRef<HTMLImageElement>(null),
          getTransform: (frame: any) => `translate3d(${frame / 27}em, -${frame / 30}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${frame / 10}deg) skew(0deg, 0deg)`,
          defaultTransform: `translate3d(1em, -1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
        },
        {
          url: "/Image/5.png",
          referance: useRef<HTMLImageElement>(null),
          getTransform: (frame: any) => `translate3d(-${frame / 34}em, ${frame / 70}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${frame / 20}deg) skew(0deg, 0deg)`,
          defaultTransform: `translate3d(-1em, 1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
        },
        {
          url: "/Image/6.png",
          referance: useRef<HTMLImageElement>(null),
          getTransform: (frame: any) => `translate3d(-${frame / 8}em, -${frame / 70}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-${frame / 20}deg) skew(0deg, 0deg)`,
          defaultTransform: `translate3d(-1em, -1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
        },
        {
          url: "/Image/7.png",
          referance: useRef<HTMLImageElement>(null),
          getTransform: (frame: any) => `translate3d(-${frame / 15}em, -${frame / 8}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-${frame / 20}deg) skew(0deg, 0deg)`,
          defaultTransform: `translate3d(-1em, -1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
        },
        {
          url: "/Image/8.png",
          referance: useRef<HTMLImageElement>(null),
          getTransform: (frame: any) => `translate3d(-${frame / 8}em, -${frame / 15}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${frame / 14}deg) skew(0deg, 0deg)`,
          defaultTransform: `translate3d(-1em, -1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(10deg) skew(0deg, 0deg)`
        },
        {
          url: "/Image/9.png",
          referance: useRef<HTMLImageElement>(null),
          getTransform: (frame: any) => `translate3d(-${frame / 10}em, -${frame / 30}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${frame / 10}deg) skew(0deg, 0deg)`,
          defaultTransform: `translate3d(-11em, -1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(10deg) skew(0deg, 0deg)`
        },
        {
          url: "/Image/10.png",
          referance: useRef<HTMLImageElement>(null),
          getTransform: (frame: any) => `translate3d(-${frame / 40}em, -${frame / 9}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${frame / 20}deg) skew(0deg, 0deg)`,
          defaultTransform: `translate3d(-1em, -3em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-10deg) skew(0deg, 0deg)`
        },
      ];

    useEffect(() => {
        var animDuration = 800;
        const anim = lottie.loadAnimation({
          container: lottieRef.current!,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData,
        });
    
        function animatebodymovin(duration: number) {
          const scrollPosition = window.scrollY;
          const maxFrames = anim.totalFrames;
          const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
          anim.goToAndStop(frame, true);
        }
        function animateImage() {
          const scrollPosition = window.scrollY;
          const maxFrames = anim.totalFrames;
          const frame = (maxFrames / 500) * (scrollPosition / (animDuration / 500));
          const header = headerRef.current!;
          const headerTextWrapper = headerText.current!;
          const headerMainHeadingWrapper = headerMainHeading.current!;
          const HeaderSlideWrapper = HeaderSlide.current!;
    
          if (scrollPosition) {
            HeaderSlideWrapper.style.marginTop = `120vh`;
            HeaderSlideWrapper.style.opacity = `0`;
          } else {
            HeaderSlideWrapper.style.marginTop = `85vh`;
            HeaderSlideWrapper.style.opacity = `1`;
            HeaderSlideWrapper.style.top = `0`;
          }
    
          if (scrollPosition > 700) {
            images.map((item) => {
              item.referance.current!.style.opacity = `${frame / 120}`;
              const transform = item.getTransform(frame/1.05);
              item.referance.current!.style.transform = transform;
              item.referance.current!.style.transformStyle = 'preserve-3d';
              item.referance.current!.style.width = `${frame / 10}em`;
              item.referance.current!.style.left = `45%`;
            });
          } else {
            images.forEach((item) => {
              item.referance.current!.style.opacity = `0`;
              item.referance.current!.style.transform = item.defaultTransform;
              item.referance.current!.style.width = `8rem`;
              item.referance.current!.style.left = `45%`;
              item.referance.current!.style.transition = `all 0s ease-in-out`;
            });
            header.style!.zIndex = "0";
            headerMainHeadingWrapper!.style.opacity = `1`;
          }
    
          if (scrollPosition > 1800) {
            const transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) scale(${
              frame / 1000
            }, ${frame / 1000}) `;
            headerTextWrapper.style.transform = transform;
            headerTextWrapper.style.opacity = `1`;
            lottieRef.current!.style.display = "none";
          } else {
            headerTextWrapper.style.opacity = `0`;
            lottieRef.current!.style.display = "block";
          }

          if (scrollPosition > 5500) {
            images.forEach((item) => {
              item.referance.current!.style.opacity = `0`;
            });
          }
        }
    
        const onScroll = () => {
          animatebodymovin(animDuration);
          animateImage();
        };
    
        document.addEventListener("scroll", onScroll);
    
        return () => {
          anim.destroy();
          document.removeEventListener("scroll", onScroll);
        };
      }, []);
      
  return (
    <div className="h-[700vh] relative">
    <div className="header_image_sticky" ref={headerRef}>
      <div className="header_text_wrapper" ref={headerText}>
        <div className='text-3xl font-bold text-black'>A radically new type of loyalty experience</div>
      </div>
      <div className="header_image_grid w_layout_grid">
        {images.map((item, index) => (
          <img
            key={index}
            src={item.url}
            ref={item.referance}
            alt=""
            className="opacity-0 transform-style-preserve-3d will-change-transform absolute mt-20 left-[45%] top-[35%] transform -translate-x-1/2 -translate-y-1/2 rounded-2xl"
          />
        ))}
      </div>
    </div>
    <div className="w-full">
      <div className="header_heading">
        <h1
          className="header_main_heading flex justify-center pt-28"
          ref={headerMainHeading}
        >
          Loyalty <span className='redefined_heading mx-4'>Redefined</span> 
        </h1>
      </div>
      <div
        className="fixed md:top-[10%] top-[20%] bg-transparent left-1/2 transform -translate-x-1/2 md:h-[45rem] md:w-[60rem] h-[30rem] w-[30rem]"
        ref={lottieRef}
      ></div>
    </div>
    <div
      className="absolute overflow-hidden w-full"
      ref={HeaderSlide}
    >
      <HeaderCarousal />
    </div>
  </div>
  )
}

export default BannerSection1