"use strict";

function generateJsonDataFile(dataDef) {
  function saveToJson(data) {
    require("fs").writeFile(dataDef.json, JSON.stringify(data), function (err) {
      if (err) {
        console.error("Error writing json file", err);
        process.exit(1);
      }
      console.log('Write', data.length, "json entries for", dataDef.name);
    });
  }

  function getConverter() {
    const Converter = require("csvtojson").Converter;
    const converter = new Converter({});
    converter.on("end_parsed", saveToJson);
    return converter;
  }

  require("fs").createReadStream(dataDef.csv).pipe(getConverter());
}

function generateJsonDataFiles(dataDefs) {
  dataDefs.forEach(generateJsonDataFile);
}

generateJsonDataFiles(require("./defs")());
