export const tracksResolvers = {
  Query: {
    tracks:
      async (_source: any, _args: any, { dataSources }: any) => {
        const { offset, limit } = _args;
        return dataSources.Track.getTracks(limit, offset);
      },

    track(_source: any, { id }: { id: string; }, { dataSources }: any) {
      return dataSources.Track.getTrack(id);
    }
  },
  Track: {
    async artists(_source: any, _args: any, { dataSources }: any) {
      const artists = await dataSources.Artist.getArtists();
      return artists.filter((a: any) => _source.artistsIds.includes(a.id));
    },

    async bands(_source: any, _args: any, { dataSources }: any) {
      const bands = await dataSources.Band.getBands();
      return bands.filter((b: any) => _source.bandsIds.includes(b.id));
    },

    async album(_source: any, _args: any, { dataSources }: any) {
      return await dataSources.Album.getAlbum(_source.albumId);
    },

    async genres(_source: any, _args: any, { dataSources }: any) {
      const genres = await dataSources.Genre.getGenres();
      return genres.filter((g: any) => _source.genresIds.includes(g.id));
    }
  }
};
