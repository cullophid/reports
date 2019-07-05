export type ReportType = {
  id: string
  title: string
  slides: SlideType[]
  owner: string
}

export type SlideType = {
  id: string
  height: number
  width: number
  nodes: NodeType[]
}

export type TextNodeType = {
  id: string
  x: number
  y: number
  width: number
  height: number
  type: "Text"
  value: string
  fontSize: number
  textAlign: "left" | "right" | "center"
}

export type ChartNodeType = {
  id: string
  x: number
  y: number
  width: number
  height: number
  type: "Chart"
  datasource?: string
  query?: string
}

export type NodeType = ChartNodeType | TextNodeType

export type DataSource = {
  type: "MySQL"
  host: string
  port: string
  user: string
  database: string
  owner: string
}
