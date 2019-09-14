import styled from "styled-components"

import { layout, LayoutProps, color, ColorProps, space, SpaceProps, grid, GridProps } from "styled-system"

export const Row = styled.div<LayoutProps & ColorProps & SpaceProps & GridProps>`
${layout}
${color}
${space}
${grid}
display:grid;
grid-auto-flow:row;
grid-auto-rows: auto;
`

export const Col = styled.div<LayoutProps & ColorProps & SpaceProps & GridProps>`
${layout}
${color}
${space}
${grid}
display:grid;
grid-auto-flow:column;
grid-auto-rows: auto;
`