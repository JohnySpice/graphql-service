export const albumType = `
type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
}

type Query {
    album(id: ID!): Album
    albums(limit: Int, offset: Int): [Album]
}`;