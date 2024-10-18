var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>This is Home Page</h1>');
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>This is About Page</h1>');
    res.end();
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>This is Contact Page</h1>');
    res.end();
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('<h1>404 Not Found</h1>');
    res.end();
  }
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});
