import { ApolloServer } from 'apollo-server';
import {
  genreType, genresResolvers, GenreService,
  artistType, artistsResolvers, ArtistService,
  bandType, memberType, bandsResolvers, BandService,
  albumType, albumsResolvers, AlbumService,
  trackType, tracksResolvers, TrackService
} from './src/modules';
import { makeExecutableSchema } from '@graphql-tools/schema';
import 'dotenv/config';

const PORT = process.env.PORT || 8080;

const genres = makeExecutableSchema({
  typeDefs: [genreType, artistType, bandType, memberType, albumType, trackType],
  resolvers: [genresResolvers, artistsResolvers, bandsResolvers, albumsResolvers, tracksResolvers]
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
      Album: new AlbumService(),
      Track: new TrackService()
    };
  }
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});