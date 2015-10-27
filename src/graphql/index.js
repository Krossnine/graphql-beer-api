
const Express = require("express");
const app = new Express();
const graphqlMiddleware = require('express-graphql');

app.use('/', graphqlMiddleware({
  schema : require("./BeerSchema"),
  graphiql : true,
  pretty : true
}));

module.exports = app;
