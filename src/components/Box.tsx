import styled from "styled-components"
import {
  color, ColorProps,
  space, SpaceProps
} from "styled-system"

export const Box = styled.div<ColorProps & SpaceProps>`
  ${color}
  ${space}
`