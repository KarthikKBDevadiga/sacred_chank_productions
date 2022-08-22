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

import Footer from "../components/Footer";
import Header from "../components/Header";
import Metatag from "../components/Metatag";
import { motion } from "framer-motion";
import classNames from "../utils/classNames";
import { Parallax } from "react-parallax";

export default function AboutUs() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
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
      <Metatag
        title="About Us"
        description="About Us"
        keywords="Sacred Chank Productions,About Us"
      />
      <div className="min-h-screen bg-slate-900">
        {/* Navbar */}
        <Header scrolled={scrolled} page="about_us" />

        <main className="w-full overflow-hidden -z-10">
          {/* <div className="relative h-full md:h-full">
            <img
              className="object-cover w-full h-full grayscale"
              src="https://png.pngtree.com/thumb_back/fh260/back_pic/03/54/58/35579acf3576e9d.jpg"
            />
          </div> */}
          <div className="h-96">
            <Parallax
              blur={{ min: -2, max: 2 }}
              bgImage="https://png.pngtree.com/thumb_back/fh260/back_pic/03/54/58/35579acf3576e9d.jpg"
              bgImageAlt="the cat"
              strength={200}
              renderLayer={(percentage) => (
                <div
                  className="w-full h-96"
                  style={{ backgroundColor: "black" }}
                ></div>
              )}
            />
          </div>

          <div className="relative mx-auto -mt-12 max-w-7xl">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                once: true,
              }}
              className="p-4 mx-6 overflow-hidden text-white bg-gray-700 rounded-md md:items-start"
            >
              {/* <div className="block h-full text-sm text-white bg-indigo-700">
                <img
                  className="object-cover w-full h-full "
                  src="	https://nrikannadabalaga.com/wp-content/uploads/2021/01/Bhootanatha-Badami-1.jpg"
                />
              </div> */}
              <div className="text-3xl font-bold text-center ">About Us</div>
              <div className="max-w-3xl mx-auto mt-4 text-center">
                SACRED CHANK PRODUCTIONS is an International Film Distribution
                and production Company based in the Republic of Ireland . Which
                aims to produce and release international and Indian regional
                movies across the globe.
              </div>
              <div className="max-w-3xl mx-auto mt-4 text-center">
                We are known for distributing High Calibre Indian films
                providing the ultimate customer experience. We work in
                association with International/Indian production and
                distribution companies from various part of the world such as
                Singapore, Malaysia, Australia, US, Europe, Middle East and
                Africa.
              </div>
            </motion.div>
          </div>
        </main>
        <Footer className="mt-8" />
      </div>
    </>
  );
}
