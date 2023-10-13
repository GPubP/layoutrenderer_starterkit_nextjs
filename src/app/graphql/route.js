import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import RedactieAPI from '@/services/redactie.api';

const resolvers = {
  Query: {
    homePage: (_, __, { dataSources }) => {
      return dataSources.redactieAPI.getSiteTitle();
    },
  },
};

const typeDefs = gql`
  #custom types
  scalar JSON
  # Pages
  type HomePage {
    title: JSON
  }
  type Query {
    homePage: HomePage
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
  context: (req, res) => ({ req, res, dataSources: { redactieAPI: new RedactieAPI() } }),
});

export { handler as POST };
