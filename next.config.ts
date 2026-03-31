import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // 🔥 VERY IMPORTANT (Hostinger fix)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lucknowhomes.in",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },

  output: "standalone", // 🔥 production deploy ke liye best
};

export default nextConfig;