import styled from "@emotion/styled";
import { Chart as ChartType } from "../../codegen/client";
import { css } from "@emotion/core";
import { colors } from "../../theme";
import { MouseEvent } from "react";
import { useGesture, useDrag } from "react-use-gesture";
type Props = {
  chart: ChartType;
  onDrag: (p: {
    delta: [number, number];
    movement: [number, number];
    altKey: boolean;
    shiftKey: boolean;
    first: boolean;
  }) => void;
  selected: boolean;
};

export const Chart = (props: Props) => {
  const bind = useDrag(props.onDrag);

  return <ChartFrame {...props.chart} {...bind()} selected={props.selected} />;
};

const ChartFrame = styled.div<ChartType & { selected: boolean }>`
  position: absolute;
  left: ${p => p.x}em;
  top: ${p => p.y}em;
  width: ${p => p.width}em;
  height: ${p => p.height}em;
  background: #f0f0f0;
  border: 1px solid #dedede;
  ${p =>
    p.selected &&
    css`
      border: 1px dashed ${colors.primary};
    `};
`;
