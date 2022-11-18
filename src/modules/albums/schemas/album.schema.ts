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
}

type Mutation {
    createAlbum(
        name: String
        released: Int
        artistsIds: [String]
        bandsIds: [String]
        trackIds: [String]
        genresIds: [String]
        image: String): Album

    deleteAlbum(id: ID!): Result
    updateAlbum(
        id: ID!,
        name: String
        released: Int
        artistsIds: [String]
        bandsIds: [String]
        trackIds: [String]
        genresIds: [String]
        image: String): Album
}

`;