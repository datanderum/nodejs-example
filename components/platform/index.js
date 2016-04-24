var include = require("includemvc");
var app = include.app();
var controller = include.controller("platform")

app.get("/platform", controller.getPlatform);
