import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TextElementType } from "../../models/reports";
import * as Theme from "../../theme";
import TextEditor from "../../components/TextEditor";

type BoundingBox = {
  selected: boolean;
  width: number;
  x: number;
  y: number;
};

type props = {
  scale: number;
  textElement: TextElementType;
  selected: boolean;
  onUpdate: (element: TextElementType) => void;
  onClick: () => void;
};

type state = {
  pressed: { x: number; y: number } | null;
};

export const TextEl = (props: props) => {
  const { textElement, scale } = props;
  return (
    <BoundingBox
      style={{
        left: textElement.x,
        top: textElement.y,
        width: textElement.width,
        border: props.selected
          ? `1px dashed ${Theme.primary}`
          : "1px solid transparent"
      }}
      key={textElement.id}
      onClick={props.onClick}
    >
      {props.selected ? (
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
