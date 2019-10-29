import { SlideResolvers } from "../../codegen/api";

export const Slide: SlideResolvers = {
  id: slide => slide.id,
  charts: slide => slide.charts
};
