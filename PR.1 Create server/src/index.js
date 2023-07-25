
// const http = require('http');
// const fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('text.html', function (err, data) {
//     res.writeHead(200, { 'content-type': 'text/html' });
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);


var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();
app.listen(8080);
