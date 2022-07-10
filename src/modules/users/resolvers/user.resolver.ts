export const usersResolvers = {
  Query: {
    async user(_source: any, { id }: { id: string; }, { dataSources }: any) {
      return dataSources.User.getUser(id);
    },

    async jwt(_source: any, { email, password }: { email: string; password: string; }, { dataSources }: any) {
      return dataSources.User.login(email, password);
    }
  },

  Mutation: {
    async register(_source: any, _args: any, { dataSources }: any) {
      return dataSources.User.register(_args);
    },
  }
};
