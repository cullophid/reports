import * as React from "react";
import Scale from "react-auto-scale";

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  .auto-resize-container {
    overflow:visible !important;
  }
`;

export const AutoScale = (props: { children: React.ReactChild }) => (
  <>
    <Global />
    <Scale containerClass="auto-resize-container">{props.children}</Scale>
  </>
);
