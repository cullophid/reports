import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 15px;
  width: 230px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  background: none;
  border: 5px dashed #88bc32;
  color: #88bc32;
  font-weight: 600;
  font-size: 80px;
  cursor: pointer;
  box-sizing: border-box;
`;
type Props = {
  onClick?: (e: React.MouseEvent<Element>) => void;
};
export default (props: Props) => <Button onClick={props.onClick}>+</Button>;
