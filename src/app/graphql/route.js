import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';

const resolvers = {
  Query: {
    homePage: () => ({
      title: { text: 'Hello', type: 'heading-1', showAs: 'heading-2' },
    }),
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

const handler = startServerAndCreateNextHandler(server);

export { handler as POST };
