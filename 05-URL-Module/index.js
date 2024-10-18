var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var myURL = "http://rabbil.com/blog.html?year=2020&month=july";
  var myURLObj = url.parse(myURL, true);

  var myHostName = myURLObj.host;
  var myPathName = myURLObj.pathname;
  var mySearchName = myURLObj.search;

  res.write(myHostName); // Output the hostname to the response
  res.end();
});

server.listen(5050);
console.log("Server Run Success");