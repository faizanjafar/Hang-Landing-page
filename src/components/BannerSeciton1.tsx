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
          url: "/Image/img1.png",
          referance: useRef<HTMLImageElement>(null),
          top: true,
        },
        {
          url: "/Image/img2.png",
          referance: useRef<HTMLImageElement>(null),
          left: true,
        },
        {
          url: "/Image/img3.png",
          referance: useRef<HTMLImageElement>(null),
          right: true,
        },
        {
          url: "/Image/img4.png",
          referance: useRef<HTMLImageElement>(null),
          topLeft: true,
        },
        {
          url: "/Image/img5.png",
          referance: useRef<HTMLImageElement>(null),
          topRight: true,
        },
        {
          url: "/Image/img6.png",
          referance: useRef<HTMLImageElement>(null),
          topLeftCorner: true,
        },
        {
          url: "/Image/img7.png",
          referance: useRef<HTMLImageElement>(null),
          topRightCorner: true,
        },
        {
          url: "/Image/img4.png",
          referance: useRef<HTMLImageElement>(null),
          topLeft2: true,
        },
        {
          url: "/Image/img5.png",
          referance: useRef<HTMLImageElement>(null),
          topRight2: true,
        },
        {
          url: "/Image/img6.png",
          referance: useRef<HTMLImageElement>(null),
          topLeftCorner2: true,
        },
      ];

    useEffect(() => {
        var animDuration = 3000;
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
            HeaderSlideWrapper.style.marginTop = `88vh`;
            HeaderSlideWrapper.style.opacity = `1`;
          }
    
          if (scrollPosition > 2600) {
            let transform = "";
            images.forEach((item) => {
              item.referance.current!.style.opacity = `${frame / 10}`;
              if (item.right) {
                // this image 20%
                transform = `translate3d(-${frame / 40}em, ${
                  frame / 10
                }em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${
                  frame / 20
                }deg) skew(0deg, 0deg)`;

              }
              if (item.left) {
                // second image
                transform = `translate3d(-${frame / 100}em, ${frame / 15}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-${frame / 20
                }deg) skew(0deg, 0deg)`;
              }
              if (item.top) {
                // first image
                transform = `translate3d(-${frame / 13}em, -${frame / 20}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${frame / 20}deg) skew(0deg, 0deg) `;
              }
              if (item.topLeft) {
                // fourth image
                transform = `translate3d(${frame / 17}em, -${frame / 19}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${frame / 10}deg) skew(0deg, 0deg)`;
              }
              if (item.topRight) {
                // fifth image
                transform = `translate3d(${frame / 5}em, ${frame / 70}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${frame / 7}deg) skew(0deg, 0deg)`;
              }
              if (item.topLeftCorner) {
                transform = `translate3d(-${frame / 8}em, -${frame / 70}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-${frame / 20}deg) skew(0deg, 0deg)`;
              }
              if (item.topRightCorner) {
                transform = `translate3d(${frame / 10}em, ${frame / 10}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${frame / 20}deg) skew(0deg, 0deg)`;
              }
              if (item.topLeft2) {
                // third last image
                transform = `translate3d(-${frame / 7}em, ${frame / 15}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-${frame / 15}deg) skew(0deg, 0deg)`;
              }
              if (item.topRight2) {
                transform = `translate3d(${frame / 8}em, -${frame / 40}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${frame / 20}deg) skew(0deg, 0deg)`;
              }
              if (item.topLeftCorner2) {
                // last image
                transform = `translate3d(-${frame / 60}em, -${frame / 15}em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${frame / 20}deg) skew(0deg, 0deg)`;
              }
              item.referance.current!.style.transform = transform;
              item.referance.current!.style.width = `${frame / 7}em`;
    
            });
            header.style.zIndex = "1";
            headerMainHeadingWrapper!.style.opacity = `1`;
          } else {
            images.forEach((item) => {
              if (item.top) {
                item.referance.current!.style.transform = `translate3d(-4em, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
                item.referance.current!.style.left = `0rem`;
              }
              if (item.left) {
                item.referance.current!.style.transform = `translate3d(0em, -1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
              }
              if (item.right) {
                item.referance.current!.style.transform = `translate3d(0em, 1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
              }
              if (item.topLeft) {
                item.referance.current!.style.transform = `translate3d(-3em, 3em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
              }
              if (item.topRight) {
                item.referance.current!.style.transform = `translate3d(1em, 1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
              }
              if (item.topLeftCorner) {
                item.referance.current!.style.transform = `translate3d(-1em, -1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
              }
              if (item.topRightCorner) {
                item.referance.current!.style.transform = `translate3d(1em, 1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
              }
              if (item.topLeft2) {
                item.referance.current!.style.transform = `translate3d(0em, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-10deg) skew(0deg, 0deg)`;
              }
              if (item.topRight2) {
                item.referance.current!.style.transform = `translate3d(0em, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-10deg) skew(0deg, 0deg)`;
              }
              if (item.topLeftCorner2) {
                item.referance.current!.style.transform = `translate3d(-1em, -1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-10deg) skew(0deg, 0deg)`;
              }
              item.referance.current!.style.width = `8rem`;
              item.referance.current!.style.opacity = `0`;
              item.referance.current!.style.left = `45%`;
            });
            header.style!.zIndex = "0";
            headerMainHeadingWrapper!.style.opacity = `1`;
          }
    
          if (scrollPosition > 5500) {
            const transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) scale(${
              frame / 500
            }, ${frame / 500}) `;
            headerTextWrapper.style.transform = transform;
            headerTextWrapper.style.opacity = `${frame / 500}`;
            images.forEach((item) => {
              item.referance.current!.style.opacity = `1`;
            });
            lottieRef.current!.style.display = "none";
          } else {
            headerTextWrapper.style.opacity = `0`;
            images.forEach((item) => {
              item.referance.current!.style.opacity = `1`;
            });
            lottieRef.current!.style.display = "block";
          }
        }
    
        const onScroll = () => {
          animateImage();
          animatebodymovin(animDuration);
        };
    
        document.addEventListener("scroll", onScroll);
    
        return () => {
          anim.destroy();
          document.removeEventListener("scroll", onScroll);
        };
      }, []);
      
  return (
    <div className="h-[1000vh] relative">
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
            className="opacity-0 transform-style-preserve-3d will-change-transform w-8rem absolute mt-20 left-[45%] top-[30%] transform -translate-x-1/2 -translate-y-1/2"
          />
        ))}
      </div>
    </div>
    <div className="w-full">
      <div className="header_heading">
        <h1
          className="header_main_heading flex justify-center pt-24"
          ref={headerMainHeading}
        >
          Loyalty Reimagined
        </h1>
      </div>
      <div
        className="fixed top-[25%] bg-transparent left-1/2 transform -translate-x-1/2 h-[40rem] w-[40rem]"
        ref={lottieRef}
      ></div>
    </div>
    <div
      className="absolute overflow-hidden top-0 w-full"
      ref={HeaderSlide}
    >
      <HeaderCarousal />
    </div>
  </div>
  )
}

export default BannerSection1