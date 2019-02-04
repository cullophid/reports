import React from "react";

import styled from "styled-components";
import {
  SlideTemplateType,
  SlideElementTemplateType
} from "../../models/reports";
import Slide from "../../components/Slide";
import { useWindowSize } from "../../hooks";

type Props = {
  onSelect: (slide: SlideTemplateType) => void;
};
export const SlideTemplates = (props: Props) => {
  const { width } = useWindowSize();
  return (
    <TemplateList>
      {slideTemplates.map((slide) => (
        <SlideTemplate
          width={width < 600 ? width * 0.8 : width / 2 - 128}
          slideTemplate={slide}
        />
      ))}
    </TemplateList>
  );
};

const slideTemplates: SlideTemplateType[] = [
  {
    elements: [
      {
        type: "TEXT",
        x: 50,
        y: 100,
        width: 700,
        height: 40,
        text: {
          value: "Text",
          fontSize: 24,
          align: "Left"
        }
      }
    ]
  }
];

type SlideTemplateProps = {
  slideTemplate: SlideTemplateType;
  width: number;
};
const SlideTemplate = ({ slideTemplate, width }: SlideTemplateProps) => {
  return (
    <TemplateBackground width={width}>
      <TemplateContent scale={width / 800}>
        {slideTemplate.elements.map((element) => {
          <SlideTemplateElement
            style={{
              width: element.width,
              height: element.height || 40,
              left: element.x,
              y: element.y
            }}
          />;
        })}
      </TemplateContent>
    </TemplateBackground>
  );
};

const TemplateList = styled.ul`
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

const TemplateBackground = styled.li<{ width: number }>`
  width: ${(p) => p.width}px;
  height: ${(p) => (p.width / 800) * 450}px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  background: white;
  overflow: hidden;
`;

const TemplateContent = styled.li<{ scale: number }>`
  position: relative;
  width: 800px;
  height: 450px;
  transform: scale(${(p) => p.scale});
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  background: white;
  overflow: hidden;
`;

const SlideTemplateElement = styled.div`
  position: absolute;
  background: #ccc;
  border-radius: 2px;
`;
