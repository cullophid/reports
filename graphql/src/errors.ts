import { ApolloError } from "apollo-server";

export class NotAuthenticatedError extends ApolloError {
  constructor(msg?: string) {
    super(
      msg || "You must be authenticated to perform this action",
      "UNAUTHENTICATED"
    );
  }
}

export class ForbiddenError extends ApolloError {
  constructor(msg?: string) {
    super(msg || "You are not allowed to perform that action", "FORBIDDEN");
  }
}
