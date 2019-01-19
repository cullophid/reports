const { MongoClient } = require("mongodb");
exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(MongoClient, null, 2)
  });
};
