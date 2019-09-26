import { QueryResolvers } from "../codegen/graphql";
import { AuthenticationError } from "apollo-server-core";
import { encodeXText } from "nodemailer/lib/shared";

export const Query: QueryResolvers = {
  currentUser: ({ }, { }, ctx) => {
    if (!ctx.session.user) {
      throw new AuthenticationError("You are not authenticated")
    }
    return ctx.photon.users.findOne({
      where: {
        id: ctx.session.user.sub
      }
    })
  },
  reports: (_, { }, ctx) => {
    if (!ctx.session.user) {
      throw new AuthenticationError("You must be authenticated")
    }
    return ctx.photon.users.findOne({
      where: {
        id: ctx.session.user.sub
      }
    }).reports();
  },
  report: async (_, { id }, ctx) => {
    const { user } = ctx.session
    if (!user) {
      throw new AuthenticationError("You are not authenticated")
    }

    const [report] = await ctx.photon.reports.findMany({
      where: {
        id,
        owner: {
          id: user.sub
        }
      }
    })
    if (!report) {
      throw new Error("Could not find a report with that id")
    }
    return report
  }
}