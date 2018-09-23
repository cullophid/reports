import * as React from "react";
import styled from "styled-components";
import AutoScale from "react-auto-scale";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;
const Slide = styled.div`
  height: 500px;
  width: 889px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
`;

type Props = {
  children: JSX.Element;
};

export default (props: Props) => {
  return (
    <Wrapper>
      <AutoScale>
        <Slide>{props.children}</Slide>
      </AutoScale>
    </Wrapper>
  );
};
