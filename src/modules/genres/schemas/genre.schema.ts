export const genreType = `
type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
}

type Query {
  genre(id: ID!): Genre
  genres(limit: Int, offset: Int): [Genre]
}

type Mutation {
  createGenre(
    name: String
    description: String
    country: String
    year: Int): Genre

  deleteGenre(id: ID!): Result
  updateGenre(
      id: ID!
      name: String
      description: String
      country: String
      year: Int): Genre
}
`;