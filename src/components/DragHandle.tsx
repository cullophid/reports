import React, { useState, useEffect } from "react";
import styled from "react-emotion";
import * as Theme from "../theme";

type props = {
  onDrag?: (offset: { x: number; y: number }) => void;
  style?: React.CSSProperties;
};

export const DragHandle = (props: props) => {
  const [pressed, setPressed] = useState<{ x: number; y: number } | null>(null);

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    setPressed(null);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPressed({ x: e.clientX, y: e.clientY });
  };

  const onMouseMove = (e: MouseEvent) => {
    e.stopPropagation();
    if (!pressed) return;
    props.onDrag &&
      props.onDrag({
        x: e.clientX - pressed.x,
        y: e.clientY - pressed.y
      });
    setPressed({ x: e.clientX, y: e.clientY });
  };

  useEffect(
    () => {
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mousemove", onMouseMove);
      return () => {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
      };
    },
    [pressed]
  );
  return <Handle style={props.style || {}} onMouseDown={onMouseDown} />;
};

const Handle = styled.div`
  position: absolute;
  margin-top: -6px;
  margin-left: -6px;
  margin-right: -7px;
  margin-bottom: -7px;
  width: 12px;
  height: 12px;
  border-radius: 1000px;
  background: ${Theme.primary};
`;
