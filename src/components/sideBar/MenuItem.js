import * as React from "react";
import { motion } from "framer-motion";
import Home from "../animated-icons/Home.json";
import Chat from "../animated-icons/Chat.json";
import Works from "../animated-icons/Works.json";
import AboutMe from "../animated-icons/AboutMe2.json";
import { Link } from "react-scroll";
import Lottie from "lottie-react-web";

const findIcon = (title) => {
  switch (title) {
    case "Home":
      return Home;
    case "Contact":
      return Chat;
    case "Works":
      return Works;
    case "AboutMe":
      return AboutMe;
    default:
      return null;
  }
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ i, iconName, title }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <Link to={title} smooth>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="icon-placeholder">
          <Lottie
            options={{
              animationData: findIcon(iconName),
            }}
          />{" "}
        </div>
        <div className="text-placeholder">{title}</div>
      </motion.li>
    </Link>
  );
};

export default MenuItem;
