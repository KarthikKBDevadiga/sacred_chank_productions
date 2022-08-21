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
import YoutubeDialog, {
  getYoutubeVideoId,
} from "../../components/YoutubeDialog";
import InstagramIcon from "../../icons/InstagramIcon";
import BookTicketButton from "../../components/BookTicketButton";
import Movie from "../../components/item/Movie";

export default function MoviesList({ movies }) {
  // const movie = Constants.MOVIE;
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
        title="Movies"
        description="Movies"
        keywords="Sacred Chank Productions,Movies"
      />
      <div className="min-h-full bg-slate-900">
        <div className="pattern">
          {/* Navbar */}
          <Header scrolled={scrolled} page="movies" />

          <main className="w-full -z-10 ">
            <motion.div
              className=" h-96 md:h-96 bg-gradient-to-b from-black via-black to-transparent"
              initial={{ opacity: 0, scale: 1, y: -200 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              {/* <div className="absolute top-0 w-full h-full bg-gradient-to-b from-slate-900 to-transparent" /> */}
            </motion.div>

            <div className="relative p-4 -mt-64 xl:mx-auto max-w-7xl">
              <motion.div
                className={classNames("relative w-full py-4 px-4 col-span-2")}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
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
              </motion.div>
              <div className="grid grid-cols-1 gap-8 px-4 py-4 mx-auto text-white sm:grid-cols-3 lg:grid-cols-4">
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
          </main>
          <Footer className="mt-4" />
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

  const movies = await fetch(process.env.BASE_URL + "/movies")
    .then((res) => res.json())
    .then((json) => json.movies);
  return {
    props: {
      movies,
    },
  };
}
