import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { animateScroll as scroll } from "react-scroll";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemIds = [
  { i: 1, icon: "Home", title: "Home" },
  { i: 2, icon: "Works", title: "Works" },
  { i: 3, icon: "AboutMe", title: "About" },
  { i: 4, icon: "Contact", title: "Contact" },
];

const Navigation = () => (
  <motion.ul variants={variants} className="text-indigo-800">
    {itemIds.map((menuItem) => (
      <MenuItem
        i={menuItem.i}
        key={menuItem.i}
        iconName={menuItem.icon}
        title={menuItem.title}
      />
    ))}
  </motion.ul>
);

export default Navigation;
