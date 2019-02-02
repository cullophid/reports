import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { report, reportQuery } from "../models/reports";
import { Spinner } from "../components/Spinner";
import { Redirect } from "react-router";
import gql from "graphql-tag";
import Slide from "../components/Slide";
import { Page } from "../components/Page";
import { useQuery, useMutation } from "../hooks";
import { Menu } from "../components/Menu";

const FETCH_REPORTS = gql`
  {
    reports ${reportQuery}
  }
`;

export const ReportsList = () => {
  const res = useQuery<{ reports: report[] }>({ query: FETCH_REPORTS });
  return (
    <Page>
      <Menu page="Reports" />
      <Main>
        <Header>
          <Title>Reports</Title>
          <SubTitle>Select an existing report or create a new one</SubTitle>
        </Header>
        <NewReport />
        {(() => {
          switch (res.status) {
            case "Loading":
              return <Spinner size={24} />;
            case "Error":
              return <p> Could not fetch reports</p>;
            case "Ready":
              return (
                <ReportList>
                  {res.data.reports.map((report: report) => (
                    <Link to={`/reports/${report.id}`} key={report.id}>
                      <Slide slide={report.slides[0]} />
                    </Link>
                  ))}
                </ReportList>
              );
          }
        })()}
      </Main>
    </Page>
  );
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
      return <NewButton onClick={() => create({})}>Create</NewButton>;
  }
};

const Header = styled.header`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-gap: 10px;
`;

const Title = styled.h1`
  justify-self: center;
  font-weight: 300;
  font-size: 48px;
  margin: 0;
`;

const SubTitle = styled.p`
  justify-self: center;
  font-family: "Indie Flower";
  color: #7e7e7e;
  margin: 0;
  font-size: 18px;
  text-align: center;
  align-self: center;
`;

const ReportList = styled.ul`
  box-sizing: border-box;
  padding: 0 64px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-gap: 32px;
`;

const Main = styled.main`
  display: grid;
  grid-template-rows: 140px auto;
  min-height: 100%;
`;
const NewButton = styled.button`
  position: absolute;
  height: 33px;
  right: 36px;
  top: 36px;
  padding: 0 20px;
  text-transform: uppercase;
  background: linear-gradient(312.29deg, #219205 -42.49%, #88bc32 85.05%);
  border: none;
  border-radius: 40px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  display: grid;
  place-content: center center;

  color: white;
`;
