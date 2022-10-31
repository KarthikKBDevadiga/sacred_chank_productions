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
import ArrowBackwardIcon from "../icons/ArrowBackwardIcon";
import ArrowForwardIcon from "../icons/ArrowForwardIcon";
import PlayIcon from "../icons/PlayIcon";
import Footer from "../components/Footer";
import Header from "../components/Header";
import classNames from "../utils/classNames";
import YoutubeDialog from "../components/YoutubeDialog";
import Metatag from "../components/Metatag";
import Movie from "../components/item/Movie";
import Constants from "../helpers/Constants";

import { motion } from "framer-motion";

const AdaptiveHeight = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px";
  }
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
};

export default function Index({ data, settings }) {
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [AdaptiveHeight]
  );
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
        title="Home"
        description="Sacred Chank Productions"
        keywords="Sacred Chank Productions"
      />
      <div className="min-h-full bg-slate-900">
        <div className="pattern">
          <Header scrolled={scrolled} />

          <main className="w-full -z-10">
            <motion.div
              className="relative h-screen"
              initial={{ opacity: 0, scale: 1, y: -200 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <div className="absolute w-full">
                <div ref={sliderRef} className="keen-slider">
                  {data.upcoming.map((m) => {
                    console.log(m);
                    return (
                      <div className="keen-slider__slide">
                        <div className="relative top-0 w-full h-screen overflow-hidden">
                          <div className="absolute w-full h-full">
                            <img
                              className="hidden object-cover w-full h-full sm:block"
                              src={m.poster.landscape}
                            />
                            <img
                              className="object-cover w-full h-full sm:hidden"
                              src={m.poster.portrait}
                            />
                          </div>
                          <div
                            className="absolute w-full h-full bg-gradient-to-r from-black to-transparent"
                            // initial={{ opacity: 0, scaleX: 0 }}
                            // whileInView={{ opacity: 1, scaleX: 1 }}
                            // transition={{
                            //   ease: "easeOut",
                            //   duration: 0.5,
                            //   delay: 0.5,
                            // }}
                          />
                          <div className="absolute flex h-full">
                            <div className="self-center px-4 font-light sm:px-16 md:px-20">
                              {/* <div className="text-sm text-white sm:text-xl md:text-3xl">
                                Rom-Com
                              </div> */}
                              <motion.div
                                className="mt-4 text-white"
                                initial={{ opacity: 0, x: 200 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  ease: "easeOut",
                                  duration: 0.5,
                                  delay: 0.5,
                                }}
                              >
                                <span className="text-3xl sm:text-4xl md:text-6xl ">
                                  {m.title}
                                </span>
                                <span className="self-end text-sm text-gray-300 sm:text-xl md:text-3xl">
                                  ({m.releaseDate})
                                </span>
                              </motion.div>
                              <div className="flex gap-2 mt-2 text-xs text-white md:text-sm">
                                <div className="px-3 py-1 border border-white rounded-md">
                                  {m.languages[0]}
                                </div>

                                <div className="px-3 py-1 border border-white rounded-md">
                                  UA
                                </div>
                              </div>
                              <div
                                className="flex gap-2 py-2 pl-2 pr-4 mt-4 text-white duration-500 bg-black bg-opacity-25 rounded-md cursor-pointer w-max hover:bg-opacity-100"
                                onClick={() => {
                                  setYoutubeUrl(m.trailer);
                                  setOpenVideoDialog(true);
                                }}
                              >
                                <PlayIcon className="self-center w-8 h-8" />
                                <div className="self-center">WATCH TRAILER</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* <div className="keen-slider__slide">
                    <div className="relative top-0 w-full h-screen overflow-hidden">
                      <div className="absolute w-full h-full">
                        <img
                          className="hidden object-cover w-full h-full sm:block"
                          src="https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/films/Gaalipata2/banner/landscape.png"
                        />
                        <img
                          className="object-cover w-full h-full sm:hidden"
                          src="https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/films/Gaalipata2/banner/portrait.png"
                        />
                      </div>
                      <div
                        className="absolute w-full h-full bg-gradient-to-r from-black to-transparent"
                        // initial={{ opacity: 0, scaleX: 0 }}
                        // whileInView={{ opacity: 1, scaleX: 1 }}
                        // transition={{
                        //   ease: "easeOut",
                        //   duration: 0.5,
                        //   delay: 0.5,
                        // }}
                      />
                      <div className="absolute flex h-full">
                        <div className="self-center px-4 font-light sm:px-16 md:px-20">
                          <div className="text-sm text-white sm:text-xl md:text-3xl">
                            Rom-Com
                          </div>
                          <motion.div
                            className="mt-4 text-white"
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              ease: "easeOut",
                              duration: 0.5,
                              delay: 0.5,
                            }}
                          >
                            <span className="text-3xl sm:text-4xl md:text-6xl ">
                              GAALIPATA 2
                            </span>
                            <span className="self-end text-sm text-gray-300 sm:text-xl md:text-3xl">
                              (12 AUGUST 2022)
                            </span>
                          </motion.div>
                          <div className="flex gap-2 mt-2 text-xs text-white md:text-sm">
                            <div className="px-3 py-1 border border-white rounded-md">
                              KANNADA
                            </div>

                            <div className="px-3 py-1 border border-white rounded-md">
                              UA
                            </div>
                          </div>
                          <div
                            className="flex gap-2 py-2 pl-2 pr-4 mt-4 text-white duration-500 bg-black bg-opacity-25 rounded-md cursor-pointer w-max hover:bg-opacity-100"
                            onClick={() => {
                              setYoutubeUrl(
                                "https://www.youtube.com/watch?v=fnsWt4H619o"
                              );
                              setOpenVideoDialog(true);
                            }}
                          >
                            <PlayIcon className="self-center w-8 h-8" />
                            <div className="self-center">WATCH TRAILER</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="keen-slider__slide">
                    <div className="relative top-0 w-full h-screen overflow-hidden">
                      <div className="absolute w-full h-full bg-black">
                        <img
                          className="hidden object-cover w-full h-full sm:block"
                          src="https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/films/Gaalipata2/banner/landscape.png"
                        />
                        <img
                          className="object-cover w-full h-full opacity-50 sm:hidden"
                          src="https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/films/Gaalipata2/banner/portrait.png"
                        />
                      </div>
                      <div className="absolute flex h-full">
                        <div className="self-center px-4 font-light sm:px-16 md:px-20">
                          <div className="text-sm text-white sm:text-xl md:text-3xl">
                            Rom-Com
                          </div>
                          <motion.div
                            className="mt-4 text-white"
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              ease: "easeOut",
                              duration: 0.5,
                              delay: 0.5,
                            }}
                          >
                            <span className="text-3xl sm:text-4xl md:text-6xl ">
                              GAALIPATA 2
                            </span>
                            <span className="self-end text-sm text-gray-300 sm:text-xl md:text-3xl">
                              (12 AUGUST 2022)
                            </span>
                          </motion.div>
                          <div className="flex gap-2 mt-2 text-xs text-white md:text-sm">
                            <div className="px-3 py-1 border border-white rounded-md">
                              KANNADA
                            </div>

                            <div className="px-3 py-1 border border-white rounded-md">
                              UA
                            </div>
                          </div>
                          <div
                            className="flex gap-2 py-2 pl-2 pr-4 mt-4 text-white duration-500 bg-black bg-opacity-25 rounded-md cursor-pointer w-max hover:bg-opacity-100"
                            onClick={() => {
                              setYoutubeUrl(
                                "https://www.youtube.com/watch?v=fnsWt4H619o"
                              );
                              setOpenVideoDialog(true);
                            }}
                          >
                            <PlayIcon className="self-center w-8 h-8" />
                            <div className="self-center">WATCH TRAILER</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="keen-slider__slide">
                    <div className="relative top-0 w-full h-screen overflow-hidden">
                      <div className="absolute w-full h-full bg-black">
                        <img
                          className="hidden object-cover w-full h-full sm:block"
                          src="https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/films/Gaalipata2/banner/landscape.png"
                        />
                        <img
                          className="object-cover w-full h-full opacity-50 sm:hidden"
                          src="https://sacred-chank-productions.s3.eu-west-2.amazonaws.com/films/Gaalipata2/banner/portrait.png"
                        />
                      </div>
                      <div className="absolute flex h-full">
                        <div className="self-center px-4 font-light sm:px-16 md:px-20">
                          <div className="text-sm text-white sm:text-xl md:text-3xl">
                            Rom-Com
                          </div>
                          <motion.div
                            className="mt-4 text-white"
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
                            <span className="text-3xl sm:text-4xl md:text-6xl ">
                              GAALIPATA 2
                            </span>
                            <span className="self-end text-sm text-gray-300 sm:text-xl md:text-3xl">
                              (12 AUGUST 2022)
                            </span>
                          </motion.div>
                          <div className="flex gap-2 mt-2 text-xs text-white md:text-sm">
                            <div className="px-3 py-1 border border-white rounded-md">
                              KANNADA
                            </div>

                            <div className="px-3 py-1 border border-white rounded-md">
                              UA
                            </div>
                          </div>
                          <div
                            className="flex gap-2 py-2 pl-2 pr-4 mt-4 text-white duration-500 bg-black bg-opacity-25 rounded-md cursor-pointer w-max hover:bg-opacity-100"
                            onClick={() => {
                              setYoutubeUrl(
                                "https://www.youtube.com/watch?v=fnsWt4H619o"
                              );
                              setOpenVideoDialog(true);
                            }}
                          >
                            <PlayIcon className="self-center w-8 h-8" />
                            <div className="self-center">WATCH TRAILER</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="absolute h-full left-4">
                {loaded && instanceRef.current && (
                  <div className="hidden h-full sm:block">
                    <div className="flex h-full">
                      <div
                        className="bottom-0 self-center justify-center cursor-pointer"
                        onClick={(e) =>
                          e.stopPropagation() || instanceRef.current?.prev()
                        }
                      >
                        <ArrowBackwardIcon className="w-10 h-10 text-gray-400 duration-500 hover:text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute h-full right-4">
                {loaded && instanceRef.current && (
                  <div className="hidden h-full sm:block">
                    <div className="flex h-full">
                      <div
                        className="bottom-0 self-center justify-center cursor-pointer"
                        onClick={(e) =>
                          e.stopPropagation() || instanceRef.current?.next()
                        }
                      >
                        <ArrowForwardIcon className="w-10 h-10 text-gray-400 duration-500 hover:text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute left-0 right-0 w-full bottom-4">
                {loaded && instanceRef.current && (
                  <div className="z-20 flex justify-center gap-2 ">
                    {[
                      ...Array(
                        instanceRef.current.track.details.slides.length
                      ).keys(),
                    ].map((idx) => {
                      return (
                        <div
                          key={idx}
                          onClick={() => instanceRef.current?.moveToIdx(idx)}
                          className={classNames(
                            "w-2 h-2 rounded-full cursor-pointer self-center hover:w-3 hover:h-3 duration-500",
                            currentSlide === idx
                              ? "bg-white w-3 h-3"
                              : "bg-gray-400"
                          )}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>

            <div className="mx-auto mt-8 max-w-7xl"></div>
            <div className="flex gap-4 px-4 mx-auto mt-8 max-w-7xl">
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
              <div className="text-lg font-medium text-white md:text-2xl">
                MOVIES IN THEATER
              </div>
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

            <div className="grid grid-cols-1 gap-8 p-8 mx-auto overflow-hidden sm:grid-cols-3 lg:grid-cols-4 max-w-7xl">
              {data.inTheater.map((movie, index) => {
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
                UPCOMING MOVIES
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

            <div className="grid grid-cols-1 gap-8 p-8 mx-auto overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl">
              {data.upcoming.map((movie, index) => {
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
                      movie={movie}
                      className="col-span-1"
                      trailer={() => {
                        if (movie.trailer) {
                          setYoutubeUrl(movie.trailer);
                          setOpenVideoDialog(true);
                        }
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </main>

          <Footer socialMedia={settings.socialMedia} />
        </div>
        {/* Navbar */}
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
  const data = await fetch(process.env.BASE_API_URL + "movies/home")
    .then((res) => res.json())
    .then((json) => json);

  const settings = await fetch(process.env.BASE_API_URL + "settings")
    .then((res) => res.json())
    .then((json) => json.settings);

  console.log(settings);
  return { props: { data, settings } };
}
