import styled from "@emotion/styled";
import { Chart as ChartType } from "../codegen/client";
import { css } from "@emotion/core";
import { colors } from "../theme";
import { MouseEvent } from "react";
type Props = {
  chart: ChartType;
  onClick: (e: MouseEvent) => void;
  selected: boolean;
};

export const Chart = (props: Props) => {
  return <ChartFrame {...props.chart} selected={props.selected} />;
};
const ChartFrame = styled.div<ChartType & { selected: boolean }>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  background: #f0f0f0;
  border: 1px solid #dedede;
  ${p =>
    p.selected &&
    css`
      border: 1px dashed ${colors.primary};
    `};
`;
