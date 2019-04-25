// import * as functions from "firebase-functions"

import * as functions from "firebase-functions"


exports.hello = functions.https.onRequest(async (req, res) => {
  res.send("Hello world")
})