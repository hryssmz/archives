// appsync/schema/common.ts
import { format } from "./utils";

const inputTableBooleanFilterInput = `#graphql
  input TableBooleanFilterInput {
    ne: Boolean
    eq: Boolean
    attributeExists: Boolean
  }
`;

const inputTableIntFilterInput = `#graphql
  input TableIntFilterInput {
    ne: Int
    eq: Int
    le: Int
    lt: Int
    ge: Int
    gt: Int
    between: [Int]
    attributeExists: Boolean
  }
`;

const inputTableFloatFilterInput = `#graphql
  input TableFloatFilterInput {
    ne: Float
    eq: Float
    le: Float
    lt: Float
    ge: Float
    gt: Float
    between: [Float]
    attributeExists: Boolean
  }
`;

const inputTableStringFilterInput = `#graphql
  input TableStringFilterInput {
    ne: String
    eq: String
    le: String
    lt: String
    ge: String
    gt: String
    contains: String
    notContains: String
    between: [String]
    beginsWith: String
    attributeExists: Boolean
    size: ModelSizeInput
  }
`;

const inputTableIDFilterInput = `#graphql
  input TableIDFilterInput {
    ne: ID
    eq: ID
    le: ID
    lt: ID
    ge: ID
    gt: ID
    contains: ID
    notContains: ID
    between: [ID]
    beginsWith: ID
    attributeExists: Boolean
    size: ModelSizeInput
  }
`;

const inputModelSizeInput = `#graphql
  input ModelSizeInput {
    ne: Int
    eq: Int
    le: Int
    lt: Int
    ge: Int
    gt: Int
    between: [Int]
  }
`;

export const types = `#graphql
  ${format(inputTableBooleanFilterInput, 1)}

  ${format(inputTableIntFilterInput, 1)}

  ${format(inputTableFloatFilterInput, 1)}

  ${format(inputTableStringFilterInput, 1)}

  ${format(inputTableIDFilterInput, 1)}

  ${format(inputModelSizeInput, 1)}
`;
