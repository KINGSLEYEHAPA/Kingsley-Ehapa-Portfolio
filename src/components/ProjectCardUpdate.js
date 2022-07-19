import React from "react";
import { BsGithub, BsLink } from "react-icons/bs";

const ProjectCardUpdate = ({ myProjects }) => {
  return (
    <div className="w-96 h-80 bg-slate-300 shadow-xl rounded-lg p-6 flex justify-start flex-col items-center gap-8">
      <h2 className="text-2xl font-bold text-slate-500">
        React Router page{" "}
        <span className="text-xs p-2 bg-slate-900 text-slate-200 rounded-md">
          InterTrack Project
        </span>
      </h2>
      <p className="text-slate-700 text-md">
        A Food ordering app.The application make calls to a food API and return
        hundreds of food product for the customer to buy.
      </p>
      <div className="flex gap-2">
        <p className="text-slate-700 text-sm font-medium">React</p>
        <p className="text-slate-700 text-sm">Javascript</p>
        <p className="text-slate-700 text-sm">TailWindCSS</p>
      </div>
      <div className="flex gap-8">
        <a
          target="_blank"
          href="https://github.com/KINGSLEYEHAPA?tab=repositories"
          className="hover:text-slate-800 text-2xl   hover:animate-bounce"
        >
          <BsGithub />{" "}
        </a>
        <a
          target="_blank"
          href="https://github.com/KINGSLEYEHAPA?tab=repositories"
          className="hover:text-slate-800 text-2xl"
        >
          <BsLink />{" "}
        </a>
      </div>
    </div>
  );
};

export default ProjectCardUpdate;
