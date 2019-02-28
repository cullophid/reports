import * as Reports from "../data/Reports";
import * as Datastores from "../data/Datastores";
import { Resolver } from "../Types";

const datastore: Resolver<
  Reports.SlideChart,
  {},
  Datastores.Datastore | undefined
> = (chart) => Datastores.get(chart.datastore);

export const SlideChart = {
  datastore
};
