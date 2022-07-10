export const artistType = `
type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
}

type Result {
    acknowledged: Boolean
    deletedCount: Int
}

type Query {
    artist(id: ID!): Artist
    artists(limit: Int, offset: Int): [Artist]
}

type Mutation {
    createArtist(
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bands: [String]
        instruments: [String]): Artist

    deleteArtist(id: ID!): Result
    updateArtist(
        id: ID!
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bands: [String]
        instruments: [String]): Artist
}
`;