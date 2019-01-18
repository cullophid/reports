import gql from "graphql-tag";
import { omit } from "ramda";
import uuid from "uuid/v4";

export type textElement = {
  id: string;
  type: "text";
  x: number;
  y: number;
  width: number;
  height: number;
  text: {
    value: string;
    fontSize: number;
    align: "Left" | "Right" | "Center" | "Justify";
  };
};

export const newTextElement = (): textElement => ({
  id: uuid(),
  type: "text",
  x: 50,
  y: 130,
  width: 700,
  height: 0,
  text: {
    value: "Text...",
    fontSize: 24,
    align: "Center"
  }
});
export type chartElement = {
  id: string;
  type: "chart";
  x: number;
  y: number;
  width: number;
  height: number;
  chart: {
    dataStore: {
      id: string;
    } | null;
    query: string | null;
    xAxis: string | null;
    yAxis: string | null;
  };
};
export type slideElement = textElement | chartElement;

export type slide = {
  id: string;
  elements: slideElement[];
};

export const newSlide = () => ({
  id: uuid(),
  elements: []
});

export const reportQuery = gql`
  {
    id
    title
    slides {
      id
      elements {
        id
        type
        x
        y
        width
        height
        text {
          value
          fontSize
          align
        }
        chart {
          dataStore {
            id
          }
          query
          xAxis
          yAxis
        }
      }
    }
  }
`;

export type report = {
  id: string;
  title: string;
  slides: slide[];
};

const removeTypename = omit(["__typename"]);

const cleanSlideElement = (elem: slideElement) => {
  switch (elem.type) {
    case "text":
      return removeTypename({
        ...elem,
        text: removeTypename(elem.text)
      });
    case "chart":
      return removeTypename({
        ...elem,
        chart: removeTypename(elem.chart)
      });
  }
};

const cleanSlide = (slide: slide): slide => ({
  ...removeTypename(slide),
  elements: slide.elements.map(cleanSlideElement)
});
export const cleanReport = (report: report): report => ({
  ...removeTypename(report),
  slides: report.slides.map(cleanSlide)
});
