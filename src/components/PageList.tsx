import * as React from "react";
import styled from "styled-components";
import NewPage from "./NewPage";
import * as Page from "./Pages/Page";
import { Column } from "./Layout";
import { Report, ReportPage } from "../reports";

const Slides = styled.div`
  transition: opacity 200ms;
  box-sizing: border-box;
  padding: 0 30px;
`;

type Props = {
  show: boolean;
  report: Report;
  updateReport: (report: Report) => void;
  onNewSlide: () => void;
  onSelect: (v: number | "FrontPage") => void;
};
export default (props: Props) => {
  let { report, show } = props;
  return (
    <Slides style={show ? { transitionDelay: "600ms" } : { opacity: 0 }}>
      <Column spacing="15px">
        {report.pages.map((page: ReportPage, i: number) => (
          <Page.Page page={page} onClick={() => props.onSelect(i)} />
        ))}
        <NewPage onClick={props.onNewSlide} />
      </Column>
    </Slides>
  );
};
