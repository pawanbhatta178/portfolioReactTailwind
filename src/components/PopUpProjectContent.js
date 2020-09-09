import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppProvider";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react-web";
import Cross from "./animated-icons/Cross.json";

const modalVariants = {
  hidden: {
    y: "-110vh",
    x: "100vh",
    opacity: 0,
  },
  visible: {
    y: "100px",
    x: "0px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
  exit: {
    y: "-100vh",
    x: "100vh",
    opacity: 0,
  },
};

const modalContentVariantsSwipeLeft = {
  hidden: {
    x: "100vw",
  },
  visible: {
    transition: { delay: 0.2 },
    x: "0px",
  },
  exit: {
    opacity: 0,
  },
};

const modalContentVariantsSwipeRight = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    transition: { delay: 0.2 },
    x: "0px",
  },
  exit: {
    opacity: 0,
  },
};

function PopUpProjectContent({ id, unmountModal, nextModal, prevModal }) {
  const { projects, themeMode } = useContext(AppContext);
  const [projectData, setProjectData] = useState({});
  const [left, setLeft] = useState(false);
  useEffect(() => {
    setProjectData([...projects.filter((project) => project.id === id)][0]);
  }, [id]);

  return (
    <motion.div
      className={
        themeMode === "lightTheme"
          ? "flex max-w-3xl m-auto bg-gray-200 rounded-lg"
          : "flex max-w-3xl m-auto bg-gray-800 rounded-lg"
      }
      variants={modalVariants}
    >
      <div className="flex flex-col w-full">
        {" "}
        <div className="flex justify-end">
          {" "}
          <button
            className="w-10 h-10 p-2 m-2 bg-gray-200 rounded-lg shadow-lg"
            onClick={() => unmountModal()}
          >
            <Lottie
              options={{
                animationData: Cross,
                loop: false,
              }}
            />
          </button>
        </div>
        <div className="flex justify-around ">
          <div className="flex flex-start">
            <button
              className="focus:outline-none text-4xl font-thin"
              onClick={() => {
                setLeft(false);
                prevModal();
              }}
            >
              &lt;
            </button>
          </div>

          <section className="w-5/6 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <AnimatePresence exitBeforeEnter>
                {" "}
                <motion.div
                  className="lg:w-4/5 mx-auto flex flex-wrap"
                  key={id}
                  variants={
                    left
                      ? modalContentVariantsSwipeLeft
                      : modalContentVariantsSwipeRight
                  }
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <img
                    alt="projectImg"
                    className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                    src={projectData?.imageUrl}
                  />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font tracking-widest">
                      {projectData?.technologiesUsed}
                    </h2>
                    <h1 className=" text-3xl title-font font-medium mb-1">
                      {projectData?.title}
                    </h1>

                    <p className="leading-relaxed">
                      {projectData?.description}
                    </p>

                    <div className="">
                      <button className=" ml-auto text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg">
                        View it Live
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
          <div className="flex flex-end mr-0">
            <button
              className="focus:outline-none text-4xl font-thin"
              onClick={() => {
                setLeft(true);
                nextModal();
              }}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PopUpProjectContent;
