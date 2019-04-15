import React, { useState, useEffect } from "react"
import { Report } from "../../models"
import { reportsCollection } from "../../firestore"
import { Page } from "../../components/Page"
import { navigateTo } from "gatsby"
import { Header } from "../../components/Header"
import styled from "@emotion/styled"
import { ReportEditor } from "../../components/ReportEditor"
import qs from "qs"

type Props = {
  location: Location
}

type Remote<T> = {
  data?: T
  error?: Error
  loading?: boolean
}

const Edit = (props: Props) => {
  const queryParams = qs.parse(props.location.hash.split("?")[1])
  const reportId = props.location.hash.split("?")[0].substring(1)
  const [report, setReport] = useState<Remote<Report>>({ loading: true })
  useEffect(() => {
    return reportsCollection.doc(reportId).onSnapshot(
      doc => {
        if (!doc.data()) {
          return navigateTo("/404")
        }
        setReport({ data: doc.data()! })
      },
      error => setReport({ error })
    )
  }, [reportId])

  const updateReport = (report: Report) => {
    reportsCollection.doc(report.id).set(report)
  }

  return (
    <Page>
      <EditorLayout>
        <Header title={report.data ? report.data.title : "..."} />
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
