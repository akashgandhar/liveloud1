// server.js
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`GraphQL server ready at ${url}`);
});

import { createServer } from "http";
import { createSchema, createYoga } from "graphql-yoga";

createServer(
  createYoga({
    schema: createSchema({
      typeDefs: typeDefs,
      resolvers: resolvers,
    }),
  })
).listen(4001, () => {
  console.info("GraphQL Yoga is listening on http://localhost:4001/graphql");
})
  

