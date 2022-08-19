/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_MAPS_API_KEY: "AIzaSyAJHETQpZzbPCYdXFak2eKwkbQCyS98FMs",
    BASE_URL: "https://api.sacredchankproductions.com",
  },
  i18n: {
    locales: ["en-US", "kn-IN"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
