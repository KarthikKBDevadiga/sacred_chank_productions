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
import Metatag from "../components/Metatag";

import { motion } from "framer-motion";
import Constants from "../helpers/Constants";

export default function Index() {
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
      <Metatag title="News And Events" description="News And Events" />
      <div className="min-h-full bg-slate-900">
        {/* Navbar */}
        <Header scrolled={scrolled} page="news_and_events" />

        <main
          className="w-full pt-20 -z-10"
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
          <div className="px-4 mx-auto max-w-7xl">
            <div className="grid max-w-3xl grid-cols-1 gap-4 mx-auto lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
              <section
                className="lg:col-start-1 lg:col-span-2"
                aria-labelledby="order-details"
              >
                <motion.div
                  initial={{ opacity: 0, y: -200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                  }}
                >
                  <img
                    className="w-full rounded-md"
                    src="https://mykinoplex.com/assets/images/ucm/banner/banner1657267451.jpg"
                  />
                </motion.div>

                <motion.div
                  className="p-4 mx-auto mt-4 text-white bg-gray-800 rounded-md md:mt-4 "
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                  }}
                >
                  <div className="max-w-5xl mx-auto text-xs text-gray-300 md:text-base">
                    ಟಿ.ಜಿ. ನಂದೀಶ್, ತೀರ್ಥಹಳ್ಳಿ - July 25, 2022
                  </div>
                  <div className="mx-auto mt-4 text-xl md:text-3xl">
                    ಜೇನಿನ ಧ್ವನಿಯ ಗಾಯಕ ಶ್ರೀ ರಾಜೇಶ್ ಕೃಷ್ಣನ್ ಅವರಿಗೆ ಜನ್ಮದಿನದ
                    ಶುಭಾಶಯಗಳು..
                  </div>
                  <div className="max-w-5xl mx-auto mt-2 text-sm md:text-base">
                    <p className="mt-4">
                      ಕನ್ನಡ ಚಿತ್ರರಂಗ ಕಂಡ ಶ್ರೇಷ್ಠ ಗಾಯಕರಲ್ಲಿ ರಾಜೇಶ್ ಕೃಷ್ಣನ್
                      ಮುಂಚೂಣಿಯಲ್ಲಿ ನಿಲ್ಲುತ್ತಾರೆ. ಎಸ್ ಪಿ ಬಿ ಯವರು ನಮ್ಮವರೇ
                      ಎನಿಸುವಷ್ಟು ಕನ್ನಡಿಗರ ಮನೆ ಮನದಲ್ಲಿ ಬೆರೆತು ಹೋಗಿದ್ದರೂ ಅವರು ಇಡೀ
                      ಭಾರತದ ಆಸ್ತಿಯಾಗಿದ್ದರು. ಆದರೆ ಕನ್ನಡ ನೆಲದಲ್ಲಿ ಜನಿಸಿ, ಕನ್ನಡ
                      ಸಂಗೀತ ಲೋಕದಲ್ಲಿ ಅನನ್ಯ ಸಾಧನೆ ಮಾಡಿದ ರಾಜೇಶ್ ಕೃಷ್ಣನ್ ಎಂದರೆ
                      ಅತಿಶಯೋಕ್ತಿಯಾಗಲಾರದು. ಬಾಲು ಅವರ ಧ್ವನಿಯಿಂದ ಹೊರ ಬಂದ ಹಾಡುಗಳಿಗೆ
                      ಟ್ರಾಕ್ ಹಾಡುತ್ತ ತಮ್ಮ ಪ್ರತಿಭೆ ಪ್ರದರ್ಶಿಸಿದ ರಾಜೇಶ್ ಅವರು ಗೌರಿ
                      ಗಣೇಶ ಚಿತ್ರದ ಮೂಲಕ ಚೊಚ್ಚಲ ಬಾರಿಗೆ ಪೂರ್ಣ ಪ್ರಮಾಣದ ಹಿನ್ನೆಲೆ
                      ಗಾಯಕರಾದರು.
                    </p>
                    <p className="mt-4">
                      ಕಳೆದ ಮೂರು ದಶಕದಿಂದ ರಾಜೇಶ್ ಅವರ ಜೇನಿನ ಕಂಠ ಸಂಗೀತಪ್ರಿಯರನ್ನು
                      ರಂಜಿಸುತ್ತಲೇ ಇದೆ. ಈ ಮೂವತ್ತು ವರ್ಷಗಳಲ್ಲಿ ಕನ್ನಡದಲ್ಲಿ 5000 ಕ್ಕೂ
                      ಅಧಿಕ ಹಾಡುಗಳಿಗೆ ಗಾನಸುಧೆ ಹರಿಸಿದ್ದಾರೆ. ತಮ್ಮ ಮೋಹಕ ಧ್ವನಿಯಿಂದ ಆ
                      ಎಲ್ಲಾ ಹಾಡುಗಳನ್ನು ಮೆರೆಸಿದ್ದಾರೆ. ಅದನ್ನು ಕೇಳುವ ಶೋತೃಗಳ ನೋವು
                      ಸಂಕಟವನ್ನು ಮರೆಸಿದ್ದಾರೆ.
                    </p>
                    <p className="mt-4">
                      ರಾಜೇಶ್ ಕೃಷ್ಣನ್ ಅವರ ವೃತ್ತಿ ಬದುಕು ಅತ್ಯಂತ ಸವಾಲಿನಿಂದ ಕೂಡಿತ್ತು.
                      ಎಸ್ ಪಿ ಬಾಲಸುಬ್ರಹ್ಮಣ್ಯಂ, ‌ಮನೋ, ಉದಿತ್ ನಾರಾಯಣ್, ಸೋನು ನಿಗಮ್,
                      ಟಿಪ್ಪು, ಶಾನ್ ಅವರಂತಹ‌ ಹೆಸರಾಂತ ‌ಗಾಯಕರಿಗೆ ಕನ್ನಡದಲ್ಲಿ
                      ಹೆಚ್ಚೆಚ್ಚು ಅವಕಾಶಗಳು ಸಿಕ್ಕಂಥ ಸಂದರ್ಭದಲ್ಲಿಯು ರಾಜೇಶ್ ತಮ್ಮ
                      ಅಸ್ತಿತ್ವ ಉಳಿಸಿಕೊಂಡು, ಬೆಳೆಸಿಕೊಂಡು ಬಂದರು. ಅವರಿಗೊಲಿದ ಸರಸ್ವತಿ
                      ಎಂದು ಅವರ ಕೈ ಬಿಡಲಿಲ್ಲ. ಒಂದು ಕಡೆ ಅದೆಷ್ಟೇ ಪೈಪೋಟಿ ಇದ್ದರೂ
                      ಇನ್ನೊಂದೆಡೆ ತಮ್ಮ ಗಾಯನದಿಂದ ಮೋಡಿ ಮಾಡುತ್ತಲೇ ಬೆಳೆದರು.
                    </p>
                    <p className="mt-4">
                      ಹುಚ್ಚ ಸಿನಿಮಾದ ಉಸಿರೇ ಹಾಡು ಕೇಳಿದಾಗ ಆಗುವ‌ ಖುಷಿ, ಗೂಗ್ಲಿ ಚಿತ್ರದ
                      ‘ಬಿಸಿಲ ಕುದುರೆಯೊಂದು’ ಎಂಬ ವಿಷಾದ ಕಾಡುವ ಪರಿ, ನೂರು ಜನ್ಮಕೂ
                      ನೂರಾರು ಜನ್ಮಕೂ ಎಂಬ ಪ್ರೇಮಭರಿತ ಸಾಲುಗಳಿಗೆ ಜೀವಂತಿಕೆ ನೀಡಿದ ರೀತಿ,
                      ಸ್ನೇಹಲೋಕ ಚಿತ್ರದ ಒಂದೇ ಉಸಿರಂತೆ ನಾನು ನೀನು ಹಾಡನ್ನು ಮನೋಜ್ಞವಾಗಿ
                      ಹಾಡಿದ ಶೈಲಿ ಮರೆಯಲಸಾಧ್ಯ. ಇಂತಹ ಸಾವಿರಾರು ಗೀತೆಗಳು ರಾಜೇಶ್ ಅವರ
                      ಗಾಯನದ ಕಾರಣಕ್ಕಾಗಿ ಕನ್ನಡಿಗರ ಹೃನ್ಮನದಲ್ಲಿ ಸ್ಥಾನ ಪಡೆದಿದೆ. ಅವರ
                      ಪ್ರತಿಭೆ ಅಮೋಘ. ಆ ಜೇನಿನ‌ ಧ್ವನಿಗೆ ತಲೆದೂಗದವರಿಲ್ಲ, ತಲೆ
                      ಬಾಗದವರಿಲ್ಲ.
                    </p>
                    <p className="mt-4">
                      ಪ್ರಣಯ, ವಿನೋದ, ವಿಷಾದ, ಜನಪದ, ಭಕ್ತಿಗೀತೆ ಸೇರಿದಂತೆ ಎಲ್ಲಾ ರೀತಿಯ
                      ಹಾಡುಗಳನ್ನು ಸರಾಗವಾಗಿ ಹಾಡಬಲ್ಲ ದೈತ್ಯ ಪ್ರತಿಭೆ ರಾಜೇಶ್ ಕೃಷ್ಣನ್.
                      ಅವರ ಸಾಧನೆ ಬಗ್ಗೆ ಪ್ರತಿ ಕನ್ನಡಿಗರಿಗೂ ಹೆಮ್ಮೆ ಮತ್ತು ಅಭಿಮಾನ
                      ಇರಬೇಕು. ಅವರ ಸಾಧನೆಗೆ ನನ್ನ ಅಕ್ಷರ ನಮನ.
                    </p>
                    <p className="mt-4">
                      ರಾಜೇಶ್ ಅವರ ಧ್ವನಿಯಲ್ಲಿ ಜೀವ ತಳೆದ ಅಮೇರಿಕಾ ಅಮೇರಿಕಾ ಸಿನಿಮಾದ
                      ನೂರು ಜನ್ಮಕೂ ನನ್ನಿಷ್ಟದ ಹಾಡುಗಳಲ್ಲೊಂದು.
                    </p>
                    <p className="mt-4">
                      ನನ್ನ ಸಾಹಿತ್ಯದ ಮೊದಲ ಗೀತೆಗೆ ಇವರು ಧ್ವನಿಯಾಗಿದ್ದು ನನ್ನ ಪಾಲಿಗೆ
                      ಎಂದಿಗೂ ಮರೆಯಲಾಗದ ಖುಷಿ.
                    </p>
                  </div>
                </motion.div>
              </section>
              <section
                aria-labelledby="timeline-title"
                className="lg:col-start-3 lg:col-span-1"
              >
                <div className="flex flex-col overflow-hidden bg-gray-700 rounded-md gap-">
                  {Constants.NEWS.map((news, index) => {
                    return (
                      <motion.div
                        key={index}
                        className="flex p-4 duration-500 cursor-pointer hover:bg-gray-600"
                        initial={{ opacity: 0, x: 200 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          ease: "easeInOut",
                          duration: 0.25,
                          delay: 0.1 * index,
                          once: true,
                        }}
                      >
                        <div className="flex-shrink-0 mr-4">
                          <img
                            className="object-cover w-24 h-24 rounded-md"
                            src="https://mykinoplex.com/assets/images/ucm/banner/banner1657267451.jpg"
                          />
                        </div>
                        <div className="text-white ">
                          <h4 className="text-base">
                            ಜೇನಿನ ಧ್ವನಿಯ ಗಾಯಕ ಶ್ರೀ ರಾಜೇಶ್ ಕೃಷ್ಣನ್ ಅವರಿಗೆ
                            ಜನ್ಮದಿನದ ಶುಭಾಶಯಗಳು..
                          </h4>
                        </div>
                      </motion.div>
                    );
                  })}
                  <div className="px-4 py-2 text-center text-white duration-500 cursor-pointer hover:bg-gray-600">
                    View All
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer className="mt-8" />
      </div>
    </>
  );
}
