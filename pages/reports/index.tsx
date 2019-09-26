import { ReportListPage } from "../../client/ReportList";
import { Page } from "../../client/components/Page";

export default () =>
  <Page requireAuth>
    <ReportListPage />
  </Page>