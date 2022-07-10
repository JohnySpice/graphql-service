export const userType = `
  type User {
  id: ID!
  firstName: String
  lastName: String
  password: String
  email: String!
}

type Query {
  user(id: ID!): User
  jwt(email: String!, password: String!): String
}

type Mutation {
  register(
    firstName: String
    lastName: String
    password: String
    email: String!
      ): User
}
`;