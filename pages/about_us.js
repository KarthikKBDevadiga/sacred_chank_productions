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

        <motion.main
          variants={{
            hidden: { opacity: 0, x: -200, y: 0 },
            enter: { opacity: 1, x: 0, y: 0 },
            exit: { opacity: 0, x: 0, y: -100 },
          }}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
          className="w-full -z-10"
        >
          <div className="relative h-48 bg-black bg-opacity-25 md:h-48">
            <img
              className="object-cover w-full h-full opacity-50"
              src="https://mykinoplex.com/assets/images/ucm/banner/banner1657267451.jpg"
            />
          </div>

          <div className="relative mx-auto -mt-12 max-w-7xl">
            <div className="mx-6 overflow-hidden bg-white rounded-md md:grid md:grid-cols-2 md:items-start">
              <div className="block h-full text-sm text-white bg-indigo-700 ">
                <img
                  className="object-cover w-full h-full "
                  src="	https://nrikannadabalaga.com/wp-content/uploads/2021/01/Bhootanatha-Badami-1.jpg"
                />
              </div>
              <div className="flex flex-col gap-4 p-4 mt-4 text-green-900 sm:mt-0 md:col-span-1">
                <div className="text-2xl font-medium md:text-2xl ">
                  Our History
                </div>
                <div>
                  We are a group of like minded friends, with our roots in
                  Belgaum, who went abroad for work but remained connected
                  despite being in different parts of the world. Initially, we
                  started with a small group of friends but have grown into a
                  large family spread across the globe with roots from all over
                  Karnataka. We are now coming together to extend our roots
                  further and provide the opportunity to many other Kannadigas
                  residing in other countries to be a part of our organisation.
                  Currently, the organisation has members from 25 countries and
                  looking forward to extending our family.
                </div>
              </div>
            </div>

            <div className="mx-6 mt-8 overflow-hidden bg-white rounded-md md:grid md:grid-cols-2 md:items-start">
              <div className="flex flex-col h-full gap-4 p-4 text-sm text-green-900">
                <div className="text-2xl font-medium md:text-2xl ">
                  Our Mission
                </div>
                <div>
                  To promote Kannada language and its heritage. To promote
                  Karnataka culture and traditions. To support and organise
                  cultural events for the members of the group. To provide
                  support and help during natural calamities.
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4 text-green-900 sm:mt-0 md:col-span-1">
                <img
                  className="object-cover w-full h-full "
                  src="https://nrikannadabalaga.com/wp-content/uploads/2021/01/Vastuchitra_Badami-Cave-02.jpg"
                />
              </div>
            </div>
          </div>
        </motion.main>
        <Footer className="mt-8" />
      </div>
    </>
  );
}
