import React from "react";
import styled from "@emotion/styled";
import { Text } from "../components/Typography";

export default () => (
  <Layout>
    <Text as="p">We have sent you an email with a link to sign in.</Text>
  </Layout>
);

const Layout = styled.div`
  height: 100%;
  display: grid;
  place-content: center center;
`;
