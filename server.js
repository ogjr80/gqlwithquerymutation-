const express = require("express");
const graphQLHTTP = require("express-graphql");
const { GraphQLSchema } = require("graphql");

const Query = require("./src/types/query");
const Mutation = require("./src/types/mutation");

const app = express();

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
app.get("/", function(req, res) {
  res.json("hello: world");
});
app.use(
  "/graphql",
  graphQLHTTP({
    schema,
    graphiql: true
  })
);

app.listen(3000, function() {
  console.log("graphql server running on port 3000");
});
