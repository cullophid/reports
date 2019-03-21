import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import * as Remote from "../../remote"
import { ReportType, SlideType } from "../../models"
import { Document, reportsCollection } from "../../firestore"
import { Page } from "../../components/page"
import { Spinner } from "../../components/loader"
import { navigateTo } from "gatsby"
import { ReportEditor } from "../../components/ReportEditor"

type Props = {
  location: Location
}

const Edit = (props: any) => {
  const reportId = location.hash.substring(1)
  const [report, setReport] = useState<Remote.t<Document<ReportType>>>(
    Remote.loading
  )
  useEffect(() => {
    return reportsCollection
      .doc(reportId)
      .onSnapshot(
        doc => setReport(Remote.success(doc)),
        error => setReport(Remote.error(error))
      )
  }, [reportId])

  switch (report.status) {
    case "Loading":
      return (
        <Page>
          <Spinner />
        </Page>
      )
    case "Error":
      return (
        <Page>
          <p>{report.error.message}</p>
        </Page>
      )

    case "Success":
      if (!report.data.data()) {
        return navigateTo("/404")
      }
      return (
        <Page>
          <ReportEditor
            report={report.data.data()!}
            reportId={report.data.id}
          />
        </Page>
      )
  }
}

export default Edit
