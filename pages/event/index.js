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

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
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
import { Parallax } from "react-parallax";
import { useRouter } from "next/router";

export default function MovieInd({ events, settings }) {
  const router = useRouter();
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

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
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
        title={"Events"}
        description={"Events"}
        keywords={"Sacred Chank Productions,Events,"}
      />

      <div className="min-h-full bg-slate-900">
        <div className="pattern">
          {/* Navbar */}
          <Header scrolled={scrolled} page="news_and_events" />

          {/* <div className="fixed p-4 text-white bg-red-600"> Hell</div> */}
          <motion.div
            style={{ scaleY }}
            className="fixed bottom-0 left-0 right-0 z-50 h-px origin-top-left bg-white"
          />
          <main className="w-full min-h-screen overflow-hidden -z-10">
            <div className="relative p-4 mt-24 xl:mx-auto max-w-7xl">
              {events?.length > 0 && (
                <div className="grid grid-cols-1 mt-4 overflow-hidden text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {events.map((event, index) => {
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
                          name={event.movie.title}
                          rating={"12A"}
                          theater={
                            event.theater.name + ", " + event.theater.location
                          }
                          timing={event.date + " @ " + event.time}
                          url={"/event/" + event._id}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </main>
          <Footer className="mt-4" socialMedia={settings.socialMedia} />
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
  const events = await fetch(process.env.BASE_API_URL + "event/all").then(
    (res) => res.json()
  );

  console.log(events);
  const settings = await fetch(process.env.BASE_API_URL + "settings")
    .then((res) => res.json())
    .then((json) => json.settings);
  return {
    props: {
      events,
      settings,
    },
  };
}
