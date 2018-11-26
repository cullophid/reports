import * as React from "react";
import { css } from "emotion";
import { Center } from "./Layout";

const Styles = {
  text: css`
    color: #bababa;
    font-size: 36px;
  `
};
const NotFound = () => (
  <Center>
    <h1 css={Styles.text}>Page Not Found</h1>
  </Center>
);

export default NotFound;
