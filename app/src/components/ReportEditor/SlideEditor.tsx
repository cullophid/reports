import * as React from "react";
import { css } from "emotion";
import AutoScale from "../AutoScale";
import { TextElement } from "./TextElement";
import { ChartElement } from "./ChartElement";
import { slide, slideElement, newTextElement } from "../../reports";
import { editorSelection } from "../../editorSelection";

const Styles = {
  wrapper: (scale: number) => css`
    width: ${800 * scale}px;
    height: ${450 * scale}px;
    overflow: visible;
    &:focus {
      outline: none;
    }
  `,
  background: css`
    user-select: none;
    position: relative;
    background: white;
    transform-origin: top left;
    width: 800px;
    height: 450px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  `
};
type props = {
  slide: slide;
  selection: editorSelection;
  updateSelection: (selection: editorSelection) => void;
  updateSlide: (slide: slide) => void;
};
export class SlideEditor extends React.Component<props, {}> {
  updateTextElement = (elem: slideElement) => {
    const { slide, updateSlide } = this.props;
    updateSlide({
      ...slide,
      elements: slide.elements.map((t) => (t.id === elem.id ? elem : t))
    });
  };
  deleteSelection = () => {
    const { selection, slide, updateSlide } = this.props;
    switch (selection.type) {
      case "TextElement":
        updateSlide({
          ...slide,
          elements: slide.elements.filter((t) => t.id !== selection.elementId)
        });
        break;
    }
  };
  addTextElement = () => {
    const { slide, updateSlide } = this.props;
    updateSlide({
      ...slide,
      elements: [...slide.elements, newTextElement()]
    });
  };
  keyDown = (e: React.KeyboardEvent) => {
    const { selection, updateSelection } = this.props;
    const isEditing = selection.type === "TextElement" && selection.edit;
    switch (e.key) {
      case "Backspace":
        if (isEditing) return;
        this.deleteSelection();
        e.stopPropagation();
        e.preventDefault();
        break;
      case "t":
        if (isEditing) return;
        this.addTextElement();
        e.stopPropagation();
        e.preventDefault();
        break;
      case "Escape":
        if (selection.type === "TextElement") {
          selection.edit
            ? updateSelection({ ...selection, edit: false })
            : updateSelection({ type: "Slide", slideId: selection.slideId });
          e.stopPropagation();
          e.preventDefault();
        }
        break;
    }
  };
  render() {
    const { props } = this;
    const { slide, selection, updateSelection } = props;
    return (
      <AutoScale
        width={800}
        render={(scale) => (
          <div
            onKeyDown={this.keyDown}
            tabIndex={1}
            css={Styles.wrapper(scale)}
            style={{}}
          >
            <div
              css={Styles.background}
              style={{ transform: `scale(${scale})` }}
              id="slide"
            >
              <React.Fragment>
                {slide.elements.map((elem, i) => {
                  switch (elem.type) {
                    case "text":
                      return (
                        <TextElement
                          key={i}
                          scale={scale}
                          selected={
                            selection.type === "TextElement" &&
                            selection.elementId === elem.id
                          }
                          edit={
                            selection.type === "TextElement" &&
                            selection.elementId === elem.id &&
                            selection.edit
                          }
                          textElement={elem}
                          onClick={() =>
                            (selection.type === "TextElement" &&
                              selection.edit) ||
                            updateSelection({
                              type: "TextElement",
                              slideId: slide.id,
                              elementId: elem.id,
                              edit: false
                            })
                          }
                          onDoubleClick={() =>
                            updateSelection({
                              type: "TextElement",
                              slideId: slide.id,
                              elementId: elem.id,
                              edit: true
                            })
                          }
                          onUpdate={this.updateTextElement}
                        />
                      );
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
  }
}
