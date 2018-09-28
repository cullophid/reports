import * as React from "react";
import styled from "styled-components";
import Header from "./Header";
import * as TitlePage from "./Pages/TitlePage";
import * as twoColum from "./Pages/TwoColumn";
import { Row } from "./Layout";
import { ReportPage, ReportTemplate } from "../reports";

const TemplateList = styled.div`
  opacity: 0;
  transition: opacity 200ms;
  transition-delay: 400ms;
  flex: 1;
`;

const Templates = styled.div`
  display: flex;
  background: #ccc;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: transform 200ms;
  transition-delay: 200ms;
`;
const Template = styled.div`
  width: 200px;
`;

type Props = {
  show: boolean;
  selectPageTemplate: (page: ReportPage) => void;
};
export default (props: Props) => {
  const select = (template: ReportTemplate) =>
    props.selectPageTemplate({ template, title: "Untitled", text: {} });
  return (
    <Templates
      style={
        props.show ? { visibility: "visible", transform: "translateX(0)" } : {}
      }
    >
      <Header title="Choose a template" />
      <TemplateList style={props.show ? { opacity: 1 } : {}}>
        <Row spacing="15px" justify="center">
          <Template onClick={() => select("TitlePage")}>
            <TitlePage.Template />
          </Template>
          <Template onClick={() => select("TwoColumn")}>
            <twoColum.Template />
          </Template>
        </Row>
      </TemplateList>
    </Templates>
  );
};
