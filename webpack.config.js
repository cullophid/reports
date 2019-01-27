const Path = require("path");
const Copy = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        loader: "file-loader",
        // Exclude `js` files to keep "css" loader working as it injects
        // its runtime that would otherwise be processed through "file" loader.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        options: {
          name: "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  plugins: [
    new Copy(
      [
        {
          from: "src/index.html"
        },
        {
          from: "src/manifest.webmanifest"
        }
      ],
      {}
    )
  ],
  devServer: {
    contentBase: Path.join(__dirname, "dist"),
    port: 1234,
    historyApiFallback: true,
    proxy: {
      "/.netlify": "http://localhost:9000"
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    },
    open: true
  }
};
