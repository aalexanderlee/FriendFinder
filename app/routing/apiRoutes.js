// Includes two routes:
// GET route to "/api/friends" to get from friends.js 

// Grab the saved data from friends array of friend profile objects
var friendArr = require('../data/friends.js');

//Use express() to access friends api
module.exports = function (app) {
	//Using the GET method to grab res data from friends.js holding friends api
	app.get('/api/friends', function(req, res){
		res.json(friendArr);
	})

	//Using the POST method to add user choices into friends api
	app.post('/api/friends', function(req, res){
		var user = req.body;

		for(var i = 0; i < user.scores.length; i++) {
			if(user.scores[i] == "1 (Strongly Disagree)") {
				user.scores[i] = 1; //defines 1 as an int
			} else if(user.scores[i] == "5 (Strongly Agree)") {
				user.scores[i] = 5; //defines 5 as an int
			} else {
				user.scores[i] = parseInt(user.scores[i]); //change 2,3, or 4 to an int
			}
		}
		