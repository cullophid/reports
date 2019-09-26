import { CheckEmailPage } from "../client/CheckEmail";
import { Page } from "../client/components/Page";

export default () =>
  <Page requireAuth={false}>
    <CheckEmailPage />
  </Page> 