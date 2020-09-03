import React, { useContext } from "react";
import { AppContext } from "../AppProvider";
import Lottie from "lottie-react-web";
import Night from "./animated-icons/WindyNight.json";
import Sun from "./animated-icons/Sun.json";
import { motion, AnimatePresence } from "framer-motion";

const ThemeSwitcher = () => {
  const { toggleTheme, themeMode } = useContext(AppContext);
  const handleThemeChange = (e) => {
    toggleTheme();
  };
  console.log("THEME MODE: ", themeMode);
  return (
    <div className="fixed m-5 top-0 right-0 bg-gray-200 w-12 h-12 rounded-full text-gray-900 flex justify-center items-center shadow-xl z-10 ">
      {themeMode === "lightTheme" ? (
        <button
          className=" w-12 h-12 rounded-full "
          onClick={() => {
            toggleTheme();
          }}
        >
          <Lottie
            options={{
              animationData: Sun,
            }}
          />{" "}
        </button>
      ) : (
        <button
          className=" w-12 h-12 rounded-full "
          onClick={() => {
            toggleTheme();
          }}
        >
          <Lottie
            options={{
              animationData: Night,
            }}
          />{" "}
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
