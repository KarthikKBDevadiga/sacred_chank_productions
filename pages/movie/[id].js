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
        {/* Navbar */}
        <Header scrolled={scrolled} page="about_us" />

        <main className="w-full -z-10 ">
          <div className="relative bg-black bg-opacity-25 h-96 md:h-96">
            <img
              className="object-cover w-full h-full opacity-50"
              src={movie.poster.landscape}
            />
          </div>

          <div className="relative px-4 mx-auto -my-48 md:px-8 max-w-7xl sm:grid sm:grid-cols-4 sm:gap-8 sm:items-start">
            <div className="relative overflow-hidden bg-black rounded-md shadow-md group">
              <img
                className="object-cover w-full h-full "
                src={movie.poster.portrait}
              />
              <div className="absolute bottom-0 w-full h-full p-4 text-white duration-500 translate-y-full bg-gradient-to-t from-black to-transparent group-hover:translate-y-0">
                <PlayIcon className="w-24 h-24" />
              </div>
            </div>
            <div className="mt-4 text-white sm:mt-0 sm:col-span-3">
              <div className="text-3xl">{movie.title}</div>
              <div className="mt-2 text-lg">({movie.releaseDate})</div>

              <div className="flex gap-2 mt-2">
                {movie.genre.map((genre) => {
                  return (
                    <di
                      key={genre}
                      className="px-3 py-1 text-base bg-red-600 rounded-md "
                    >
                      {genre}
                    </di>
                  );
                })}
              </div>
              <div className="mt-4 text-lg">{movie.description}</div>

              <div className="mt-8">
                <div className="flex gap-4 text-2xl text-white">
                  <div>Cast</div>
                  <div className="self-center flex-1 h-1 bg-white rounded-sm" />
                </div>
                <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                  {movie.casts.map((cast) => {
                    return (
                      <div className="flex col-span-1 gap-4 overflow-hidden border border-white rounded-full">
                        <img
                          key={cast}
                          className="object-cover w-14 h-14"
                          src={cast.image}
                        />
                        <div className="self-center text-xl">
                          <span>{cast.name}</span>
                          <span className="text-sm"> as {cast.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer className="mt-56" />
      </div>
    </>
  );
}
