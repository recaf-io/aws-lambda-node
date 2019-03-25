var sqs = require('./sqs.js');


exports.handler = function (event, context) {
	console.log("blog-sqs-lambda-angular called", event);

	for(var r in event.Records){
		var record = event.Records[r];
		var messageid = record.messageId;
		var testNumberAttributeValue = sqs.getMessageAttributeAsNumber("TestNumber", record);

		console.log("MessageID: ", messageid);
		console.log("TestNumber attribute: ", testNumberAttributeValue)
	}

	context.succeed('success! ' + event.name);
};