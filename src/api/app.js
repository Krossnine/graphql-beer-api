"use strict";

const express = require("express");
const app = new express();
const port = process.env.API_PORT || 4000;

app.use(require("./resource"));

app.listen(port, function apiStarted() {
  console.info("Beer api server started on port", port);
});
