/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useEffect, useState } from "react";

import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import LocationIcon from "../icons/LocationIcon";
import TextareaAutosize from "react-textarea-autosize";
import Footer from "../components/Footer";
import Header from "../components/Header";
import classNames from "../utils/classNames";
import Metatag from "../components/Metatag";

import { motion } from "framer-motion";

import Map from "../components/Map";

export default function AboutUs() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <Metatag title="About Us" description="About Us" />
      <div className="min-h-full bg-slate-900">
        {/* Navbar */}
        <Header scrolled={scrolled} page="about_us" />

        <main className="w-full pt-40 -z-10 bg-slate-900 ">
          <div className="pattern">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 1, y: -200 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5, once: true }}
            ></motion.div>

            <motion.div
              className="relative mx-auto -mt-12 max-w-7xl"
              initial={{ opacity: 0, scale: 1, y: 200 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5, once: true }}
            >
              <div className="mx-6 overflow-hidden rounded-t-lg md:grid md:grid-cols-2 md:items-start">
                <div className="flex flex-col justify-between h-full p-8 text-sm text-white bg-black md:bg-gradient-to-l from-gray-700 to-black">
                  <div>
                    <motion.div
                      className="text-xs font-thin text-white md:text-xs "
                      viewport={{ once: true }}
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 0.5,
                        once: true,
                      }}
                    >
                      <div className="self-center font-mono text-xs font-bold tracking-wide md:text-xs">
                        OUR THEATER
                      </div>
                    </motion.div>
                    <motion.div
                      viewport={{ once: true }}
                      className="mt-2 text-base font-bold"
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 0.75,
                        once: true,
                      }}
                    >
                      <p className="self-center font-sans text-5xl font-bold break-normal md:text-5xl">
                        ABOUT <a className="font-thin">US</a>
                      </p>
                    </motion.div>
                    <motion.div
                      viewport={{ once: true }}
                      className="flex mt-4"
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 1,
                        once: true,
                      }}
                    >
                      <PhoneIcon className="self-center rounded-l-lg bg-rose-600" />
                      <div className="self-center px-1 py-1 font-mono text-xs font-bold tracking-wide rounded-r-lg cursor-pointer md:text-xs bg-rose-600">
                        FIND SHOWTIMES
                      </div>
                    </motion.div>
                  </div>

                  <div className="mt-8 text-xs font-thin text-white md:text-xs">
                    <motion.div
                      viewport={{ once: true }}
                      className="flex gap-2 mt-10"
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 1.15,
                        once: true,
                      }}
                    >
                      <div className="self-center font-mono text-xs font-bold tracking-wide text-purple-600 md:text-xs">
                        ABOUT US
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex gap-2"
                      viewport={{ once: true }}
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 1.3,
                        once: true,
                      }}
                    >
                      <div className="self-center font-mono text-3xl font-thin text-white md:text-3xl">
                        ALL the
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex gap-2"
                      viewport={{ once: true }}
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 1.5,
                        once: true,
                      }}
                    >
                      <div className="self-center font-mono text-4xl font-bold text-white md:text-4xl">
                        Perks
                      </div>
                    </motion.div>
                    <motion.div
                      viewport={{ once: true }}
                      className="mt-2 text-xs font-thin"
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 1.65,
                        once: true,
                      }}
                    >
                      <ul className="list-none">
                        <li>
                          Since the border class only sets the border-width
                        </li>
                        <li>this reset ensures that adding that class all</li>
                        <li>a solid 1px border using your configured</li>
                      </ul>
                    </motion.div>
                  </div>

                  <div className="flex gap-4 mt-8 ">
                    <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 1.85,
                        once: true,
                      }}
                    >
                      <FacebookIcon className="w-4 h-4 text-white duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
                    </motion.div>

                    <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 0.65,
                        once: true,
                      }}
                    >
                      <InstagramIcon className="w-4 h-4 text-white duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
                    </motion.div>

                    <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 0.8,
                        once: true,
                      }}
                    >
                      <TwitterIcon className="w-4 h-4 text-white duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
                    </motion.div>

                    <motion.div
                      className="flex-1 bg-white h-[2px] self-center rounded-full"
                      viewport={{ once: true }}
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 1,
                        once: true,
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col h-full gap-4 p-4 bg-gray-700 text-whit sm:mt-0 md:col-span-1">
                  <motion.div
                    className="px-4 py-3 text-center text-white bg-gray-700 cursor-pointer"
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.5,
                      delay: 1.75,
                      once: true,
                    }}
                  >
                    <div className="mt-40 border border-indigo-600 md:grid md:grid-cols-2">
                      <div className="flex flex-col p-3 text-sm font-bold text-left text-white">
                        Amazing Theaters
                        <div className="text-xs font-thin text-left text-white">
                          By default, Tailwind provides five border-width
                          utilities, and the same
                        </div>
                      </div>
                      <div className="flex flex-col p-3 text-sm font-bold text-left text-white">
                        Comfort
                        <div className="text-xs font-thin text-left text-white">
                          By default, Tailwind provides five border-width
                          utilities, and the same
                        </div>
                      </div>
                      <div className="flex flex-col p-3 text-sm font-bold text-left text-white">
                        Artisian
                        <div className="text-xs font-thin text-left text-white">
                          By default, Tailwind provides five border-width
                          utilities, and the same
                        </div>
                      </div>
                      <div className="flex flex-col p-3 text-sm font-bold text-left text-white">
                        Pre Order Food
                        <div className="text-xs font-thin text-left text-white">
                          By default, Tailwind provides five border-width
                          utilities, and the same
                        </div>
                      </div>
                      <div className="flex flex-col p-3 text-sm font-bold text-left text-white">
                        Movie Rewards
                        <div className="text-xs font-thin text-left text-white">
                          By default, Tailwind provides five border-width
                          utilities, and the same
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="text-white cursor-pointer"
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeOut",
                  duration: 0.5,
                  delay: 0.5,
                  once: true,
                }}
              >
                <div className="mx-6 overflow-hidden md:items-start">
                  <div className="flex flex-col justify-between h-full p-16 text-sm text-white bg-black rounded-b-lg md:bg-gradient-to-l from-gray-700 to-black">
                    <p className="justify-between px-5 py-6 font-sans text-5xl font-thin text-center break-normal">
                      Why{" "}
                      <a className="self-center font-sans text-5xl font-bold break-normal md:text-5xl">
                        Choose Us
                      </a>
                    </p>
                    <div className="grid grid-cols-1 gap-4 p-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-7xl">
                      <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          ease: "easeOut",
                          duration: 0.25,
                          delay: 0.75,
                          once: true,
                        }}
                      >
                        <div className="px-6 py-8 text-left border border-gray-700">
                          <div className="text-5xl">&quot;</div>By default,
                          Tailwind&quot;s gap scale uses the default spacing
                          scale.
                        </div>
                      </motion.div>
                      <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          ease: "easeOut",
                          duration: 0.25,
                          delay: 1,
                          once: true,
                        }}
                      >
                        <div className="px-6 py-8 text-left border border-sky-700">
                          <div className="text-5xl">&quot;</div>By default,
                          Tailwind&quot;s gap scale uses the default spacing
                          scale.
                        </div>
                      </motion.div>
                      <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          ease: "easeOut",
                          duration: 0.25,
                          delay: 1.15,
                          once: true,
                        }}
                      >
                        <div className="px-6 py-8 text-left border border-rose-700">
                          <div className="text-5xl">&quot;</div>By default,
                          Tailwind&quot;s gap scale uses the default spacing
                          scale.
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
        <Footer className="mt-8" />
      </div>
    </>
  );
}
