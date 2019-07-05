import styled from "styled-components"
import { TextNodeType } from "src/models"

export const TextNode = styled.div<TextNodeType>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  font-size: ${p => p.fontSize}px;
  text-align: ${p => p.textAlign};
`
