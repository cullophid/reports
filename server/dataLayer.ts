import { Db } from "mongodb";
import { User, Report, Slide, Chart } from "./Models";
import DataLoader from "dataloader"
import { keyBy, groupBy } from "lodash"

export const dataLayer = (db: Db) => {
  const collections = {
    users: db.collection<User>("users"),
    reports: db.collection<Report>("reports"),
  }

  const dataLoaders = {
    reports: {
      id: new DataLoader<string, Report>(async ids => {
        const reports = await collections.reports.find({
          _id: { $in: ids }
        }).toArray()
        const indexed = keyBy(reports, report => report._id)

        return ids.map(id => indexed[id])
      }),
      owner: new DataLoader<string, Report[]>(async ids => {
        const reports = await collections.reports.find({
          owner: { $in: ids }
        }).toArray()
        const indexed = groupBy(reports, report => report.owner)
        return ids.map(id => indexed[id] || [])
      })
    },
    users: {
      id: new DataLoader<string, User>(async ids => {
        const users = await collections.users.find({
          _id: { $in: ids }
        }).toArray()
        const indexed = keyBy(users, user => user._id)

        return ids.map(id => indexed[id])
      })
    },

  }

  return {
    collections, dataLoaders
  }
}
