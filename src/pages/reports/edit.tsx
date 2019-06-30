import React, { useState, useEffect } from "react"
import { ReportType } from "src/models"
import { reportsCollection } from "src/firestore"
import { Page } from "src/components/Page"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { ReportEditor } from "src/components/Editor/ReportEditor"
import qs from "qs"
import { Remote } from "src/remote"
type Props = {
  location: Location
}

const Edit = (props: Props) => {
  const queryParams = qs.parse(props.location.hash.split("?")[1])
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

  const updateReport = (report: ReportType) => {
    reportsCollection.doc(report.id).set(report)
  }

  return (
    <Page>
      <EditorLayout>
        <Header>
          <h1
            css={css`
              margin: 0;
              font-size: 24px;
            `}
          >
            {report.data ? report.data.title : "..."}
          </h1>
        </Header>
        <ReportEditor
          report={report}
          updateReport={updateReport}
          initialSlide={queryParams.slide}
        />
      </EditorLayout>
    </Page>
  )
}

export default Edit

const EditorLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;

  @media (max-width: 500px) {
    padding-bottom: 0;
    grid-row-gap: 32px;
    grid-template-columns: auto 1fr;
  }
`

const Header = styled.header`
  height: 40px;
  border-bottom: 1px solid #eee;
  color: #333;
  display: grid;
  align-content: center;
  padding: 0 16px;
  background: white;
`
