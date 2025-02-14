/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [process.env.BACKEND_URL],
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.BACKEND_URL,
        pathname: process.env.UPLOADS_FOLDER, 
      },
    ],
  },
	compress: true,
	
};

export default nextConfig;
