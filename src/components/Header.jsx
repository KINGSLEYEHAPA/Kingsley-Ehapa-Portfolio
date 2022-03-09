import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImStack } from "react-icons/im";
import { BiMenuAltRight } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Header = () => {
  AOS.init({ duration: 1200 });
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className=" items-center h-20 relative  flex justify-between w-screen px-6 bg-slate-700">
      <div className="">
        <Link
          to="/"
          className=" flex items-center gap-1 text-xl ssm:text-2xl  lg:text-3xl  text-slate-300 font-bold  pr-3 "
        >
          <span className=" mx-0 text">
            <ImStack />
          </span>
          <span className=" mx-0">Coder</span>
        </Link>
      </div>

      <div className=" gap-8 hidden ssm:flex text-slate-300 md:mr-48">
        <Link to="/" className="hover:text-white   p-1 rounded-md font-bold">
          <p>Home</p>{" "}
        </Link>
        <Link to="/" className="hover:text-white   p-1 rounded-md font-bold">
          {" "}
          <p>Projects</p>{" "}
        </Link>
        <Link to="/" className="hover:text-white  p-1 rounded-md font-bold">
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
              ? "  flex flex-col gap-6 bg-slate-700 absolute ssm:hidden mx-0 top-20 w-full right-1 px-10 py-5 z-20 text-center justify-center items-center h-56 text-slate-300 space-y-2   "
              : "hidden"
          }
        >
          <Link
            to="/"
            className="hover:text-white text-xl "
            onClick={() => {
              setIsMobile(false);
            }}
          >
            <p>Home</p>{" "}
          </Link>
          <Link
            to="/"
            className=" hover:text-white text-xl "
            onClick={() => {
              setIsMobile(false);
            }}
          >
            {" "}
            <p>Projects</p>{" "}
          </Link>

          <Link
            to="/"
            className="hover:text-white text-xl "
            onClick={() => {
              setIsMobile(false);
            }}
          >
            <p>Contact</p>{" "}
          </Link>
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
