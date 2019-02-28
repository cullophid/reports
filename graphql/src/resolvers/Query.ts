import * as Datastores from "../data/Datastores";
import * as Reports from "../data/Reports";
import * as Users from "../data/Users";
import { Session, Resolver, ID } from "../Types";
import { checkAuth, checkOwner } from "../auth";

const datastores: Resolver<void, {}, Datastores.Datastore[]> = (_, {}, ctx) => {
  checkAuth(ctx);
  return Datastores.listByOwner(ctx.user!.id);
};

const datastore: Resolver<
  void,
  { id: string },
  Datastores.Datastore | null
> = async (_, { id }, ctx) => {
  const datastore = await Datastores.get(id);
  if (!datastore) return null;
  checkOwner(ctx, datastore.owner);
  return datastore;
};

const reports: Resolver<void, {}, Reports.Report[]> = (_, {}, ctx) => {
  checkAuth(ctx);
  return Reports.listByOwner(ctx.user!.id);
};

const report: Resolver<void, { id: string }, Reports.Report | null> = async (
  _,
  { id },
  ctx
) => {
  const report = await Reports.get(id);
  if (!report) return null;
  checkOwner(ctx, report.owner);
  return report;
};

type SessionUser = Partial<Users.User> & { id: ID };

const session: Resolver<void, {}, { user: SessionUser }> = (_, {}, ctx) => {
  checkAuth(ctx);
  return {
    user: ctx.user!
  };
};

export const Query = {
  datastores,
  datastore,
  reports,
  report,
  session
};
