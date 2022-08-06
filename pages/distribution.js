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

import { motion } from "framer-motion";

const AdaptiveHeight = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px";
  }
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
};

export default function Distribution() {
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
      <Metatag title="Distribution" description="Distribution" />
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
              <div className="flex px-4">
                <div className="flex-1 bg-white h-[2px] self-center rounded-full mr-4" />
                <div className="text-lg font-medium text-white md:text-2xl">
                  Distributed Films
                </div>
                <div className="flex-1 bg-white h-[2px] self-center rounded-full ml-4" />
              </div>

              <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-3 ">
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
                      The hurdles that has to be overcome by three people who
                      came together to pursue a common goal of making it big in
                      the movie business.
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
                      Siri hires an unsuccessful actor to play her missing
                      brother in front of her parents to bring the family back
                      together. Black magic also plays a role.
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
            </div>
          </motion.main>
          <Footer />
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
