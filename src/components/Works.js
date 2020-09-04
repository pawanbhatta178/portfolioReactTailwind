import React, { useContext, useState } from "react";
import { AppContext } from "../AppProvider";
import PopUpProjectContent from "./PopUpProjectContent";

function Works() {
  const { projects } = useContext(AppContext);
  const [modalId, setModalId] = useState("");

  const getNextModal = () => {
    setModalId((current) => {
      if (parseInt(current) >= projects.length) {
        return current;
      }
      return `${parseInt(current) + 1}`;
    });
  };
  const getPrevModal = () => {
    setModalId((current) => {
      if (parseInt(current) <= 1) {
        return current;
      }
      return `${parseInt(current) - 1}`;
    });
  };

  const unmountModal = () => {
    setModalId("");
  };

  return (
    <section className=" body-font" id="Works">
      {modalId && (
        <PopUpProjectContent
          id={modalId}
          unmountModal={unmountModal}
          nextModal={getNextModal}
          prevModal={getPrevModal}
        />
      )}
      <div className="container sm:px-32 px-4 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {projects.map((work) => (
            <div className=" lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="project-card block relative h-48 rounded overflow-hidden">
                <img
                  className="project-card"
                  alt="project-img"
                  className="object-cover object-center w-full h-full block"
                  src={work.imageUrl}
                  onClick={() => {
                    setModalId(work.id);
                  }}
                />
              </a>
              <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                  {work.category}
                </h3>
                <h2 className=" title-font text-lg font-medium">
                  {work.title}
                </h2>
                <div className="flex justify-center md:justify-start mt-4 mb-8">
                  <button className="bg-indigo-700 text-gray-200 rounded-lg px-4 py-2 shadow-lg hover:bg-indigo-600 mr-3">
                    View Code
                  </button>
                  <button className=" ml-4">Live Demo</button>
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
