// Includes two routes:
// GET route to "/api/friends" to get from friends.js 

// Grab the saved data from friends array of friend profile objects
var friendArr = require('../data/friends.js');

//Use express() to access api of friends saved
module.exports = function (app) {

	app.get('/api/friends', function(req, res){
		res.json(friendArr);
	})


