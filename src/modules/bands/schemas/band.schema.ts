export const bandType = `
type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
}

type Query {
    band(id: ID!): Band
    bands(limit: Int, offset: Int): [Band]
}

type Mutation {
    createBand(
        name: String
        origin: String
        members: [String]
        website: String
        genres: [String]): Band

    deleteBand(id: ID!): Result
    updateBand(
        id: ID!
        name: String
        origin: String
        members: [String]
        website: String
        genres: [String]): Band
}
`;

export const memberType = `type Member {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    instrument: String
    years: [String]
}`;