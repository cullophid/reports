import { validate as validateEmail } from "email-validator";
import { GraphQLScalarType } from "graphql";
import { ObjectID } from "bson";
export const EmailScalar = new GraphQLScalarType({
  name: "Email",
  description: "Validated email",
  serialize: (value) => value,
  parseValue: (value) => (validateEmail(value) ? value : null),
  parseLiteral: (ast) =>
    ast.kind === "StringValue" && validateEmail(ast.value) ? ast.value : null
});

export const ObjectIDScalar = new GraphQLScalarType({
  name: "ObjectID",
  description: "Unique Identifier",
  serialize: (value: ObjectID) => value.toHexString(),
  parseValue: (value: string) => new ObjectID(value),
  parseLiteral: (ast) =>
    ast.kind === "StringValue" ? new ObjectID(ast.value) : null
});
