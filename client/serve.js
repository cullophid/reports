const proxy = require("http-proxy-middleware");
const Bundler = require("parcel-bundler");
const express = require("express");

let bundler = new Bundler("src/index.html");
let app = express();

app.use(
  "/graphql",
  proxy({
    target: "http://localhost:3000",
    pathRewrite: { "^/graphql": "" }
  })
);

app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 1234));
