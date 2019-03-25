class sqsData {
    constructor(){

    }

    getMessageId(lambdaEventRecord){
        if(lambdaEventRecord){
            return lambdaEventRecord.messageId;
        }
        return null;
    }

    /*
        event
        event.Records[i]
        event.Records[i].messageAttributes
    */
    getMessageAttributeFromEvent(attributeName, messageAttribute){
        //foreach item in lambdaEventMessage.messageAttributes
        //  if item.name == attributeName
        //      return attribute name
        // else
        //      continue
        // end throw exceptino

        if(attributeName && messageAttribute){
            return messageAttribute.stringValue;
        }
        return null;
    }

    getMessageAttributeAsNumber(attributeName, lambdaEventRecord){
        for(var maIndex in lambdaEventRecord.messageAttributes){
            if(maIndex == attributeName){//'recipeid'
                var ma = lambdaEventRecord.messageAttributes[maIndex];//data in recipeid
                return Number(ma.stringValue);
            }
        }

        return null;
    }

    getMessageAttributeAsString(attributeName, lambdaEventRecord){
        for(var maIndex in lambdaEventRecord.messageAttributes){
            if(maIndex == attributeName){
                var ma = lambdaEventRecord.messageAttributes[maIndex];
                return String(ma.stringValue);
            }
        }

        return null;
    }

    getMessageAttributeAsStringArray(attributeName, lambdaEventRecord){
        for(var maIndex in lambdaEventRecord.messageAttributes){
            if(maIndex == attributeName){
                var ma = lambdaEventRecord.messageAttributes[maIndex];
                return String(ma.stringListValues);
            }
        }

        return null;
    }

    getMessageAttributeAsNumberArray(attributeName, lambdaEventRecord){
        for(var maIndex in lambdaEventRecord.messageAttributes){
            if(maIndex == attributeName){
                var ma = lambdaEventRecord.messageAttributes[maIndex];
                return String(ma.stringListValues);
            }
        }

        return null;
    }
}


module.exports = new sqsData();