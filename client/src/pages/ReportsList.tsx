import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReportType, reportQuery } from "../models/reports";
import { Spinner } from "../components/Spinner";
import { Redirect } from "react-router";
import gql from "graphql-tag";
import Slide from "../components/Slide";
import { Page } from "../components/Page";
import { useQuery, useMutation, useWindowSize } from "../hooks";

const FETCH_REPORTS = gql`
  {
    reports ${reportQuery}
  }
`;

export const ReportsList = () => {
  const res = useQuery<{ reports: ReportType[] }>({ query: FETCH_REPORTS });
  const { width } = useWindowSize();
  return (
    <Page page="Reports">
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
                  {res.data.reports.map((report: ReportType) => (
                    <li key={report.id} style={{ margin: "0 16px 64px 16px" }}>
                      <Link to={`/reports/${report.id}`} key={report.id}>
                        <Slide
                          width={width < 600 ? width * 0.8 : width / 2 - 128}
                          slide={report.slides[0]}
                        />
                      </Link>
                    </li>
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
  const [create, result] = useMutation<{ createReport: ReportType }, {}>({
    mutation: CREATE_REPORT,
    refetchQueries: () => [{ query: FETCH_REPORTS }]
  });
  switch (result.status) {
    case "Ready":
      return (
        <Redirect push to={`/reports/${result.data.createReport.id}/edit`} />
      );
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
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, auto);
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-rows: 140px auto;
  min-height: 100%;
`;

const NewButton = styled.button`
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
  background: linear-gradient(312.29deg, #219205 -42.49%, #88bc32 85.05%);
  color: white;
`;
