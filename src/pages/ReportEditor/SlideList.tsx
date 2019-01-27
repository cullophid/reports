import React from "react";
import { slide } from "../../models/reports";
import styled from "styled-components";
import { editorSelection } from "../../models/editorSelection";

import Slide from "../../components/Slide";
import { Button } from "../../components/Button";
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
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  grid-gap: 15px;
  padding: 30px;
  box-sizing: border-box;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0px !important; /* remove scrollbar space */
    background: transparent; /* optional: just make scrollbar invisible */
  }
`;
