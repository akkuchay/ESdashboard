var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app);

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/test.html');
});
app.listen(3000);
