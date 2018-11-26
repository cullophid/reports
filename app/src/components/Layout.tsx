import * as React from "react";
import { css } from "emotion";

const Styles = {
  row: (props: RowProps) => css`
    box-sizing: border-box;
    display: flex;
    width: ${props.fullWidth ? "100%" : "auto"};
    flex-direction: row;
    justify-content: ${justifyRow(props.justify)};
    align-items: ${alignRow(props.align)};
    & > * {
      margin-right: ${props.spacing || 0}px;
    }
    & > *:last-child {
      margin-right: 0;
    }
  `,
  column: (props: ColumnProps) => css`
    box-sizing: border-box;
    display: flex;
    height: ${props.fullHeight ? "100%" : "auto"};
    flex-direction: column;
    justify-content: ${justifyColumn(props.justify)};
    align-items: ${alignColumn(props.align)};
    & > * {
      margin-bottom: ${props.spacing || "0"}px;
    }
    & > *:last-child {
      margin-bottom: 0;
    }
  `,
  center: css`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `
};
type RowProps = {
  children?: React.ReactChild;
  spacing?: string;
  fullWidth?: boolean;
  justify?: "left" | "right" | "center" | "space-around" | "space-between";
  align?: "top" | "middle" | "bottom" | "stretch";
};

const justifyRow = (val?: string) => {
  switch (val) {
    case "left":
      return "flex-start";
    case "right":
      return "flex-end";
    default:
      return val;
  }
};
const alignRow = (val?: string) => {
  switch (val) {
    case "top":
      return "flex-start";
    case "bottom":
      return "flex-end";
    case "middle":
      return "center";
    default:
      return val;
  }
};

export const Row = ({ children, ...rest }: RowProps) => (
  <div css={Styles.row(rest)}>{children}</div>
);

type ColumnProps = {
  children?: React.ReactChild;
  fullHeight?: boolean;
  spacing?: string;
  justify?: "top" | "bottom" | "middle" | "space-around" | "space-between";
  align?: "left" | "right" | "center" | "stretch";
};
export const Column = ({ children, ...rest }: ColumnProps) => (
  <div css={Styles.column(rest)}>{children}</div>
);

const justifyColumn = (val?: string) => {
  switch (val) {
    case "top":
      return "flex-start";
    case "bottom":
      return "flex-end";
    case "middle":
      return "center";
    default:
      return val;
  }
};
const alignColumn = (val?: string) => {
  switch (val) {
    case "left":
      return "flex-start";
    case "right":
      return "flex-end";
    default:
      return val;
  }
};

export const Center = ({ children }: { children: React.ReactChild }) => (
  <div css={Styles.center}>{children}</div>
);
