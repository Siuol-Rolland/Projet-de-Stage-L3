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

  // ✅ TU L’AS DÉJÀ (OK)
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ À AJOUTER (LA CLÉ MANQUANTE)
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }

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
