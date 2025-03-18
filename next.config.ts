import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Esto es para que Next.js no optimice las imágenes
  },
};

export default nextConfig;
