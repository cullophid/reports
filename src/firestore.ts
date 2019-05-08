import firebase from "./firebase"
import { Report, DataSource, SlideElement, Slide } from "./models"
import {Firestore} from "./firebaseTypes"


const firestore = firebase.firestore() as Firestore

export const reportsCollection = firestore.collection<Report>("reports")
export const slidesCollection = firestore.collection<Slide>("slides")
export const SlideElementsCollection = firestore.collection<SlideElement>(
  "slideElements"
)
export const dataSourcesCollection = firestore.collection<DataSource>(
  "datasources"
)
