'use strict';


module.exports.hello = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully 1!',
        input: context,
        // input2: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.hello2 = (event, context, callback) => {
  const response = { 
      statusCode: 200, 
      body: JSON.stringify(
        {
          message: 'Go Serverless! hello2',
          input: {'path': event.path, 'pathParameters': event.pathParameters},
          // input: [context, event],
        },
        null,
        2
      ),
  };
  callback(null, response);
};

const hello3 = require('./handlers/app');
module.exports.serv = hello3.srv;

const hello4 = require('./handlers/app4');
module.exports.hello4 = hello4.srv;

const hello5 = require('./handlers/app5');
module.exports.hello5 = hello5.srv;

