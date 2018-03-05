//模块依赖
var http=require('http');
var path = require('path');
var express = require('express')
var app = express();
// var static = require('./static');

app.use(express.static('public'));