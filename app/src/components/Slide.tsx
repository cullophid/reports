import * as React from "react";
import { css } from "emotion";
import { slide, textElement, chartElement } from "../reports";
import AutoScale from "./AutoScale";
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
  return <span css={Styles.text(props)}>{props.text.value}</span>;
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
    <AutoScale
      style={{ width: props.width, height: props.height }}
      width={800}
      render={(scale) => (
        <div
          style={{
            width: 800 * scale,
            height: 450 * scale,
            overflow: "visible"
          }}
        >
          <div
            css={Styles.slideBackground({
              active: props.active,
              highlight: props.highlight,
              scale
            })}
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
          </div>
        </div>
      )}
    />
  );
};

export default Slide;

const Styles = {
  slideBackground: (props: {
    active?: boolean;
    highlight?: boolean;
    scale: number;
  }) => css`
    position: relative;
    background: white;
    overflow: hidden;
    box-shadow: ${props.active
      ? "0 10px 20px rgba(0, 0, 0, 0.4)"
      : "0 3px 10px rgba(0, 0, 0, 0.4)"};
    border: 5px solid transparent;
    border-color: ${props.highlight ? Theme.primary : "transparent"};
    transform-origin: top left;
    transform: scale(${props.scale});
    width: 800px;
    height: 450px;
  `,
  text: (props: TextElementProps) => css`
    left: ${props.x}px;
    top: ${props.y}px;
    width: ${props.width}px;
    font-size: ${props.text.fontSize}px;
    text-align: ${textAlign(props.text.align)};
    position: absolute;
    display: block;
    color: black;
    text-decoration: none;
  `
};

const ChartElement = (props: chartElement) => null;
