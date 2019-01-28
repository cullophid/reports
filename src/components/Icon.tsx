import React from "react";
import styled from "styled-components";
type Props = {
  name: string;
  color?: string;
  size?: number;
};

export const Icon = ({ name, ...rest }: Props) => <I {...rest}>{name}</I>;

const I = styled.i<Partial<Props>>`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: ${(p) => p.size || 24}px;
  color: ${(p) => p.color || "inherit"};
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
`;
