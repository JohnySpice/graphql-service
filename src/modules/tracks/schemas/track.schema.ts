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
}`;