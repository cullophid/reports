import * as React from "react";
import { ReportPage } from "../../services/report.service";
import styled from "styled-components";
import Slide from "../Slide";
import TextField from "../TextField";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  width: 800px;
  height: 450px;
  font-size: 48px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: black;
  text-align: center;
  font-weight: normal;
`;
const SubTitle = styled.p`
  margin-top: 15px;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  color: black;
  text-align: center;
  font-weight: normal;
`;
const TitleEditor = styled(TextField)`
  font-size: 48px;
  color: black;
`;

const SubTitleEditor = styled(TextField)`
  font-size: 24px;
`;
type Props = {
  page: ReportPage;
};
export const FrontPage = (props: Props) => (
  <Slide>
    <Content>
      <Title>{props.page.title}</Title>
      <SubTitle>{props.page.text.subtitle}</SubTitle>
    </Content>
  </Slide>
);
type EditorProps = {
  page: ReportPage;
  onChange: (page: ReportPage) => void;
};
export const FrontPageEditor = (props: EditorProps) => (
  <Slide>
    <Content>
      <TitleEditor
        value={props.page.title}
        onChange={(e) =>
          props.onChange({ ...props.page, title: e.target.value })
        }
      />
      <SubTitleEditor
        value={props.page.text.subtitle}
        onChange={(e) =>
          props.onChange({
            ...props.page,
            text: { ...props.page.text, subtitle: e.target.value }
          })
        }
      />
    </Content>
  </Slide>
);
