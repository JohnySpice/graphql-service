export const genresResolvers = {
  Query: {
    async genres(_source: any, _args: any, { dataSources }: any) {
      const { offset, limit } = _args;
      return dataSources.Genre.getGenres(limit, offset);
    },

    async genre(_source: any, { id }: { id: string; }, { dataSources }: any) {
      return dataSources.Genre.getGenre(id);
    }
  },

  Mutation: {
    async createGenre(_source: any, _args: any, { dataSources, token }: any) {
      return dataSources.Genre.createGenre(_args, token);
    },

    async deleteGenre(_source: any, { id }: any, { dataSources, token }: any) {
      return dataSources.Genre.deleteGenre(id, token);
    },

    async updateGenre(_source: any, { id, ..._args }: any, { dataSources, token }: any) {
      return dataSources.Genre.updateGenre(id, _args, token);
    }
  }
};
