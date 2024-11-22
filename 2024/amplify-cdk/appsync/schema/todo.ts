// appsync/schema/todo.ts
import { format } from "./utils";

const typeTodo = `#graphql
  type Todo {
    id: ID!
    name: String!
    description: String
    createdAt: AWSDateTime!
    updatedAt: AWSDateTime!
  }
`;

const typeTodoConnection = `#graphql
  type TodoConnection {
    items: [Todo]
    nextToken: String
  }
`;

const inputCreateTodoInput = `#graphql
  input CreateTodoInput {
    name: String!
    description: String
  }
`;

const inputDeleteTodoInput = `#graphql
  input DeleteTodoInput {
    id: ID!
  }
`;

const inputUpdateTodoInput = `#graphql
  input UpdateTodoInput {
    id: ID!
    name: String
    description: String
  }
`;

const inputTableTodoFilterInput = `#graphql
  input TableTodoFilterInput {
    id: TableIDFilterInput
    name: TableStringFilterInput
    description: TableStringFilterInput
  }
`;

export const types = `#graphql
  ${format(typeTodo, 1)}

  ${format(typeTodoConnection, 1)}

  ${format(inputCreateTodoInput, 1)}

  ${format(inputDeleteTodoInput, 1)}

  ${format(inputUpdateTodoInput, 1)}

  ${format(inputTableTodoFilterInput, 1)}
`;

export const queries = `#graphql
  type Query {
    getTodo(id: ID!): Todo
    listTodos(
      filter: TableTodoFilterInput
      limit: Int
      nextToken: String
    ): TodoConnection
  }
`;

export const mutations = `#graphql
  type Mutation {
    createTodo(input: CreateTodoInput!): Todo
    updateTodo(input: UpdateTodoInput!): Todo
    deleteTodo(input: DeleteTodoInput!): Todo
  }
`;

export const subscriptions = `#graphql
  type Subscription {
    onCreateTodo(
      id: ID
      name: String
      description: String
    ): Todo @aws_subscribe(mutations: ["createTodo"])
    onUpdateTodo(
      id: ID
      name: String
      description: String
    ): Todo @aws_subscribe(mutations: ["updateTodo"])
    onDeleteTodo(
      id: ID
      name: String
      description: String
    ): Todo @aws_subscribe(mutations: ["deleteTodo"])
  }
`;
