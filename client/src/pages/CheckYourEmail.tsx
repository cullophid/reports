import React from "react";
import styled from "styled-components";

export const CheckYourEmail = () => (
  <Wrapper>
    <H1>Check you email!</H1>
    <P>You can close this window</P>
  </Wrapper>
);

const Wrapper = styled.main`
  height: 100vh;
  display: grid;
  place-content: center center;
  background: #f5f5f5;
`;

const H1 = styled.h1`
  text-align: center;
`;
const P = styled.p`
  text-align: center;
`;
