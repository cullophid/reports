import { HomePage } from "../client/Home";
import { Page } from "../client/components/Page";

export default () =>
  <Page requireAuth>
    <HomePage />
  </Page>