import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "dist", 
  images: {
    unoptimized: true, 
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  basePath: "/portfolio",
};

export default nextConfig;
