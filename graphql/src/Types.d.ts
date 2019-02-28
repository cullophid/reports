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
export type Resolver<Parent, Args, Data> = (
  parent: Parent,
  args: Args,
  ctx: Session
) => Promise<Data> | Data;

export type ID = string;
