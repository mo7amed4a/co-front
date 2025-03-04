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
      },
      {
        protocol: 'http',
        hostname: '188.245.152.19',
      }
    ]
  }


};

export default nextConfig;
