export const usersResolvers = {
  Query: {
    user(_source: any, { id }: { id: string; }, { dataSources }: any) {
      return dataSources.User.getUser(id);
    }
  },
};
