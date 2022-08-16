import React from "react";
import Head from "next/head";
import NProgressContainer from "./NProgressContainer";

const Metatag = ({ title, description, children, url }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> */}
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta property="og:url" content="https://www.l4o.in" key="ogurl" />
        {url && <meta property="og:image" content={url} key="ogimage" />}

        <meta property="og:site_name" content="Lifology" key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>

        {children}
      </Head>

      <NProgressContainer />
    </>
  );
};

export default Metatag;
