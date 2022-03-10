import React from "react";
import portrait from "../assets/portrait.jpg";

const Homepage = () => {
  return (
    <div className="w-full px-4 h-[60rem]">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 80%)",
          position: "absolute",
          width: "100%",
          minHeight: "100%",
          top: "0",
          left: "0",
          zIndex: "-1",
          backgroundColor: "rgb(51 65 85)",
        }}
      ></div>
      <main className="w-full h-[45rem] lg:h-[24rem] flex-col lg:flex lg:flex-row mt-10 space-y-4  lg:space-y-0">
        {" "}
        <div className=" h-96 lg:h-full w-full flex gap-2 md:gap-8 ssm:0 justify-start lg:px-4 order-2 lg:order-1">
          <div data-aos="zoom-out-up" className="w-80 h-88 md:h-full  ">
            <img className="w-full h-full rounded-lg" src={portrait} alt="" />
          </div>
          <div className="bg-green-700 w-72 ssm:w-60 md:w-56  h-full lg:mr-6 md:mr-56">
            <div>
              <h3>Kingsley Omozogie Ehapa</h3>
              <p> Frontend Software Developer</p>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className=" h-96 lg:h-full w-full lg:w-screen order-1 lg:order-2 p-4 flex justify-center items-center">
          <h1
            data-aos="fade-down-left"
            className="text-5xl md:text-7xl text-slate-300"
          >
            I Build Beautiful Web Applications...
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
