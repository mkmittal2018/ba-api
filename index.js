var express = require('express');
var package = require('./package.json');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/health', function (req, res) {
    var response ={
        version: package.version,
        appName: package.name
    };
    console.log(response);
    res.send(JSON.stringify(response));
 })

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
  console.log("Example app listening at http://%s:%s", host, port)
})
