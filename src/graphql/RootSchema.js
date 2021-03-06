import {graphql, GraphQLID, GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLInt, GraphQLString} from 'graphql';

const ApiClient = require('../api/client/index');
const apiClient = new ApiClient("http://localhost:4000");
const BeerType = require("./BeerType");
const BreweryType = require("./BreweryType");

const BeerSchema = new GraphQLSchema({
  query : new GraphQLObjectType({
    name : 'RootQueryType',
    fields : {
      beer : {
        type : BeerType,
        description : 'Find a beer by id',
        args : {
          beerId : {
            name : 'beerId',
            type : new GraphQLNonNull(GraphQLID)
          }
        },
        resolve : (root, {beerId}) => {
          return apiClient.beer.findById(beerId);
        }
      },
      beers : {
        type : new GraphQLList(BeerType),
        description : 'Get all beers',
        resolve : () => {
          return apiClient.beer.getAll();
        }
      },
      brewery : {
        type : BreweryType,
        description : 'Find a brewery by id',
        args : {
          id : {
            name : 'breweryId',
            type : new GraphQLNonNull(GraphQLID)
          }
        },
        resolve : (root, {breweryId}) => {
          return apiClient.brewery.findById(breweryId);
        }
      },
      breweries : {
        type : new GraphQLList(BreweryType),
        description : 'Get all breweries',
        resolve : () => {
          return apiClient.brewery.getAll()
        }
      }
    }
  })
});

module.exports = BeerSchema;
