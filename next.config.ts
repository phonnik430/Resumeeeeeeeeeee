import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.xx.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fbkk5-7.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'www.pic.in.th',
      },
      {
        protocol: 'https',
        hostname: 'img5.pic.in.th',
      },
    ],
  },
};

export default nextConfig;
