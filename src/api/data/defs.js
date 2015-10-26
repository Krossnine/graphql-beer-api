"use strict";

export default function () {

  const DATA_DEFS = [
    {
      name : "beers",
      csv : "dumps/beers.csv",
      json : "dumps/beers.json"
    },
    {
      name : "breweries",
      csv : "dumps/breweries.csv",
      json : "dumps/breweries.json"
    },
    {
      name : "categories",
      csv : "dumps/categories.csv",
      json : "dumps/categories.json"
    },
    {
      name : "geocodes",
      csv : "dumps/geocodes.csv",
      json : "dumps/geocodes.json"
    },
    {
      name : "styles",
      csv : "dumps/styles.csv",
      json : "dumps/styles.json"
    }
  ];

  function resolve(filepath) {
    return require("path").resolve(__dirname, filepath);
  }

  function resolvePath(dataDef) {
    return {
      name : dataDef.name,
      csv : resolve(dataDef.csv),
      json : resolve(dataDef.json)
    };
  }

  return DATA_DEFS.reduce(function(dataDefs, dataDef) {
    return dataDefs.concat(resolvePath(dataDef));
  }, []);
};
