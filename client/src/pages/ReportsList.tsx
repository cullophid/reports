import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { report, reportQuery } from "../models/reports";
import { Spinner } from "../components/Spinner";
import { Redirect } from "react-router";
import * as Remote from "../models/remote";
import gql from "graphql-tag";
import Slide from "../components/Slide";
import { Page } from "../components/Page";
import plus from "../assets/plus.svg";
import { useQuery, useMutation } from "../hooks";
import { Menu } from "../components/Menu";

type State = {
  reports: Remote.t<report[], string>;
};

const FETCH_REPORTS = gql`
  {
    reports ${reportQuery}
  }
`;

export const ReportsList = () => {
  return (
    <Page>
      <Menu page="Reports" />
      <Main>
        <H1>Select a report or create a new</H1>
        <Reports />
      </Main>
    </Page>
  );
};

const Reports = () => {
  const result = useQuery<{ reports: report[] }>({ query: FETCH_REPORTS });
  switch (result.status) {
    case "Loading":
      return <Spinner size={24} />;
    case "Error":
      return <p> Could not fetch reports</p>;
    case "Ready":
      return (
        <ReportList>
          <NewReport />
          {result.data.reports.map((report: report) => (
            <Link to={`/reports/${report.id}`} key={report.id}>
              <Slide slide={report.slides[0]} />
            </Link>
          ))}
        </ReportList>
      );
  }
};

const CREATE_REPORT = gql`
  mutation {
    createReport(title: "Untitled") ${reportQuery}
  }
`;

const NewReport = () => {
  const [create, result] = useMutation<{ createReport: report }, {}>({
    mutation: CREATE_REPORT,
    refetchQueries: () => [{ query: FETCH_REPORTS }]
  });
  switch (result.status) {
    case "Ready":
      return <Redirect push to={`/reports/${result.data.createReport.id}`} />;
    case "Error":
      console.log(result.error);
    default:
      return (
        <NewButton onClick={() => create({})}>
          <img style={{ height: 50 }} src={plus} />
        </NewButton>
      );
  }
};

const H1 = styled.h1`
  justify-self: center;
  align-self: center;
  color: #656466;
`;

const ReportList = styled.ul`
  box-sizing: border-box;
  padding: 0 64px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 32px;
`;

const Main = styled.main`
  display: grid;
  grid-template-rows: 140px auto;
  min-height: 100%;
`;

const NewButton = styled.button`
  display: grid;
  place-content: center center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 8px dashed #88bc32;
`;
