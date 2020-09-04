import React, { useContext } from "react";
import { AppContext } from "../AppProvider";

function Works() {
  const { projects } = useContext(AppContext);

  return (
    <section className=" body-font" id="Works">
      <div className="container sm:px-32 px-4 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {projects.map((work) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
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
                <p className="mt-1">{work.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
