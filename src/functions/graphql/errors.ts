import { ApolloError } from "apollo-server-lambda";

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
