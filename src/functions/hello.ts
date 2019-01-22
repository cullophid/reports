export const handler = (event: any, context: any, callback: Function) => {
  callback(null, {
    statusCode: 200,
    body: "Helo world"
  });
};
