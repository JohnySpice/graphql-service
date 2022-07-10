export const albumsResolvers = {
  Query: {

    async albums(_source: any, _args: any, { dataSources }: any) {
      const { offset, limit } = _args;
      return dataSources.Album.getAlbums(limit, offset);
    },

    async album(_source: any, { id }: { id: string; }, { dataSources }: any) {
      return dataSources.Album.getAlbum(id);
    }
  },

  Album: {
    async artists(_source: any, _args: any, { dataSources }: any) {
      const artists = await dataSources.Artist.getArtists();
      return artists.filter((a: any) => _source.artistsIds.includes(a.id));
    },

    async bands(_source: any, _args: any, { dataSources }: any) {
      const bands = await dataSources.Band.getBands();
      return bands.filter((b: any) => _source.bandsIds.includes(b.id));
    },

    async tracks(_source: any, _args: any, { dataSources }: any) {
      const tracks = await dataSources.Track.getTracks();
      return tracks.filter((t: any) => _source.tracksIds.includes(t.id));
    },

    async genres(_source: any, _args: any, { dataSources }: any) {
      const genres = await dataSources.Genre.getGenres();
      return genres.filter((g: any) => _source.genresIds.includes(g.id));
    }
  },

  Mutation: {
    async createAlbum(_source: any, _args: any, { dataSources, token }: any) {
      return dataSources.Album.createAlbum(_args, token);
    },

    async deleteAlbum(_source: any, { id }: any, { dataSources, token }: any) {
      return dataSources.Album.deleteAlbum(id, token);
    },

    async updateAlbum(_source: any, { id, ..._args }: any, { dataSources, token }: any) {
      return dataSources.Album.updateAlbum(id, _args, token);
    }
  }
};