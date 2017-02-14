var express = require('express');
var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(server_port, server_ip_address);
console.log('Server running on http://%s:%s', server_port, server_ip_address);
