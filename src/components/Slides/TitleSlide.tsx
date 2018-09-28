import * as React from "react";
import * as Reports from "../../reports";
import styled from "styled-components";
import SlideContainer from "../SlideContainer";
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
  slide: Reports.Slide;
  onClick?: () => void;
};
export const Slide = (props: Props) => (
  <SlideContainer>
    <Content onClick={props.onClick}>
      <Title>{props.slide.title}</Title>
      <SubTitle>{props.slide.subtitle}</SubTitle>
    </Content>
  </SlideContainer>
);
type EditorProps = {
  slide: Reports.Slide;
  onChange: (slide: Reports.Slide) => void;
  onClick?: () => void;
};
export const Editor = (props: EditorProps) => (
  <SlideContainer>
    <Content onClick={props.onClick}>
      <TitleEditor
        value={props.slide.title}
        onChange={(e) =>
          props.onChange({ ...props.slide, title: e.target.value })
        }
      />
      <SubTitleEditor
        value={props.slide.subtitle}
        onChange={(e) =>
          props.onChange({
            ...props.slide,
            subtitle: e.target.value
          })
        }
      />
    </Content>
  </SlideContainer>
);

export const Template = () => (
  <SlideContainer>
    <Content>
      <Title>Title</Title>
      <SubTitle>Subtitle</SubTitle>
    </Content>
  </SlideContainer>
);
