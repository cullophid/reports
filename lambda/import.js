const message = require("../message.js");
exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: message
  });
};
