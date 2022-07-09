import { ApolloServer, gql, } from 'apollo-server';
import { GenreService } from './src/modules/genres/services/genre.service';
import { genreType } from './src/modules/genres/schemas/genre';
import { resolvers } from './src/modules/genres/resolvers/genre.resolver';
import { makeExecutableSchema } from '@graphql-tools/schema';
import 'dotenv/config';

const PORT = process.env.PORT || 8080;

const genres = makeExecutableSchema({
  typeDefs: genreType,
  resolvers
});

const server = new ApolloServer({
  schema: genres,
  csrfPrevention: true,
  cache: 'bounded',
  dataSources: () => {
    return {
      Genre: new GenreService(),
    };
  }
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});