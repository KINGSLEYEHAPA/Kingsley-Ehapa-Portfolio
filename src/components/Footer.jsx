import React from "react";
import { Link } from "react-router-dom";
import { ImStack } from "react-icons/im";
import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiRedux } from "react-icons/si";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div className=" h-[55rem] md:h-[25rem] bg-slate-700 flex flex-col justify-center gap-12 ssmgap-24 items-start p-10 ssm:px-2 md:flex md:flex-row md:justify-between md:px-20">
      <div className="ml-2">
        {" "}
        <Link
          to="/"
          className=" flex items-center gap-1 text-lg ssm:text-xl  lg:text-2xl  text-slate-300 font-bold  pr-3 border-b-2 mb-12 pb-4 "
        >
          <span className=" mx-0 text">
            <ImStack />
          </span>
          <span className=" mx-0">
            Coder - <span className="text-md">Kingsley Omozogie Ehapa</span>
          </span>
        </Link>{" "}
        <div className="flex gap-4 text-white text-2xl">
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
        </div>{" "}
        <div className="space-y-2 mt-8 text-slate-500">
          <p>Lagos Nigeria</p>
          <p>Email:kessity09@gmail.com</p>
          <Link to="/" className="hover:text-white text-xl  ">
            <button className="bg-white text-slate-900  text-lg px-3 py-1 rounded-md mt-8 hover:bg-slate-300 hover:text-slate-700">
              Contact Me
            </button>
          </Link>
          <p> Kingsley Ehapa copyright &copy; 2022</p>
        </div>
      </div>
      <div className="  ml-2 md:mr-14 md:mb-2 md:mt-4">
        <h2 className="mb-5 mt-[-0.5rem]  pb-2 border-b-2 border-white text-xl text-slate-300 font-bold  ">
          Coding Stack
        </h2>

        <div className=" flex flex-col gap-3 text-xs text-white text-center w-44">
          <p className="flex gap-2">
            <FaReact />
            <span>React</span>
          </p>
          <p className="flex gap-2">
            <FaCss3 />
            <span>CSS3</span>
          </p>
          <p className="flex gap-2">
            <FaHtml5 />
            <span>HTML5</span>
          </p>
          <p className="flex gap-2">
            <SiJavascript />
            <span>Javascript ES6+</span>
          </p>
          <p className="flex gap-2">
            <SiTailwindcss />
            <span>TailwindCSS 3.0</span>
          </p>

          <p className="flex gap-2">
            <SiRedux /> <span>React Redux</span>
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Footer;
