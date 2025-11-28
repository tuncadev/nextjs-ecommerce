import type { NextConfig } from "next";
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "backend.tunca.local" },
      { protocol: "https", hostname: "backend.tunca.site" },
    ],
  },
  compress: true,
   webpack: (config) => {
    // Disable Webpack persistent disk cache
    config.cache = false;
    return config;
  },
};

export default withPWA(nextConfig);
