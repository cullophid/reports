import React, { useState, useEffect } from "react"
import * as Remote from "../../remote"
import { Report } from "../../models"
import { reportsCollection } from "../../firestore"
import { Page } from "../../components/Page"
import { navigateTo } from "gatsby"
import { Header } from "../../components/Header"
import styled from "@emotion/styled"
import { ReportEditor, Placeholder } from "../../components/ReportEditor"

type Props = {
  location: Location
}

const Edit = (props: Props) => {
  const reportId = props.location.hash.substring(1)
  const [report, setReport] = useState<Remote.t<Report>>(Remote.loading)
  useEffect(() => {
    return reportsCollection.doc(reportId).onSnapshot(
      doc => {
        if (!doc.data()) {
          return navigateTo("/404")
        }
        setReport(Remote.success(doc.data()!))
      },
      error => setReport(Remote.error(error))
    )
  }, [reportId])
  const updateReport = (report: Report) => {
    reportsCollection.doc(report.id).set(report)
  }

  return (
    <Page>
      <EditorLayout>
        <Header
          gridArea="header"
          title={report.status === "Success" ? report.data.title : "..."}
        />
        {report.status === "Loading" && <Placeholder />}
        {report.status === "Error" && <p>{report.error.message}</p>}
        {report.status === "Success" && (
          <ReportEditor report={report.data} updateReport={updateReport} />
        )}
      </EditorLayout>
    </Page>
  )
}

export default Edit

const EditorLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 0 1fr 3fr 0;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header header header"
    ". slide-list slide-editor .";
  grid-column-gap: 5%;
  grid-row-gap: 5%;
  padding: 5% 0;

  @media (max-width: 500px) {
    padding-bottom: 0;
    grid-row-gap: 32px;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "slide-editor"
      "slide-list";
  }
`
