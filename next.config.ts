import type { NextConfig } from "next";
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.tunca.site',
      },
    ],
  },
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withPWA(nextConfig);
