"use strict";

import {GraphQLID, GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString} from 'graphql';

const ApiClient = require('../api/client/index');
const apiClient = new ApiClient("http://localhost:4000");

const BeerType = new GraphQLObjectType({
  name : 'Beer',
  description : 'Represents a beer',
  fields : () => ({
    id : {
      type : new GraphQLNonNull(GraphQLID),
      description : 'The id of the beer.'
    },
    name : {
      type : GraphQLString,
      description : 'The name of the beer.'
    },
    descript : {
      type : GraphQLString,
      description : 'The description of the beer.'
    },
    brewery : {
      type : require("./BreweryType"),
      description : 'The brewery of the beer.',
      resolve: (beer) => {
        return apiClient.brewery.findById(beer.brewery_id);
      }
    }
  })
});

module.exports = BeerType;
