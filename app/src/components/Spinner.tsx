import React from "react";
import { css, keyframes } from "emotion";

const spin = keyframes`
  from {
    transform:rotate(0)
  }
  to {
    transform:rotate(360deg)
  }
`;

const Styles = {
  spinner: ({ color, size }: Props) => css`
    border: 2px solid transparent;
    border-bottom-color: ${color || "rgba(0, 0, 0, 0.6)"};
    border-right-color: ${color || "rgba(0, 0 ,0, 0.6)"};
    border-top-color: ${color || "rgba(255, 255, 255, 0.3)"};
    border-left-color: ${color || "rgba(255, 255, 255, 0.3)"};
    border-radius: 1000px;
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: ${spin};
    width: ${`${size || 24}px`};
    height: ${`${size || 24}px`};
  `
};

type Props = {
  size?: number;
  color?: string;
};

export const Spinner = (props: Props) => <div css={Styles.spinner(props)} />;
