import * as React from "react";
import styled from "styled-components";
import {
  SlideType,
  TextElementType,
  ChartElementType
} from "../models/reports";
import * as Theme from "../theme";
import AutoSizer from "react-virtualized-auto-sizer";

type TextAlign = "left" | "center" | "right" | "justify";

const textAlign = (align: string): TextAlign => {
  switch (align) {
    case "Right":
      return "right";
    case "Center":
      return "center";
    case "Justify":
      return "justify";
    default:
      return "left";
  }
};

type TextElementProps = TextElementType;

const TextElement = (props: TextElementProps) => {
  const style = {};
  return (
    <Text
      style={{
        left: props.x,
        top: props.y,
        width: props.width,
        fontSize: props.text.fontSize,
        textAlign: textAlign(props.text.align)
      }}
    >
      {props.text.value}
    </Text>
  );
};

type Props = {
  slide: SlideType;
  active?: boolean;
  highlight?: boolean;
  width: number;
  onClick?: (slide: SlideType) => void;
};

const Slide = (props: Props) => {
  return (
    <SlideBackground
      width={props.width}
      {...props}
      onClick={() => props.onClick && props.onClick(props.slide)}
    >
      <SlideContent scale={props.width / 800}>
        <>
          {props.slide.elements.map((elem, i) => {
            switch (elem.type) {
              case "TEXT":
                return <TextElement key={i} {...elem} />;
              case "CHART":
                return <ChartElement key={i} {...elem} />;
            }
          })}
        </>
      </SlideContent>
    </SlideBackground>
  );
};

export default Slide;

const SLIDE_RATIO = 450 / 800;
export const SlideContent = styled.div<{
  scale: number;
}>`
  transform-origin: top left;
  transform: scale(${(p) => p.scale});
  width: 800px;
  height: 450px;
  overflow: visible;
`;

export const SlideBackground = styled.section<{
  active?: boolean;
  width: number;
  highlight?: boolean;
}>`
  display: block;
  margin: 0;
  list-style-type: none;
  position: relative;
  background: white;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.active
      ? "0 10px 20px rgba(0, 0, 0, 0.4)"
      : "0 3px 10px rgba(0, 0, 0, 0.4)"};
  border: 5px solid transparent;
  border-color: ${(props) => (props.highlight ? Theme.primary : "transparent")};
  transform-origin: top left;
  width: ${(p) => p.width}px;
  height: ${(p) => p.width * SLIDE_RATIO}px;
`;

const Text = styled.span`
  position: absolute;
  display: block;
  color: black;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  white-space: pre-line;
`;

const ChartElement = (props: ChartElementType) => null;
