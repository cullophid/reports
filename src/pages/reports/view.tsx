import React, { useState, useEffect } from "react"
import { ReportType } from "src/models"
import { reportsCollection } from "src/firestore"
import { Page } from "src/components/Page"
import { navigate } from "gatsby"
import { Header } from "src/components/Header"
import styled from "styled-components"
import { Remote } from "src/remote"
import { Link } from "gatsby"
import { buttonStyle } from "src/components/Button"
import { Slide } from "src/components/Slide"
import { TextNode } from "src/components/TextNode"
import { css, keyframes } from "styled-components"

type Props = {
  location: Location
}

const fadeIn = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}
`

const View = (props: Props) => {
  const reportId = props.location.hash.split("?")[0].substring(1)
  const [report, setReport] = useState<Remote<ReportType>>({ loading: true })
  useEffect(() => {
    return reportsCollection.doc(reportId).onSnapshot(
      doc => {
        if (!doc.data()) {
          return navigate("/404")
        }
        setReport({ data: doc.data()! })
      },
      error => setReport({ error })
    )
  }, [reportId])

  useEffect(() => {
    document.title = report.data ? report.data.title : "View report"
  }, [report.data])
  return (
    <Page>
      <ViewLayout>
        <Header title={report.data ? report.data.title : "..."} />
        <Actions>
          <EditLink to={`/reports/edit#${reportId}`}>EDIT</EditLink>
        </Actions>
        <SlideList>
          {report.data &&
            report.data.slides.map((slide, i) => (
              <Slide key={i} width={slide.width} height={slide.height}>
                {slide.nodes.map(node => {
                  switch (node.type) {
                    case "Text":
                      return <TextNode {...node}>{node.value}</TextNode>
                  }
                })}
              </Slide>
            ))}
        </SlideList>
      </ViewLayout>
    </Page>
  )
}

export default View

const ViewLayout = styled.div`
  width: 100%;
  display: grid;
  padding-bottom: 32px;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  justify-content: center;
  @media print {
    padding: 0;
    margin: 0;
  }
`

const EditLink = styled(Link)`
  ${buttonStyle}
`

const Actions = styled.nav`
  display: grid;
  justify-self: stretch;
  grid-auto-columns: auto;
  justify-content: end;
  padding: 0 32px;
`

const SlideList = styled.div`
  margin: 0;
  padding: 0 15%;
  display: grid;
  grid-template-columns: minmax(80%, fr);
  grid-gap: 5%;
  position: relative;
  @media (max-width: 700px) {
    grid-gap: 32px;
    padding: 0 32px;
  }
`
