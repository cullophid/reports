import { SchemaDirectiveVisitor } from "graphql-tools";
import { AuthenticationError } from "apollo-server";
import { GraphQLField } from "graphql";
import { Session } from "./Types";
export class AuthenticatedDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, Session, any>) {
    const { resolve } = field;
    field.resolve = async (parent, args, ctx, info) => {
      console.log(parent, args);
      if (!ctx.user) {
        throw new AuthenticationError(
          "You must be signed in to view this resource."
        );
      }
      return resolve ? resolve(parent, args, ctx, info) : parent[field.name];
    };
  }
}
