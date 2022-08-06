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

import { motion } from "framer-motion";

const AdaptiveHeight = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px";
  }
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
};

const UPCOMING_MOVIE = [
  {
    title: "Gaalipata 2",
    description:
      "Three college friends meet teacher Kishore Kumar who offers them a room to stay because of personal reasons. Years later, they reunite to help their teacher with his illness and in turn find a chance to fix their love lives.",
    releaseDate: "12 August 2022",
    languages: ["KANNADA"],
    genre: ["COMEDY", "ROMANTIC"],
    poster:
      "https://www.filmibeat.com/fanimg/movie/17945/gaalipata-2-photos-images-64053.jpg",
    trailer: "https://www.youtube.com/watch?v=fnsWt4H619o",
    casts: [
      {
        name: "Ganesh",
        image:
          "https://www.filmibeat.com/img/popcorn/profile_photos/ganesh-20190726101918-2789.jpg",
      },
      {
        name: "Diganth",
        image:
          "https://starsunfolded.com/wp-content/uploads/2017/06/Diganth.jpg",
      },
    ],
  },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState();

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
        title="Scared Chank Productions"
        description="Sacred Chank Productions"
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
                  <div className="keen-slider__slide">
                    <div className="relative top-0 w-full h-screen overflow-hidden">
                      <div className="absolute w-full h-full bg-black">
                        <img
                          className="hidden object-cover w-full h-full opacity-50 sm:block"
                          src="https://m.media-amazon.com/images/M/MV5BNjI0ZTY4MzYtMDA5MS00YThhLTgxMGQtZWM2YmUwNTIzNGNhXkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_.jpg"
                        />
                        <img
                          className="object-cover w-full h-full opacity-50 sm:hidden"
                          src="https://www.filmibeat.com/fanimg/movie/17945/gaalipata-2-photos-images-64053.jpg"
                        />
                      </div>
                      <div className="absolute flex h-full">
                        <div className="self-center px-4 font-light sm:px-16 md:px-20">
                          <div className="text-sm text-white sm:text-xl md:text-3xl">
                            Rom-Com
                          </div>
                          <div className="mt-4 text-white">
                            <span className="text-3xl sm:text-4xl md:text-6xl ">
                              GAALIPATA 2
                            </span>
                            <span className="self-end text-sm text-gray-300 sm:text-xl md:text-3xl">
                              (12 AUGUST 2022)
                            </span>
                          </div>
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
                          className="hidden object-cover w-full h-full opacity-50 sm:block"
                          src="https://m.media-amazon.com/images/M/MV5BNjI0ZTY4MzYtMDA5MS00YThhLTgxMGQtZWM2YmUwNTIzNGNhXkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_.jpg"
                        />
                        <img
                          className="object-cover w-full h-full opacity-50 sm:hidden"
                          src="https://www.filmibeat.com/fanimg/movie/17945/gaalipata-2-photos-images-64053.jpg"
                        />
                      </div>
                      <div className="absolute flex h-full">
                        <div className="self-center px-4 font-light sm:px-16 md:px-20">
                          <div className="text-sm text-white sm:text-xl md:text-3xl">
                            Rom-Com
                          </div>
                          <div className="mt-4 text-white">
                            <span className="text-3xl sm:text-4xl md:text-6xl ">
                              GAALIPATA 2
                            </span>
                            <span className="self-end text-sm text-gray-300 sm:text-xl md:text-3xl">
                              (12 AUGUST 2022)
                            </span>
                          </div>
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
            <div className="flex px-4 mx-auto mt-8 max-w-7xl">
              <div className="flex-1 bg-white h-[2px] self-center rounded-full mr-4" />
              <div className="text-lg font-medium text-white md:text-2xl">
                MOVIES IN THEATER
              </div>
              <div className="flex-1 bg-white h-[2px] self-center rounded-full ml-4" />
            </div>

            <div className="grid grid-cols-1 gap-8 p-8 mx-auto sm:grid-cols-3 lg:grid-cols-4 max-w-7xl">
              <div className="relative col-span-1 overflow-hidden bg-white rounded-md shadow cursor-pointer group">
                <img
                  className="object-cover w-full h-full duration-500 group-hover:grayscale group-hover:scale-110"
                  src="https://www.paramvah.com/images/films/777-charlie/777-CharliePoster2.jpg"
                />
                <div className="absolute bottom-0 w-full p-4 text-white duration-500 translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  <div className="text-xl">777 Charlie</div>
                  <div className="text-sm">(Kannada)</div>
                  <div className="mt-2">
                    Dharma is stuck in a rut with his negative and lonely
                    lifestyle and spends each day in the comfort of his
                    loneliness. A pup named Charlie enters his life and gives
                    him a new perspective towards it.
                  </div>
                  <div
                    className="px-2 py-1 mx-auto mt-2 text-white duration-500 border border-white rounded-md cursor-pointer w-max hover:bg-white hover:text-black"
                    onClick={() => {
                      setYoutubeUrl(
                        "https://www.youtube.com/watch?v=REqFOV2A7sI"
                      );
                      setOpenVideoDialog(true);
                    }}
                  >
                    WATCH TRAILER
                  </div>
                </div>
                <div className="absolute top-0 w-full p-4 text-white duration-500 -translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  10 June 2022
                </div>
              </div>

              <div className="relative col-span-1 overflow-hidden bg-white rounded-md shadow cursor-pointer group">
                <img
                  className="object-cover w-full h-full duration-500 group-hover:grayscale group-hover:scale-110"
                  src="https://www.deccanherald.com/sites/dh/files/articleimages/2022/06/23/harikathe-alla-girikathe-1120689-1655987339.jpg"
                />
                <div className="absolute bottom-0 w-full p-4 text-white duration-500 translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  <div className="text-xl">Harikathe Alla Girikathe</div>
                  <div className="text-sm">(Kannada)</div>
                  <div className="mt-2">
                    The hurdles that has to be overcome by three people who came
                    together to pursue a common goal of making it big in the
                    movie business.
                  </div>
                  <div
                    className="px-2 py-1 mx-auto mt-2 text-white duration-500 border border-white rounded-md cursor-pointer w-max hover:bg-white hover:text-black"
                    onClick={() => {
                      setYoutubeUrl(
                        "https://www.youtube.com/watch?v=NDf58vl6FhA"
                      );
                      setOpenVideoDialog(true);
                    }}
                  >
                    WATCH TRAILER
                  </div>
                </div>
                <div className="absolute top-0 w-full p-4 text-white duration-500 -translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  23 June 2022
                </div>
              </div>
              <div className="relative col-span-1 overflow-hidden bg-white rounded-md shadow cursor-pointer group">
                <img
                  className="object-cover w-full h-full duration-500 group-hover:grayscale group-hover:scale-110"
                  src="https://www.letsfindmovie.com/wp-content/uploads/2021/12/gQ29E9Qy6z5ExsxnpgUTHfpZFO3.jpg"
                />
                <div className="absolute bottom-0 w-full p-4 text-white duration-500 translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  <div className="text-xl">Avatara Purusha</div>
                  <div className="text-sm">(Kannada)</div>
                  <div className="mt-2">
                    Siri hires an unsuccessful actor to play her missing brother
                    in front of her parents to bring the family back together.
                    Black magic also plays a role.
                  </div>
                  <div
                    className="px-2 py-1 mx-auto mt-2 text-white duration-500 border border-white rounded-md cursor-pointer w-max hover:bg-white hover:text-black"
                    onClick={() => {
                      setYoutubeUrl(
                        "https://www.youtube.com/watch?v=LqvbogH-Ivc"
                      );
                      setOpenVideoDialog(true);
                    }}
                  >
                    WATCH TRAILER
                  </div>
                </div>
                <div className="absolute top-0 w-full p-4 text-white duration-500 -translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  6 May 2022
                </div>
              </div>
            </div>

            <div className="flex px-4 mx-auto max-w-7xl">
              <div className="flex-1 bg-white h-[2px] self-center rounded-full mr-4" />
              <div className="text-lg font-medium text-white md:text-2xl">
                UPCOMING MOVIES
              </div>
              <div className="flex-1 bg-white h-[2px] self-center rounded-full ml-4" />
            </div>

            <div className="grid grid-cols-1 gap-8 p-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl">
              {UPCOMING_MOVIE.map((movie) => {
                return (
                  // <AnimationOnScroll
                  //   key={movie}
                  //   animateIn="animate__fadeInRight"
                  //   initiallyVisible={true}
                  //   duration={1}
                  //   // delay={500}
                  //   animateOnce={true}
                  // >
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
                  // </AnimationOnScroll>
                );
              })}
            </div>
          </main>

          <Footer />
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
