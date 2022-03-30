import React from "react";

const ProjectCard = ({ myProjects }) => {
  return (
    <>
      {myProjects.map((item, index) => {
        return (
          <div
            data-aos="zoom-out-right"
            className="w-72 h-[40rem] bg-slate-300 rounded-lg shadow-xl mt-8"
            key={index}
          >
            <div className="h-52">
              {" "}
              <img
                className="h-full rounded-tr-lg rounded-tl-lg border-b-4 border-slate-700"
                src={
                  item.img
                    ? item.img
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRnR8udFn1CRNmpq3-Y7N1LOqxPWv706qgA&usqp=CAU"
                }
                alt={item.name}
              />
            </div>
            <div className="p-4 flex gap-6 items-center">
              {" "}
              <a
                target="_blank"
                href={item.link_deployment}
                className="py-1 px-2 text-slate-300 rounded-md bg-slate-700 text-xs sm:text-md hover:bg-white hover:text-slate-700 shadow-lg"
              >
                View Project
              </a>{" "}
              <a
                href={item.link_github}
                target="_blank"
                className="py-1 px-2  text-slate-700  rounded-md bg-white text-xs sm:text-md hover:bg-slate-700 hover:text-white shadow-lg "
              >
                {" "}
                View on GitHub
              </a>
            </div>
            <div className="h-32 bg-slate-700 border-2 border-slate-300 p-2">
              <h4 className="text-slate-300 text-md">{item.name}</h4>
              <p className="text-slate-500 text-sm">
                {item.description.slice(0, 120)}
              </p>
            </div>
            <div className="p-2 ">
              <h3 className="text-xl text-slate-500 pl-2">Skills Used:</h3>
              <div className="mt-4 px-2 text-slate-700">
                {item.skills.map((item, index) => {
                  return (
                    <p className="border-2 border-slate-700 pl-2" key={index}>
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;
