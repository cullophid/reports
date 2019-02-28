import { validate as validateEmail } from "email-validator";
import { GraphQLScalarType } from "graphql";

export const Email = new GraphQLScalarType({
  name: "Email",
  description: "Validated email",
  serialize: (value) => value,
  parseValue: (value) => (validateEmail(value) ? value : null),
  parseLiteral: (ast) =>
    ast.kind === "StringValue" && validateEmail(ast.value) ? ast.value : null
});
