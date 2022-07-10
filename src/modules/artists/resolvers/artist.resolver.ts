export const artistsResolvers = {
  Query: {
    async artists(_source: any, _args: any, { dataSources }: any) {
      const { offset, limit } = _args;
      return dataSources.Artist.getArtists(limit, offset);
    },

    async artist(_source: any, { id }: { id: string; }, { dataSources }: any) {
      return dataSources.Artist.getArtist(id);
    }
  },

  Artist: {
    async bands(_source: any, _args: any, { dataSources }: any) {
      const bands = await dataSources.Band.getBands();
      return bands.filter((b: any) => _source.bands.includes(b.id));
    }
  },
  Mutation: {
    async createArtist(_source: any, _args: any, { dataSources, token }: any) {
      return dataSources.Artist.createArtist(_args, token);
    },

    async deleteArtist(_source: any, { id }: any, { dataSources, token }: any) {
      return dataSources.Artist.deleteArtist(id, token);
    },

    async updateArtist(_source: any, { id, ..._args }: any, { dataSources, token }: any) {
      return dataSources.Artist.updateArtist(id, _args, token);
    }
  }
};
