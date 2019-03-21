import React, { useState, useEffect } from "react"
import { Page } from "../../components/page"
import { Slide } from "../../components/slide"
import styled from "@emotion/styled"
import { useSession } from "../../firebase"
import { reportsCollection, Document } from "../../firestore"
import { navigateTo, Link } from "gatsby"
import * as Remote from "../../remote"
import { ReportType } from "../../models"
import { Button, HomeButton } from "../../components/buttons"

const IndexPage = () => {
  const [reports, setReports] = useState<Remote.t<Document<ReportType>[]>>(
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
    const doc = await reportsCollection.add({
      title: "Untitled",
      owner: user!.uid,
      slides: [
        {
          elements: [],
        },
      ],
    })

    navigateTo(`/reports/edit#${doc.id}`)
  }

  return (
    <Page>
      <Layout>
        <Header>
          <nav>
            <HomeButton to="/">HOME</HomeButton>
          </nav>
          <Title>Reports</Title>
          <nav>
            {reports.status === "Success" && reports.data.length > 0 && (
              <Button onClick={createReport}>NEW</Button>
            )}
          </nav>
        </Header>
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
        {reports.status === "Success" && reports.data.length > 0 && (
          <Main>
            <ReportList>
              {reports.data.map(report => {
                const reportData = report.data() as ReportType
                const titleSlide = reportData.slides[0] || {
                  elements: [],
                }
                return (
                  <Report key={report.id}>
                    <Link to={`/reports/edit#${report.id}`}>
                      <Slide slide={titleSlide} />
                      <H1>{reportData.title}</H1>
                    </Link>
                  </Report>
                )
              })}
            </ReportList>
          </Main>
        )}
      </Layout>
    </Page>
  )
}
export default IndexPage

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto;
  min-height: 100vh;
  width: 100vw;
`

const Header = styled.header`
  display: grid;
  padding: 0 32px;
  grid-template-columns: 1fr 4fr 1fr;
  justify-items: center;
  height: 100px;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: 200;
  font-family: "Montserrat";
  color: #474747;
  @media (max-width: 500px) {
    font-size: 32px;
  }
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
  text-align: center;
  font-size: 24px;
  color: #474747;
`

const ReportList = styled.ul`
  padding: 32px;
  padding-top: 32px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    padding: 72px;
    grid-gap: 72px;
  }
  align-items: start;
  grid-gap: 32px;
`
const Report = styled.li`
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
