import styled from "@emotion/styled";
import {
  ColorProps,
  TypographyProps,
  SpaceProps,
  space,
  color,
  typography
} from "styled-system";
import { colors } from "../theme";

export const Text = styled<"span", ColorProps & TypographyProps & SpaceProps>(
  "span"
)`

  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  ${space}
  ${color}
  ${typography}
`;
export const Title = styled<"h2", ColorProps & TypographyProps & SpaceProps>(
  "h2"
)`
 
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  margin:0;
  font-weight:normal;
  text-decoration: none;
  color: ${colors.text};
  ${space}
  ${color}
  ${typography}
`;
