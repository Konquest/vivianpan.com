/**
 * Initialize logging
 */
var package = require('../package.json');
var bunyan = require('bunyan');
var compress = require('compression');
var express = require('express');
var logger = require('express-bunyan-logger');
var path = require('path');
var static = require('serve-static');

var Server = module.exports = function() {
    var app = express();

    app.log = bunyan({
      name: package.name,
      level: process.env.LOG_LEVEL
    });

    app.use(logger());
    app.use(compress());

    // Routes
    if (process.env.NODE_ENV === 'production') {
        app.use(static(path.join(__dirname, '..', 'dist')));

    } else {
        app.use(static(path.join(__dirname, '..', 'app')))
        app.use(static(path.join(__dirname, '..', '.tmp')))
    }

    app.use(logger.errorLogger());

    return app;
};
