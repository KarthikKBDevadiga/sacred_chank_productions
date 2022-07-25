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

import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import LocationIcon from "../icons/LocationIcon";
import TextareaAutosize from "react-textarea-autosize";
import Footer from "../components/Footer";
import Header from "../components/Header";
import classNames from "../utils/classNames";

export default function ContactUs() {
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
      <div className="min-h-full bg-slate-900">
        {/* Navbar */}
        <Header scrolled={scrolled} />

        <main className="w-full -z-10 ">
          <div className="relative h-48 bg-black bg-opacity-25 md:h-48">
            <img
              className="object-cover w-full h-full opacity-50"
              src="https://mykinoplex.com/assets/images/ucm/banner/banner1657267451.jpg"
            />
          </div>

          <div className="relative mx-auto -mt-12 max-w-7xl">
            <div className="mx-6 overflow-hidden bg-white rounded-md">
              <div className="md:grid md:grid-cols-2 md:items-start">
                <div className="flex flex-col justify-between h-full p-8 text-sm text-white bg-indigo-700">
                  <div>
                    <div className="text-2xl font-medium text-white md:text-2xl ">
                      Contact Information
                    </div>
                    <div className="mt-4 text-base font-thin">
                      Fill Up The Form And Our Team Will Get Back To You Within
                      24 Hours
                    </div>
                  </div>

                  <div className="mt-16 text-base font-light">
                    <div className="flex gap-2">
                      <PhoneIcon className="self-center w-5 h-5" />
                      <div className="self-center">+91 99887 7883</div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <MailIcon className="self-center w-5 h-5" />
                      <div className="self-center">hello@sacredchank.com</div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <LocationIcon className="self-center w-5 h-5" />
                      <div className="self-center">102 Street 2714 Don</div>
                    </div>
                  </div>

                  <div className="flex gap-8 mt-16 ">
                    <FacebookIcon className="w-5 h-5 text-gray-400 duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
                    <InstagramIcon className="w-5 h-5 text-gray-400 duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
                    <TwitterIcon className="w-5 h-5 text-gray-400 duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
                    <div className="flex-1 bg-white h-[2px] self-center rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-4 mt-4 text-green-900 sm:mt-0 md:col-span-1">
                  <div
                    className={classNames(
                      "relative w-full pt-4 mt-1 col-span-2"
                    )}
                  >
                    <input
                      className="w-full py-2 text-base text-green-900 duration-200 bg-transparent border-b-2 border-gray-200 outline-none placeholder:text-transparent peer focus:border-indigo-500"
                      name={"name"}
                      id={"name"}
                      type="text"
                      placeholder="Name"
                      onChange={(event) => {}}
                    />
                    <label
                      htmlFor={"name"}
                      className="absolute top-0 block text-xs text-gray-300 duration-200 peer-focus:text-indigo-600 peer-focus:top-0 peer-focus:text-xs peer-placeholder-shown:top-6 peer-placeholder-shown:text-base"
                    >
                      Name
                    </label>
                  </div>
                  <div
                    className={classNames(
                      "relative w-full pt-4 mt-1 col-span-2"
                    )}
                  >
                    <input
                      className="w-full py-2 text-base text-green-900 duration-200 bg-transparent border-b-2 border-gray-200 outline-none placeholder:text-transparent peer focus:border-indigo-500"
                      name={"email"}
                      id={"email"}
                      type="email"
                      placeholder="Email"
                      onChange={(event) => {}}
                    />
                    <label
                      htmlFor={"email"}
                      className="absolute top-0 block text-xs text-gray-300 duration-200 peer-focus:text-indigo-600 peer-focus:top-0 peer-focus:text-xs peer-placeholder-shown:top-6 peer-placeholder-shown:text-base"
                    >
                      Email
                    </label>
                  </div>
                  <div
                    className={classNames(
                      "relative w-full pt-4 mt-1 col-span-2"
                    )}
                  >
                    <input
                      className="w-full py-2 text-base text-green-900 duration-200 bg-transparent border-b-2 border-gray-200 outline-none placeholder:text-transparent peer focus:border-indigo-500"
                      name={"phone"}
                      id={"phone"}
                      type="tel"
                      placeholder="Phone Number"
                      onChange={(event) => {}}
                    />
                    <label
                      htmlFor={"phone"}
                      className="absolute top-0 block text-xs text-gray-300 duration-200 peer-focus:text-indigo-600 peer-focus:top-0 peer-focus:text-xs peer-placeholder-shown:top-6 peer-placeholder-shown:text-base"
                    >
                      Phone Number
                    </label>
                  </div>
                  <div
                    className={classNames(
                      "relative w-full pt-4 mt-1 col-span-2"
                    )}
                  >
                    <input
                      className="w-full py-2 text-base text-green-900 duration-200 bg-transparent border-b-2 border-gray-200 outline-none placeholder:text-transparent peer focus:border-indigo-500"
                      name={"country"}
                      id={"country"}
                      type="text"
                      placeholder="Country"
                      onChange={(event) => {}}
                    />
                    <label
                      htmlFor={"country"}
                      className="absolute top-0 block text-xs text-gray-300 duration-200 peer-focus:text-indigo-600 peer-focus:top-0 peer-focus:text-xs peer-placeholder-shown:top-6 peer-placeholder-shown:text-base"
                    >
                      Country
                    </label>
                  </div>
                  <div
                    className={classNames(
                      "relative w-full pt-4 mt-1 col-span-2"
                    )}
                  >
                    <TextareaAutosize
                      onFocus={() => {
                        // setRemarksError();
                      }}
                      onChange={(e) => {
                        // setRemarks(e.target.value);
                      }}
                      maxLength={300}
                      rows={1}
                      type="text"
                      name={"message"}
                      id={"message"}
                      className="w-full py-2 text-base text-green-900 duration-200 bg-transparent border-b-2 border-gray-200 outline-none placeholder:text-transparent peer focus:border-indigo-500"
                      placeholder="Message"
                    />
                    <label
                      htmlFor={"message"}
                      className="absolute top-0 block text-xs text-gray-300 duration-200 peer-focus:text-indigo-600 peer-focus:top-0 peer-focus:text-xs peer-placeholder-shown:top-6 peer-placeholder-shown:text-base"
                    >
                      Message
                    </label>
                  </div>
                  <div className="p-4 text-white bg-indigo-600 rounded-md shadow-md cursor-pointer">
                    Submit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer className="mt-8" />
      </div>
    </>
  );
}
