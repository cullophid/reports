import React, { useState, useEffect } from "react"
import { Page } from "src/components/Page"
import { Header } from "src/components/Header"
import styled from "styled-components"
import { useSession } from "src/firebase"
import { reportsCollection } from "src/firestore"
import { Document } from "src/firebaseTypes"
import { navigate, Link } from "gatsby"
import { ReportType, SlideType } from "src/models"
import { Remote } from "src/remote"
import { Button } from "src/components/Button"
import { v4 as uuid } from "uuid"
import { Slide } from "src/components/Slide"
import { TextNode } from "src/components/TextNode"

const IndexPage = () => {
  const [reports, setReports] = useState<Remote<Document<ReportType>[]>>({
    loading: true,
  })

  const user = useSession()
  useEffect(() => {
    if (!user) return
    setReports({ loading: true })
    return reportsCollection
      .where("owner", "==", user.uid)
      .onSnapshot(snapShot => setReports({ data: snapShot.docs }))
  }, [user])

  const createReport = async () => {
    const id = uuid()
    const newReport: ReportType = {
      id,
      title: "Untitled",
      owner: user!.uid,
      slides: [],
    }

    await reportsCollection.doc(id).set(newReport)

    navigate(`/reports/edit#${id}`)
  }
  return (
    <Page>
      <Layout>
        <Header title="Reports" />
        <Main>
          {reports.data && reports.data.length === 0 && (
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
            {reports.data &&
              reports.data.length > 0 &&
              reports.data.map((report, i) => {
                const reportData = report.data()!
                const titleSlide: SlideType = reportData.slides[0] || {
                  id: "",
                  nodes: [],
                }
                return (
                  <ReportView key={i}>
                    <Link to={`/reports/view#${reportData.id}`}>
                      <Slide
                        width={titleSlide.width}
                        height={titleSlide.height}
                      >
                        {titleSlide.nodes.map(node => {
                          switch (node.type) {
                            case "Text":
                              return <TextNode {...node}>{node.value}</TextNode>
                          }
                        })}
                      </Slide>
                    </Link>
                  </ReportView>
                )
              })}
            {reports.data && reports.data.length > 0 && (
              <ReportView key={"NEW"} />
            )}
            {reports.loading && [0, 1, 2].map((_, i) => <ReportView key={i} />)}
          </ReportList>
        </Main>
      </Layout>
    </Page>
  )
}
export default IndexPage

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-auto-flow: row;
  min-height: 100vh;
  width: 100vw;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: stretch;
  align-content: start;
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
