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
}`;