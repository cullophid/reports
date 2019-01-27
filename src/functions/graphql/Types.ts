export type Context = {};

export type Resolver<Data, Input = {}> = (
  ctx: Context,
  args: Input
) => Promise<Data>;
