import { SlideResolvers } from "../codegen/graphql";

export const Slide: SlideResolvers = {
  id: slide => slide.id,
  charts: ({ id }, _, ctx) => ctx.photon.slides.findOne({ where: { id } }).charts()
}