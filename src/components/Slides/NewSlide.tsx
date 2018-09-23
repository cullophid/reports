import * as React from "react";
import { ReportPage } from "../../services/report.service";
import styled from "styled-components";
import Slide from "../Slide";
import plus from "../../plus.svg";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  width: 800px;
  height: 450px;
  font-size: 48px;
`;

const Img = styled.img`
  height: 150px;
`;

type Props = {
  onClick: () => void;
};
export default (props: Props) => (
  <Slide>
    <Content onClick={props.onClick}>
      <Img src={plus} />
    </Content>
  </Slide>
);
