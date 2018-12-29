const functions = require('firebase-functions');
const request = require('request');

exports.blueLineRouteInfo = functions.https.onRequest((req, res) => {
	request.get('https://lapi.transitchicago.com/api/1.0/routes.aspx?routeid=Blue&outputtype=JSON', 
		(err, response, body) => {
			if(!err && response.statusCode === 200) {
				res.status(200).send(body);
			} else {
				res.status(500).json({
					error: "Failed to retrieve route info."
				});
			}
		});
});