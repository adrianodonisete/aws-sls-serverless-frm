module.exports.srv = (event, context, callback) => {
    const response = { 
        statusCode: 200, 
        body: JSON.stringify(
          {
            message: 'Go Serverless! hello4',
            input: {'path4': event.path, 'pathParameters4': event.pathParameters},
          },
          null,
          2
        ),
    };
    callback(null, response);
};