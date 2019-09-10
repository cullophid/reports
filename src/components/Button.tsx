import styled from "styled-components";
import { color, space, layout, ColorProps, SpaceProps, LayoutProps } from "styled-system";
import { theme } from "../theme";


export const Button = styled.button<ColorProps & SpaceProps & LayoutProps>`
  ${color}
  ${space}
  ${layout}
  background: ${theme.colors.primary};
  color: black;
  border:none;
  height: 40px;
  padding: 0 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  &:focus {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    outline:none;
  }
  &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

`