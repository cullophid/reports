const Path = require("path");
const Copy = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js"]
  },
  devtool: "source-map ",
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
    historyApiFallback: {
      index: "index.html"
    },
    proxy: {
      "/.netlify": "http://localhost:9000"
    }
  }
};
