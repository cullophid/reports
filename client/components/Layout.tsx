import styled from "@emotion/styled"

import { layout, LayoutProps, color, ColorProps, space, SpaceProps, grid, GridProps } from "styled-system"


type Props = {
  placeContent: string
} & LayoutProps & ColorProps & SpaceProps & GridProps
export const Row = styled<"div", Props>("div")`
${layout}
${color}
${space}
${grid}
display:grid;
grid-auto-flow:row;
grid-auto-rows: auto;
`

export const Col = styled<"div", Props>("div")`
${layout}
${color}
${space}
${grid}
display:grid;
grid-auto-flow:column;
grid-auto-rows: auto;
`