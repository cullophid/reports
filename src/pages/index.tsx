import React, { useState, useEffect } from "react"
import firebase, { firestore } from "firebase/app"
import { Page } from "../components/page-component"
import styled from "@emotion/styled"
import { useSession } from "../firebase"
import { navigateTo, Link } from "gatsby"

type SlideElement = {
  type: "Text" | "Chart" | "Image"
  x: number
  y: number
  width: number
  height: number
  value: string
}
type Slide = {
  elements: SlideElement[]
}

type Report = {
  title: string
  description: string
  owner: string
  slides: Slide[]
}
const IndexPage = () => {
  const [reports, setReports] = useState<
    firebase.firestore.DocumentSnapshot[] | undefined
  >(undefined)
  const user = useSession()

  const createReport = async () => {
    const doc = await firebase
      .firestore()
      .collection("reports")
      .add({
        title: "Untitled",
        slides: [
          {
            elements: [],
          },
        ],
      })

    navigateTo(`/reports/edit#${doc.id}`)
  }

  useEffect(() => {
    if (!user) return
    return firebase
      .firestore()
      .collection("reports")
      .onSnapshot(snapShot => setReports(snapShot.docs as any))
  }, [user])

  return (
    <Page>
      <Layout>
        {reports && reports.length === 0 && (
          <NoReports>
            <NewReportButton
              onClick={createReport}
              style={{ fontSize: 24, padding: "16px 32px" }}
            >
              Create Report
            </NewReportButton>
          </NoReports>
        )}
        {reports && reports.length > 0 && (
          <Main>
            <ul>
              {reports.map(report => (
                <li key={report.id}>
                  <Link to={`/reports/edit#${report.id}`}>
                    <span> {report.id}</span>
                    <span> {report.data()!.title}</span>
                    <p> {report.data()!.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <NewReportButton
              onClick={createReport}
              style={{ position: "absolute", top: 30, right: 40 }}
            >
              Create Report
            </NewReportButton>
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
`
const Main = styled.main``

const NoReports = styled.main`
  display: grid;
  place-content: center center;
`
const NewReportButton = styled.button`
  padding: 8px 16px;
  font-weight: 300;
  background: none;
  border: 4px solid white;
  color: white;
  font-size: 14px;
  background: linear-gradient(312.29deg, #219205 -42.49%, #88bc32 85.05%);
  border-radius: 999px;
  box-shadow: 0 1px 2px #00000025;
  text-transform: uppercase;
`
