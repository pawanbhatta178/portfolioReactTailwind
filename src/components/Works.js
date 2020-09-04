import React, { useContext } from "react";
import { AppContext } from "../AppProvider";
import { Link } from "react-scroll";

function Works() {
  const { projects } = useContext(AppContext);

  return (
    <section className=" body-font" id="Works">
      <div className="container sm:px-32 px-4 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {projects.map((work) => (
            <div className=" lg:w-1/4 md:w-1/2 p-4 w-full shadow-xs">
              <a className="project-card block relative h-48 rounded overflow-hidden">
                <img
                  className="project-card"
                  alt="project-img"
                  className="object-cover object-center w-full h-full block"
                  src={work.imageUrl}
                />
              </a>
              <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                  {work.category}
                </h3>
                <h2 className=" title-font text-lg font-medium">
                  {work.title}
                </h2>
                <div className="flex justify-center mt-8">
                  <button className="bg-indigo-700 text-gray-200 rounded-lg px-4 py-2 shadow-lg hover:bg-indigo-600 mr-3">
                    View Code
                  </button>
                  <button className="text-indigo-700 ml-4">Live Demo</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
