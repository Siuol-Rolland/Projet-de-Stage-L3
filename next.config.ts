import type { NextConfig } from "next";
import type { WebpackError } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,

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
    serverActions: {
      bodySizeLimit: "30mb",
    },
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Empêche Webpack d'inclure fs/path/os côté client
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }

    // Type safe : ignore warnings EPERM sur Application Data
    config.ignoreWarnings = [
      (warning: WebpackError) =>
        typeof warning.message === "string" &&
        warning.message.includes(
          "EPERM: operation not permitted, scandir 'C:\\Users\\WINDOWS 10\\Application Data'"
        ),
    ];

    return config;
  },
};

export default nextConfig;
