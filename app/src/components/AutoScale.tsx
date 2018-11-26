import * as React from "react";

type Props = {
  width: number;
  style?: any;
  render: (scale: number) => React.ReactChild;
};

type State = {
  scale: number | null;
};
export default class AutoSize extends React.PureComponent<Props, State> {
  state: State = {
    scale: null
  };
  wrapperRef = React.createRef<HTMLDivElement>();
  componentDidMount() {
    window.addEventListener("resize", this.calculateScale);
    this.calculateScale();
  }
  componentWillUnmount() {
    if (this.wrapperRef.current === null) return;
    window.removeEventListener("resize", this.calculateScale);
  }
  calculateScale = () => {
    window.requestAnimationFrame(() => {
      if (this.wrapperRef.current === null)
        throw new Error("Cound not find wrapper");
      let { width } = this.wrapperRef.current.getBoundingClientRect();
      this.setState({ scale: width / this.props.width });
    });
  };

  render() {
    return (
      <div
        style={this.props.style || { width: "100%", overflowX: "visible" }}
        ref={this.wrapperRef}
      >
        {this.state.scale !== null && this.props.render(this.state.scale)}
      </div>
    );
  }
}
