import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import RedactieAPI from '@/services/redactie.api';
import { graphQLTypeDefs } from '@/services/graphql/graphql.type.defs';
import { graphQLResolvers } from '@/services/graphql/graphql.resolvers';

const resolvers = graphQLResolvers;

const typeDefs = graphQLTypeDefs;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
  context: (req, res) => ({ req, res, dataSources: { redactieAPI: new RedactieAPI() } }),
});

export { handler as POST };
