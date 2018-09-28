import * as React from "react";
import styled from "styled-components";
import AutoScale from "react-auto-scale";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 50vh;
  max-width: 80vw;
  align-self: stretch;
  flex: 1;
`;
const Background = styled.div`
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
`;

type Props = {
  children?: React.ReactNode;
};

export default class Slide extends React.PureComponent<Props, {}> {
  update = () => {
    console.log("UPDATE");
    this.forceUpdate();
  };
  componentDidMount() {
    window.addEventListener("resize", this.update);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.update);
  }
  render() {
    console.log("RENDER");
    return (
      <Wrapper>
        <Background>
          <AutoScale>{this.props.children}</AutoScale>
        </Background>
      </Wrapper>
    );
  }
}
