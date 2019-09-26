import styled from "@emotion/styled";
import { color, space, layout, ColorProps, SpaceProps, LayoutProps } from "styled-system";
import { ReactChild } from "react";

type Props = {
  children: ReactChild,
  name: string
}

export const Button = styled.button<Props & ColorProps & SpaceProps & LayoutProps>`
  ${color}
  ${space}
  ${layout}
  background: linear-gradient(180deg, #EF536F 0%, #CC475F 100%);
  color: white;
  border:none;
  height: 40px;
  padding: 0 32px;
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