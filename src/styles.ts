import { css } from "styled-components";

export const row = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const rowSpacing = (spacing: number) => css`
  & > * {
    margin-right: ${spacing}px;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;
export const columnSpacing = (spacing: number) => css`
  & > * {
    margin-bottom: ${spacing}px;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;
export const column = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const center = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const fill = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  flex: 1;
  align-self: stretch;
`;
