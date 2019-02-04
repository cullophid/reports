import React from "react";
import styled from "styled-components";

import { Page } from "../components/Page";
import { useQuery, useWindowSize } from "../hooks";
import gql from "graphql-tag";
import { reportQuery, ReportType } from "../models/reports";
import { Spinner } from "../components/Spinner";
import Slide from "../components/Slide";
import { Link } from "react-router-dom";

type Props = {
  reportId: string;
};

export const ReportPage = (props: Props) => {
  const res = useQuery<{ report: ReportType }>({
    query: REPORT_QUERY,
    variables: { reportId: props.reportId }
  });
  const { width } = useWindowSize();
  return (
    <Page page="Reports">
      <Main>
        {(() => {
          switch (res.status) {
            case "Loading":
              return <Spinner />;
            case "Error":
              return <p> {res.error.message}</p>;
            case "Ready":
              return (
                <>
                  <EditButton to={`/reports/${props.reportId}/edit`}>
                    Edit
                  </EditButton>
                  <SlideList>
                    {res.data.report.slides.map((slide) => (
                      <Slide width={width * 0.8} key={slide.id} slide={slide} />
                    ))}
                  </SlideList>
                </>
              );
          }
        })()}
      </Main>
    </Page>
  );
};

const REPORT_QUERY = gql`
query Report($reportId: ID!){
  report(id:$reportId) ${reportQuery}
}
`;

const Main = styled.main``;

const SlideList = styled.ul`
  padding-top: 100px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: auto;
  justify-content: center;
  grid-gap: 32px;
`;

const EditButton = styled(Link)`
  text-decoration: none;
  position: absolute;
  top: 36px;
  right: 36px;
  height: 33px;
  padding: 0 20px;
  text-transform: uppercase;
  border: none;
  border-radius: 40px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  display: grid;
  place-content: center center;
  background: linear-gradient(
    139.94deg,
    #ee32fe 9.3%,
    rgba(233, 140, 0, 0.99) 92.57%
  );
  color: white;
  &:visited {
    color: white;
  }
`;
