import { SlideResolvers } from "../generated/graphql";
import { prop } from "./util";

export const Slide: SlideResolvers = {
  report: async (parent, {}, { prisma }) => {
    const slide = await parent;
    return await prisma
      .slide({
        id: slide.id
      })
      .report();
  },
  id: prop("id"),
  textNodes: async (parent, {}, { prisma }) => {
    const slide = await parent;
    return prisma
      .slide({
        id: slide.id
      })
      .textNodes();
  },
  chartNodes: async (parent, {}, { prisma }) => {
    const slide = await parent;
    return prisma
      .slide({
        id: slide.id
      })
      .chartNodes();
  }
};
