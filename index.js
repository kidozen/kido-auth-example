var auth = require('./auth.js');
var request= require('request');

var options = {
	domain: 'yourcompany.kidocloud.com',
	user: 'youruser@kidozen.com',
	password: 'your-password',
	app: 'your-app-name'
}

auth(options, function(err, token) {

	if (err) {
		console.log(err);
		return;
	};

	console.log("Authenticated.");

	var getOptions = {
		uri: 'https://' + options.app + '.' + options.domain + '/api/v2/storage/local',
		headers: {
			authorization: "WRAP access_token=\"" + token + "\"",
		}
	}

	request(getOptions, function(err, res, body) {
		console.log(err);
		console.log(body);
	});
})

