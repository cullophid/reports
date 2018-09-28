import * as React from "react";
import { Report } from "../reports";
import styled, { keyframes } from "styled-components";
import * as BaseSlide from "./Slides/Slide";
import PageList from "./SlideList";
import Header from "./Header";
import { Slide } from "../reports";
import PageTemplates from "./SlideTemplates";
import { Column } from "./Layout";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const slideOut = keyframes`
  from {
    transform:translateX(0)
  }
  to {
    transform:translateX(100%)
  }
`;

const PageWrap = styled.main`
  background: #eee;
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;
const Aside = styled.aside`
  flex-grow: 0;
  flex-shrink: 0;
  width: 300px;
  box-sizing: border-box;
  background: #ccc;
  transition: width 300ms;
  box-shadow: -1px 0 4px rgba(0, 0, 0, 0.4) inset;
`;
const Stage = styled(Column)`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-duration: 200ms;
  animation-name: ${slideOut};
`;

const Save = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: #88bc32;
  border-radius: 1000px;
  border: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  &:focus {
    outline: none;
  }
`;

type Props = {
  reportId: number;
};
type State = {
  selectedSlide: number;
  selectSlideTemplate: boolean;
};

const FETCH_REPORT = gql`
  {
    report(id: $id) @client {
      id
      title
      slides {
        id
        template
        title
        subtitle
        primaryText
        secondaryText
      }
    }
  }
`;

export default class Editor extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedSlide: 0,
      selectSlideTemplate: false
    };
  }
  render() {
    const update = () => {};
    const updateReport = (report: Report) => {};
    return (
      <Query query={FETCH_REPORT} variables={{ id: this.props.reportId }}>
        {({ loading, error, data }) => {
          if (loading) return <h1>Loading</h1>;
          if (error) return <h1>error</h1>;
          const report: Report = data.report;
          console.log(report);
          return (
            <PageWrap>
              <Aside>
                <Header title={report.title} />
                <PageList
                  report={report}
                  show={!this.state.selectSlideTemplate}
                  updateReport={updateReport}
                  onNewSlide={() => {}}
                  onSelect={(slide: number) =>
                    this.setState({ selectedSlide: slide })
                  }
                />
                <PageTemplates
                  show={this.state.selectSlideTemplate}
                  selectSlideTemplate={(page: Slide) => {}}
                />
              </Aside>
              <Stage
                spacing="15px"
                style={
                  this.state.selectedSlide
                    ? { animationPlayState: "running" }
                    : {
                        animationPlayState: "running",
                        animationDirection: "reverse",
                        animationDelay: "400ms"
                      }
                }
              >
                <BaseSlide.Editor
                  slide={report.slides[this.state.selectedSlide]}
                  onChange={(slide: Slide) => {}}
                />
              </Stage>
            </PageWrap>
          );
        }}
      </Query>
    );
  }
}
