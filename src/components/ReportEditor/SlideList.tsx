import React from "react";
import { column, columnSpacing } from "../../styles";
import { slide } from "../../models/reports";
import styled from "react-emotion";
import { editorSelection } from "../../models/editorSelection";

import Slide from "../Slide";
import { Button } from "../Button";
type Props = {
  selection: editorSelection;
  currentSlideId: string;
  slides: slide[];
  selectSlide: (slide: slide) => void;
  newSlide: () => void;
};

export default (props: Props) => (
  <Aside>
    {props.slides.map((slide: slide) => (
      <Slide
        key={slide.id}
        onClick={() => props.selectSlide(slide)}
        active={props.currentSlideId === slide.id}
        highlight={
          props.selection.type === "Slide" &&
          slide.id === props.selection.slideId
        }
        slide={slide}
      />
    ))}
    <Button onClick={props.newSlide}> ADD SLIDE </Button>
  </Aside>
);

const Aside = styled.aside`
  ${column};
  ${columnSpacing(15)};
  padding: 30px;
  box-sizing: border-box;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0px; /* remove scrollbar space */
    background: transparent; /* optional: just make scrollbar invisible */
  }
`;
