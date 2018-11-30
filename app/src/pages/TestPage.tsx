import React, { useState } from "react";
import styled from "react-emotion";

import TextEditor from "../components/TextEditor";
type State = {
  value: string;
};

const TestPage = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Page>
      <Box id="box">
        <TextEditor defaultValue="hello world" onSave={console.log} />
      </Box>
    </Page>
  );
};
export default TestPage;

const Page = styled.div`
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  width: 200px;
  height: 150px;
`;
