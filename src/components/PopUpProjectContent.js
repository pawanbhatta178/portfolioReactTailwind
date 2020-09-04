import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppProvider";

function PopUpProjectContent({ id, unmountModal, nextModal, prevModal }) {
  const { projects } = useContext(AppContext);
  const [projectData, setProjectData] = useState({});

  useEffect(() => {
    setProjectData([...projects.filter((project) => project.id === id)][0]);
  }, [id]);

  return (
    <div className="flex justify-center">
      <button className="" onClick={() => unmountModal()}>
        Close
      </button>
      <button className="" onClick={() => nextModal()}>
        Next
      </button>
      <button className="" onClick={() => prevModal()}>
        Prev
      </button>
      <section className=" body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="projectImg"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={projectData?.imageUrl}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font tracking-widest">
                {projectData?.technolgiesUsed}
              </h2>
              <h1 className=" text-3xl title-font font-medium mb-1">
                {projectData?.title}
              </h1>

              <p className="leading-relaxed">{projectData?.description}</p>

              <div className="">
                <button className=" ml-auto text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  View it Live
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopUpProjectContent;
