module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.graphql$/,
      use: "raw-loader"
    });

    return config;
  },
  env: {
    ORIGIN: process.env.ORIGIN
  },
  pageExtensions: ["tsx", "ts", "js"]
};
