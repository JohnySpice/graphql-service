export const trackType = `
type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
}

type Query {
    track(id: ID!): Track
    tracks(limit: Int, offset: Int): [Track]
}

type Mutation {
    createTrack(
        title: String!
        albumId: String
        artistsIds: [String]
        bandsIds: [String]
        duration: Int
        released: Int
        genresIds: [String]): Track

    deleteTrack(id: ID!): Result
    updateTrack(
        id: ID!
        title: String
        album: String
        artistsIds: [String]
        bandsIds: [String]
        duration: Int
        released: Int
        genresIds: [String]): Track
}`;