import * as React from "react";
import styled from "styled-components";
import Header from "./Header";
import * as TitleSlide from "./Slides/TitleSlide";
import * as twoColum from "./Slides/TwoColumn";
import { Row } from "./Layout";
import { Slide, ReportTemplate } from "../reports";

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
  selectSlideTemplate: (page: Slide) => void;
};
export default (props: Props) => {
  const select = (template: ReportTemplate) =>
    props.selectSlideTemplate({ template, title: "Untitled" });
  return (
    <Templates
      style={
        props.show ? { visibility: "visible", transform: "translateX(0)" } : {}
      }
    >
      <Header title="Choose a template" />
      <TemplateList style={props.show ? { opacity: 1 } : {}}>
        <Row spacing="15px" justify="center">
          <Template onClick={() => select("TitleSlide")}>
            <TitleSlide.Template />
          </Template>
          <Template onClick={() => select("TwoColumn")}>
            <twoColum.Template />
          </Template>
        </Row>
      </TemplateList>
    </Templates>
  );
};
