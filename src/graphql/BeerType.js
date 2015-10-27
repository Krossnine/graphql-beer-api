"use strict";

import { GraphQLID, GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString} from 'graphql';

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
    }
  })
});

module.exports = BeerType;
