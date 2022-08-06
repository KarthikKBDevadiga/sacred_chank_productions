/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_MAPS_API_KEY: "AIzaSyAJHETQpZzbPCYdXFak2eKwkbQCyS98FMs",
  },
};

module.exports = nextConfig;
