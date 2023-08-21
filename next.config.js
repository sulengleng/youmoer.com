module.exports = {
  env: {
    instagram: "yeyouchuan",
    twitter: "yeyouchuan"
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
}