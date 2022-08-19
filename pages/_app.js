import { AnimatePresence } from "framer-motion";
import localforage from "localforage";
import cookies from "next-cookies";
import { useState } from "react";
import CookieConsentDialog from "../components/CookieConsentDialog";
import "../styles/globals.css";
import "../styles/tooltip.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
      <CookieConsentDialog key="cookie" />
    </AnimatePresence>
  );
  return <Component {...pageProps} />;
}

export default MyApp;
