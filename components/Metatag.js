import React from "react";
import Head from "next/head";
import NProgressContainer from "./NProgressContainer";

const Metatag = ({ title, description, children, url, keywords }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> */}
        <meta charSet="utf-8" />
        <title>{title}</title>

        <meta name="title" content={title}></meta>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* <meta name="language" content="English" /> */}
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Karthik K B Devadiga" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content={title} key="ogsitename" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" key="ogurl" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta
          property="og:image"
          content={url ? url : "/sacred_chank_productions.png"}
          key="ogimage"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={url ? url : "/sacred_chank_productions.png"}
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content={url ? url : "/sacred_chank_productions.png"}
        />

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
