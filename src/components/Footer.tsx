import React from "react";

const Footer = () => {
  return (
    <footer className="flex lg:flex-nowrap flex-wrap md:flex-row flex-col-reverse  ">
      <div className="lg:w-1/2 w-full bg-[#5A79ED] min-h-[29rem] relative overflow-x-hidden">
        <h1 className="animate_logo text-white text-5xl font-semibold">Loiale</h1>
      </div>
      <div className="lg:w-1/2 w-full bg-[#414141] min-h-[27rem] h-ful flex justify-start items-center p-12">
        <div className="flex flex-col gap-8">
          <ul className="flex flex-col gap-1">
            <li>
              <a href="" className="text-3xl text-[#b0d4e6] font-semibold">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="text-3xl text-[#b0d4e6] font-semibold">
                Careers
              </a>
            </li>
            <li>
              <a href="" className="text-3xl text-[#b0d4e6] font-semibold">
                Demo
              </a>
            </li>
          </ul>
          <div className="flex gap-2">
            <div className="h-11 w-11 border border-[#5640e8] rounded-full flex justify-center items-center cursor-pointer">
              <i className="fa-brands fa-linkedin text-[#5640e8] text-xl"></i>
            </div>
            <div className="h-11 w-11 border border-[#5640e8] rounded-full flex justify-center items-center cursor-pointer">
              <i className="fa-brands fa-x-twitter text-[#5640e8] text-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
