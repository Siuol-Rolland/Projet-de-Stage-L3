import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ⛔ DÉSACTIVE TURBOPACK
  turbopack: {},

  serverExternalPackages: [
    "@prisma/client",
    "prisma",
    "bcryptjs",
    "jsonwebtoken",
    "nodemailer",
  ],

  outputFileTracingIncludes: {
    "app/**": ["./generated/prisma/**/*"],
    "src/app/**": ["./generated/prisma/**/*"],
    "api/**": ["./generated/prisma/**/*"],
    "src/app/api/**": ["./generated/prisma/**/*"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  experimental: {
    authInterrupts: true,
    serverActions: {
      bodySizeLimit: "30mb",
    },
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
