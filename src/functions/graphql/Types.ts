import { ObjectID } from "bson";
export type Context =
  | { user: null }
  | {
      user: {
        id: string;
        firstname: string;
        lastname: string;
        email: string;
        organisation: ObjectID;
        isAdmin?: boolean;
      };
    };
export type Resolver<Data, Input = {}, Parent = {}> = (
  parent: Parent,
  args: Input,
  ctx: Context
) => Promise<Data>;
