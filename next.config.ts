import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.simpleicons.org',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
