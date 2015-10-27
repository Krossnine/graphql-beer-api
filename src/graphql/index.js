
const Express = require("express");
const app = new Express();
const graphqlMiddleware = require('express-graphql');

app.use('/', graphqlMiddleware({
  schema : require("./RootSchema"),
  graphiql : true,
  pretty : true
}));

module.exports = app;
