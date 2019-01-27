import React from "react";
import styled from "styled-components";

export const CheckYourEmail = () => (
  <Wrapper>
    <H1>Check you email!</H1>
  </Wrapper>
);

const Wrapper = styled.main`
  height: 100vh;
  display: grid;
  place-content: center center;
  background: #f5f5f5;
`;

const H1 = styled.h1``;
