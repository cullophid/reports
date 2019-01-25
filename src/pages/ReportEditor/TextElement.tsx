import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { textElement } from "../../models/reports";
import * as Theme from "../../theme";
import TextEditor from "../../components/TextEditor";
import { DragHandle } from "../../components/DragHandle";

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

export const TextElement = (props: props) => {
  const [state, setState] = useState<state>({ pressed: null });

  const onMouseUp = () => {
    setState({ pressed: null });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const { scale, onClick, edit } = props;
    e.stopPropagation();
    if (edit) return;
    setState({
      pressed: {
        x: e.clientX,
        y: e.clientY
      }
    });
    onClick && onClick();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const { textElement, scale, onUpdate, edit } = props;
    const { pressed } = state;
    if (!pressed || edit) return;
    const x = (e.clientX - pressed.x) / scale;
    const y = (e.clientY - pressed.y) / scale;
    onUpdate({
      ...textElement,
      x: textElement.x + x,
      y: textElement.y + y
    });
    setState({
      pressed: {
        x: e.clientX,
        y: e.clientY
      }
    });
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);
    return () => document.removeEventListener("mouseup", onMouseUp);
  });

  const { textElement, scale } = props;
  return (
    <BoundingBox
      style={{
        left: textElement.x,
        top: textElement.y,
        width: textElement.width,
        border: props.edit
          ? `1px dashed ${Theme.primary}`
          : props.selected
          ? `1px solid ${Theme.primary}`
          : "1px solid transparent"
      }}
      key={textElement.id}
      onDoubleClick={props.onDoubleClick}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onClick={props.onClick}
    >
      {props.edit ? (
        <Text
          style={{
            fontSize: textElement.text.fontSize,
            textAlign: textElement.text.align.toLowerCase() as any
          }}
        >
          <TextEditor
            defaultValue={textElement.text.value}
            onSave={(value) =>
              props.onUpdate({
                ...textElement,
                text: { ...textElement.text, value }
              })
            }
          />
        </Text>
      ) : (
        <Text
          style={{
            fontSize: textElement.text.fontSize,
            textAlign: textElement.text.align.toLowerCase() as any,
            border: `1px solid ${
              props.selected ? Theme.primary : "transparent"
            }`
          }}
        >
          {textElement.text.value}
        </Text>
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
    </BoundingBox>
  );
};

const BoundingBox = styled.div`
  position: absolute;
`;

const Text = styled.div`
  cursor: pointer;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  border: 1px solid transparent;
  background: none;
  border: none;
  width: 100%;
  min-height: 20px;
  &:focus {
    outline: none;
  }
  white-space: pre-line;
`;
