// import * as functions from "firebase-functions"

import * as admin from "firebase-admin"
import * as functions from "firebase-functions"
import * as serviceAccount from "../admin.credentials.json"
const PPTX = require("pptxgenjs")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://andreas-reports.firebaseio.com",
})
exports.downloadPPTX = functions.https.onRequest(async (req, res) => {
  if (!req.query.id) {
    return res.status(400).send("no id")
  }
  try {
    const reportDoc = await admin
      .firestore()
      .collection("reports")
      .doc(req.query.id)
      .get()

    const report: any = reportDoc.data()

    const pptx = new PPTX()
    report.slides.forEach((slideData: any) => {
      const slide = pptx.addNewSlide()
      slide.addText("Hello World!", {
        x: 1.5,
        y: 1.5,
        fontSize: 18,
        color: "363636",
      })
    })
    pptx.save("http", (data: any) => {
      res.end(new Buffer(data, "binary"))
    })
  } catch (e) {
    res.status(500).send(e)
  }
}) 