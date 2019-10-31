import { Db } from "mongodb";
import { User, Report, Slide, Chart } from "./Models";
import DataLoader from "dataloader";
import { keyBy, groupBy } from "lodash";
import { knex } from "./knex";

export const dataLayer = () => {
  return {
    data: {
      users: {
        id: new DataLoader<string, User>(async ids => {
          const users = await knex<User>("users").whereIn("id", ids);
          const indexed = keyBy(users, r => r.id);
          return ids.map(id => indexed[id]);
        })
      },
      reports: {
        id: new DataLoader<string, Report>(async ids => {
          const reports = await knex<Report>("reports").whereIn("id", ids);
          const indexed = keyBy(reports, r => r.id);
          return ids.map(id => indexed[id]);
        }),
        owner: new DataLoader<string, Report[]>(async owners => {
          const reports = await knex<Report>("reports").whereIn(
            "ownerId",
            owners
          );
          const indexed = groupBy(reports, r => r.ownerId);
          return owners.map(owner => indexed[owner] || []);
        })
      },
      slides: {
        id: new DataLoader<string, Slide>(async ids => {
          const slides = await knex<Slide>("slides").whereIn("id", ids);
          const indexed = keyBy(slides, s => s.id);
          return ids.map(id => indexed[id]);
        }),
        report: new DataLoader<string, Slide[]>(async reports => {
          const slides = await knex<Slide>("slides").whereIn(
            "reportId",
            reports
          );
          const indexed = groupBy(slides, r => r.reportId);
          return reports.map(report => indexed[report] || []);
        })
      },
      charts: {
        id: new DataLoader<string, Chart>(async ids => {
          const charts = await knex<Chart>("charts").whereIn("id", ids);
          const indexed = keyBy(charts, s => s.id);
          return ids.map(id => indexed[id]);
        }),
        slide: new DataLoader<string, Chart[]>(async slides => {
          const charts = await knex<Chart>("charts").whereIn("slideId", slides);
          const indexed = groupBy(charts, r => r.slideId);
          return slides.map(slide => indexed[slide] || []);
        })
      }
    }
  };
};
