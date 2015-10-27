"use strict";

const BeerApiClient = function (apiHost) {

  function getUri() {
    return [apiHost].concat(Array.prototype.slice.call(arguments)).join("/");
  }

  return {
    findById : (id) => {
      return require("./resource").get(getUri("breweries", id));
    },

    getAll : () => {
      return require("./resource").get(getUri("breweries"));
    }
  };
};

export default BeerApiClient;
