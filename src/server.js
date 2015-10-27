"use strict";

var AppDefs = [
  {
    name : "GraphQL Server API",
    app : require("./graphql"),
    port : 3000
  },
  {
    name : "Beer API",
    app : require("./api"),
    port : 4000
  }
];

AppDefs.forEach(appDef => {
  appDef.app.listen(appDef.port, () => {
    console.info("⋊>", appDef.name, "server started on port", appDef.port)
  });
});
