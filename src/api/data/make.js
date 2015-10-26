"use strict";

const fs = require("fs");
const path = require("path");
const Converter = require("csvtojson").Converter;
const filenames = ["beers", "breweries", "categories", "geocodes", "styles"];

filenames.forEach((filename) => {

  function getPath(filename, ext) {
    return path.resolve(__dirname, filename + "." + ext);
  }

  function write(data) {
    const resultPath = getPath(filename, "json");
    fs.writeFile(resultPath, JSON.stringify(data), function (err) {
      if (err) return console.log(err);
      console.log('Write', data.length, "entries to", resultPath);
    });
  }

  function getConverter() {
    const converter = new Converter({});
    converter.on("end_parsed", write);
    return converter;
  }

  fs.createReadStream(getPath(filename, "csv")).pipe(getConverter());
});
