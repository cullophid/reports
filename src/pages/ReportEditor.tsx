import * as React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import NewButton from "../components/NewButton";
import { Report } from "../app";

const Slide = styled.div``;
const Page = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: stretch;
  background: #eee;
`;

const Main = styled.main`
  flex: 1;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const SlideList = styled.aside`
  flex: 0 0 300px;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Stage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FrontPageThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 12px;
  height: 140px;
  width: 230px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

const FrontPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 48px;
  height: 500px;
  width: 889px;
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;

type Props = {
  report: Report | null;
};

export default (props: Props) => (
  <Page>
    <Header title="" />
    <Main>
      <SlideList>
        <FrontPageThumb>
          {" "}
          {props.report ? props.report.name : "Untitled"}{" "}
        </FrontPageThumb>
        <NewButton />
      </SlideList>
      <Stage>
        <FrontPage> {props.report ? props.report.name : "Untitled"} </FrontPage>
      </Stage>
    </Main>
  </Page>
);
