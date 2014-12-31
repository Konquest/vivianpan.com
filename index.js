/**
 * Initialize configurations
 */
// var package = require('./package.json');
var dotenv = require('dotenv');
dotenv.load();  // Initialize environment config


var Server = require('./server');
var server = new Server();

server.listen(process.env.PORT, function() {
    console.log('Server started on port %d in %s mode.', process.env.PORT, process.env.NODE_ENV);
});
