var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

/*
require("server");

server.listen(server_port, server_ip_address, function(){
  console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});
*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('got query! responding ...');
  res.send('Hello World!');
});

app.listen(server_port, function () {
  console.log('Example app listening on port ' + server_port + '!');
});