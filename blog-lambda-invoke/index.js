var aws = require('aws-sdk');

exports.handler = async (event) => {
	try{
		let x1 = Number(event.x1);
		let x2 = Number(event.x2);

		let responseData = {
			y: x1 + x2
		};

		let response = {
			result: responseData
		};
		return response;
	}
	catch (ex){
		console.log('exception', ex);
		let errorResponse = {
			error: JSON.stringify(ex)
		};
		throw errorResponse;
	}
};