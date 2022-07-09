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
}`;

export const memberType = `type Member {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    instrument: String
    years: [String]
}`;