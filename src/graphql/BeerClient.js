import {graphql} from 'graphql';
const util = require('util');

const schema = require("./BeerSchema");
function getFindByIdQuery(beerId) {
  return `{
    beer(id: "${beerId}") {
      id
      name
      descript
    }
  }`;
}

const findAllQuery = `{
  beers {
    id
  }
}`;

function runQuery(query) {
  return graphql(schema, query).then(queryResultData => {
    console.log("Find result :\n", util.inspect(queryResultData, false, null), "\n");
  });
}

runQuery(getFindByIdQuery(1));
//runQuery(findAllQuery);
