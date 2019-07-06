import { MutationResolvers } from "../generated/graphql";
import { prisma, Report } from "../generated/prisma-client";

export const Mutation: MutationResolvers = {
  createReport: async ({}, { data }, ctx) => {
    const { slides, ...report } = data;
    return ctx.prisma.createReport({
      ...report,
      slides: {
        create:
          slides &&
          slides.map((slide) => {
            return {
              textNodes: {
                create: slide.textNodes
              },
              chartNodes: {
                create: slide.chartNodes
              }
            };
          })
      }
    });
  },
  updateReport: async ({}, { data }, ctx) => {
    const { id, slides, ...report } = data;
    const update = ctx.prisma.updateReport({
      where: {
        id
      },
      data: {
        ...report,
        slides: slides && {}
      }
    });
    if (slides === null) {
      return update;
    }
    const [res] = await Promise.all([
      update,
      ...slides.map((slide) =>
        prisma.deleteSlide({
          id: slide.id
        })
      )
    ]);
    return await update;
  }
};
