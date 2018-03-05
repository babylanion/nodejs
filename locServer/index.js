var server = require('./server');
var router = require('./router');
var requesrHandlers = require('./requestHandler');
var path = require('path');
console.log(path)
var handle = {};
handle["/public/index.html"] = requesrHandlers.init;
handle["/start"] = requesrHandlers.start;
handle["/upload"] = requesrHandlers.upload;
handle["public/music.mp3"] = './public/music.mp3';
console.log(module);
server.start(router.route,handle);