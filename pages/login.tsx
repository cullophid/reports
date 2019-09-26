import { LoginPage } from "../client/Login"
import { Page } from "../client/components/Page";
export default () =>
  <Page requireAuth={false}>
    <LoginPage />
  </Page>