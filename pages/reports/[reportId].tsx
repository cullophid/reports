import { ReportPage } from "../../client/Report/Report";
import { Page } from "../../client/components/Page";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { reportId, slide } = router.query
  if (!reportId) {
    return null
  }
  return (

    <Page requireAuth>
      <ReportPage id={reportId as string} slide={slide as string} />
    </Page >
  )
}
