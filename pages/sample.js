/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import styles from "../styles/Sample.module.css";

import { motion } from "framer-motion";

export default function Example() {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const items = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={styles.container}>
      <motion.div
        // variants={variants}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 1 }}
      >
        <motion.div variants={items} className="h-96">
          1
        </motion.div>
        <motion.div variants={items} className="h-96">
          1
        </motion.div>
        <motion.div variants={items} className="h-96">
          1
        </motion.div>
        <motion.div variants={items} className="h-96">
          1
        </motion.div>
        <motion.div variants={items} className="h-96">
          1
        </motion.div>
        <motion.div variants={items} className="h-96">
          1
        </motion.div>
        <motion.div variants={items} className="h-96">
          1
        </motion.div>
      </motion.div>
    </div>
  );
}
