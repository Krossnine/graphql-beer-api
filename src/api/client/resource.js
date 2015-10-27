"use strict";

const request = require('request');

function get(uri) {
  return new Promise((resolve, reject) => {
    request(uri, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        return resolve(JSON.parse(body));
      }
      return reject(error || response.statusCode);
    });
  });
}

export default {
  get : get
};
