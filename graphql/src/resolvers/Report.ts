import { Resolver } from "../Types";
import * as Reports from "../data/Reports";
import * as Users from "../data/Users";

const id: Resolver<Reports.Report, {}, string> = (report) => report._id;
const owner: Resolver<Reports.Report, {}, Users.User | undefined> = (report) =>
  Users.get(report.owner);

export const Report = {
  id,
  owner
};
