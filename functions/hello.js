console.log("Hello loaded");
exports.handler = function(event, context, callback) {
  console.log("Hello called");
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};
