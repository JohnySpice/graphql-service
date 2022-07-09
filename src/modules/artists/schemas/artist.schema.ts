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

type Query {
    artist(id: ID!): Artist
    artists(limit: Int, offset: Int): [Artist]
}`;