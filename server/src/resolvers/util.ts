import { MaybePromise } from "../generated/graphql";

export const prop = <Parent, K extends keyof Parent>(key: K) => async (
  parent: MaybePromise<Parent>
): Promise<Parent[K]> => (await parent)[key];
