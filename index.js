var server = require("./webServer/server");
var router = require("./router");

server.start(router.route);