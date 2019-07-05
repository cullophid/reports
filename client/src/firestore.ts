import firebase from "./firebase"
import { ReportType, DataSource } from "./models"
import { Firestore } from "./firebaseTypes"

const firestore = firebase.firestore() as Firestore

export const reportsCollection = firestore.collection<ReportType>("reports")
export const dataSourcesCollection = firestore.collection<DataSource>(
  "datasources"
)
