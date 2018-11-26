import * as React from "react";
import { css } from "emotion";
import { row, column, rowSpacing, columnSpacing, center } from "../../styles";
import {
  report,
  slide,
  newTextElement,
  slideElement,
  newSlide
} from "../../reports";
import { debounce } from "../../util";
import { SlideEditor } from "./SlideEditor";
import SlideView from "../Slide";
import { Button } from "../Button";
import { editorSelection } from "../../editorSelection";

const Styles = {
  newButton: css`
    ${center};
    width: 240px;
    height: 135px;
    box-sizing: border-box;
    border: 8px dashed #88bc32;
  `,
  main: css`
    height: 100%;
    display: grid;
    grid-template-columns: 300px auto;
    padding: 0 30px;
    grid-column-gap: 30px;
    min-height: 0;
  `,
  aside: css`
    ${column};
    ${columnSpacing(15)};
    padding: 30px;
    box-sizing: border-box;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0px; /* remove scrollbar space */
      background: transparent; /* optional: just make scrollbar invisible */
    }
  `,
  stage: css`
    flex: 1;
    ${column};
    box-sizing: border-box;
    padding: 30px 0;
    align-items: center;
    overflow: visible;
  `
};

type Props = {
  report: report;
  slideId: string | null;
  saveReport: (report: report) => void;
};

type State = {
  report: report;
  selection: editorSelection;
  showTemplates: boolean;
  unsavedChanges: boolean;
};

export default class ReportEditor extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    let slide = props.report.slides.find((s) => s.id === props.slideId);
    this.state = {
      selection: slide
        ? { type: "Slide", slideId: slide.id }
        : { type: "None", slideId: props.report.slides[0].id },
      report: props.report,
      showTemplates: false,
      unsavedChanges: false
    };
  }

  deselect = () => {
    this.setState({
      selection: { type: "None", slideId: this.state.selection.slideId }
    });
  };

  saveReport = debounce((report: report) => {
    this.props.saveReport(report);
    this.setState({ unsavedChanges: false });
  }, 500);

  updateReport = (report: report) => {
    this.props.saveReport(report);
    this.setState({ report });
  };

  updateSlide = (slide: slide) => {
    const { report } = this.state;
    this.updateReport({
      ...report,
      slides: report.slides.map((s) => (s.id === slide.id ? slide : s))
    });
  };

  addSlide = () => {
    const { report } = this.state;
    this.updateReport({
      ...report,
      slides: [...report.slides, newSlide()]
    });
  };

  updateSelection = (selection: editorSelection) => {
    this.setState({ selection });
  };

  selectSlide = (slide: slide) => {
    this.setState({ selection: { type: "Slide", slideId: slide.id } });
  };

  deleteSlide = (id: string) => {
    const { report, selection } = this.state;
    if (report.slides.length <= 1) return;
    this.updateReport({
      ...report,
      slides: report.slides.filter((slide) => slide.id !== id)
    });
    if (selection.slideId === id) {
      this.setState({
        selection: {
          ...this.state.selection,
          slideId: report.slides[0].id
        }
      });
    }
  };

  render() {
    let { report, selection } = this.state;
    const selectedSlide = report.slides.find((s) => s.id === selection.slideId);
    return (
      <main
        css={Styles.main}
        style={this.state.showTemplates ? { display: "none" } : {}}
        onMouseDown={this.deselect}
      >
        <aside css={Styles.aside}>
          {report.slides.map((slide: slide) => (
            <SlideView
              key={slide.id}
              onClick={this.selectSlide}
              active={selection.slideId === slide.id}
              highlight={
                selection.type === "Slide" && slide.id === selection.slideId
              }
              slide={slide}
            />
          ))}
          <Button onClick={this.addSlide}> ADD SLIDE </Button>
        </aside>
        <div css={Styles.stage}>
          {selectedSlide && (
            <SlideEditor
              slide={selectedSlide}
              selection={selection}
              updateSlide={this.updateSlide}
              updateSelection={this.updateSelection}
            />
          )}
        </div>
      </main>
    );
  }
}
