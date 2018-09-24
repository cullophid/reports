import * as React from "react";
import styled from "styled-components";
import Header from "./Header";
import { FrontPageTemplate } from "./Slides/FrontPage";
import { Row } from "./Layout";

const TemplateList = styled(Row)`
  opacity: 0;
  transition: opacity 300ms;
  transition-delay: 400ms;
`;

const Templates = styled.div`
  display: flex;
  background: #686e75;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: transform 300ms;
`;

type Props = {
  show: boolean;
  addSlide: () => void;
};
export default (props: Props) => {
  return (
    <Templates
      style={
        props.show ? { visibility: "visible", transform: "translateX(0)" } : {}
      }
    >
      <Header title="Choose a template" />
      <TemplateList style={props.show ? { opacity: 1 } : {}}>
        <Row spacing="15px">
          <FrontPageTemplate />
          <FrontPageTemplate />
          <FrontPageTemplate />
          <FrontPageTemplate />
        </Row>
      </TemplateList>
    </Templates>
  );
};
