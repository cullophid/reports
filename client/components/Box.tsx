import styled from "@emotion/styled"
import {
  color, ColorProps,
  space, SpaceProps
} from "styled-system"

export const Box = styled<"div", SpaceProps & ColorProps>("div")`
  ${color}
  ${space}
`