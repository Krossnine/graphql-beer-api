import {graphql, GraphQLID, GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLInt, GraphQLString} from 'graphql';

const ApiClient = require('../api/client/index');
const apiClient = new ApiClient("http://localhost:4000");
const BeerType = require("./BeerType");

const BeerSchema = new GraphQLSchema({
  query : new GraphQLObjectType({
    name : 'RootQueryType',
    fields : {
      beer : {
        type : BeerType,
        description : 'Find beer by id',
        args : {
          id : {
            name : 'id',
            type : new GraphQLNonNull(GraphQLID)
          }
        },
        resolve : (root, {id}) => {
          return apiClient.beer.findById(id);
        }
      },
      beers : {
        type : new GraphQLList(BeerType),
        description : 'Get all beers',
        resolve : () => {
          return apiClient.beer.getAll();
        }
      }
    }
  })
});

module.exports = BeerSchema;
