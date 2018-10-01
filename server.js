var http = require('http');
var express = require('express');
// a server is created, but not started
var server = express();
var path = require('path');
var port = 8080; 

server.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

// the server is now started, listening for requests on port 8080
server.listen(port, function() {
  //once the server is listening, this callback function is executed
  console.log('Server listening on: ' + port);
});