import * as React from "react";
import styled from "styled-components";
import NewSlide from "./NewSlide";
import { FrontPage } from "./Slides/FrontPage";
import { Column } from "./Layout";
import { Report } from "../reports";

const Slides = styled.div`
  transition: opacity 300ms;
  box-sizing: border-box;
  padding: 0 30px;
`;

type Props = {
  show: boolean;
  report: Report;
  updateReport: (report: Report) => void;
  onNewSlide: () => void;
};
export default (props: Props) => {
  let { report, show } = props;
  return (
    <Slides style={show ? {} : { opacity: 0 }}>
      <Column spacing="15px">
        <FrontPage page={report.frontPage} />
        <NewSlide onClick={props.onNewSlide} />
      </Column>
    </Slides>
  );
};
