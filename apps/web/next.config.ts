import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: 'https://docs.tokentuner.xyz',
        permanent: true,
      },
      {
        source: "/docs/:path*",
        destination: "https://docs.tokentuner.xyz/:path*",
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
