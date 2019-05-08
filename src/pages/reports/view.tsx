import React, { useState, useEffect } from "react"
import { Report } from "../../models"
import { reportsCollection } from "../../firestore"
import { Page } from "../../components/Page"
import { navigate } from "gatsby"
import { Header } from "../../components/Header"
import styled from "@emotion/styled"
import { Remote } from "../../remote"
import { SlideView, SlidePlaceholder } from "../../components/Slide"
import { Link } from "gatsby"
import { buttonStyle } from "../../components/Button"

type Props = {
  location: Location
}

const View = (props: Props) => {
  const reportId = props.location.hash.split("?")[0].substring(1)
  const [report, setReport] = useState<Remote<Report>>({ loading: true })
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
          {!report.data &&
            [1, 2, 3].map(i => (
              <SlideLi key={i}>
                <SlidePlaceholder />
              </SlideLi>
            ))}
          {report.data &&
            report.data.slides.map(slide => (
              <SlideLi key={slide.id}>
                <SlideView slide={slide} />
              </SlideLi>
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

const SlideLi = styled.li`
  list-style-type: none;
  @media print {
    page-break-inside: avoid;
    page-break-after: always;
  }
`

const SlideList = styled.ul`
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
