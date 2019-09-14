import styled from "styled-components"
import { ColorProps, TypographyProps, SpaceProps, space, color, typography } from "styled-system"


export const Text = styled.span<ColorProps & TypographyProps & SpaceProps>`
  ${space}
  ${color}
  ${typography}
  font-family: 'Montserrat', sans-serif;
`

export const Title = styled.h1<ColorProps & TypographyProps & SpaceProps>`
  ${space}
  ${color}
  ${typography}
  font-family: 'Montserrat', sans-serif;
`