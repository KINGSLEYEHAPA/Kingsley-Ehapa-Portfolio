import React from "react";
import portrait from "../assets/KingsleyEhapaShot.jpg";
import Typewriter from "typewriter-effect";
import {
  minestoneProjects,
  capstoneProjects,
  myRecentProjects,
  interTrackProjects,
  allProjects,
} from "../data";
import {
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsFillStarFill,
} from "react-icons/bs";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { DiNodejsSmall, DiGithubFull } from "react-icons/di";
import ProjectCard from "./ProjectCard";
import ProjectCardUpdate from "./ProjectCardUpdate";

const Homepage = () => {
  return (
    <div id="home" className="w-full px-4 min-h-[160rem] bg-slate-700 ">
      <main className="w-full h-[65rem] sm:h-[45rem] lg:h-[22rem] flex-col lg:flex lg:flex-row mt-10 space-y-4  lg:space-y-0 mx-0 ">
        {" "}
        <div className=" h-[45rem] sm:h-96 lg:h-full w-full flex flex-col  items-center sm:flex sm:flex-row gap-16 md:gap-8 ssm:0 sm:justify-start sm:items-center lg:px-4 order-2 lg:order-1">
          <div
            data-aos="zoom-out-up"
            className=" w-[20rem]  sm:w-56 md:w-64 h-96 sm:h-72 ssm:h-96 md:h-full  "
          >
            <img className="w-full h-full rounded-lg" src={portrait} alt="" />
          </div>
          <div
            data-aos="flip-up"
            className=" w-56 ssm:w-72 md:w-72 h-72 ssm:h-72 lg:mr-6 md:mr-56 p-1 flex flex-col justify-start items-start space-y-6 ssm:space-y-8 lg:space-y-12"
          >
            <div className="text-slate-300 space-y-2">
              <h3 className="text-2xl">Kingsley Omozogie Ehapa</h3>
              <p className="text-sm"> I'm a Frontend Software Engineer</p>
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
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kingsley-ehapa-11ba2438/"
                className="hover:text-slate-300"
              >
                <BsLinkedin />{" "}
              </a>
              <a
                target="_blank"
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
            </div>
            <div>
              {" "}
              <a
                className="py-2 px-4 bg-white font-bold rounded text-slate-500 hover:bg-slate-900 hover:text-white"
                target="_blank"
                href=" https://drive.google.com/file/d/1D1WBrOU4QqVPtXsIXdEFE6knKnv8TtIi/view?usp=share_link"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className=" bg-slate-700 h-80 lg:h-full w-screen translate-x-[-32px] lg:w-full lg:w-screen order-1 lg:order-2 p-4  pl-14 pb-12  flex justify-center items-center mx-0">
          <h1
            data-aos="fade-down-left"
            className=" text-4xl ssm:text-5xl md:text-6xl xl:text-6xl text-slate-300 hover:text-white mb:16 ssm:mb-28 ssm:mb-0  ml:8  sm:ml-16 ssm:ml-0 font-serif "
          >
            <Typewriter
              options={{
                strings: [
                  "Hi, I'm Kingsley",
                  "I Build Beautiful Web Applications...",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </main>
      {/* Stack Section */}

      <div className="ml-8 mr-6" id="skills">
        <h3 className="text-slate-300 mt-24 text-2xl md:text-4xl">My Skills</h3>
        <hr className="w-full mt-2 border-b-2  border-slate-300"></hr>
        <div className="mt-4 flex flex-col gap-16 ssm:gap-7 py-4 ">
          <div className="flex gap-14 ssm:gap-16">
            <p className="flex gap-2    text-lg ssm:text-xl text-slate-300 w-36">
              <FaReact />
              <span>React</span>
            </p>
            <div className="w-72 ssm:w-full h-64 lg:h-28  px-4 py-1">
              <p
                data-aos="zoom-out-down"
                className="ssm:text-lg text-slate-300"
              >
                I have intermediate experience working with react and different
                libraries with the tech. I am experienced writing applications
                using react, react components,hooks, react-router-dom for
                routing,react redux for state management.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-14 ssm:gap-16">
            <p className="flex gap-2  text-lg ssm:text-xl text-slate-300 w-36">
              <FaCss3 />
              <span>CSS3</span>
            </p>
            <div className="w-72 ssm:w-full h-56 lg:h-28  px-4 py-1">
              <p
                data-aos="zoom-out-down"
                className="ssm:text-lg text-slate-300"
              >
                My CSS3 skill is good and I am very versatile with the rules of
                quickly styling an application.
              </p>
            </div>
          </div>
          <div className="flex gap-14 ssm:gap-16">
            <p className="flex gap-2 text-lg ssm:text-xl text-slate-300 w-36">
              <FaHtml5 />
              <span>HTML5</span>
            </p>
            <div className="w-72 ssm:w-full h-56 lg:h-28 px-4 py-1">
              <p
                data-aos="zoom-out-down"
                className="ssm:text-lg text-slate-300"
              >
                Expert knowledge of HTML5 and Semantics.
              </p>
            </div>
          </div>
          <div className="flex gap-14">
            <p className="flex gap-2 text-lg ssm:text-xl text-slate-300 w-36">
              <SiJavascript />
              <span>Javascript ES6+</span>
            </p>
            <div className="w-72 ssm:w-full h-56 lg:h-28  px-4 py-1">
              <p
                data-aos="zoom-out-down"
                className="ssm:text-lg text-slate-300"
              >
                Advanced Javascript, and ES6+ Syntax.
              </p>
            </div>
          </div>
          <div className="flex gap-14">
            <p className="flex gap-2 text-lg ssm:text-xl text-slate-300 w-36">
              <SiTailwindcss />
              <span>TailwindCSS</span>
            </p>
            <div className="w-72 ssm:w-full h-56 lg:h-28 px-4 py-1 ml-[-0.70rem] ">
              <p
                data-aos="zoom-out-down"
                className="ssm:text-lg text-slate-300"
              >
                I write most of my applications of recent using TailwindCSS.I
                have intermediate to advance skill level
              </p>
            </div>
          </div>
          <div className="flex gap-14">
            <p className="flex gap-2 text-lg ssm:text-xl text-slate-300 w-36">
              <DiNodejsSmall />
              <span>Node JS</span>
            </p>
            <div className="w-72 ssm:w-full h-56 lg:h-28 px-4 py-1 ml-[-0.70rem] ">
              <p
                data-aos="zoom-out-down"
                className="ssm:text-lg text-slate-300"
              >
                I write javascript outside the browser using node js via the
                terminal and also install and manage project dependencies.
              </p>
            </div>
          </div>
          <div className="flex gap-14">
            <p className="flex gap-2 text-lg ssm:text-xl text-slate-300 w-36">
              <DiGithubFull />
              <span>GIT and Github</span>
            </p>
            <div className="w-72 ssm:w-full h-56 lg:h-28 px-4 py-1 ml-[-0.70rem] ">
              <p
                data-aos="zoom-out-down"
                className="ssm:text-lg text-slate-300"
              >
                I use the Github platform for versioning my code.
              </p>
            </div>
          </div>
          <div className="">
            <p className=" ml-8 ssm:ml-9 text-lg ssm:text-xl text-slate-300 ">
              <span>AJAX</span>
            </p>
            <div className="w-32  sm:w-[18rem] ssm:w-[40rem] lg:w-[46rem] xl:w-[65.5rem] h-56 lg:h-28 px-4 py-1 ml-[9rem] sm:ml-[10rem] md:translate-x-7 ">
              <p
                data-aos="zoom-out-down"
                className="ssm:text-lg text-slate-300"
              >
                I am also very conversant with making asynchronous calls to APIs
                and writing AJAX.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div className="ml-8 mr-6 py-6" id="projects">
        <h3 className="text-slate-300 mt-24 text-2xl md:text-4xl">
          My Projects
        </h3>
        <hr className="w-full mt-2 border-b-2  border-slate-300"></hr>
        {/* <div className="mt-8">
          <div className="flex gap-2 text-slate-300 text-xl lg:text-2xl">
            {" "}
            <BsFillStarFill />
            <h3>Inter-track Projects</h3>
          </div>
          <div className=" grid justify-items-center ssm:justify-items-start">
            <ProjectCard myProjects={interTrackProjects} />
          </div>
          <div className="mt-8 grid grid-cols-1 ssm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {" "}
            <ProjectCardUpdate />
            <ProjectCardUpdate />
            <ProjectCardUpdate />
          </div>
        </div> */}
        {/* <div className="mt-8">
          <div className="flex gap-2 text-slate-300 text-xl lg:text-2xl">
            {" "}
            <BsFillStarFill />
            <h3>Recent Projects</h3>
          </div>
          <div className=" grid justify-items-center ssm:justify-items-start">
            <ProjectCard myProjects={myRecentProjects} />
          </div>
        </div> */}

        {/* <div className="mt-8">
          <div className="flex gap-2 text-slate-300 text-xl lg:text-2xl">
            {" "}
            <BsFillStarFill />
            <h3>Capstone Projects</h3>
          </div>
          <div className=" grid justify-items-center ssm:justify-items-start">
            <ProjectCard myProjects={capstoneProjects} />
          </div>
        </div> */}

        <div className="mt-8">
          {/* <div className="flex gap-2 text-slate-300 text-xl lg:text-2xl">
            {" "}
            <BsFillStarFill />
            <h3>Milestone Projects</h3>
          </div> */}

          <div className=" grid grid-cols-1 ssm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <ProjectCard myProjects={allProjects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
