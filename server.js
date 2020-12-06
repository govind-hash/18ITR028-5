var http = require('http');
var app = require('./in');

http.createServer(app.handleRequest).listen(8000);