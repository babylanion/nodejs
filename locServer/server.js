var http = require('http');
var url = require('url');
var express = require('express');
var fs = require('fs');
var path = require('path');

function start(route,handle){
    function onRequest(req,res){
        var postData = "";
        var pathname = url.parse(req.url).pathname;
        switch(req.method){
            case "GET":
                postData += url.parse(req.url).query;
                req.setEncoding('utf8');
                route(handle,pathname,res,postData);
                break;
            case 'POST':
                req.addListener('data',function(postDataChunk){
                    postData += postDataChunk;
                });
                req.addListener('end',function () {
                    route(handle,pathname,res,postData);
                    console.log(pathname)
                });
                break;
        }
    }
    http.createServer(onRequest).listen(8080);
    console.log("server has stared.");
}
exports.start = start;