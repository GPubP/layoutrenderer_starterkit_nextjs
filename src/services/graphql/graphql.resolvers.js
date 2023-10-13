export const graphQLResolvers = {
  Query: {
    homePage: (_, __, { dataSources }) => {
      return dataSources.redactieAPI.getSiteTitle();
    },
  },
};
