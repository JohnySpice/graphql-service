export const bandsResolvers = {
  Query: {
    bands:
      async (_source: any, _args: any, { dataSources }: any) => {
        const { offset, limit } = _args;
        return dataSources.Band.getBands(limit, offset, dataSources.Genre);
      },
    band(_source: any, { id }: { id: string; }, { dataSources }: any) {
      return dataSources.Band.getBand(id);
    }
  }
};
