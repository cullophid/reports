import * as React from "react";
import { css } from "emotion";
import { textElement } from "../../reports";
import * as Theme from "../../theme";
import TextEditor from "../TextEditor";
import { DragHandle } from "../DragHandle";

type pos = {
  x: number;
  y: number;
};

const Styles = {
  boundingBox: ({ x, y, width, selected, edit }: BoundingBox) => css`
    position: absolute;
    left: ${x}px;
    top: ${y}px;
    width: ${width}px;
    border: ${edit
      ? `1px dashed ${Theme.primary}`
      : selected
      ? `1px solid ${Theme.primary}`
      : "1px solid transparent"};
  `,
  text: ({ text: { fontSize, align } }: textElement) => css`
    cursor: pointer;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-size: ${fontSize}px;
    text-align: ${align};
    border: 1px solid transparent;
    background: none;
    border: none;
    width: 100%;
    min-height: 20px;
    &:focus {
      outline: none;
    }
  `
};

type BoundingBox = {
  selected: boolean;
  edit: boolean;
  width: number;
  x: number;
  y: number;
};

type props = {
  scale: number;
  textElement: textElement;
  selected: boolean;
  edit: boolean;
  onUpdate: (element: textElement) => void;
  onClick: () => void;
  onDoubleClick: () => void;
};

type state = {
  pressed: { x: number; y: number } | null;
};

export class TextElement extends React.PureComponent<props, state> {
  state: state = {
    pressed: null
  };
  componentDidMount() {
    document.addEventListener("mouseup", this.onMouseUp);
  }
  componentWillUnmount() {
    document.removeEventListener("mouseup", this.onMouseUp);
  }
  onMouseUp = () => {
    this.setState({ pressed: null });
  };
  onMouseDown = (e: React.MouseEvent) => {
    const { scale, onClick, edit } = this.props;
    e.stopPropagation();
    if (edit) return;

    this.setState({
      pressed: {
        x: e.clientX,
        y: e.clientY
      }
    });
    onClick && onClick();
  };
  onMouseMove = (e: React.MouseEvent) => {
    const { textElement, scale, onUpdate, edit } = this.props;
    const { pressed } = this.state;
    if (!pressed || edit) return;
    const x = (e.clientX - pressed.x) / scale;
    const y = (e.clientY - pressed.y) / scale;
    onUpdate({
      ...textElement,
      x: textElement.x + x,
      y: textElement.y + y
    });
    this.setState({
      pressed: {
        x: e.clientX,
        y: e.clientY
      }
    });
  };
  render() {
    const { props } = this;
    const { textElement, scale } = props;
    return (
      <div
        css={Styles.boundingBox({
          selected: props.selected,
          edit: props.edit,
          width: textElement.width,
          x: textElement.x,
          y: textElement.y
        })}
        key={textElement.id}
        onDoubleClick={props.onDoubleClick}
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onClick={this.props.onClick}
      >
        {props.edit ? (
          <div css={Styles.text(textElement)}>
            <TextEditor
              defaultValue={textElement.text.value}
              onSave={(value) =>
                props.onUpdate({
                  ...textElement,
                  text: { ...textElement.text, value }
                })
              }
            />
          </div>
        ) : (
          <div
            css={Styles.text(textElement)}
            style={{
              border: `1px solid ${
                props.selected ? Theme.primary : "transparent"
              }`
            }}
          >
            {textElement.text.value}
          </div>
        )}
        {props.selected && !props.edit && (
          <React.Fragment>
            <DragHandle
              onDrag={({ x, y }) => {
                props.onUpdate({
                  ...textElement,
                  x: textElement.x + x / scale,
                  width: textElement.width - x / scale
                });
              }}
              style={{
                left: 0,
                top: "50%"
              }}
            />
            <DragHandle
              onDrag={({ x }) => {
                props.onUpdate({
                  ...textElement,
                  width: Math.max(1, textElement.width + x / scale)
                });
              }}
              style={{
                top: "50%",
                right: 0
              }}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}
