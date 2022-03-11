import React from "react";

const ProjectCard = () => {
  return (
    <div className="w-72 h-[38rem] bg-slate-300 rounded-lg shadow-xl mt-8">
      <div className="h-52">
        {" "}
        <img
          className="h-full rounded-tr-lg rounded-tl-lg border-b-4 border-slate-700"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRnR8udFn1CRNmpq3-Y7N1LOqxPWv706qgA&usqp=CAU"
          alt="Project Screenshot"
        />
      </div>
      <div className="p-4 flex gap-6 items-center">
        {" "}
        <a
          href="#"
          className="py-1 px-2 text-slate-300 rounded-md bg-slate-700  text-md hover:bg-white hover:text-slate-700 shadow-lg"
        >
          View Project
        </a>{" "}
        <a
          href="#"
          className="py-1 px-2  text-slate-700  rounded-md bg-white text-md hover:bg-slate-700 hover:text-white shadow-lg "
        >
          {" "}
          View on GitHub
        </a>
      </div>
      <div className="h-28 bg-slate-700 border-2 border-slate-300 p-2">
        <h4 className="text-slate-300 text-md">Project Name</h4>
        <p className="text-slate-500 text-sm">
          Description djsfj kljfskjkfs jsfjsjf kdgdkjgk dklfsdlkjfks dklldkjfl
          dlmflsdjflkjsd dkvdskjfsdk
        </p>
      </div>
      <div className="p-2 ">
        <h3 className="text-xl text-slate-500 pl-2">Skills Used:</h3>
        <div className="mt-4 px-2 text-slate-700">
          <p className="border-2 border-slate-700 pl-2">React</p>
          <p className="border-2 border-slate-700 pl-2">React</p>
          <p className="border-2 border-slate-700 pl-2">React</p>
          <p className="border-2 border-slate-700 pl-2">React</p>
          <p className="border-2 border-slate-700 pl-2">React</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
