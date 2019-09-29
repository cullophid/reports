import { MutationResolvers } from "../../codegen/graphql";
import cuid from "cuid"

export const updateReport: MutationResolvers["updateReport"] = async (_, { report }, ctx) => {
  if (!ctx.session.user) {
    throw new Error("You must be authenticated")
  }
  const current = await ctx.photon.reports.findOne({
    where: { id: report.id },
    include: {
      owner: true
    }
  })
  if (current.owner.id !== ctx.session.user.sub) {
    throw new Error("Report does not exist")
  }

  return ctx.photon.reports.update({
    where: { id: report.id },
    data: {
      title: report.title,
      slides: {
        upsert: report.slides.map((slide) => ({
          where: {
            id: slide.id
          },
          update: {
            ...slide,
            charts: {
              upsert: slide.charts.map(chart => ({
                where: {
                  id: chart.id,
                },
                update: chart,
                create: chart
              })),
              deleteMany: {
                id: {
                  notIn: slide.charts.map(c => c.id)
                }
              }
            }
          },
          create: {
            ...slide,
            charts: {
              create: slide.charts
            }
          }
        })),
        deleteMany: {
          id: {
            notIn: report.slides.map(s => s.id)
          }
        }
      }
    }
  })
}