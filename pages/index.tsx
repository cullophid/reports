import { HomePage } from "../client/HomePage";
import { Page } from "../client/components/Page";

export default () =>
  <Page requireAuth>
    <HomePage />
  </Page>