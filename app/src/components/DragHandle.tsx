import React, { PureComponent } from "react";
import { css } from "emotion";
import * as Theme from "../theme";

const Styles = {
  dragHandle: css`
    position: absolute;
    margin-top: -6px;
    margin-left: -6px;
    margin-right: -7px;
    margin-bottom: -7px;
    width: 12px;
    height: 12px;
    border-radius: 1000px;
    background: ${Theme.primary};
  `
};

type props = {
  onDrag?: (offset: { x: number; y: number }) => void;
  style?: React.CSSProperties;
};

type state = {
  pressed: {
    x: number;
    y: number;
  } | null;
};
export class DragHandle extends PureComponent<props, state> {
  state: state = {
    pressed: null
  };
  componentDidMount() {
    document.addEventListener("mouseup", this.onMouseUp);
  }
  componentWillUnmount() {
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("mousemove", this.onMouseMove);
  }
  onMouseUp = () => {
    document.removeEventListener("mousemove", this.onMouseMove);
    this.setState({ pressed: null });
  };
  onMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    document.addEventListener("mousemove", this.onMouseMove);
    this.setState({ pressed: { x: e.clientX, y: e.clientY } });
  };
  onMouseMove = (e: MouseEvent) => {
    const { pressed } = this.state;
    e.stopPropagation();
    if (!pressed) return;

    this.props.onDrag &&
      this.props.onDrag({
        x: e.clientX - pressed.x,
        y: e.clientY - pressed.y
      });
    this.setState({ pressed: { x: e.clientX, y: e.clientY } });
  };
  render() {
    return (
      <div
        css={Styles.dragHandle}
        style={this.props.style || {}}
        onMouseDown={this.onMouseDown}
      />
    );
  }
}
