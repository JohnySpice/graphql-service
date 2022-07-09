import { ApolloServer } from 'apollo-server';
import { genreType, genresResolvers, GenreService } from './src/modules';
import { makeExecutableSchema } from '@graphql-tools/schema';
import 'dotenv/config';

const PORT = process.env.PORT || 8080;

const genres = makeExecutableSchema({
  typeDefs: genreType,
  resolvers: genresResolvers
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