var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/html', express.static('html'));
app.use('/', proxy('/', {target: 'http://lapi.transitchicago.com/api/1.0/routes.aspx', changeOrigin: true}));
app.listen(3000);