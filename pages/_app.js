import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import "../styles/tooltip.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
  return <Component {...pageProps} />;
}

export default MyApp;
