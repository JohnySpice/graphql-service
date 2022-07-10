export const userType = `
  type User {
  id: ID!
  firstName: String
  secondName: String
  password: String
  email: String!
}

type Query {
  user(id: ID!): User
  jwt(email: String!, password: String!): String
}
`;