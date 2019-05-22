// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require("express");
var path = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

var app = express();

// Sets an initial port. 
var PORT = process.env.PORT || 8000;

// For serving of static CSS
app.use(express.static(__dirname + "/app/public/css"));
app.use(express.static(__dirname + "/app/public/images"));
//app.use(express.static(__dirname + "/app/public/css/homestyle.css"));
//app.use(express.static(__dirname + "/app/public/css/surveystyle.css"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static(path.join(__dirname, '/css')));
// app.use(express.static(path.join(__dirname, '/images')));
// ================================================================================
// ROUTER
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});