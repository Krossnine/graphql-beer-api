"use strict";

export default function(apiHost) {
  return {
    beer : require("./beer")(apiHost),
    brewery : require("./brewery")(apiHost),
  };
};
