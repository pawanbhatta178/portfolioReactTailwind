import React, { useContext, useState } from "react";
import { AppContext } from "../AppProvider";
import PopUpProjectContent from "./PopUpProjectContent";
import { motion, AnimatePresence } from "framer-motion";
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

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    exit: { opacity: 0 },
  };

  return (
    <section className=" body-font shadow-lg" id="Works">
      <AnimatePresence exitBeforeEnter>
        {" "}
        {modalId && (
          <motion.div
            className="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {" "}
            <PopUpProjectContent
              id={modalId}
              unmountModal={unmountModal}
              nextModal={getNextModal}
              prevModal={getPrevModal}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container sm:px-32 px-4 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {projects.map((work, index) => (
            <div
              key={index}
              className=" project-card lg:w-1/4 md:w-1/2 p-4 w-full "
              onClick={() => {
                setModalId(work.id);
              }}
            >
              <a className=" block relative h-48 rounded overflow-hidden">
                <img
                  className="project-card "
                  alt="project-img"
                  className="object-cover object-center w-full h-full block"
                  src={work.imageUrl}
                />
              </a>
              <div className="mt-4">
                <h3 className=" text-xs tracking-widest title-font mb-1">
                  {work.technologiesUsed}
                </h3>
                <h2 className=" title-font text-lg font-medium">
                  {work.title}
                </h2>
                <div className="flex justify-center md:justify-start mt-4 mb-8">
                  <button className="bg-indigo-700 text-gray-200 rounded-lg px-4 py-2 shadow-lg hover:bg-indigo-600 mr-3 display-none">
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
