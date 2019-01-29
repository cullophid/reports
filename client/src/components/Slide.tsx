import * as React from "react";
import styled from "styled-components";
import { slide, textElement, chartElement } from "../models/reports";
import { AutoScale } from "./AutoScale";
import * as Theme from "../theme";

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

type TextElementProps = textElement;

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
  slide: slide;
  active?: boolean;
  highlight?: boolean;
  width?: number;
  height?: number;
  onClick?: (slide: slide) => void;
};

const Slide = (props: Props) => {
  return (
    <AutoScale>
      <SlideBackground
        {...props}
        onClick={() => props.onClick && props.onClick(props.slide)}
      >
        <React.Fragment>
          {props.slide.elements.map((elem, i) => {
            switch (elem.type) {
              case "text":
                return <TextElement key={i} {...elem} />;
              case "chart":
                return <ChartElement key={i} {...elem} />;
            }
          })}
        </React.Fragment>
      </SlideBackground>
    </AutoScale>
  );
};

export default Slide;

const SlideBackground = styled.div<{
  active?: boolean;
  highlight?: boolean;
}>`
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
  width: 800px;
  height: 450px;
`;

const Text = styled.span`
  position: absolute;
  display: block;
  color: black;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  white-space: pre-line;
`;

const ChartElement = (props: chartElement) => null;
