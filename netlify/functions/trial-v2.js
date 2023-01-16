const jsonFile = require('../../datav2.json');

exports.handler = async (event, context) => {
	const response = JSON.stringify(jsonFile)
	return {
		statusCode: 200,
		body: response,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
		},
	}
}