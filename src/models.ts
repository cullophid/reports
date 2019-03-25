import { DocumentReference } from "./firestore"

export type Report = {
  id: string
  title: string
  slides: Slide[]
  owner: string
}

export type Slide = {
  id: string
  elements: SlideElement[]
}

export type SlideTextElement = {
  x: number
  y: number
  width: number
  type: "Text"
  value: string
  fontSize: number
  textAlign: "left" | "right" | "center"
}

export type SlideChartElement = {
  x: number
  y: number
  width: number
  height: number
  type: "Chart"
  datasource: DocumentReference<DataSource>
}

export type SlideElement = SlideChartElement | SlideTextElement

export type DataSource = {
  type: "MySQL"
  host: string
  port: string
  user: string
  database: string
  owner: string
}
