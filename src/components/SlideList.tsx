import * as React from "react";
import styled from "styled-components";
import NewSlide from "./NewSlide";
import * as BaseSlide from "./Slides/Slide";
import { Column } from "./Layout";
import { Report, Slide } from "../reports";

const Slides = styled.div`
  transition: opacity 200ms;
  box-sizing: border-box;
  padding: 0 30px;
`;

type Props = {
  show: boolean;
  report: Report;
  updateReport: (report: Report) => void;
  onNewSlide: () => void;
  onSelect: (v: number | "FrontPage") => void;
};
export default (props: Props) => {
  let { report, show } = props;
  return (
    <Slides style={show ? { transitionDelay: "600ms" } : { opacity: 0 }}>
      <Column spacing="15px">
        {report.slides.map((slide: Slide, i: number) => (
          <BaseSlide.Slide
            key={i}
            slide={slide}
            onClick={() => props.onSelect(i)}
          />
        ))}
        <NewSlide onClick={props.onNewSlide} />
      </Column>
    </Slides>
  );
};
