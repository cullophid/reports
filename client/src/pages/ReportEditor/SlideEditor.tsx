import * as React from "react";
import styled from "styled-components";
import { AutoScale } from "../../components/AutoScale";
import { TextElement } from "./TextElement";
import { ChartElement } from "./ChartElement";
import { slide, slideElement, newTextElement } from "../../models/reports";
import { editorSelection } from "../../models/editorSelection";

type props = {
  slide: slide;
  selection: editorSelection;
  updateSelection: (selection: editorSelection) => void;
  updateSlide: (slide: slide) => void;
};

export const SlideEditor = (props: props) => {
  const updateTextElement = (elem: slideElement) => {
    props.updateSlide({
      ...props.slide,
      elements: props.slide.elements.map((t) => (t.id === elem.id ? elem : t))
    });
  };

  const deleteSelection = () => {
    const { selection, slide, updateSlide } = props;
    switch (selection.type) {
      case "Element":
        updateSlide({
          ...slide,
          elements: slide.elements.filter((t) => t.id !== selection.elementId)
        });
        break;
    }
  };

  const addTextElement = () => {
    const { slide, updateSlide } = props;
    updateSlide({
      ...slide,
      elements: [...slide.elements, newTextElement()]
    });
  };

  const keyDown = (e: React.KeyboardEvent) => {
    const { selection, updateSelection } = props;
    const isEditing = selection.type === "Element" && selection.edit;
    switch (e.key) {
      case "Backspace":
        if (isEditing) return;
        deleteSelection();
        e.stopPropagation();
        e.preventDefault();
        break;
      case "t":
        if (isEditing) return;
        addTextElement();
        e.stopPropagation();
        e.preventDefault();
        break;
      case "Escape":
        if (selection.type === "Element") {
          selection.edit
            ? updateSelection({ ...selection, edit: false })
            : updateSelection({ type: "Slide", slideId: props.slide.id });
          e.stopPropagation();
          e.preventDefault();
        }
        break;
    }
  };

  const { slide, selection, updateSelection } = props;
  return (
    <AutoScale>
      <Wrapper onKeyDown={keyDown} tabIndex={1}>
        <Background id="slide">
          <React.Fragment>
            {slide.elements.map((elem, i) => {
              switch (elem.type) {
                case "text":
                  return (
                    <TextElement
                      key={i}
                      scale={1}
                      selected={
                        selection.type === "Element" &&
                        selection.elementId === elem.id
                      }
                      edit={
                        selection.type === "Element" &&
                        selection.elementId === elem.id &&
                        selection.edit
                      }
                      textElement={elem}
                      onClick={() =>
                        (selection.type === "Element" && selection.edit) ||
                        updateSelection({
                          type: "Element",
                          elementId: elem.id,
                          edit: false
                        })
                      }
                      onDoubleClick={() =>
                        updateSelection({
                          type: "Element",
                          elementId: elem.id,
                          edit: true
                        })
                      }
                      onUpdate={updateTextElement}
                    />
                  );
                case "chart":
                  return <ChartElement key={i} {...elem} />;
              }
            })}
          </React.Fragment>
        </Background>
      </Wrapper>
    </AutoScale>
  );
};

const Wrapper = styled.div`
  overflow: visible;
  &:focus {
    outline: none;
  }
`;
const Background = styled.div`
  user-select: none;
  position: relative;
  background: white;
  transform-origin: top left;
  width: 800px;
  height: 450px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
`;
