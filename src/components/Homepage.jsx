import React from "react";
import portrait from "../assets/portrait.jpg";
import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Homepage = () => {
  return (
    <div className="w-full px-4 h-[60rem]">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          position: "absolute",
          width: "100%",
          minHeight: "100%",
          top: "0",
          left: "0",
          zIndex: "-5",
          backgroundColor: "rgb(51 65 85)",
        }}
      ></div>
      <main className="w-full h-[45rem] lg:h-[24rem] flex-col lg:flex lg:flex-row mt-10 space-y-4  lg:space-y-0">
        {" "}
        <div className=" h-96 lg:h-full w-full flex gap-2 md:gap-8 ssm:0 justify-start lg:px-4 order-2 lg:order-1">
          <div
            data-aos="zoom-out-up"
            className=" w-72 md:w-80 h-56 ssm:h-96 md:h-full  "
          >
            <img className="w-full h-full rounded-lg" src={portrait} alt="" />
          </div>
          <div className=" w-72 ssm:w-72 md:w-72 h-72 ssm:h-72  lg:mr-6 md:mr-56 p-1 flex flex-col justify-start items-start space-y-4 ssm:space-y-12 lg:space-y-20">
            <div className="text-slate-300 space-y-2">
              <h3 className="text-2xl">Kingsley Omozogie Ehapa</h3>
              <p className="text-sm"> I'm a Frontend Software Developer</p>
            </div>
            <div>
              <div className="flex justify-start space-x-8 px-1 mx-auto">
                <p>PHONE:</p>
                <p> +2348156171958</p>
              </div>
              <div className="flex justify-start space-x-11 px-1 mx-auto">
                <p> EMAIL:</p>
                <p> kessity09@gmail.com</p>
              </div>
              <div className="flex justify-start space-x-5 px-1 mx-auto">
                <p>ADDRESS:</p>
                <p> Lagos,Nigeria</p>
              </div>
            </div>
            <div className="flex gap-6 text-white">
              <a href="#" className="hover:text-slate-300">
                <BsLinkedin />{" "}
              </a>
              <a href="#" className="hover:text-slate-300">
                <BsGithub />{" "}
              </a>
              <a href="#" className="hover:text-slate-300">
                <BsTwitter />{" "}
              </a>
              <a href="#" className="hover:text-slate-300">
                <BsInstagram />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className=" h-96 lg:h-full w-full lg:w-screen order-1 lg:order-2 p-4 flex justify-center items-center">
          <h1
            data-aos="fade-down-left"
            className="text-5xl md:text-7xl text-slate-300 hover:text-white "
          >
            I Build Beautiful Web Applications...
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
