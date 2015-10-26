"use strict";

function getDataRefValue(dataDef) {
  return JSON.parse(require("fs").readFileSync(dataDef.json).toString());
}

function getDataRefsValues(dataDefs) {
  return dataDefs.reduce(function (dataTreeValue, dataDef) {
    dataTreeValue[dataDef.name] = getDataRefValue(dataDef);
    return dataTreeValue;
  }, {});
}

function getDataStore(dataDefs) {
  const Baobab = require("baobab");
  return new Baobab(getDataRefsValues(dataDefs));
}

module.exports = getDataStore(require("./../data/defs")());
