import gql from "graphql-tag";

export type TextElementType = {
  id: string;
  type: "TEXT";
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

export type TextElementTemplateType = Pick<
  TextElementType,
  Exclude<keyof TextElementType, "id">
>;

export const newTextElement = (): TextElementType => ({
  id: "Asdf",
  type: "TEXT",
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
export type ChartElementType = {
  id: string;
  type: "CHART";
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

export type ChartElementTemplateType = Pick<
  ChartElementType,
  Exclude<keyof ChartElementType, "id">
>;

export type SlideElementType = TextElementType | ChartElementType;
export type SlideElementTemplateType =
  | TextElementTemplateType
  | ChartElementTemplateType;

export type SlideType = {
  id: string;
  elements: SlideElementType[];
};

export type SlideTemplateType = {
  elements: SlideElementTemplateType[];
};

export const newSlide = () => ({
  id: "stuff",
  elements: []
});

export const slideElementQuery = gql`
  {
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
`;

export const reportQuery = gql`
  {
    id
    title
    slides {
      id
      elements ${slideElementQuery}
    }
  }
`;

export type ReportType = {
  id: string;
  title: string;
  slides: SlideType[];
};

const removeTypename = ({ __typename, ...rest }: any) => rest;

const cleanSlideElement = (elem: SlideElementType) => {
  switch (elem.type) {
    case "TEXT":
      return removeTypename({
        ...elem,
        text: removeTypename(elem.text)
      });
    case "CHART":
      return removeTypename({
        ...elem,
        chart: removeTypename(elem.chart)
      });
  }
};

const cleanSlide = (slide: SlideType): SlideType => ({
  ...removeTypename(slide),
  elements: slide.elements.map(cleanSlideElement)
});
export const cleanReport = (report: ReportType): ReportType => ({
  ...removeTypename(report),
  slides: report.slides.map(cleanSlide)
});
