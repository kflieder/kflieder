import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@sanity/client", "sanity"],
  webpack(config) {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    return config;
  },
};

export default nextConfig;
