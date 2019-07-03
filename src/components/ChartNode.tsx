import styled from "styled-components"

import { ChartNodeType } from "../models"

export const ChartNode = styled.rect<ChartNodeType>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  border: 5px solid black;
`
