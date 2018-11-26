import * as React from "react";
import { css } from "emotion";

import TextEditor from "../components/TextEditor";
import { render } from "react-dom";
const Styles = {
  page: css`
    width: 100%;
    height: 100%;
  `,

  box: css`
    width: 200px;
    height: 150px;
  `
};

type State = {
  value: string;
};
class TestPage extends React.Component<{}, State> {
  state = {
    value: "hello"
  };
  render() {
    return (
      <div css={Styles.page}>
        <div css={Styles.box} id="box">
          <TextEditor defaultValue="hello world" onSave={console.log} />
        </div>
      </div>
    );
  }
}
export default TestPage;
