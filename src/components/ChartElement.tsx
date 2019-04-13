import styled from "@emotion/styled"

import { SlideChartElement } from "../models"

export const ChartElement = styled.div<SlideChartElement>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
`
