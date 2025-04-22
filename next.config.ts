import type { NextConfig } from "next";

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

export default nextConfig;
