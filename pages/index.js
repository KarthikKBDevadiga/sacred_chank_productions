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

const AdaptiveHeight = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px";
  }
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
};

export default function Index() {
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
      <div className="min-h-full bg-slate-900">
        {/* Navbar */}
        <Header scrolled={scrolled} />

        <main className="w-full -z-10 ">
          <div className="relative h-screen">
            <div className="absolute w-full">
              <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">
                  <div className="relative top-0 w-full h-screen overflow-hidden">
                    <div className="absolute w-full h-full bg-black">
                      <img
                        className="object-cover w-full h-full opacity-50"
                        src="https://mykinoplex.com/assets/images/ucm/banner/banner1657267451.jpg"
                      />
                    </div>
                    <div className="absolute flex h-full">
                      <div className="self-center px-4 font-light sm:px-16 md:px-20">
                        <div className="text-sm text-white sm:text-xl md:text-3xl">
                          Action | Drama
                        </div>
                        <div className="mt-4 text-white">
                          <span className="text-3xl sm:text-4xl md:text-6xl ">
                            SHAMSHERA{currentSlide}
                          </span>
                          <span className="self-end text-sm text-gray-300 sm:text-xl md:text-3xl">
                            (22 JUL 2022)
                          </span>
                        </div>
                        <div className="flex gap-2 mt-2 text-xs text-white md:text-sm">
                          <div className="px-3 py-1 border border-white rounded-md">
                            KANNADA
                          </div>
                          <div className="px-3 py-1 border border-white rounded-md">
                            ENGLISH
                          </div>
                          <div className="px-3 py-1 border border-white rounded-md">
                            FSK18
                          </div>
                        </div>
                        <div className="flex gap-2 py-2 pl-2 pr-4 mt-4 text-white duration-500 bg-black bg-opacity-25 rounded-md cursor-pointer w-max hover:bg-opacity-100">
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
                        className="object-cover w-full h-full opacity-50"
                        src="https://mykinoplex.com/assets/images/ucm/banner/banner1657267451.jpg"
                      />
                    </div>
                    <div className="absolute flex h-full">
                      <div className="self-center px-4 font-light sm:px-16 md:px-20">
                        <div className="text-sm text-white sm:text-xl md:text-3xl">
                          Action | Drama
                        </div>
                        <div className="mt-4 text-white">
                          <span className="text-3xl sm:text-4xl md:text-6xl ">
                            SHAMSHERA{currentSlide}
                          </span>
                          <span className="self-end text-sm text-gray-300 sm:text-xl md:text-3xl">
                            (22 JUL 2022)
                          </span>
                        </div>
                        <div className="flex gap-2 mt-2 text-xs text-white md:text-sm">
                          <div className="px-3 py-1 border border-white rounded-md">
                            KANNADA
                          </div>
                          <div className="px-3 py-1 border border-white rounded-md">
                            ENGLISH
                          </div>
                          <div className="px-3 py-1 border border-white rounded-md">
                            FSK18
                          </div>
                        </div>
                        <div className="flex gap-2 py-2 pl-2 pr-4 mt-4 text-white duration-500 bg-black bg-opacity-25 rounded-md cursor-pointer w-max hover:bg-opacity-100">
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
                        className="object-cover w-full h-full opacity-50"
                        src="https://mykinoplex.com/assets/images/ucm/banner/banner1657267451.jpg"
                      />
                    </div>
                    <div className="absolute flex h-full">
                      <div className="self-center px-4 font-light sm:px-16 md:px-20">
                        <div className="text-sm text-white sm:text-xl md:text-3xl">
                          Action | Drama
                        </div>
                        <div className="mt-4 text-white">
                          <span className="text-3xl sm:text-4xl md:text-6xl ">
                            SHAMSHERA{currentSlide}
                          </span>
                          <span className="self-end text-sm text-gray-300 sm:text-xl md:text-3xl">
                            (22 JUL 2022)
                          </span>
                        </div>
                        <div className="flex gap-2 mt-2 text-xs text-white md:text-sm">
                          <div className="px-3 py-1 border border-white rounded-md">
                            KANNADA
                          </div>
                          <div className="px-3 py-1 border border-white rounded-md">
                            ENGLISH
                          </div>
                          <div className="px-3 py-1 border border-white rounded-md">
                            FSK18
                          </div>
                        </div>
                        <div className="flex gap-2 py-2 pl-2 pr-4 mt-4 text-white duration-500 bg-black bg-opacity-25 rounded-md cursor-pointer w-max hover:bg-opacity-100">
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
                        className="object-cover w-full h-full opacity-50"
                        src="https://mykinoplex.com/assets/images/ucm/banner/banner1657267451.jpg"
                      />
                    </div>
                    <div className="absolute flex h-full">
                      <div className="self-center px-4 font-light sm:px-16 md:px-20">
                        <div className="text-sm text-white sm:text-xl md:text-3xl">
                          Action | Drama
                        </div>
                        <div className="mt-4 text-white">
                          <span className="text-3xl sm:text-4xl md:text-6xl ">
                            SHAMSHERA{currentSlide}
                          </span>
                          <span className="self-end text-sm text-gray-300 sm:text-xl md:text-3xl">
                            (22 JUL 2022)
                          </span>
                        </div>
                        <div className="flex gap-2 mt-2 text-xs text-white md:text-sm">
                          <div className="px-3 py-1 border border-white rounded-md">
                            KANNADA
                          </div>
                          <div className="px-3 py-1 border border-white rounded-md">
                            ENGLISH
                          </div>
                          <div className="px-3 py-1 border border-white rounded-md">
                            FSK18
                          </div>
                        </div>
                        <div className="flex gap-2 py-2 pl-2 pr-4 mt-4 text-white duration-500 bg-black bg-opacity-25 rounded-md cursor-pointer w-max hover:bg-opacity-100">
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
                    console.log("Sameple");
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
          </div>

          <div className="mx-auto mt-8 max-w-7xl">
            <div className="flex px-4">
              <div className="flex-1 bg-white h-[2px] self-center rounded-full mr-4" />
              <div className="text-lg font-medium text-white md:text-2xl">
                MOVIES IN THEATER
              </div>
              <div className="flex-1 bg-white h-[2px] self-center rounded-full ml-4" />
            </div>

            <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-3 ">
              <div className="relative col-span-1 overflow-hidden bg-white rounded-md shadow group">
                <img
                  className="object-cover w-full h-full"
                  src="https://mykinoplex.com/assets/images/ucm/card1657267726.jpg"
                />
                <div className="absolute bottom-0 w-full p-4 text-white duration-500 translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  <div className="text-xl">Shamshera</div>
                  <div className="text-sm">(Hindi)</div>
                  <div className="mt-2">
                    Shamshera is a 2022 Indian Hindi-language period action film
                    produced by Aditya Chopra under Yash Raj Films and directed
                    by Karan Malhotra. The film stars Ranbir Kapoor in a dual
                    role with Sanjay Dutt as the antagonist alongside Vaani
                    Kapoor, Ronit Roy, Saurabh Shukla and Ashutosh Rana.
                  </div>
                  <div className="px-2 py-1 mx-auto mt-2 text-white duration-500 border border-white rounded-md cursor-pointer w-max hover:bg-white hover:text-black">
                    WATCH TRAILER
                  </div>
                </div>
                <div className="absolute top-0 w-full p-4 text-white duration-500 -translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  22 July 2022
                </div>
              </div>
              <div className="relative col-span-1 overflow-hidden bg-white rounded-md shadow group">
                <img
                  className="object-cover w-full h-full"
                  src="https://mykinoplex.com/assets/images/ucm/card1657267726.jpg"
                />
                <div className="absolute bottom-0 w-full p-4 text-white duration-500 translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  <div className="text-xl">Shamshera</div>
                  <div className="text-sm">(Hindi)</div>
                  <div className="mt-2">
                    Shamshera is a 2022 Indian Hindi-language period action film
                    produced by Aditya Chopra under Yash Raj Films and directed
                    by Karan Malhotra. The film stars Ranbir Kapoor in a dual
                    role with Sanjay Dutt as the antagonist alongside Vaani
                    Kapoor, Ronit Roy, Saurabh Shukla and Ashutosh Rana.
                  </div>
                  <div className="px-2 py-1 mx-auto mt-2 text-white duration-500 border border-white rounded-md cursor-pointer w-max hover:bg-white hover:text-black">
                    WATCH TRAILER
                  </div>
                </div>
                <div className="absolute top-0 w-full p-4 text-white duration-500 -translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  22 July 2022
                </div>
              </div>
              <div className="relative col-span-1 overflow-hidden bg-white rounded-md shadow group">
                <img
                  className="object-cover w-full h-full"
                  src="https://mykinoplex.com/assets/images/ucm/card1657267726.jpg"
                />
                <div className="absolute bottom-0 w-full p-4 text-white duration-500 translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  <div className="text-xl">Shamshera</div>
                  <div className="text-sm">(Hindi)</div>
                  <div className="mt-2">
                    Shamshera is a 2022 Indian Hindi-language period action film
                    produced by Aditya Chopra under Yash Raj Films and directed
                    by Karan Malhotra. The film stars Ranbir Kapoor in a dual
                    role with Sanjay Dutt as the antagonist alongside Vaani
                    Kapoor, Ronit Roy, Saurabh Shukla and Ashutosh Rana.
                  </div>
                  <div className="px-2 py-1 mx-auto mt-2 text-white duration-500 border border-white rounded-md cursor-pointer w-max hover:bg-white hover:text-black">
                    WATCH TRAILER
                  </div>
                </div>
                <div className="absolute top-0 w-full p-4 text-white duration-500 -translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  22 July 2022
                </div>
              </div>
            </div>

            <div className="flex px-4 mt-">
              <div className="flex-1 bg-white h-[2px] self-center rounded-full mr-4" />
              <div className="text-lg font-medium text-white md:text-2xl">
                UPCOMING MOVIES
              </div>
              <div className="flex-1 bg-white h-[2px] self-center rounded-full ml-4" />
            </div>

            <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-3 ">
              <div className="relative col-span-1 overflow-hidden bg-white rounded-md shadow group">
                <img
                  className="object-cover w-full h-full"
                  src="https://mykinoplex.com/assets/images/ucm/card1657267726.jpg"
                />
                <div className="absolute bottom-0 w-full p-4 text-white duration-500 translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  <div className="text-xl">Shamshera</div>
                  <div className="text-sm">(Hindi)</div>
                  <div className="mt-2">
                    Shamshera is a 2022 Indian Hindi-language period action film
                    produced by Aditya Chopra under Yash Raj Films and directed
                    by Karan Malhotra. The film stars Ranbir Kapoor in a dual
                    role with Sanjay Dutt as the antagonist alongside Vaani
                    Kapoor, Ronit Roy, Saurabh Shukla and Ashutosh Rana.
                  </div>
                  <div className="px-2 py-1 mx-auto mt-2 text-white duration-500 border border-white rounded-md cursor-pointer w-max hover:bg-white hover:text-black">
                    WATCH TRAILER
                  </div>
                </div>
                <div className="absolute top-0 w-full p-4 text-white duration-500 -translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  22 July 2022
                </div>
              </div>
              <div className="relative col-span-1 overflow-hidden bg-white rounded-md shadow group">
                <img
                  className="object-cover w-full h-full"
                  src="https://mykinoplex.com/assets/images/ucm/card1657267726.jpg"
                />
                <div className="absolute bottom-0 w-full p-4 text-white duration-500 translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  <div className="text-xl">Shamshera</div>
                  <div className="text-sm">(Hindi)</div>
                  <div className="mt-2">
                    Shamshera is a 2022 Indian Hindi-language period action film
                    produced by Aditya Chopra under Yash Raj Films and directed
                    by Karan Malhotra. The film stars Ranbir Kapoor in a dual
                    role with Sanjay Dutt as the antagonist alongside Vaani
                    Kapoor, Ronit Roy, Saurabh Shukla and Ashutosh Rana.
                  </div>
                  <div className="px-2 py-1 mx-auto mt-2 text-white duration-500 border border-white rounded-md cursor-pointer w-max hover:bg-white hover:text-black">
                    WATCH TRAILER
                  </div>
                </div>
                <div className="absolute top-0 w-full p-4 text-white duration-500 -translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  22 July 2022
                </div>
              </div>
              <div className="relative col-span-1 overflow-hidden bg-white rounded-md shadow group">
                <img
                  className="object-cover w-full h-full"
                  src="https://mykinoplex.com/assets/images/ucm/card1657267726.jpg"
                />
                <div className="absolute bottom-0 w-full p-4 text-white duration-500 translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  <div className="text-xl">Shamshera</div>
                  <div className="text-sm">(Hindi)</div>
                  <div className="mt-2">
                    Shamshera is a 2022 Indian Hindi-language period action film
                    produced by Aditya Chopra under Yash Raj Films and directed
                    by Karan Malhotra. The film stars Ranbir Kapoor in a dual
                    role with Sanjay Dutt as the antagonist alongside Vaani
                    Kapoor, Ronit Roy, Saurabh Shukla and Ashutosh Rana.
                  </div>
                  <div className="px-2 py-1 mx-auto mt-2 text-white duration-500 border border-white rounded-md cursor-pointer w-max hover:bg-white hover:text-black">
                    WATCH TRAILER
                  </div>
                </div>
                <div className="absolute top-0 w-full p-4 text-white duration-500 -translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
                  22 July 2022
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}