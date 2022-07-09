import { ApolloServer } from 'apollo-server';
import {
  genreType, genresResolvers, GenreService,
  artistType, artistsResolvers, ArtistService,
  bandType, memberType, bandsResolvers, BandService
} from './src/modules';
import { makeExecutableSchema } from '@graphql-tools/schema';
import 'dotenv/config';

const PORT = process.env.PORT || 8080;

const genres = makeExecutableSchema({
  typeDefs: [genreType, artistType, bandType, memberType],
  resolvers: [genresResolvers, artistsResolvers, bandsResolvers]
});

const server = new ApolloServer({
  schema: genres,
  csrfPrevention: true,
  cache: 'bounded',
  dataSources: () => {
    return {
      Genre: new GenreService(),
      Artist: new ArtistService(),
      Band: new BandService(),
    };
  }
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});