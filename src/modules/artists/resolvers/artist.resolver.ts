export const artistsResolvers = {
  Query: {
    artists:
      async (_source: any, _args: any, { dataSources }: any) => {
        const { offset, limit } = _args;
        return dataSources.Artist.getArtists(limit, offset);
      },
    artist(_source: any, { id }: { id: string; }, { dataSources }: any) {
      return dataSources.Artist.getArtist(id);
    }
  }
};
