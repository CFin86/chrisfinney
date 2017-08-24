var express = require('express');
var app = express();
var morgan = require('morgan');  
var bodyParser = require('body-parser');
var routes = require('./routes');
var path = require('path');
// lrserver.watch(__dirname + "../client");

var clientPath = path.join(__dirname, '../client');
app.use(morgan('dev'));        
// var view path.join(__dirname, '../views'));
// app.set('view engine', 'html');
app.use('/static', express.static(path.join(__dirname, '../client')))

var api = require('./api');
var prerender = require('prerender-node');

prerender.set('prerenderServiceUrl', 'http://localhost:1337/');
prerender.set('prerenderToken', process.env.PRERENDER_TOKEN);


app.use(express.static(clientPath));
app.use(bodyParser.json());
app.use(prerender);

app.use('/api', api);

// // for live server
// var liveServer = require("live-server");
// var params = {
// 	port: 3000, // Set the server port. Defaults to 3000.
// 	host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
// 	root: "/Volumes/Internal External HD/Covalence/My portfolio/my site/client/index.html", // Set root directory that's being served. Defaults to cwd.
// 	open: false, // When false, it won't load your browser by default.
// 	ignore: 'scss,my/templates', // comma-separated string for paths to ignore
// 	file: "../index.html", // When set, serve this file for every 404 (useful for single-page applications)
// 	wait: 500, // Waits for all changes, before reloading. Defaults to 0 sec.
// 	mount: [['/components', './node_modules']], // Mount a directory to a route.
// 	logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
// 	middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
// };
// app.get('*', function (req, res) {
//	res.sendfile('./client/index.html');
//});
// liveServer.start(params);

// end live server

app.get('*', function (req, res) {
	res.sendfile('./client/index.html');
});
app.listen(3000);