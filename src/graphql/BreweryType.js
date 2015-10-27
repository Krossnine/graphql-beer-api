"use strict";

import { GraphQLID, GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString} from 'graphql';

const BreweryType = new GraphQLObjectType({
  name : 'Brewery',
  description : 'Represents a brewery',
  fields : () => ({
    id : {
      type : new GraphQLNonNull(GraphQLID),
      description : 'The id of the brewery.'
    },
    name : {
      type : GraphQLString,
      description : 'The name of the brewery.'
    },
    address1 : {
      type : GraphQLString,
      description : 'The first address of the brewery.'
    },
    city : {
      type : GraphQLString,
      description : 'The city of the brewery.'
    },
    country : {
      type : GraphQLString,
      description : 'The country of the brewery.'
    }
  })
});

module.exports = BreweryType;
