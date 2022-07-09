export const genresResolvers = {
  Query: {
    async genres(_source: any, _args: any, { dataSources }: any) {
      const { offset, limit } = _args;
      return dataSources.Genre.getGenres(limit, offset);
    },

    async genre(_source: any, { id }: { id: string; }, { dataSources }: any) {
      return dataSources.Genre.getGenre(id);
    }
  }
};
