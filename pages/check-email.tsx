import { CheckEmailPage } from "../client/CheckEmailPage";
import { Page } from "../client/components/Page";

export default () =>
  <Page requireAuth={false}>
    <CheckEmailPage />
  </Page> 