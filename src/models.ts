import { DocumentReference } from "./firestore"

export type ReportType = {
  title: string
  slides: SlideType[]
  owner: string
}

export type SlideType = {
  elements: SlideElementType[]
}

export type SlideTextElementType = {
  x: number
  y: number
  width: number
  type: "Text"
  value: string
}

export type SlideChartElementType = {
  x: number
  y: number
  width: number
  height: number
  type: "Chart"
  datasource: DocumentReference<DataSourceType>
}

export type SlideElementType = SlideChartElementType | SlideTextElementType

export type DataSourceType = {
  type: "MySQL"
  host: string
  port: string
  user: string
  database: string
  owner: string
}
