import React, { useContext } from "react";
import { AppContext } from "../AppProvider";
import Lottie from "lottie-react-web";
import Night from "./animated-icons/Night.json";
import Sun from "./animated-icons/Sun.json";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const ThemeSwitcher = () => {
  const { toggleTheme, themeMode } = useContext(AppContext);
  const handleThemeChange = (e) => {
    toggleTheme();
  };
  console.log("THEME MODE: ", themeMode);
  return (
    <div className="fixed m-5 top-0 right-0 bg-gray-200 w-12 h-12 rounded-full text-gray-900 flex justify-center items-center shadow-xl ">
      {themeMode === "lightTheme" ? (
        <motion.button
          className=" bg-gray-200 w-12 h-12 rounded-full "
          onClick={() => {
            toggleTheme();
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Lottie
            options={{
              animationData: Sun,
            }}
          />{" "}
        </motion.button>
      ) : (
        <motion.button
          className=" bg-gray-200 w-12 h-12 rounded-full "
          onClick={() => {
            toggleTheme();
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Lottie
            options={{
              animationData: Night,
            }}
          />{" "}
        </motion.button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
