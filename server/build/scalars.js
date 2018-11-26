"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_validator_1 = require("email-validator");
const graphql_1 = require("graphql");
exports.EmailScalar = new graphql_1.GraphQLScalarType({
    name: "Email",
    description: "Validated email",
    serialize: (value) => value,
    parseValue: (value) => (email_validator_1.validate(value) ? value : null),
    parseLiteral: (ast) => ast.kind === "StringValue" && email_validator_1.validate(ast.value) ? ast.value : null
});
