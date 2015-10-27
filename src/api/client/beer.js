"use strict";

const request = require('request');

const BeerApiClient = function (apiHost) {

  function getUri() {
    return [apiHost].concat(Array.prototype.slice.call(arguments)).join("/");
  }

  return {

    findById : (id) => {
      return new Promise((resolve, reject) => {
        console.log(getUri("beers", id));
        request(getUri("beers", id), function (error, response, body) {
          if (!error && response.statusCode == 200) {
            return resolve(JSON.parse(body));
          }
          return reject(error || response.statusCode);
        });
      });
    },

    getAll : () => {
      return new Promise((resolve, reject) => {
        console.log(getUri("beers"));
        request(getUri("beers"), function (error, response, body) {
          if (!error && response.statusCode == 200) {
            return resolve(JSON.parse(body));
          }
          return reject(error || response.statusCode);
        });
      });
    }
  };
};

export default BeerApiClient;
