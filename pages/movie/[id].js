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

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Metatag from "../../components/Metatag";
import Constants from "../../helpers/Constants";
import PlayIcon from "../../icons/PlayIcon";

import { motion } from "framer-motion";
import classNames from "../../utils/classNames";
import { getYoutubeVideoId } from "../../components/YoutubeDialog";

export default function AboutUs() {
  const movie = Constants.MOVIE;
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
        <div className="pattern">
          {/* Navbar */}
          <Header scrolled={scrolled} page="movie" />

          <main className="w-full -z-10 ">
            <motion.div
              className="bg-black bg-opacity-25 h-96 md:h-96"
              initial={{ opacity: 0, scale: 1, y: -200 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <img
                className="object-cover w-full h-full "
                src={movie.poster.landscape}
              />
              {/* <div className="absolute top-0 w-full h-full bg-gradient-to-b from-slate-900 to-transparent" /> */}
            </motion.div>

            <div className="relative p-4 -mt-24 xl:mx-auto max-w-7xl">
              <div className="-mt-24 md:grid md:grid-cols-4 md:gap-4">
                <motion.div
                  className="relative overflow-hidden bg-black rounded-md shadow-md group"
                  initial={{ opacity: 0, scale: 1, x: -200, y: 0 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay: 0.5,
                    once: true,
                  }}
                >
                  <img
                    className="object-cover w-full h-full "
                    src={movie.poster.portrait}
                  />
                </motion.div>
                <motion.div
                  className="flex mt-4 overflow-hidden bg-black rounded-md shadow-md sm:col-span-2 md:mt-0"
                  initial={{ opacity: 0, y: -200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay: 0.5,
                    once: true,
                  }}
                >
                  <div
                    className="relative self-center w-full h-0 "
                    style={{ paddingBottom: "56.25%", paddingTop: "0px" }}
                  >
                    <iframe
                      src={
                        "https://www.youtube.com/embed/" +
                        getYoutubeVideoId(movie.trailer)
                      }
                      className="absolute top-0 left-0 w-full h-full "
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </motion.div>

                <motion.div
                  className="p-4 mt-4 bg-gray-500 rounded-md shadow-md sm:col-span-1 md:mt-0"
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay: 0.5,
                    once: true,
                  }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <div className="mt-4 text-white md:grid md:grid-cols-3 md:gap-4">
                <div className="col-span-2">
                  <div className="flex gap-2">
                    {movie.genre.map((genre, index) => {
                      return (
                        <motion.div
                          initial={{ opacity: 0, scale: 1, x: 100, y: 0 }}
                          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 1 + 0.2 * index,
                            once: true,
                          }}
                          key={genre}
                          className="px-3 py-1 text-sm font-bold duration-500 border rounded-full cursor-pointer boreder-white hover:bg-white hover:text-black"
                        >
                          {genre}
                        </motion.div>
                      );
                    })}
                  </div>
                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.5,
                      delay: 1,
                      once: true,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl">{movie.title}</div>
                    <div className="mt-2 text-base">({movie.releaseDate})</div>
                    <div className="mt-2 text-base">{movie.description}</div>
                  </motion.div>
                  <div className="flex gap-4 mt-8 text-xl text-white">
                    <motion.div
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.5,
                      }}
                    >
                      Cast
                    </motion.div>
                    <motion.div
                      className="self-center flex-1 h-0.5 bg-white rounded-sm"
                      initial={{ opacity: 0, scale: 1, scaleX: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        scaleX: 1,
                      }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.5,
                      }}
                    ></motion.div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mt-4 sm:grid-cols-3 lg:grid-cols-4">
                    {movie.casts.map((cast, index) => {
                      return (
                        <div
                          className="relative overflow-hidden rounded-md shadow-md aspect-square group"
                          key={index}
                        >
                          <img
                            key={cast}
                            className="object-cover w-full h-full duration-500 group-hover:scale-150 group-hover:translate-x-1/4"
                            src={cast.image}
                          />
                          <div className="absolute text-base md:text-lg top-2 left-2">
                            <div className="duration-500 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                              {cast.name}
                            </div>
                          </div>
                        </div>
                      );
                      return (
                        <motion.div
                          initial={{ opacity: 0, scale: 1, x: 100, y: 0 }}
                          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                          transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 1 + 0.2 * index,
                          }}
                          className="flex col-span-1 gap-4 overflow-hidden border border-white rounded-full"
                          key={cast}
                        >
                          <img
                            key={cast}
                            className="object-cover w-14 h-14"
                            src={cast.image}
                          />
                          <div className="self-center text-xl">
                            <span>{cast.name}</span>
                            <span className="text-sm"> as {cast.name}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  <div className="flex gap-4 mt-8 text-xl text-white">
                    <motion.div
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.5,
                      }}
                    >
                      Promotion
                    </motion.div>
                    <motion.div
                      className="self-center flex-1 h-0.5 bg-white rounded-sm"
                      initial={{ opacity: 0, scale: 1, scaleX: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        scaleX: 1,
                      }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.5,
                      }}
                    ></motion.div>
                  </div>
                  <div className="mt-4 text-white md:grid md:grid-cols-2 md:gap-4">
                    <div className="relative cursor-pointer group">
                      <img
                        src={
                          "https://img.youtube.com/vi/" +
                          getYoutubeVideoId(movie.trailer) +
                          "/hqdefault.jpg"
                        }
                        className="w-full h-full rounded-md shadow-md"
                        frameBorder="0"
                        allowFullScreen
                      />
                      <div className="absolute top-0 w-full h-full duration-500 group-hover:bg-opacity-50 group-hover:bg-black" />
                      <div className="absolute text-white duration-500 -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 top-1/2 left-1/2">
                        <PlayIcon className="w-20 h-20" />
                      </div>
                    </div>

                    <div className="relative cursor-pointer group">
                      <img
                        src={
                          "https://img.youtube.com/vi/" +
                          getYoutubeVideoId(movie.trailer) +
                          "/hqdefault.jpg"
                        }
                        className="w-full h-full rounded-md shadow-md"
                        frameBorder="0"
                        allowFullScreen
                      />
                      <div className="absolute top-0 w-full h-full duration-500 group-hover:bg-opacity-50 group-hover:bg-black" />
                      <div className="absolute text-white duration-500 -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 top-1/2 left-1/2">
                        <PlayIcon className="w-20 h-20" />
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </main>
          <Footer className="mt-4" />
        </div>
      </div>
    </>
  );
}
