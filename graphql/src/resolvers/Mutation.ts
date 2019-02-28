import * as Reports from "../data/Reports";
import * as Datastores from "../data/Datastores";
import * as Users from "../data/Users";
import { Resolver, ID } from "../Types";
import { checkAuth, checkOwner } from "../auth";
import * as Auth from "../auth";
import * as Email from "../email";

const AUTH_TOKEN_EXPIRY = 2592000; // 30 days

const createReport: Resolver<void, { title: string }, Reports.Report> = (
  _,
  { title },
  ctx
) => {
  checkAuth(ctx);
  return Reports.create({ title, owner: ctx.user!.id });
};

const deleteReport: Resolver<void, { id: string }, string | null> = async (
  _,
  { id },
  ctx
) => {
  const report = await Reports.get(id);
  if (report) {
    checkOwner(ctx, report.owner);
    return Reports.remove(id);
  }
  return null;
};

const deleteAllReports: Resolver<void, {}, number | null> = (_, {}, ctx) => {
  checkAuth(ctx);
  return Reports.removeAll(ctx.user!.id);
};

type ReportUpdate = {
  id: ID;
  title?: string;
  slides?: Reports.Slide[];
  owner?: ID;
};
const updateReport: Resolver<
  void,
  { report: ReportUpdate },
  Reports.Report
> = async (_, { report }, ctx) => {
  const currentReport = await Reports.get(report.id);

  if (!currentReport) {
    return null;
  }
  checkOwner(ctx, currentReport.owner);

  return Reports.update(report);
};

type DatastoreCreate = {
  name: string;
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
};
const createDatastore: Resolver<
  void,
  { datastore: DatastoreCreate },
  Datastores.Datastore
> = async (_, { datastore }, ctx) => {
  checkAuth(ctx);
  return Datastores.create({ ...datastore, owner: ctx.user!.id });
};

const deleteDatastore: Resolver<void, { id: string }, string | null> = async (
  _,
  { id },
  ctx
) => {
  const datastore = await Datastores.get(id);
  if (!datastore) {
    return null;
  }
  checkOwner(ctx, datastore.owner);
  return Datastores.remove(id);
};
type DatastoreUpdate = {
  id: string;
  name?: string;
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  database?: string;
  owner?: string;
};
const updateDatastore: Resolver<
  void,
  { datastore: DatastoreUpdate },
  Datastores.Datastore | null
> = async (_, { datastore }, ctx) => {
  const currentDatastore = await Datastores.get(datastore.id);
  if (!currentDatastore) return null;

  checkOwner(ctx, currentDatastore.owner);
  return Datastores.update({ ...datastore, owner: ctx.user!.id });
};

const authenticate: Resolver<
  void,
  { email: string; password: string },
  string
> = async (_, { email, password }, ctx) => {
  let user = await Users.getByEmail(email);
  console.log("existing user", user);
  if (!user) {
    user = await Users.create(email);
    console.log("new User", user);
  }
  const payload = {
    user: {
      ...user,
      id: user._id
    }
  };
  const token = await Auth.sign(payload, { expiresIn: AUTH_TOKEN_EXPIRY });
  await Email.sendAuth(email, `${ctx.host}?accessToken=${token}`);
  return "An access token has been sent to your email";
};
export const Mutation = {
  createReport,
  deleteReport,
  deleteAllReports,
  updateReport,
  createDatastore,
  deleteDatastore,
  updateDatastore,
  authenticate
};
