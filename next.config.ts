const nextConfig = {
  turbo: false,
  transpilePackages: ["@sanity/client", "sanity"],
  webpack(config: any) {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    return config;
  },
};

export default nextConfig;
