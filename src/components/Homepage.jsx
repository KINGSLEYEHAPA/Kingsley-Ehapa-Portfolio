import React from "react";
import portrait from "../assets/portrait.jpg";
import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const Homepage = () => {
  return (
    <div className="w-full px-4 h-[160rem] bg-slate-700 ">
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
      <main className="w-full h-[45rem] lg:h-[24rem] flex-col lg:flex lg:flex-row mt-10 space-y-4  lg:space-y-0 mx-0 ">
        {" "}
        <div className=" h-96 lg:h-full w-full flex gap-16 md:gap-8 ssm:0 justify-start lg:px-4 order-2 lg:order-1">
          <div
            data-aos="zoom-out-up"
            className=" w-72 md:w-80 h-56 ssm:h-96 md:h-full  "
          >
            <img className="w-full h-full rounded-lg" src={portrait} alt="" />
          </div>
          <div
            data-aos="flip-up"
            className=" w-72 ssm:w-72 md:w-72 h-72 ssm:h-72  lg:mr-6 md:mr-56 p-1 flex flex-col justify-start items-start space-y-6 ssm:space-y-12 lg:space-y-20"
          >
            <div className="text-slate-300 space-y-2">
              <h3 className="text-2xl">Kingsley Omozogie Ehapa</h3>
              <p className="text-sm"> I'm a Frontend Software Developer</p>
            </div>
            <div className="text-slate-300 text-sm">
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
            <div className="flex gap-6 text-white text-xl">
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
        <div className=" bg-slate-700 h-80 lg:h-full w-screen translate-x-[-32px] lg:w-full lg:w-screen order-1 lg:order-2 p-4  pl-14 pb-12  flex justify-center items-center mx-0">
          <h1
            data-aos="fade-down-left"
            className="text-5xl md:text-6xl xl:text-7xl text-slate-300 hover:text-white mb-28 ssm:mb-0 "
          >
            I Build Beautiful Web Applications...
          </h1>
        </div>
      </main>
      {/* Skills Section */}

      <div className="mx-8">
        <h3 className="text-slate-300 mt-24 text-2xl md:text-4xl">Skills</h3>
        <hr className="w-full mt-2 border-b-2  border-slate-300"></hr>
        <div className="mt-4 flex flex-col gap-10 ">
          <div className="flex gap-12">
            <p className="flex gap-2   text-lg ssm:text-2xl text-slate-300 w-36">
              <FaReact />
              <span>React</span>
            </p>
            <div className="w-72 ssm:w-full h-56 bg-white p-4">
              <p>
                I have intermediate experience working with React and different
                libraries with the tech. I am experienced writing applications
                using React, React-router-dom for routing,React redux for state
                management.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-12">
            <p className="flex gap-2  text-lg ssm:text-2xl text-slate-300 w-36">
              <FaCss3 />
              <span>CSS3</span>
            </p>
            <div className="w-72 ssm:w-full h-56 bg-white p-4">
              <p>
                I have intermediate experience working with React and different
                libraries with the tech. I am experienced writing applications
                using React, React-router-dom for routing,React redux for state
                management.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-12">
            <p className="flex gap-2 text-lg ssm:text-2xl text-slate-300 w-36">
              <FaHtml5 />
              <span>HTML5</span>
            </p>
            <div className="w-72 ssm:w-full h-56 bg-white p-4">
              <p>
                I have intermediate experience working with React and different
                libraries with the tech. I am experienced writing applications
                using React, React-router-dom for routing,React redux for state
                management.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-12">
            <p className="flex gap-2 text-lg ssm:text-2xl text-slate-300 w-36">
              <SiJavascript />
              <span>Javascript ES6+</span>
            </p>
            <div className="w-72 ssm:w-full h-56 bg-white p-4">
              <p>
                I have intermediate experience working with React and different
                libraries with the tech. I am experienced writing applications
                using React, React-router-dom for routing,React redux for state
                management.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-12">
            <p className="flex gap-2 text-lg ssm:text-2xl text-slate-300 w-36">
              <SiTailwindcss />
              <span>TailwindCSS 3.0</span>
            </p>
            <div className="w-72 ssm:w-full h-56 bg-white p-4">
              <p>
                I have intermediate experience working with React and different
                libraries with the tech. I am experienced writing applications
                using React, React-router-dom for routing,React redux for state
                management.{" "}
              </p>
            </div>
          </div>
          <div className="">
            <p className=" ml-8 ssm:ml-9 text-lg ssm:text-2xl text-slate-300 ">
              <span>AJAX</span>
            </p>
            <div className="w-56 ssm:w-full h-56 bg-white p-4 ml-40 ssm:ml-48">
              <p>
                I have intermediate experience working with React and different
                libraries with the tech. I am experienced writing applications
                using React, React-router-dom for routing,React redux for state
                management.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
