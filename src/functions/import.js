console.log("hello called");
const message = require("../message.js");
exports.handler = function(event, context, callback) {
  console.log("hello loaded");
  callback(null, {
    statusCode: 200,
    body: message
  });
};
