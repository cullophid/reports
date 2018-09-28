import * as React from "react";
import * as TitlePage from "./TitlePage";
import * as TwoColumn from "./TwoColumn";

import { ReportPage } from "../../reports";

const choosePage = (page: ReportPage) => {
  switch (page.template) {
    case "TitlePage":
      return TitlePage;
    case "TwoColumn":
      return TwoColumn;
  }
};

type Props = {
  page: ReportPage;
  onClick?: () => void;
};
export const Page = (props: Props) => {
  let Page = choosePage(props.page);
  return <Page.Page {...props} />;
};

type EditorProps = {
  page: ReportPage;
  onChange: (page: ReportPage) => void;
  onClick?: () => void;
};
export const Editor = (props: EditorProps) => {
  let Page = choosePage(props.page);
  return <Page.Editor {...props} />;
};
