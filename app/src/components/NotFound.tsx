import * as React from "react";
import styled from "react-emotion";
import { center } from "../styles";

const NotFound = () => (
  <Wrapper>
    <Text>Text>Page Not Found</Text>
  </Wrapper>
);

export default NotFound;

const Text = styled.h1`
  color: #bababa;
  font-size: 36px;
`;
const Wrapper = styled.div`
  ${center}
`;
