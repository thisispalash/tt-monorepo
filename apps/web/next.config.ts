import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    const isDev = process.env.NODE_ENV === "development";
    const docsUrl = isDev 
      ? "http://localhost:3000" 
      : "https://docs.tokentuner.xyz";

    return [
      {
        source: "/docs",
        destination: docsUrl,
        permanent: !isDev, // temporary redirect in dev, permanent in production
      },
      {
        source: "/docs/:path*",
        destination: `${docsUrl}/:path*`,
        permanent: !isDev,
      },
    ]
  }
};

export default nextConfig;
