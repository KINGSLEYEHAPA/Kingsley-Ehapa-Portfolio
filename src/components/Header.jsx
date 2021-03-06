import React, { useState } from "react";
import { Link } from "react-scroll";
import { ImStack } from "react-icons/im";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  AOS.init({ duration: 1200 });
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className=" items-center h-20 relative  flex justify-between w-full px-6 sticky top-0 z-50 bg-slate-700 ">
      <div className="">
        <Link
          to="home"
          offset={-400}
          className=" flex items-center gap-1 text-xl ssm:text-2xl  lg:text-3xl  text-slate-300 font-bold  pr-3 cursor-pointer "
        >
          <span className=" mx-0 text">
            <ImStack />
          </span>
          <span className=" mx-0">Coder</span>
        </Link>
      </div>

      <div className=" gap-8 hidden ssm:flex text-slate-300 md:mr-48">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-400}
          duration={700}
          className="hover:text-white   p-1 rounded-md font-bold cursor-pointer"
        >
          <p>Home</p>{" "}
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="hover:text-white   p-1 rounded-md font-bold cursor-pointer"
        >
          {" "}
          <p>Projects</p>{" "}
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-120}
          duration={1000}
          className="hover:text-white  p-1 rounded-md font-bold cursor-pointer"
        >
          {" "}
          <p>Skills</p>{" "}
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={1000}
          className="hover:text-white  p-1 rounded-md font-bold cursor-pointer"
        >
          {" "}
          <p>Contact</p>{" "}
        </Link>
      </div>

      {isMobile && (
        <div
          data-aos="slide-left"
          data-aos-easing="ease-in-out"
          className={
            isMobile
              ? "  flex flex-row  bg-slate-700/60 absolute ssm:hidden  top-0 w-full right-[0.5px] z-100  text-center justify-end items-center h-screen text-slate-300 space-y-2   "
              : "hidden"
          }
        >
          <div className="w-72 bg-slate-500 h-screen  p-2 flex flex-col items-center gap-4">
            <div className="w-full h-20  flex justify-between items-center px-4 text-2xl text-white border-b-2 border-white mb-10">
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/kingsley-ehapa-11ba2438/"
                  className="hover:text-slate-300"
                >
                  <BsLinkedin />{" "}
                </a>
                <a
                  href="https://github.com/KINGSLEYEHAPA?tab=repositories"
                  className="hover:text-slate-300"
                >
                  <BsGithub />{" "}
                </a>
                <a href="#" className="hover:text-slate-300">
                  <BsTwitter />{" "}
                </a>
                <a href="#" className="hover:text-slate-300">
                  <BsInstagram />{" "}
                </a>
              </div>{" "}
              <span
                className="text-3xl "
                onClick={() => {
                  setIsMobile(false);
                }}
              >
                <MdClose />
              </span>{" "}
            </div>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-400}
              duration={700}
              className="hover:border-b-2 border-b-2 border-slate-500 hover:border-white text-xl pb-2 cursor-pointer"
              onClick={() => {
                setIsMobile(false);
              }}
            >
              <p>Home</p>{" "}
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={30}
              duration={1000}
              className="hover:border-b-2 border-b-2 border-slate-500 hover:border-white text-xl pb-2 cursor-pointer "
              onClick={() => {
                setIsMobile(false);
              }}
            >
              {" "}
              <p>Projects</p>{" "}
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-120}
              duration={1000}
              className="hover:border-b-2 border-b-2 border-slate-500 hover:border-white text-xl pb-2 cursor-pointer"
              onClick={() => {
                setIsMobile(false);
              }}
            >
              {" "}
              <p>Skills</p>{" "}
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
              className="hover:text-white text-xl "
              onClick={() => {
                setIsMobile(false);
              }}
            >
              <button className="bg-white text-slate-900  text-lg px-3 py-1 rounded-md cursor-pointer">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      )}

      <span
        onClick={() => {
          setIsMobile(!isMobile);
        }}
        className="text-slate-300  mr-1 text-3xl ssm:hidden "
      >
        <BiMenuAltRight />
      </span>
    </div>
  );
};

export default Header;
