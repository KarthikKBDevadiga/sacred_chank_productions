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

export default function ContactUs() {
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
      <Metatag title="Contact Us" description="Contact Us" />
      <div className="min-h-full bg-slate-900">
        {/* Navbar */}
        <Header scrolled={scrolled} page="contact_us" />

        <main className="w-full -z-10 ">
          <div className="pattern">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 1, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5, once: true }}
            >
              <Map />
            </motion.div>

            <motion.div
              className="relative mx-auto -mt-12 max-w-7xl"
              initial={{ opacity: 0, scale: 1, y: 200 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5, once: true }}
            >
              <div className="mx-6 overflow-hidden rounded-md md:grid md:grid-cols-2 md:items-start">
                <div className="flex flex-col justify-between h-full p-8 text-sm text-white bg-black md:bg-gradient-to-l from-gray-700 to-black">
                  <div>
                    <motion.div
                      className="text-2xl font-medium text-white md:text-2xl "
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
                      Contact Information
                    </motion.div>
                    <motion.div
                      viewport={{ once: true }}
                      className="mt-4 text-base font-thin"
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 0.75,
                        once: true,
                      }}
                    >
                      Fill Up The Form And Our Team Will Get Back To You Within
                      24 Hours
                    </motion.div>
                  </div>

                  <div className="mt-8 text-base font-light">
                    <motion.div
                      viewport={{ once: true }}
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 1,
                        once: true,
                      }}
                    >
                      <PhoneIcon className="self-center w-5 h-5" />
                      <div className="self-center">+91 99887 7883</div>
                    </motion.div>
                    <motion.div
                      className="flex gap-2 mt-4"
                      viewport={{ once: true }}
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 1.15,
                        once: true,
                      }}
                    >
                      <MailIcon className="self-center w-5 h-5" />
                      <div className="self-center">hello@sacredchank.com</div>
                    </motion.div>
                    <motion.div
                      className="flex gap-2 mt-4"
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
                      <LocationIcon className="self-center w-5 h-5" />
                      <div className="self-center">102 Street 2714 Don</div>
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
                        delay: 0.5,
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
                <div className="flex flex-col h-full gap-4 p-4 text-green-900 bg-gray-700 sm:mt-0 md:col-span-1">
                  <motion.div
                    className={classNames("relative w-full  col-span-2")}
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
                    <input
                      className="w-full py-2 pl-3 text-sm text-white duration-200 bg-transparent border-2 border-gray-500 rounded-md outline-none focus:border-2 placeholder:text-transparent peer focus:border-gray-100"
                      name={"name"}
                      id={"name"}
                      type="text"
                      placeholder="Name"
                      onChange={(event) => {}}
                    />
                    <label
                      htmlFor={"name"}
                      className={classNames(
                        "absolute block px-2 text-xs text-gray-500 duration-200 bg-gray-700  -top-2 left-4",
                        "peer-focus:text-white peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-gray-700 peer-focus:text-xs ",
                        "peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent"
                      )}
                    >
                      Name
                    </label>
                  </motion.div>
                  <motion.div
                    className={classNames("relative w-full  col-span-2")}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.5,
                      delay: 0.75,
                      once: true,
                    }}
                  >
                    <input
                      className="w-full py-2 text-sm text-white duration-200 bg-transparent border-2 border-gray-500 rounded-md outline-none pl-9 focus:border-2 placeholder:text-transparent peer focus:border-gray-100"
                      name={"email"}
                      id={"email"}
                      type="email"
                      placeholder="Email"
                      onChange={(event) => {}}
                    />
                    <MailIcon
                      className={classNames(
                        "absolute w-5 h-5 text-gray-500 top-2.5 left-3 duration-200",
                        "peer-focus:text-white"
                      )}
                    />
                    <label
                      htmlFor={"email"}
                      className={classNames(
                        "absolute block px-2 text-xs text-gray-500 duration-200 bg-gray-700  -top-2 left-4",
                        "peer-focus:text-white peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-gray-700 peer-focus:text-xs",
                        "peer-placeholder-shown:top-2 peer-placeholder-shown:left-8 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent"
                      )}
                    >
                      Email
                    </label>
                  </motion.div>
                  <motion.div
                    className={classNames("relative w-full  col-span-2")}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.5,
                      delay: 1,
                      once: true,
                    }}
                  >
                    <input
                      className="w-full py-2 text-sm text-white duration-200 bg-transparent border-2 border-gray-500 rounded-md outline-none pl-9 focus:border-2 placeholder:text-transparent peer focus:border-gray-100"
                      name={"phone"}
                      id={"phone"}
                      type="tel"
                      placeholder="Phone Number"
                      onChange={(event) => {}}
                    />
                    <PhoneIcon
                      className={classNames(
                        "absolute w-5 h-5 text-gray-500 top-2.5 left-3 duration-200",
                        "peer-focus:text-white"
                      )}
                    />
                    <label
                      htmlFor={"phone"}
                      className={classNames(
                        "absolute block px-2 text-xs text-gray-500 duration-200 bg-gray-700  -top-2 left-4",
                        "peer-focus:text-white peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-gray-700 peer-focus:text-xs",
                        "peer-placeholder-shown:top-2 peer-placeholder-shown:left-8 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent"
                      )}
                    >
                      Phone Number
                    </label>
                  </motion.div>
                  <motion.div
                    className={classNames("relative w-full  col-span-2")}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.5,
                      delay: 1.25,
                      once: true,
                    }}
                  >
                    <input
                      className="w-full py-2 pl-3 text-sm text-white duration-200 bg-transparent border-2 border-gray-500 rounded-md outline-none focus:border-2 placeholder:text-transparent peer focus:border-gray-100"
                      name={"country"}
                      id={"country"}
                      type="text"
                      placeholder="Country"
                      onChange={(event) => {}}
                    />
                    <label
                      htmlFor={"country"}
                      className={classNames(
                        "absolute block px-2 text-xs text-gray-500 duration-200 bg-gray-700  -top-2 left-4",
                        "peer-focus:text-white peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-gray-700 peer-focus:text-xs ",
                        "peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent"
                      )}
                    >
                      Country
                    </label>
                  </motion.div>
                  <motion.div
                    className={classNames("relative w-full  col-span-2")}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.5,
                      delay: 1.5,
                      once: true,
                    }}
                  >
                    <TextareaAutosize
                      onFocus={() => {
                        // setRemarksError();
                      }}
                      onChange={(e) => {
                        // setRemarks(e.target.value);
                      }}
                      maxLength={300}
                      rows={1}
                      type="text"
                      name={"message"}
                      id={"message"}
                      className="w-full py-2 pl-3 text-sm text-white duration-200 bg-transparent border-2 border-gray-500 rounded-md outline-none resize-none focus:border-2 placeholder:text-transparent peer focus:border-gray-100"
                      placeholder="Message"
                    />
                    <label
                      htmlFor={"message"}
                      className={classNames(
                        "absolute block px-2 text-xs text-gray-500 duration-200 bg-gray-700  -top-2 left-4",
                        "peer-focus:text-white peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-gray-700 peer-focus:text-xs ",
                        "peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent"
                      )}
                    >
                      Message
                    </label>
                  </motion.div>

                  <motion.div
                    className="px-4 py-3 text-center text-white bg-gray-500 rounded-md shadow-md cursor-pointer"
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
                    Submit
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer className="mt-8" />
      </div>
    </>
  );
}
