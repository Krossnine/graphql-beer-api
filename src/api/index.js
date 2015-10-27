"use strict";

require("babel/register");

var port = process.env.API_PORT || 4000;

require("./app").listen(port, function onStart() {
  console.info("Beer api server started on port", port);
});
