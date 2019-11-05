import { ReportSlideFragment, ReportChartFragment } from "../../codegen/client";
import { useContext, useRef, useState } from "react";
import { ReportContext } from "./reportContext";
import useMeasure from "../../hooks/useMeasure";
import { useDrag } from "react-use-gesture";
import cuid from "cuid";
import styled from "@emotion/styled";
import { Chart } from "./Chart";
import { colors } from "../../theme";

type SlideProps = {
  slide: ReportSlideFragment;
  width: number;
  height: number;
  update: (slide: ReportSlideFragment) => void;
};

export const Slide = (props: SlideProps) => {
  const { width, height, slide, update } = props;

  const [context, setContext] = useContext(ReportContext);
  const slideRef = useRef(null);
  const slideSize = useMeasure(slideRef);

  const scale = slideSize ? slideSize.width / width : 1;
  const [dragBox, setDragBox] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const bind = useDrag(dragProps => {
    const {
      down,
      xy: [x, y],
      initial: [originX, originY]
    } = dragProps;
    if (down && slideSize) {
      setDragBox({
        x: Math.min(x - slideSize.x, originX - slideSize.x) / scale,
        y: Math.min(y - slideSize.y, originY - slideSize.y) / scale,
        width: Math.abs(x - originX) / scale,
        height: Math.abs(y - originY) / scale
      });
    } else {
      setDragBox(null);
      switch (context.tool) {
        case "insert_chart": {
          if (!dragBox) {
            return;
          }
          const newChart = {
            x: Math.round(dragBox.x),
            y: Math.round(dragBox.y),
            width: Math.round(dragBox.width),
            height: Math.round(dragBox.height),
            id: cuid(),
            __typename: "Chart" as "Chart"
          };
          update({
            ...slide,
            charts: [...slide.charts, newChart]
          });
          setContext({
            ...context,
            tool: "select",
            selection: [newChart.id]
          });
        }
      }
    }
  });
  return (
    <SlideWrap ref={slideRef}>
      <SlideBackground {...bind()} width={width} height={height}>
        {["insert_chart", "insert_image", "insert_text"].includes(
          context.tool
        ) &&
          dragBox && <DragBox {...dragBox} />}
        {slide.charts.map(chart => {
          return (
            <Chart
              onDrag={({ delta: [dx, dy], altKey, shiftKey, first }) => {
                if (context.selection.includes(chart.id) === false && first) {
                  return setContext({
                    ...context,
                    selection: shiftKey
                      ? [...context.selection, chart.id]
                      : [chart.id]
                  });
                }
                if (altKey && first) {
                  const newCharts = context.selection
                    .map(id => {
                      const chart = slide.charts.find(c => c.id === id);
                      return (
                        chart && {
                          ...chart,
                          id: cuid()
                        }
                      );
                    })
                    .filter(Boolean) as ReportChartFragment[];

                  update({
                    ...slide,
                    charts: [...slide.charts, ...newCharts]
                  });
                  console.log(newCharts);
                  return setContext({
                    ...context,
                    selection: newCharts.map(({ id }) => id)
                  });
                }
                update({
                  ...slide,
                  charts: slide.charts.map(c => {
                    if (context.selection.includes(c.id)) {
                      return {
                        ...c,
                        x: c.x + dx / scale,
                        y: c.y + dy / scale
                      };
                    }
                    return c;
                  })
                });
              }}
              key={chart.id}
              selected={context.selection.some(id => id === chart.id)}
              chart={chart}
            />
          );
        })}
      </SlideBackground>
    </SlideWrap>
  );
};

const SlideWrap = styled.div``;

type DragBoxProps = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const DragBox = styled.div<DragBoxProps>`
  position: absolute;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  border: 2px dashed ${colors.primary};
`;

const SlideBackground = styled.section<{ width: number; height: number }>`
  position: relative;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  width: ${p => p.width}em;
  height: ${p => p.height}em;
`;
