var express = require('express');
var fs = require('fs');
//var Buffer = require('Buffer');

var app = express.createServer(express.logger());

function html(filename) {
  var html = fs.readFileSync(filename, 'utf-8');
  return html;
}

app.get('/', function(request, response) {
  response.send(html('index.html'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});




