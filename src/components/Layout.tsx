import * as React from "react";
import styled from "styled-components";

type RowProps = {
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
export const Row = styled.div<RowProps>`
  box-sizing: border-box;
  display: flex;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")}
  flex-direction: row;
  justify-content: ${(props) => justifyRow(props.justify)};
  align-items: ${(props) => alignRow(props.align)};
  & > * {
    margin-right: ${(props) => props.spacing || 0};
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

type ColumnProps = {
  fullHeight?: boolean;
  spacing?: string;
  justify?: "top" | "bottom" | "middle" | "space-around" | "space-between";
  align?: "left" | "right" | "center" | "stretch";
};

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
export const Column = styled.div<ColumnProps>`
  box-sizing: border-box;
  display: flex;
  height: ${(props) => (props.fullHeight ? "100%" : "auto")}
  flex-direction: column;
  justify-content: ${(props) => justifyColumn(props.justify)};
  align-items: ${(props) => alignColumn(props.align)};
  & > * {
    margin-bottom: ${({ spacing = "0" }) => spacing};
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

export const Center = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
