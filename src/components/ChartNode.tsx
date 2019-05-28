import styled from "@emotion/styled"

import { ChartNodeType } from "../models"

export const ChartNode = styled.div<ChartNodeType>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
`
