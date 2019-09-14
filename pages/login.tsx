import LoginPage from "../client/LoginPage"
import { Page } from "../client/components/Page";
export default () =>
  <Page requireAuth={false}>
    <LoginPage />
  </Page>