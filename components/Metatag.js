import React from "react";
import Head from "next/head";
import NProgressContainer from "./next-nprogress/component";

const Metatag = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> */}
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta property="og:url" content="https://www.l4o.in" key="ogurl" />
        <meta
          property="og:image"
          content="https://l4o.in/assets/images/l4o_icon.png"
          key="ogimage"
        />
        <meta property="og:site_name" content="Lifology" key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        {children}
      </Head>

      <NProgressContainer />
    </>
  );
};

export default Metatag;
