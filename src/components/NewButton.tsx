import * as React from "react";
import styled from "react-emotion";
import plus from "../plus.svg";
import * as Theme from "../theme";

type Props = {
  onClick?: (e: React.MouseEvent<Element>) => void;
};
const NewButton = (props: Props) => (
  <StyledButton onClick={props.onClick}>
    <img src={plus} />
  </StyledButton>
);

export default NewButton;

const StyledButton = styled.button`
  margin: 15px;
  width: 230px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  background: none;
  border: 5px dashed ${Theme.success};
  color: #88bc32;
  font-weight: 600;
  font-size: 80px;
  cursor: pointer;
  box-sizing: border-box;
`;
