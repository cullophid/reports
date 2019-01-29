import React from "react";
import styled, { css } from "styled-components";
import { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform:rotate(0)
  }
  to {
    transform:rotate(360deg)
  }
`;

export const Spinner = styled.div<Props>`
  width: ${(p) => p.size || 24}px;
  height: ${(p) => p.size || 24}px;
  border-width: 3px;
  border-style: solid;
  ${(p) =>
    p.inverse
      ? css`
          border-bottom-color: rgba(255, 255, 255, 0.8);
          border-right-color: rgba(255, 255, 255, 0.8);
          border-top-color: rgba(255, 255, 255, 0.1);
          border-left-color: rgba(255, 255, 255, 0.1);
        `
      : css`
          border-bottom-color: rgba(0, 0, 0, 0.8);
          border-right-color: rgba(0, 0, 0, 0.8);
          border-top-color: rgba(0, 0, 0, 0.1);
          border-left-color: rgba(0, 0, 0, 0.1);
        `}
  border-radius: 1000px;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: ${spin};
`;

type Props = {
  size?: number;
  inverse?: boolean;
};
