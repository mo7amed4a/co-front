import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.22',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.5',
      }
    ]
  }


};

export default nextConfig;
