import * as React from "react";
import * as TitleSlide from "./TitleSlide";
import * as TwoColumn from "./TwoColumn";

import * as Reports from "../../reports";

const chooseSlide = (slide: Reports.Slide) => {
  switch (slide.template) {
    case "TitleSlide":
      return TitleSlide;
    case "TwoColumn":
      return TwoColumn;
  }
};

type Props = {
  slide: Reports.Slide;
  onClick?: () => void;
};
export const Slide = (props: Props) => {
  let Slide = chooseSlide(props.slide);
  return <Slide.Slide {...props} />;
};

type EditorProps = {
  slide: Reports.Slide;
  onChange: (slide: Reports.Slide) => void;
  onClick?: () => void;
};
export const Editor = (props: EditorProps) => {
  let Slide = chooseSlide(props.slide);
  return <Slide.Editor {...props} />;
};
