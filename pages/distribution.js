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
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

import YoutubeDialog from "../components/YoutubeDialog";
import Metatag from "../components/Metatag";

import { motion } from "framer-motion";
import Constants from "../helpers/Constants";
import Movie from "../components/item/Movie";

export default function Distribution({ movies, settings }) {
  const [scrolled, setScrolled] = useState(false);
  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState();

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
        title="Distribution"
        description="Distribution"
        keywords="Sacred Chank Productions,Distribution"
      />
      <div className="min-h-full bg-slate-900">
        <div className=" pattern">
          {/* Navbar */}
          <Header scrolled={scrolled} page="distribution" />

          <motion.main
            className="w-full -z-10 "
            variants={{
              hidden: { opacity: 0, x: -200, y: 0 },
              enter: { opacity: 1, x: 0, y: 0 },
              exit: { opacity: 0, x: 0, y: -100 },
            }} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: "linear" }} // Set the transition to linear
          >
            <div className=" justify-center h-screen text-white bg-[length:100px_100px] flex ">
              <div className="self-center text-7xl">Film Distribution</div>
            </div>

            <div className="mx-auto mt-8 max-w-7xl">
              <div className="flex gap-4 px-4 mx-auto max-w-7xl">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    once: true,
                  }}
                  className="flex-1 bg-white h-[2px] self-center rounded-full "
                />
                <motion.div
                  className="text-lg font-medium text-white md:text-2xl"
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    once: true,
                  }}
                >
                  DISTRIBUTED
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    once: true,
                  }}
                  className="flex-1 bg-white h-[2px] self-center rounded-full"
                />
              </div>

              <div className="grid grid-cols-1 gap-8 p-8 mx-auto sm:grid-cols-3 lg:grid-cols-4 max-w-7xl">
                {movies?.map((movie, index) => {
                  return (
                    <motion.div
                      key={index}
                      viewport={{ once: true }}
                      initial={{ opacity: 0, x: 200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        delay: 0.25 * index,
                        once: true,
                      }}
                    >
                      <Movie
                        key={movie}
                        movie={movie}
                        className="col-span-1"
                        trailer={() => {
                          setYoutubeUrl(
                            "https://www.youtube.com/watch?v=fnsWt4H619o"
                          );
                          setOpenVideoDialog(true);
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.main>
          <Footer socialMedia={settings.socialMedia} />
        </div>
      </div>

      <YoutubeDialog
        url={youtubeUrl}
        showDialog={openVideoDialog}
        setShowDialog={setOpenVideoDialog}
      />
    </>
  );
}
export async function getServerSideProps(context) {
  // const movies = Constants.MOVIES;

  const movies = await fetch(process.env.BASE_API_URL + "movies")
    .then((res) => res.json())
    .then((json) => json.movies);
  const settings = await fetch(process.env.BASE_API_URL + "settings")
    .then((res) => res.json())
    .then((json) => json.settings);
  console.log(movies);
  return {
    props: {
      movies,
      settings,
    },
  };
}
