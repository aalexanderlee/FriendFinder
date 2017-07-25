// Sets up Dependencies and Packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App and localhost 3000
var app = express();
var PORT = process.env.PORT||3000; //deploy to heroku
//var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('app'));

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});