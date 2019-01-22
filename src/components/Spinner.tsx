import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform:rotate(0)
  }
  to {
    transform:rotate(360deg)
  }
`;

const StyledSpinner = styled.div`
  border: 2px solid transparent;
  border-radius: 1000px;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: ${spin};
`;

type Props = {
  size?: number;
  color?: string;
};

export const Spinner = ({ color, size = 24 }: Props) => (
  <StyledSpinner
    style={{
      borderBottomColor: color || "rgba(0, 0, 0, 0.6)",
      borderRightColor: color || "rgba(0, 0 ,0, 0.6)",
      borderTopColor: color || "rgba(255, 255, 255, 0.3)",
      borderLeftColor: color || "rgba(255, 255, 255, 0.3)",
      width: size || 24,
      height: size || 24
    }}
  />
);
