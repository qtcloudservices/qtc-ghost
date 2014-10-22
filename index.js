var express;
var ghost;
var parentApp;
var config;
var path;

process.env.NODE_ENV = process.env.NODE_ENV || "development";
console.log("Ghost is starting [" + process.env.NODE_ENV + "]");

// Proceed with startup
express = require('express');
ghost = require('ghost');
path = require('path');

// Create our parent express app instance.
parentApp = express();

ghost({
    config: path.join(__dirname, './config.js')
}).then(function (ghostServer) {
    // Mount our ghost instance on our desired subdirectory path if it exists.
    parentApp.use(ghostServer.config.paths.subdir, ghostServer.rootApp);

    // Let ghost handle starting our server instance.
    ghostServer.start(parentApp);
}).catch(function (err) {
    console.error(err, err.context, err.help);
});
