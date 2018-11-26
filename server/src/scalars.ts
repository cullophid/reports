import { validate as validateEmail } from "email-validator";
import { ObjectId } from "mongodb";
import { GraphQLScalarType, validate } from "graphql";
export const EmailScalar = new GraphQLScalarType({
  name: "Email",
  description: "Validated email",
  serialize: (value) => value,
  parseValue: (value) => (validateEmail(value) ? value : null),
  parseLiteral: (ast) =>
    ast.kind === "StringValue" && validateEmail(ast.value) ? ast.value : null
});
