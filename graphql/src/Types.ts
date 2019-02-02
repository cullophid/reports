export type Session = {
  host: string;
  user?: {
    id: ID;
    firstname: string;
    lastname: string;
    email: string;
    isAdmin?: boolean;
  };
};
export type Resolver<Data, Input = {}, Parent = {}> = (
  parent: Parent,
  args: Input,
  ctx: Session
) => Promise<Data>;

export type ID = string;
