const Sitemap = () => {
  return null;
};

import * as fs from "fs";

export const getServerSideProps = async ({ res }) => {
  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "_app.js",
        "_document.js",
        "404.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${process.env.BASE_URL}${staticPagePath.replace(".js", "")}`;
    });

  const movies = await fetch(process.env.BASE_API_URL + "movies")
    .then((res) => res.json())
    .then((json) => json.movies);

  const dynamicPaths = movies.map((movie) => {
    return `${process.env.BASE_URL}movies/${movie.canonical}`;
  });
  const allPaths = [...staticPaths, ...dynamicPaths];
  console.log(allPaths);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths
    .map((url) => {
      return `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
      `;
    })
    .join("")}
</urlset>`;
  console.log(sitemap);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
