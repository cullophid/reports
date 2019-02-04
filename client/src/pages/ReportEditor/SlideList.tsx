import React from "react";
import { SlideType } from "../../models/reports";
import styled from "styled-components";
import { EditorSelectionType } from "../../models/editorSelection";

import SlideElement from "../../components/Slide";
type Props = {
  show: boolean;
  selection: EditorSelectionType;
  currentSlideId?: string;
  slides: SlideType[];
  selectSlide: (slide: SlideType) => void;
  newSlide: () => void;
};

export default (props: Props) => (
  <Aside show={props.show}>
    <NewSlideButton onClick={props.newSlide}>NEW</NewSlideButton>
    {props.slides.map((slide: SlideType) => (
      <SlideElement
        width={200}
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
  </Aside>
);

const Aside = styled.aside<{ show: boolean }>`
  transition: transform 300ms;
  transform: translateX(${(p) => (p.show ? "0" : "-100%")});
  grid-area: slide-list;
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

const NewSlideButton = styled.button`
  justify-self: end;
  height: 24px;
  padding: 0 20px;
  text-transform: uppercase;
  border: none;
  border-radius: 40px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  display: grid;
  place-content: center center;
  background: linear-gradient(312.29deg, #219205 -42.49%, #88bc32 85.05%);
  color: white;
`;
