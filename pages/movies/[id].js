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
import FacebookIcon from "../../icons/FacebookIcon";

import { motion } from "framer-motion";
import classNames from "../../utils/classNames";
import YoutubeDialog, {
  getYoutubeVideoId,
} from "../../components/YoutubeDialog";
import InstagramIcon from "../../icons/InstagramIcon";
import BookTicketButton from "../../components/BookTicketButton";
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import TwitterIcon from "../../icons/TwitterIcon";

export default function MovieInd({ movie }) {
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
        title={movie.title}
        description={movie.title}
        url={movie.poster.landscape}
        keywords={"Sacred Chank Productions,Movie," + movie.title}
      />
      <div className="min-h-full bg-slate-900">
        <div className="pattern">
          {/* Navbar */}
          <Header scrolled={scrolled} page="movies" />

          <main className="w-full overflow-hidden -z-10">
            <motion.div
              className="overflow-hidden bg-black bg-opacity-25 h-96 md:h-96"
              initial={{ opacity: 0, scale: 1, y: -200 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              {/* <img
                className="absolute w-full h-full"
                src={movie.poster.landscape}
              /> */}
              <div
                className={classNames(
                  "w-full h-full bg-center bg-no-repeat bg-cover bg-fixed ",
                  "bg-[url:('" + movie.poster.landscape + "')]"
                )}
                style={{
                  backgroundImage: 'url("' + movie.poster.landscape + '")',
                }}
              />
            </motion.div>

            <div className="relative p-4 -mt-24 xl:mx-auto max-w-7xl">
              <div className="-mt-24 md:grid md:grid-cols-4 md:gap-4">
                <motion.div
                  className="relative overflow-hidden bg-black rounded-md shadow-md group aspect-[2/3]"
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
                  className="flex mt-4 overflow-hidden bg-black rounded-md shadow-md sm:col-span-2 md:mt-0 "
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
                  className="mt-4 sm:col-span-1 md:mt-0 h-max"
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay: 0.5,
                    once: true,
                  }}
                  viewport={{ once: true }}
                >
                  {/* <div className="overflow-hidden bg-gray-700 rounded-md shadow-md">
                    <div className="flex w-full gap-4 px-4 pt-4 pb-2 mx-auto">
                      <motion.div
                        className="text-lg font-medium text-white md:text-xl"
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          ease: "easeInOut",
                          duration: 0.5,
                          once: true,
                          delay: 1,
                        }}
                      >
                        Share
                      </motion.div>
                      <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{
                          ease: "easeInOut",
                          duration: 0.5,
                          once: true,
                          delay: 1,
                        }}
                        className="flex-1 bg-white h-[2px] self-center rounded-full"
                      />
                    </div>
                    <div className="flex gap-4 px-4 py-4 ">
                      <FacebookShareButton
                        url={"http://localhost:3000/movies/" + movie.id}
                        quote={movie.title}
                        hashtag={"#SacredChankProductions"}
                      >
                        <FacebookIcon className="w-6 h-6 text-white duration-500 hover:scale-110" />
                      </FacebookShareButton>
                      <TwitterShareButton
                        url={"http://localhost:3000/movies/" + movie.id}
                        quote={movie.title}
                        hashtag={"#SacredChankProductions"}
                      >
                        <TwitterIcon className="w-6 h-6 text-white duration-500 hover:scale-110" />
                      </TwitterShareButton>
                      <WhatsappShareButton
                        url={"http://localhost:3000/movies/" + movie.id}
                        quote={movie.title}
                        hashtag={"#SacredChankProductions"}
                      >
                        <TwitterIcon className="w-6 h-6 text-white duration-500 hover:scale-110" />
                      </WhatsappShareButton>
                    </div>
                  </div> */}
                </motion.div>
              </div>
              {movie.tickets?.length > 0 && (
                <div className="grid grid-cols-1 mt-4 overflow-hidden text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {movie.tickets?.map((ticket, index) => {
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
                        <BookTicketButton
                          name={ticket.name}
                          rating={ticket.rating}
                          theater={ticket.theater}
                          timing={ticket.timing}
                          url={ticket.url}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              )}

              <div className="mt-4 text-white md:grid md:grid-cols-3 md:gap-4">
                <div className="col-span-2">
                  <div className="flex gap-2">
                    {movie.genres.map((genre, index) => {
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
                          className="text-sm font-bold cursor-pointer "
                        >
                          <div className="px-3 py-1 duration-500 border border-white rounded-full hover:bg-white hover:text-black">
                            {genre}
                          </div>
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
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.5,
                        once: true,
                      }}
                    >
                      Cast
                    </motion.div>
                    <motion.div
                      className="self-center flex-1 h-0.5 bg-white rounded-sm"
                      initial={{ opacity: 0, scaleX: 0 }}
                      viewport={{ once: true }}
                      whileInView={{
                        opacity: 1,
                        scaleX: 1,
                      }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.5,
                        once: true,
                      }}
                    ></motion.div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mt-4 overflow-hidden sm:grid-cols-3 lg:grid-cols-4">
                    {movie.casts.map((cast, index) => {
                      return (
                        <motion.div
                          key={index}
                          viewport={{ once: true }}
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            ease: "easeInOut",
                            duration: 0.5,
                            delay: 0.25 * index,
                            once: true,
                          }}
                        >
                          <div className="relative overflow-hidden rounded-md shadow-md cursor-pointer aspect-square group">
                            <img
                              key={cast}
                              className="object-cover w-full h-full duration-500 group-hover:grayscale group-hover:scale-150 group-hover:translate-x-1/4"
                              src={cast.image}
                            />
                            <div className="absolute text-base md:text-lg top-2 left-2">
                              <div className="duration-500 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                                {cast.name}
                              </div>
                            </div>
                            {/* <div className="absolute text-base md:text-lg bottom-2 left-2">
                            <div className="p-1 text-gray-500 duration-500 scale-0 bg-white rounded-full shadow-md opacity-0 group-hover:scale-100 group-hover:opacity-100">
                              <InstagramIcon className="w-6 h-6" />
                            </div>
                          </div> */}
                          </div>
                        </motion.div>
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
                  {movie.promotions?.length > 0 && (
                    <>
                      <div className="flex gap-4 mt-8 text-xl text-white">
                        <motion.div
                          initial={{ opacity: 0, scale: 1 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 0.5,
                            once: true,
                          }}
                        >
                          Promotion
                        </motion.div>
                        <motion.div
                          className="self-center flex-1 h-0.5 bg-white rounded-sm"
                          initial={{ opacity: 0, scaleX: 0 }}
                          viewport={{ once: true }}
                          whileInView={{
                            opacity: 1,
                            scaleX: 1,
                          }}
                          transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 0.5,
                            once: true,
                          }}
                        ></motion.div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4 overflow-hidden text-white md:grid-cols-3">
                        {movie.promotions.map((promotion, index) => {
                          return (
                            <motion.div
                              key={index}
                              className="relative overflow-hidden cursor-pointer group"
                              onClick={() => {
                                setYoutubeUrl(promotion.url);
                                setOpenVideoDialog(true);
                              }}
                              viewport={{ once: true }}
                              initial={{ opacity: 0, x: 50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                ease: "easeInOut",
                                duration: 0.5,
                                delay: 0.25 * index,
                                once: true,
                              }}
                            >
                              <img
                                src={
                                  "https://img.youtube.com/vi/" +
                                  getYoutubeVideoId(promotion.url) +
                                  "/hqdefault.jpg"
                                }
                                className="w-full h-full duration-500 rounded-md shadow-md group-hover:blur-sm"
                                frameBorder="0"
                                allowFullScreen
                              />
                              <div className="absolute left-0 w-full duration-500 bg-black bg-opacity-50 h-1/2 -top-full group-hover:top-0"></div>
                              <div className="absolute left-0 w-full duration-500 bg-black bg-opacity-50 h-1/2 -bottom-full group-hover:bottom-0"></div>
                              <div className="absolute text-white duration-500 scale-0 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-100 top-1/2 left-1/2">
                                <PlayIcon className="w-20 h-20" />
                              </div>
                              <div className="absolute text-xl text-white duration-500 -left-full top-4 group-hover:left-4">
                                {promotion.title}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </>
                  )}
                  {movie.reviews?.length > 0 && (
                    <>
                      <div className="flex gap-4 mt-8 text-xl text-white">
                        <motion.div
                          initial={{ opacity: 0, scale: 1 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 0.5,
                            once: true,
                          }}
                        >
                          Review
                        </motion.div>
                        <motion.div
                          className="self-center flex-1 h-0.5 bg-white rounded-sm"
                          initial={{ opacity: 0, scaleX: 0 }}
                          viewport={{ once: true }}
                          whileInView={{
                            opacity: 1,
                            scaleX: 1,
                          }}
                          transition={{
                            ease: "easeOut",
                            duration: 0.5,
                            delay: 0.5,
                            once: true,
                          }}
                        ></motion.div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4 overflow-hidden text-white md:grid-cols-3">
                        {movie.reviews.map((review, index) => {
                          return (
                            <motion.div
                              key={index}
                              className="relative overflow-hidden cursor-pointer group"
                              onClick={() => {
                                setYoutubeUrl(review.url);
                                setOpenVideoDialog(true);
                              }}
                              viewport={{ once: true }}
                              initial={{ opacity: 0, x: 50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                ease: "easeInOut",
                                duration: 0.5,
                                delay: 0.25 * index,
                                once: true,
                              }}
                            >
                              <img
                                src={
                                  "https://img.youtube.com/vi/" +
                                  getYoutubeVideoId(review.url) +
                                  "/hqdefault.jpg"
                                }
                                className="w-full h-full rounded-md shadow-md"
                                frameBorder="0"
                                allowFullScreen
                              />

                              <div className="absolute left-0 w-full duration-500 bg-black bg-opacity-50 h-1/2 -top-full group-hover:top-0"></div>
                              <div className="absolute left-0 w-full duration-500 bg-black bg-opacity-50 h-1/2 -bottom-full group-hover:bottom-0"></div>
                              <div className="absolute text-white duration-500 scale-0 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-100 top-1/2 left-1/2">
                                <PlayIcon className="w-20 h-20" />
                              </div>
                              <div className="absolute text-xl text-white duration-500 -left-full top-4 group-hover:left-4">
                                {review.title}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
                <div>
                  <div className="flex flex-col overflow-hidden bg-gray-700 rounded-md shadow-md">
                    {/* <div className="p-4 mx-auto text-3xl">News</div> */}
                    <div className="flex w-full gap-4 px-4 pt-4 pb-2 mx-auto">
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
                      <motion.div
                        className="text-lg font-medium text-white md:text-2xl"
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          ease: "easeInOut",
                          duration: 0.5,
                          once: true,
                        }}
                      >
                        NEWS
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
                    {Constants.NEWS.map((news, index) => {
                      return (
                        <motion.div
                          key={index}
                          className="flex px-4 py-2 duration-500 cursor-pointer hover:bg-gray-600"
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
                </div>
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
  const movie = await fetch(
    process.env.BASE_API_URL + "movies/canonical/" + context.params.id
  )
    .then((res) => res.json())
    .then((json) => json.movie);
  return {
    props: {
      movie,
    },
  };
}
