import * as React from "react";
import * as Reports from "../../reports";
import styled from "styled-components";
import PageContainer from "../SlideContainer";
import TextField from "../TextField";
import TextArea from "../TextArea";
import { Row, Column } from "../Layout";

const Content = styled(Column)`
  padding: 60px 60px 30px 60px;
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

const Columns = styled(Row)`
  align-self: stretch;
  flex: 1;
`;

const TextColumn = styled.p`
  white-space: pre-line;
  word-break: break-word;
  word-wrap: break-word;
  border: 1px solid transparent;

  align-self: stretch;
  font-size: 18px;
  flex: 1;
`;

const TitleEditor = styled(TextField)`
  font-size: 48px;
  padding: 0;
  color: black;
`;

const ColumnEditor = styled(TextArea)`
  text-align: left;
  resize: none;

  font-size: 18px;
  flex: 1;
  align-self: stretch;
`;
type Props = {
  slide: Reports.Slide;
  onClick?: () => void;
};
export const Slide = (props: Props) => (
  <PageContainer>
    <Content onClick={props.onClick} spacing="30px" align="center">
      <Title>{props.slide.title}</Title>
      <Columns spacing="60px">
        <TextColumn>{props.slide.primaryText}</TextColumn>
        <TextColumn>{props.slide.secondaryText}</TextColumn>
      </Columns>
    </Content>
  </PageContainer>
);
type EditorProps = {
  slide: Reports.Slide;
  onChange: (slide: Reports.Slide) => void;
  onClick?: () => void;
};
export const Editor = (props: EditorProps) => (
  <PageContainer>
    <Content onClick={props.onClick} spacing="30px">
      <TitleEditor
        value={props.slide.title}
        onChange={(e) =>
          props.onChange({ ...props.slide, title: e.target.value })
        }
      />
      <Columns justify="center" spacing="60px">
        <ColumnEditor
          value={props.slide.primaryText}
          onChange={(e) =>
            props.onChange({ ...props.slide, primaryText: e.target.value })
          }
        />
        <ColumnEditor
          value={props.slide.secondaryText}
          onChange={(e) =>
            props.onChange({ ...props.slide, secondaryText: e.target.value })
          }
        />
      </Columns>
    </Content>
  </PageContainer>
);

export const Template = () => (
  <PageContainer>
    <Content spacing="30px" align="center">
      <Title>Title</Title>
      <Columns spacing="60px">
        <TextColumn>Text Column</TextColumn>
        <TextColumn>TextColumn</TextColumn>
      </Columns>
    </Content>
  </PageContainer>
);
