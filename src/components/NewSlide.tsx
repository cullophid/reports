import * as React from "react";
import { Slide } from "../reports";
import styled from "styled-components";
import plus from "../plus.svg";
import AutoScale from "react-auto-scale";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  width: 800px;
  height: 450px;
  font-size: 48px;
`;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 8px dashed #88bc32;
`;

const Img = styled.img`
  height: 150px;
`;

type Props = {
  onClick: () => void;
};
export default (props: Props) => (
  <Wrapper>
    <AutoScale>
      <Content onClick={props.onClick}>
        <Img src={plus} />
      </Content>
    </AutoScale>
  </Wrapper>
);
