import React, { useState, useEffect } from "react"
import { Page } from "../../components/Page"
import { Header } from "../../components/Header"
import { SlideView, SlidePlaceholder } from "../../components/Slide"
import styled from "@emotion/styled"
import { useSession } from "../../firebase"
import { reportsCollection, Document } from "../../firestore"
import { navigateTo, Link } from "gatsby"
import * as Remote from "../../remote"
import { Report } from "../../models"
import { Button } from "../../components/Button"
import { v4 as uuid } from "uuid"

const IndexPage = () => {
  const [reports, setReports] = useState<Remote.t<Document<Report>[]>>(
    Remote.loading
  )

  const user = useSession()
  useEffect(() => {
    if (!user) return
    setReports(Remote.loading)
    return reportsCollection.onSnapshot(snapShot =>
      setReports(Remote.success(snapShot.docs))
    )
  }, [user])

  const createReport = async () => {
    const id = uuid()
    await reportsCollection.doc(id).set({
      id,
      title: "Untitled",
      owner: user!.uid,
      slides: [],
    })

    navigateTo(`/reports/edit#${id}`)
  }
  return (
    <Page>
      <Layout>
        <Header title="Reports">
          {reports.status === "Success" && reports.data.length > 0 && (
            <NewReportButton onClick={createReport}>NEW</NewReportButton>
          )}
        </Header>
        <Main>
          {reports.status === "Success" && reports.data.length === 0 && (
            <NoReports>
              <NoReportsMessage>
                You do not have any reports yet!
              </NoReportsMessage>
              <Button
                onClick={createReport}
                style={{ fontSize: 24, padding: "16px 32px" }}
              >
                CREATE NEW REPORT
              </Button>
            </NoReports>
          )}
          <ReportList>
            {reports.status === "Success" &&
              reports.data.length > 0 &&
              reports.data.map((report, i) => {
                const reportData = report.data()!
                const titleSlide = reportData.slides[0] || {
                  elements: [],
                }
                return (
                  <ReportView key={i}>
                    <Link to={`/reports/edit#${report.id}`}>
                      <SlideView slide={titleSlide} />
                      <H1>{reportData.title}</H1>
                    </Link>
                  </ReportView>
                )
              })}
            {reports.status === "Loading" &&
              [0, 1, 2].map((_, i) => (
                <ReportView key={i}>
                  <SlidePlaceholder />
                </ReportView>
              ))}
          </ReportList>
        </Main>
      </Layout>
    </Page>
  )
}
export default IndexPage

const NewReportButton = styled(Button)`
  @media (max-width: 500px) {
    position: fixed;
    bottom: 16px;
    right: 16px;
  }
`

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-auto-flow: row;
  min-height: 100vh;
  width: 100vw;
  padding: 32px 0;
  grid-gap: 32px 0;
`

const Main = styled.main`
  display: grid;
`

const NoReports = styled.main`
  display: grid;
  place-content: center center;
  grid-gap: 32px;
`

const NoReportsMessage = styled.p`
  font-family: "Indie Flower";
  text-align: center;
  font-size: 24px;
  color: #474747;
`

const ReportList = styled.ul`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  align-items: stretch;
  justify-items: stretch;
  padding: 0 10%;
  grid-gap: 5%;
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`
const ReportView = styled.li`
  display: block;
  align-self: start;
  justify-self: stretch;
  list-style-type: none;
  position: relative;
  & h1 {
    visibility: hidden;
  }
  &:hover h1 {
    visibility: visible;
  }
`

const H1 = styled.h1`
  background: #000000bb;
  color: white;
  margin: 0;
  display: grid;
  place-content: center center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
`
