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
import { useEffect, useRef, useState } from "react";

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
import Metatag from "../components/Metatag";

import { motion } from "framer-motion";

import Map from "../components/Map";
import Loader from "../components/Loader";
import LoadingDialog from "../components/dialogs/LoadingDialog";
import {
  emailValidator,
  genericValidator,
  phoneNumberValidator,
} from "../helpers/validator";
import SuccessDialog from "../components/dialogs/SuccessDialog";
import Link from "next/link";
import { Parallax } from "react-parallax";

export default function ContactUs({ settings }) {
  const [loadingDialog, setLoadingDialog] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);

  const [successDialogTitle, setSuccessDialogTitle] = useState();
  const [successDialogDescription, setSuccessDialogDescription] = useState();
  const [scrolled, setScrolled] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const countryRef = useRef();
  const messageRef = useRef();

  const [nameError, setNameError] = useState();
  const [phoneNumberError, setPhoneNumberError] = useState();
  const [emailError, setEmailError] = useState();
  const [countryError, setCountryError] = useState();
  const [messageError, setMessageError] = useState();

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
  const contactUs = () => {
    let isValid = true;
    isValid =
      genericValidator(nameRef.current.value, setNameError, "Name") && isValid;
    isValid =
      emailValidator(emailRef.current.value, setEmailError, "Email") && isValid;
    isValid =
      phoneNumberValidator(
        phoneNumberRef.current.value,
        setPhoneNumberError,
        "Phone Number"
      ) && isValid;
    isValid =
      genericValidator(countryRef.current.value, setCountryError, "Country") &&
      isValid;
    isValid =
      genericValidator(messageRef.current.value, setMessageError, "Message") &&
      isValid;
    if (isValid) {
      setLoadingDialog(true);
      const body = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        country: countryRef.current.value,
        message: messageRef.current.value,
      };

      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneNumberRef.current.value = "";
      countryRef.current.value = "";
      messageRef.current.value = "";

      let status = 200;
      fetch(process.env.BASE_API_URL + "contactUs", {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          setLoadingDialog(false);
          status = res.status;
          return res.json();
        })
        .then((json) => {
          if (status == 201) {
            setSuccessDialog(true);
            setSuccessDialogTitle("Thank you for getting in touch!");
            setSuccessDialogDescription(
              "We appreciate you contacting us. One of our colleagues will get back in touch with you soon!Have a great day!"
            );
          } else {
            // setErrorTitle("Failed To Signup");
            // setErrorDescription(json.message);
            // setErrorDialog(true);
          }
        })
        .catch((err) => {
          setLoadingDialog(false);
        });
    } else {
    }
  };

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
        title="Contact Us"
        description="Contact Us"
        keywords="Sacred Chank Productions,Contact Us"
      />
      <div className="min-h-full bg-slate-900">
        {/* Navbar */}
        <div className="pattern">
          <Header scrolled={scrolled} page="contact_us" />

          <main className="w-full -z-10 ">
            {/* <Parallax
              blur={0}
              // bgImage={movie.poster.landscape}
              // bgImageAlt={movie.title + " Banner"}
              strength={-200}
              renderLayer={(percentage) => (
                <div
                  style={{
                    // position: "absolute",
                    // background: `rgba(255, 125, 0, ${percentage * 1})`,
                    // left: "50%",
                    // top: "50%",
                    height: percentage * 384,
                  }}
                >
                  <Map />
                </div>
              )}
            /> */}
            <div>
              <Map />
            </div>

            <motion.div
              className="relative mx-auto -mt-12 max-w-7xl"
              initial={{ opacity: 0, scale: 1, y: 200 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5, once: true }}
            >
              <div className="mx-6 overflow-hidden rounded-md md:grid md:grid-cols-2 md:items-start">
                <div className="flex flex-col justify-between h-full p-8 text-sm text-white bg-gradient-to-t md:bg-gradient-to-l from-gray-700 to-black">
                  <div>
                    <motion.div
                      className="w-full text-2xl font-medium text-white md:w-1/2 sm:w-2/3 md:text-2xl"
                      viewport={{ once: true }}
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 0.5,
                        once: true,
                      }}
                    >
                      <img src="/sacred_chank_productions.png" />
                    </motion.div>
                    <motion.div
                      className="mt-8 text-2xl font-medium text-white md:text-2xl "
                      viewport={{ once: true }}
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 0.5,
                        once: true,
                      }}
                    >
                      Contact Information
                    </motion.div>
                    <motion.div
                      viewport={{ once: true }}
                      className="mt-4 text-base font-thin"
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 0.75,
                        once: true,
                      }}
                    >
                      Fill Up The Form And Our Team Will Get Back To You Within
                      24 Hours
                    </motion.div>
                  </div>

                  <div className="mt-8 text-base font-light">
                    <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 1,
                        once: true,
                      }}
                    >
                      <Link href={"tel:" + settings.contact.phoneNumber}>
                        <a className="flex gap-2">
                          <PhoneIcon className="self-center w-5 h-5" />
                          <div className="self-center">
                            {settings.contact.phoneNumber}
                          </div>
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div
                      className="flex gap-2 mt-4"
                      viewport={{ once: true }}
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 1.15,
                        once: true,
                      }}
                    >
                      <Link href={"mailto:" + settings.contact.email}>
                        <a className="flex gap-2">
                          <MailIcon className="self-center w-5 h-5" />
                          <div className="self-center">
                            {settings.contact.email}
                          </div>
                        </a>
                      </Link>
                    </motion.div>
                    <motion.div
                      className="flex gap-2 mt-4"
                      viewport={{ once: true }}
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 1.3,
                        once: true,
                      }}
                    >
                      <LocationIcon className="self-center w-5 h-5" />
                      <div className="self-center">
                        {settings.contact.location.address}
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex gap-4 mt-8 ">
                    <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 0.5,
                        once: true,
                      }}
                      onClick={() => {
                        window.open(settings.socialMedia.facebook, "_blank");
                      }}
                    >
                      <FacebookIcon className="w-4 h-4 text-white duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
                    </motion.div>

                    <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 0.65,
                        once: true,
                      }}
                      onClick={() => {
                        window.open(settings.socialMedia.instagram, "_blank");
                      }}
                    >
                      <InstagramIcon className="w-4 h-4 text-white duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
                    </motion.div>

                    <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 0.8,
                        once: true,
                      }}
                      onClick={() => {
                        window.open(settings.socialMedia.twitter, "_blank");
                      }}
                    >
                      <TwitterIcon className="w-4 h-4 text-white duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
                    </motion.div>

                    <motion.div
                      className="flex-1 bg-white h-[2px] self-center rounded-full"
                      viewport={{ once: true }}
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                        delay: 1,
                        once: true,
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col h-full gap-4 p-4 text-green-900 bg-gray-700 sm:mt-0 md:col-span-1">
                  <motion.div
                    className={classNames("relative w-full  col-span-2")}
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
                    <input
                      ref={nameRef}
                      onFocus={() => {
                        setNameError();
                      }}
                      className={classNames(
                        "w-full py-2 pl-3 text-sm text-white duration-200 bg-transparent border-2  rounded-md outline-none focus:border-2 placeholder:text-transparent peer ",
                        nameError
                          ? "border-red-700 focus:border-red-500"
                          : "border-gray-500 focus:border-gray-100"
                      )}
                      name={"name"}
                      id={"name"}
                      type="text"
                      placeholder="Name"
                    />
                    <label
                      htmlFor={"name"}
                      className={classNames(
                        "absolute block px-2 text-xs  duration-200 bg-gray-700  -top-2 left-4",
                        " peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-gray-700 peer-focus:text-xs ",
                        "peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent",
                        nameError
                          ? "text-red-700 peer-focus:text-red-500"
                          : " text-gray-500 peer-focus:text-white "
                      )}
                    >
                      Name
                    </label>
                    {nameError && (
                      <div className="absolute px-2 text-xs text-red-700 bg-gray-700 -bottom-1.5 right-4 peer-focus:text-red-500">
                        {nameError}
                      </div>
                    )}
                  </motion.div>
                  <motion.div
                    className={classNames("relative w-full  col-span-2")}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.5,
                      delay: 0.75,
                      once: true,
                    }}
                  >
                    <input
                      ref={emailRef}
                      className={classNames(
                        "w-full py-2  text-sm text-white duration-200 bg-transparent border-2 pl-10 rounded-md outline-none focus:border-2 placeholder:text-transparent peer ",
                        emailError
                          ? "border-red-700 focus:border-red-500"
                          : "border-gray-500 focus:border-gray-100"
                      )}
                      name={"email"}
                      id={"email"}
                      type="email"
                      placeholder="Email"
                      onFocus={() => setEmailError()}
                    />
                    <MailIcon
                      className={classNames(
                        "absolute w-5 h-5  top-2.5 left-3 duration-200",
                        emailError
                          ? "text-red-700 peer-focus:text-red-500"
                          : " text-gray-500 peer-focus:text-white "
                      )}
                    />
                    <label
                      htmlFor={"email"}
                      className={classNames(
                        "absolute block px-2 text-xs duration-200 bg-gray-700  -top-2 left-4",
                        " peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-gray-700 peer-focus:text-xs",
                        "peer-placeholder-shown:top-2 peer-placeholder-shown:left-8 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent",
                        emailError
                          ? "text-red-700 peer-focus:text-red-500"
                          : " text-gray-500 peer-focus:text-white "
                      )}
                    >
                      Email
                    </label>
                    {emailError && (
                      <div className="absolute px-2 text-xs text-red-700 bg-gray-700 -bottom-1.5 right-4 peer-focus:text-red-500">
                        {emailError}
                      </div>
                    )}
                  </motion.div>
                  <motion.div
                    className={classNames("relative w-full  col-span-2")}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.5,
                      delay: 1,
                      once: true,
                    }}
                  >
                    <input
                      ref={phoneNumberRef}
                      className={classNames(
                        "w-full py-2  text-sm text-white duration-200 bg-transparent border-2 pl-10 rounded-md outline-none focus:border-2 placeholder:text-transparent peer ",
                        phoneNumberError
                          ? "border-red-700 focus:border-red-500"
                          : "border-gray-500 focus:border-gray-100"
                      )}
                      name={"phone"}
                      id={"phone"}
                      type="tel"
                      placeholder="Phone Number"
                      onFocus={() => setPhoneNumberError()}
                    />
                    <PhoneIcon
                      className={classNames(
                        "absolute w-5 h-5  top-2.5 left-3 duration-200",
                        phoneNumberError
                          ? "text-red-700 peer-focus:text-red-500"
                          : " text-gray-500 peer-focus:text-white "
                      )}
                    />
                    <label
                      htmlFor={"phone"}
                      className={classNames(
                        "absolute block px-2 text-xs  duration-200 bg-gray-700  -top-2 left-4",
                        " peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-gray-700 peer-focus:text-xs",
                        "peer-placeholder-shown:top-2 peer-placeholder-shown:left-8 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent",
                        phoneNumberError
                          ? "text-red-700 peer-focus:text-red-500"
                          : " text-gray-500 peer-focus:text-white "
                      )}
                    >
                      Phone Number
                    </label>
                    {phoneNumberError && (
                      <div className="absolute px-2 text-xs text-red-700 bg-gray-700 -bottom-1.5 right-4 peer-focus:text-red-500">
                        {phoneNumberError}
                      </div>
                    )}
                  </motion.div>
                  <motion.div
                    className={classNames("relative w-full  col-span-2")}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.5,
                      delay: 1.25,
                      once: true,
                    }}
                  >
                    <input
                      ref={countryRef}
                      className={classNames(
                        "w-full py-2 pl-3 text-sm text-white duration-200 bg-transparent border-2  rounded-md outline-none focus:border-2 placeholder:text-transparent peer ",
                        countryError
                          ? "border-red-700 focus:border-red-500"
                          : "border-gray-500 focus:border-gray-100"
                      )}
                      name={"country"}
                      id={"country"}
                      type="text"
                      placeholder="Country"
                      onFocus={() => setCountryError()}
                    />
                    <label
                      htmlFor={"country"}
                      className={classNames(
                        "absolute block px-2 text-xs  duration-200 bg-gray-700  -top-2 left-4",
                        " peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-gray-700 peer-focus:text-xs ",
                        "peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent",
                        countryError
                          ? "text-red-700 peer-focus:text-red-500"
                          : " text-gray-500 peer-focus:text-white "
                      )}
                    >
                      Country
                    </label>
                    {countryError && (
                      <div className="absolute px-2 text-xs text-red-700 bg-gray-700 -bottom-1.5 right-4 peer-focus:text-red-500">
                        {countryError}
                      </div>
                    )}
                  </motion.div>
                  <motion.div
                    className={classNames("relative w-full  col-span-2")}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.5,
                      delay: 1.5,
                      once: true,
                    }}
                  >
                    <TextareaAutosize
                      ref={messageRef}
                      onFocus={() => {
                        setMessageError();
                      }}
                      maxLength={300}
                      rows={1}
                      type="text"
                      name={"message"}
                      id={"message"}
                      className={classNames(
                        "w-full py-2 pl-3 text-sm text-white duration-200 bg-transparent border-2  rounded-md outline-none focus:border-2 placeholder:text-transparent peer resize-none",
                        messageError
                          ? "border-red-700 focus:border-red-500"
                          : "border-gray-500 focus:border-gray-100"
                      )}
                      // className="w-full py-2 pl-3 text-sm text-white duration-200 bg-transparent border-2 border-gray-500 rounded-md outline-none resize-none focus:border-2 placeholder:text-transparent peer focus:border-gray-100"
                      placeholder="Message"
                    />
                    <label
                      htmlFor={"message"}
                      className={classNames(
                        "absolute block px-2 text-xs  duration-200 bg-gray-700  -top-2 left-4",
                        " peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-gray-700 peer-focus:text-xs ",
                        "peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent",
                        messageError
                          ? "text-red-700 peer-focus:text-red-500"
                          : " text-gray-500 peer-focus:text-white "
                      )}
                    >
                      Message
                    </label>
                    {messageError && (
                      <div className="absolute px-2 text-xs text-red-700 bg-gray-700 -bottom-0 right-4 peer-focus:text-red-500">
                        {messageError}
                      </div>
                    )}
                  </motion.div>

                  <motion.div
                    className="px-4 py-3 text-center text-white bg-gray-500 rounded-md shadow-md cursor-pointer"
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.5,
                      delay: 1.75,
                      once: true,
                    }}
                    onClick={() => {
                      contactUs();
                    }}
                  >
                    Submit
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </main>
          <Footer className="mt-8" socialMedia={settings.socialMedia} />
        </div>
      </div>
      <LoadingDialog showDialog={loadingDialog} />
      <SuccessDialog
        showDialog={successDialog}
        setShowDialog={setSuccessDialog}
        title={successDialogTitle}
        description={successDialogDescription}
      />
    </>
  );
}
export async function getServerSideProps(context) {
  const settings = await fetch(process.env.BASE_API_URL + "settings")
    .then((res) => res.json())
    .then((json) => json.settings);
  return {
    props: {
      settings,
    },
  };
}
