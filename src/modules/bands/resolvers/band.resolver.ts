export const bandsResolvers = {
  Query: {
    async bands(_source: any, _args: any, { dataSources }: any) {
      const { offset, limit } = _args;
      return dataSources.Band.getBands(limit, offset, dataSources.Genre);
    },

    async band(_source: any, { id }: { id: string; }, { dataSources }: any) {
      return dataSources.Band.getBand(id);
    }
  },

  Band: {
    async genres(_source: any, _args: any, { dataSources }: any) {
      const genres = await dataSources.Genre.getGenres();
      return genres.filter((g: any) => _source.genresIds.includes(g.id));
    },

    async members(_source: any, _args: any, { dataSources }: any) {
      const genres = await dataSources.Artist.getArtists();
      return genres.filter((g: any) => _source.members.includes(g.id));
    },
  }
};
