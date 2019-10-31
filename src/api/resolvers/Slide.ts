import { SlideResolvers } from "../../codegen/api";

export const Slide: SlideResolvers = {
  id: slide => slide.id,
  charts: (slide, _, ctx) => ctx.data.charts.slide.load(slide.id)
};
